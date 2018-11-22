import Vue from 'vue'
import Router from 'vue-router'
import Common from '@/scripts/components/Common'
import Index from '@/scripts/components/Index'
import Product from '@/scripts/components/Product'
import Aboutus from '@/scripts/components/Aboutus'
import Joinus from '@/scripts/components/Joinus'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Common,
      redirect:'index',//自动跳转到index的路由,首页的路由
      children:[
      	{
      		path:'index',
      		component:Index
      	},
      	{
      		path:'product',
      		component:Product
      	},
      	{
      		path:'aboutus',
      		component:Aboutus
      	},
      	{
      		path:'joinus',
      		component:Joinus
      	}
      ]
    }
  ]
})
