/**
 * Created by Administrator on 2016/7/8.
 */
export default function (router) {
  router.map({
    '/': {				//首页
      name: 'home',
      component: function (resolve) {
        require(['./views/index.vue'], resolve)
      }
    },
    /* 404路由 */
    '*': {
      component: function (resolve) {
        require(['./views/index.vue'], resolve)
      }
    }
  })
}
