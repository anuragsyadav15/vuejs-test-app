// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import CompOne from './components/Comp-one'
import CompTwo from './components/Comp-two'


Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes:[
		{path:'/', component:CompOne},
		{path:'/c2', component:CompTwo}
	]
})

/* eslint-disable no-new */
new Vue({
  router,
  template: `
  	<div id="app">
  		<router-link to="/c2">Comp2</router-link>
  		<router-link to="/">Comp1</router-link>
  		<router-view></router-view>
  	</div>
  `
}).$mount('#app')
