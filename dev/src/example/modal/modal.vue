<template>
    <Page>
        <Header>
            <Navbar>
                <Title>Modal</Title>
            </Navbar>
        </Header>
        <Content padding>
            <h5>简介</h5>

            <p>Modal组件是对当页内容的补充, 用于较多数据的展示和操作, 比如相册查看/登录/大段信息提示等</p>


            <Button block @click="openModal">点击打开Modal</Button>

            <h5>相册查看</h5>
            <p>这一页将需要查看的数据传给Modal组件, Modal组件使用Slides组件对图片轮播</p>
            <Button block @click="openAlbum">打开相册</Button>
            <hr>
            <h5>登录:</h5>
            <p>弹出完整的页面进行登录操作, 点击登录按钮传出登录数据用于验证, 或者在modal层验证也行.</p>
            <Button block @click="openLogin">登录</Button>
            <p><strong>返回的登录数据</strong></p>
            <p>用户名: {{username}}</p>
            <p>密码: {{password}}</p>
        </Content>
    </Page>
</template>
<style lang="scss">
    .login {
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 30px 10px;
    }

</style>
<script type="text/javascript">
  import modalPageComponent from './modal-page.vue'
  import modalLoginComponent from './modal-login.vue'
  import { PreviewImage } from 'vimo/components/preview-image'
  export default{
    data () {
      return {
        username: '你好Vimo',
        password: '123456'
      }
    },
    props: {},
    watch: {},
    computed: {},
    methods: {
      openLogin () {
        const _this = this
        this.$modal.present({
          component: modalLoginComponent,
          data: {
            username: this.username,
            password: this.password
          },
          showBackdrop: true,
          enableBackdropDismiss: false,
          onDismiss (data) {
            console.log(data)
            if (data) {
              _this.username = data.username
              _this.password = data.password
            }
          }
        })
      },
      openAlbum () {
        PreviewImage({
          current: 0,
          urls: [
            'https://img.alicdn.com/tps/TB1sXGYIFXXXXc5XpXXXXXXXXXX.jpg',
            'https://img.alicdn.com/tps/TB1pfG4IFXXXXc6XXXXXXXXXXXX.jpg',
            'https://img.alicdn.com/tps/TB1h9xxIFXXXXbKXXXXXXXXXXXX.jpg'
          ]
        })
      },
      openModal () {
        this.$modal.present({
          component: modalPageComponent,
          onDismiss () {
            console.log('onDismiss')
          }
        })
      }
    },
    created () {},
    mounted () {},
    activated () {},
    components: {}
  }
</script>
