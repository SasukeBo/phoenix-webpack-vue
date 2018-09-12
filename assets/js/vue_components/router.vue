<template>
  <div>
    <h1>Hello App!</h1>
    <p>
      <router-link to="/foo">Go to Foo</router-link>
      <br>
      <router-link to="/bar">Go to Bar</router-link>
      <br>
      <router-link to="/user/foo">Go to User:Foo</router-link>
      <br>
      <router-link to="/user/bar">Go to User:Bar</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>
<script>
// import Vue from 'vue/dist/vue.js';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Foo = {template: '<div>foo</div>'}
const Bar = {template: '<div>bar</div>'}
const User = {
  //template: '<div>User</div>'
  template: '<div>User {{ $route.params.id }}</div>',
  // 当使用路由参数时，原来的组件实例会被复用。因为两个路由都渲染同一个组件，
  // 比起销毁再创建，复用则明显更加高效。不过这也意味着组件的生命周期钩子不会
  // 调用。相对路由参数的变化做出响应的话，可以简单的watch $route对象:
  watch: {

  }
}

const routes = [
  {path: '/foo', component: Foo},
  {path: '/bar', component: Bar},
  {path: '/user/:id', component: User}
]

const router = new VueRouter({
  routes
})

export default {
  router
}
</script>
