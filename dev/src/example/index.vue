<template>
    <Page class="index">
        <!--content-->
        <Header>
            <!--menutoggle-->
            <Navbar :hideBackButton="true">
                <!--menutoggle-->
                <Buttons right slot="buttons">
                    <Button @click="$menus.toggle('menu')" role="bar-button" menutoggle>
                        <Icon name="more"></Icon>
                    </Button>
                </Buttons>
                <Title @onTitleClick="onTitleClickHandler">Welcome</Title>
            </Navbar>
        </Header>
        <Content padding class="content">
            <article class="scrollContent">
                <Grid class="vimo">
                    <Row class="vimo__logo">
                        <Column text-center no-padding>
                            <div class="vimo__logo--img">
                                <img height="120" src="../assets/img/vimo.png">
                            </div>
                        </Column>
                    </Row>
                    <Row class="vimo__text">
                        <Column text-center>
                            <h1>VIMO</h1>
                            <p>v{{vimo.version}}</p>
                            <p>基于Vue2.x的移动端Hybrid框架</p>
                            <a href="#"><img
                                    src="https://img.shields.io/github/stars/DTFE/vimo.svg?style=social&label=Star"
                                    alt="Star"></a>
                            <a href="#"><img
                                    src="https://img.shields.io/github/forks/DTFE/vimo.svg?style=social&label=Fork"
                                    alt="Fork"></a>
                        </Column>
                    </Row>

                    <Row class="vimo__btns">
                        <Button block solid @click="$router.push({'name':'components'})">组件</Button>
                        <Button block solid @click="$menus.open('menu')">打开菜单</Button>
                    </Row>
                </Grid>
            </article>

            <section slot="fixedBottom" class="inspired">
                <p class="inspired__name">INSPIRED BY</p>
                <div class="inspired__logos">
                    <section>
                        <i class="inspired__logos--ionic"></i>
                    </section>
                    <section>
                        <i class="inspired__logos--vue"></i><span>Vue.js</span>
                    </section>
                </div>
            </section>
        </Content>
    </Page>
</template>
<style scoped lang="scss">
    .index {
        .content {
            background: #fff !important;
            .scrollContent {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-content: center;
                .vimo {
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    flex-direction: column;
                    padding-bottom: 55px;

                    .vimo__logo {
                        .vimo__logo--img {
                            height: 120px;
                        }
                    }
                    .vimo__text {
                        margin-top: 5px;
                        margin-bottom: 5px;
                        h1 {
                            font-weight: bold;
                        }
                        p {
                            margin: 5px 0;
                            font-size: 12px;
                            color: #2c3e50;
                        }
                        /*.vimo__text--iframe {*/
                        /*display: flex;*/
                        /*justify-content: center;*/
                        /*align-items: center;*/
                        /*iframe {*/
                        /*width: 90px;*/
                        /*}*/
                        /*}*/

                    }
                    .vimo__btns {

                    }
                }
            }
            .inspired {
                width: 100%;
                height: 55px;
                position: absolute;
                bottom: 0;
                border-top: 1px solid #eee;
                text-align: center;
                background: rgba(256, 256, 256, 0.7);
                .inspired__name {
                    font-size: 14px;
                    line-height: 120%;
                    padding: 5px 0;
                    margin: 0;
                    color: #919191;
                }
                .inspired__logos {
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    & > section {
                        display: flex;
                        justify-content: center;
                        align-content: center;
                        i {
                            display: inline-block;
                            /*outline: 1px solid red;*/
                        }
                        & > span {
                            display: inline-block;
                            height: 100%;
                            font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;

                            font-size: 13px;
                            line-height: 154%;
                            color: #2c3e50;
                            font-weight: 500;
                        }
                        .inspired__logos--ionic {
                            height: 22px;
                            width: 80px;
                            background: transparent url(../assets/img/ionic.png) no-repeat top center/60px auto;
                        }
                        .inspired__logos--vue {
                            height: 22px;
                            width: 26px;
                            background: transparent url(../assets/img/vue.png) no-repeat top center/22px auto;
                        }
                    }
                }
            }
        }
    }
</style>
<script type="text/javascript">
  import vimo from 'vimo'
  export default{
    name: 'index',
    data () {
      return {
        vimo: vimo
      }
    },
    methods: {
      onTitleClickHandler () {
        alert('你点击了标题')
      }
    },
    created () {},
    mounted () {
    }
  }
</script>
