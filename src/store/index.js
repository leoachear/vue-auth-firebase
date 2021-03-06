import Vue from 'vue'
import Vuex from 'vuex'
var firebase = require("firebase/app");
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uruario: '',
    error: ''
  },
  mutations: {
    setUsuario(state,payload){
      state.usuario = payload
    },
    setError(state, payload){
      state.error = payload
    }
  },
  actions: {
    crearUsuario({commit}, payload){
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.pass)
        .then(res=>{
          console.log(res);
          commit('setUsuario',{email:res.user.email, uid:res.user.uid})
          router.push({name: 'inicio'})
        })
        .catch(err => {
          console.log(err.message);
          commit('setError',err.message);
        })
    },
    ingresoUsuario({commit}, payload){
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.pass)
        .then(res => {
          console.log(res);
          commit('setUsuario',{email:res.user.email, uid:res.user.uid})
          router.push({name: 'inicio'})
        })
        .catch(err => {
          console.log(err);
          commit('setError',err.message);
        })
    }
  },
  modules: {
  }
})
