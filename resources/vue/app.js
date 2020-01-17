const VueRouter = require('vue-router').default;
window.Vue      = require('vue');
require('vue-stash');
import VTooltip from 'v-tooltip';

Vue.use(VTooltip);
Vue.use(VueRouter);
//import store from './stores/Store';

window.axios                                             = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Vue.filter('number', function (num) {
  num    = parseInt(num);
  var si = [
    {value : 1, symbol : ""},
    {value : 1E3, symbol : "k"},
    {value : 1E6, symbol : "M"},
    {value : 1E9, symbol : "G"},
    {value : 1E12, symbol : "T"},
    {value : 1E15, symbol : "P"},
    {value : 1E18, symbol : "E"},
  ];
  var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(2).replace(rx, "$1") + si[i].symbol;
});

const router = new VueRouter({
  //mode   : 'history',
  routes : [
    {
      path      : '/',
      component : require('./views/Home.vue'),
    },
    {path : '*', redirect : '/'},
  ],
});

const app = new Vue({
  router,
  el      : '#app',
  //data    : {store},
  async mounted()
  {
  },
  methods : {},
});

window.app = app;
