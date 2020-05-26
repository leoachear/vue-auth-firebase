import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

var firebase = require("firebase/app");

Vue.config.productionTip = false

require("firebase/auth");
// require("firebase/database");
// require("firebase/firestore");
// require("firebase/messaging");
// require("firebase/functions");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBt82HmsOSC8nmZq_85kkGOmm_vzna3vbM",
  authDomain: "vue-firebase-auth-7daf6.firebaseapp.com",
  databaseURL: "https://vue-firebase-auth-7daf6.firebaseio.com",
  projectId: "vue-firebase-auth-7daf6",
  storageBucket: "vue-firebase-auth-7daf6.appspot.com",
  messagingSenderId: "752966911830",
  appId: "1:752966911830:web:d463b7c033f6dc4edcf8f7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
