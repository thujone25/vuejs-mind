import Vue from 'vue'
import App from './App.vue'
import store from '@/stores/index';
import router from '@/routes/index';

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const loggedIn = store.state.authStore.loggedIn;
  if (to.matched.some(record => record.meta.guestOnly) && loggedIn) {
    next({name: 'UserAccount', replace: true});
  } else if (to.matched.some(record => record.meta.requireAuth) && !loggedIn) {
    next({name: 'SignIn', replace: true});
  } else {
    next();
  }
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
