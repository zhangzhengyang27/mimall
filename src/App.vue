<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {},
  data() {
    return {
      res:{}
    }
  },
  mounted() {
    if (this.$cookie.get('userId')) {
      this.getUser();
      this.getCartCount();
    }
    // 使用的时候需要把main.js中的axios.defaults.baseURL注释掉 不适用代理
    // public根目录的文件引用方式
    this.axios.get('/mock/user/login.json').then((res) => {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(res))
    })
    // axios.defaults.baseURL = 'https://www.fastmock.site/mock/5e82029955a63066ee5a6bb30c1e01dd/api'; 关闭代理
    this.axios.get('/test').then((res) => {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(res))
    })
    // mock.js不会发出请求
    this.axios.get('/user/login').then((res) => {
      this.res=res;
    })
  },
  methods: {
    getUser() {
      this.axios.get('/user').then((res = {}) => {
        this.$store.dispatch('saveUserName', res.username);
      })
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res = 0) => {
        this.$store.dispatch('saveCartCount', res);
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
