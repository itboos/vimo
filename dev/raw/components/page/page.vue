<template>
    <article class="ion-page" :style="{zIndex:pageZIndex}">
        <slot></slot>
    </article>
</template>
<style lang="scss">

    /// @prop - Background color of the content when making transition
    $content-ios-transition-background: #000 !default;

    // Page Container Structure
    // --------------------------------------------------
    .ion-page {
        position: absolute;
        top: 0;
        left: 0;
        display: block;

        width: 100%;
        height: 100%;

        // do not show, but still render so we can get dimensions
        opacity: 1;
        z-index: 10;
    }

    .ion-page.show-page {
        // show the page now that it's ready
        opacity: 1;
    }

    .ios .ion-page ~ .nav-decor {
        //.ios .ion-page.show-page ~ .nav-decor {
        // when ios pages transition, the leaving page grays out
        // this is the black square behind all pages so they gray out
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
        display: block;

        width: 100%;
        height: 100%;

        background: $content-ios-transition-background;

        pointer-events: none;
    }

    .ios .ion-page.page-top {
        z-index: 15 !important;
    }

    .ios .ion-page.page-bottom {
        z-index: 5 !important;
    }

</style>
<script type="text/javascript">
  /**
   * @component Base/Page
   * @description
   *
   * ## 基础组件 / Page组件
   *
   * Page组件是业务的根组件, 用于包裹业务层, 仅此而已. 切记, template标签内有且只有一个标签, 且必须为Page, 例如这样:
   *
   * @usage
   *
   * <template>
   *    <Page>
   *        <Header>
   *            <Navbar>
   *                <Title>Demo</Title>
   *            </Navbar>
   *        </Header>
   *        <Content>
   *            <h1>这里是内容</h1>
   *        </Content>
   *    </Page>
   * </template>
   *
   * */
  let initPageZIndex = 1000
  export default{
    name: 'Page',
    data () {
      return {
        pageZIndex: 0
      }
    },
    created () {
      let direction = this.$history.getDirection()
      if (direction === 'forward') {
        this.pageZIndex = ++initPageZIndex
      } else if (direction === 'backward') {
        this.pageZIndex = --initPageZIndex
      } else {
        this.pageZIndex = initPageZIndex
      }
    }
  }
</script>
