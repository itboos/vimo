<template>
    <div :class="[itemClass,colorClass,{'item-collapse-open':isActive}]" class="item-collapse">

        <div class="item-block" @click="onPointerDownHandler">
            <slot name="item-left"></slot>
            <div class="item-inner">
                <div class="input-wrapper" v-if="title">
                    {{title}}
                </div>
                <div class="input-wrapper" v-else>
                    <slot name="item-title"></slot>
                </div>
                <div class="item-arrow"></div>
                <slot name="item-right"></slot>
            </div>
        </div>
        <transition @before-enter="beforeEnter"
                    @enter="enter"
                    @leave="leave">
            <div class="item-collapse-inner" v-show="isActive" ref="itemCollapseInner">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<style lang="scss"></style>
<script type="text/javascript">
  /**
   * @component ItemCollapse
   * @description
   *
   * ## 列表组件 / ItemCollapse可伸缩Item组件
   *
   * 如果在属性中没有传入title, 则需要在`slot=item-title`中传出title结构. 手风琴模式需要在`ItemGroup`中定义`accordion`属性
   *
   * @props {String} title - 显示的名称
   * @props {String} [mode='ios'] - 显示的名称
   *
   * @slot 空 - 这部分将放置在伸缩盒子中
   * @slot item-title - 对属性title的拓展, 如果包含复杂的显示结构, 比如增加了ICON
   * @slot item-left - 这部分继承Item组件
   * @slot item-right - 这部分继承Item组件
   *
   * @usage
   * <List>
   *    <ListHeader>手风琴列表(只开启一个)</ListHeader>
   *    <ItemGroup accordion>
   *        <ItemCollapse title="This Is Title1">
   *            <Item>subItem1</Item>
   *            <Item>subItem2</Item>
   *            <Item>subItem3</Item>
   *            </ItemCollapse>
   *        <ItemCollapse>
   *            <template slot="item-title">
   *                This Is Title2 &ensp;
   *                <Icon name="information-circle"></Icon>
   *            </template>
   *            <Item detail-push>subItem1</Item>
   *            <Item detail-push>subItem2</Item>
   *            <Item detail-push>subItem3</Item>
   *        </ItemCollapse>
   *        <ItemCollapse title="This Is Title3">
   *            <Item detail-push>subItem1</Item>
   *            <Item detail-push>subItem2</Item>
   *            <Item detail-push>subItem3</Item>
   *        </ItemCollapse>
   *    </ItemGroup>
   * </List>
   * */
  import Velocity from 'velocity-animate/velocity'
  import { isString, isObject } from 'vimo/util/util'
  import ItemMixin from './itemMixin.vue'
  export default{
    name: 'ItemCollapse',
    mixins: [ItemMixin],
    data () {
      return {
        isInit: false,
        itemGroupComponent: null,
        isActive: false,
        height: null,
        id: this._uid
      }
    },
    props: {
      title: [String]
    },
    computed: {
      itemCollapseInnerElement () {
        return this.$refs.itemCollapseInner
      }
    },
    methods: {
      beforeEnter (el) {
        el.style.opacity = 0
        el.style.height = 0
      },
      enter (el, done) {
        Velocity(el, {opacity: 1, height: this.height}, {duration: 300, complete: done})
      },
      leave (el, done) {
        Velocity(el, {opacity: 0, height: 0}, {duration: 300, complete: done})
      },

      /**
       * 点击时
       * */
      onPointerDownHandler () {
        this.itemGroupComponent.onItemCollapseChange(this.id)
      }
    },
    created () {
      if (this.$parent.$options._componentTag.toLowerCase() === 'itemgroup') {
        this.itemGroupComponent = this.$parent
        this.itemGroupComponent.recordItemCollapse(this)
      }
    },
    mounted () {
      this.height = getSize(this.itemCollapseInnerElement).height
      this.isInit = true
    }
  }

  /**
   * 获取元素样式
   * @private
   * */
  function getStyle (el, styleName) {
    return el.style[styleName] ? el.style[styleName] : el.currentStyle ? el.currentStyle[styleName] : window.getComputedStyle(el, null)[styleName]
  }

  /**
   * 单位转化
   * @private
   * */
  function getStyleNum (el, styleName) {
    return parseInt(getStyle(el, styleName).replace(/px|pt|em/ig, ''))
  }

  /**
   * 设置样式
   * @private
   * */
  function setStyle (el, obj) {
    if (isObject(obj)) {
      for (let s in obj) {
        let cssArrt = s.split('-')
        for (let i = 1; i < cssArrt.length; i++) {
          cssArrt[i] = cssArrt[i].replace(cssArrt[i].charAt(0), cssArrt[i].charAt(0).toUpperCase())
        }
        let cssArrtnew = cssArrt.join('')
        el.style[cssArrtnew] = obj[s]
      }
    } else if (isString(obj)) {
      el.style.cssText = obj
    }
  }

  /**
   * 获取尺寸
   * @private
   * */
  function getSize (el) {
    if (getStyle(el, 'display') !== 'none') {
      return {
        width: el.offsetWidth || getStyleNum(el, 'width'),
        height: el.offsetHeight || getStyleNum(el, 'height')
      }
    }
    let addCss = {display: '', position: 'absolute', visibility: 'hidden'}
    let oldCss = {}
    for (let i in addCss) {
      oldCss[i] = getStyle(el, i)
    }
    setStyle(el, addCss)
    let width = el.clientWidth || getStyleNum(el, 'width')
    let height = el.clientHeight || getStyleNum(el, 'height')
    for (let i in oldCss) {
      setStyle(el, oldCss)
    }
    return {width, height}
  }
</script>