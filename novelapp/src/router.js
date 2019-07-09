import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import Test from './views/Test.Vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/classify',
      name: 'classify',
      component: () => import('./views/Classify.vue'),
      meta: {
        isShow:true,
        isArrowShow:false
      },
      // props: true
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./views/Search.vue'),
      meta: {
        isShow:true,
        isArrowShow:false
      }
    },
    {
      path: '/seniority',
      name: 'seniority',
      component: () => import('./views/Seniority.vue'),
      meta: {
        isShow:true,
        isArrowShow:false
      }
      
    },
   {
     path:'/novelcontent',
     name: 'novelcontent',
      component: () => import('./views/NovelContent.vue'),
      meta: {
        isShow:false,
        isArrowShow:true
      }
   },
   {
    path:'/chaptercontent',
    name: 'chaptercontent',
     component: () => import('./views/ChapterContent.vue'),
     meta: {
       isShow:false,
       isArrowShow:true
     }
  },
      {
        path:'/seniorityContent',
        name:'seniorityContent',
        component: () => import('./views/SeniorityContent.vue'),
        meta: {
          isShow:false,
          isArrowShow:true,
        },
        children:[
          {
                path:'/seniorityContentId',
                name:'seniorityContentId',
                component: () => import('./views/SeniorityContentId.vue'),
                meta: {
                  isShow:false,
                  isArrowShow:true,
                },
              },
        ]
      },
    {
      path: '/',
      name: 'bookshelf',
      component: () => import('./views/Bookshelf.vue'),
      meta: {
        isShow:true,
        isArrowShow:false
      }
    },
    {
      path:'/novelDetail',
      name:'novelDetail',
      component: () => import('./views/NovelDetail.vue'),
      meta: {
        isShow:false,
        isArrowShow:true,
      },
    },

    {
      path: '/xuanhuan',
      name: 'xuanhuan',
      component: () => import('./views/Xuanhuan.vue'),
      meta: {
        isShow:false,
        isArrowShow:true,
      },
      // props: true,
      children:[
        {
          path: '/xuanhuanitem',
          name: 'xuanhuanitem',
          component: () => import('./views/XuanhuanItem.vue'),
          meta: {
            isShow:false,
            isArrowShow:true,
          },
          // props: true
        }
      ]
    },
    
      

  ]
})
