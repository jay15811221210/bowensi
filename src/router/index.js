import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Zikao from '@/components/Zikao'
import Wangjiao from '@/components/Wangjiao'
import Dianda from '@/components/Dianda'
import Chengkao from '@/components/Chengkao'
import Yuanxiao from '@/components/Yuanxiao'
import Tiku from '@/components/Tiku'
import myself from '@/components/seconedrouter/myself'
import network from '@/components/seconedrouter/network'
import utv from '@/components/seconedrouter/utv'
import adult from '@/components/seconedrouter/adult'
import details from '@/components/universitydetails/details'
import article from '@/components/articleList/article'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/Home',
      children:[
        {
          path: '/Home',
          name: 'Home',
          component: Home,
          redirect: '/myself',
          children:[
            {
              path: '/myself',
              name: 'myself',
              component: myself
            },
            {
              path: '/network',
              name: 'network',
              component: network
            },
            {
              path: '/utv',
              name: 'utv',
              component: utv
            },
            {
              path: '/adult',
              name: 'adult',
              component: adult
            }


          ]
        },
        {
          path: '/Zikao',
          name: 'Zikao',
          component: Zikao
        },

        {
          path: '/Wangjiao',
          name: 'Wangjiao',
          component: Wangjiao
        },
        {
          path: '/Dianda',
          name: 'Dianda',
          component: Dianda
        },
        {
          path:'/Chengkao',
          name:'Chengkao',
          component:Chengkao
        },
        {
          path:'/Yuanxiao',
          name:'Yuanxiao',
          component:Yuanxiao
        }
      ]
    },
    {
      path:'/Tiku',
      name:'Tiku',
      component:Tiku
    },
    {
      path:'/universitydetails/details',
      name:'details',
      component:details
    },
    {
      path:'/article',
      name:'article',
      component:article
    }

  ]
})
