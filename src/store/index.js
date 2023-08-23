import { createStore } from 'vuex'
import First from './first'
import axios from 'axios'

export default createStore({
  state: {
    users:[],
    todos:[],
    photos:[],
    albums:[],
    comments:[],
    posts:[],
  },
  getters: {

  },
  mutations: {
    getUsers(state, data){
      state.users = data
    },

    getTodos(state, data){
      state.todos = data
    },

    getPhotos(state, data){
      state.photos = data
    },

    getAlbums(state, data){
      state.albums = data
    },

    getComments(state, data){
      state.comments = data
    },

    getPosts(state, data){
      state.posts = data
    }
  },
  actions: {
   get_users({commit}, page){
    axios.get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`).then(res=>{
      commit("getUsers", res.data)
    })
   },

   get_todos({commit}, page){
    axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`).then(res=>{
      commit("getTodos", res.data)
    })
   },

   get_photos({commit}, page){
    axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`).then(res=>{
      commit("getPhotos", res.data)
    })
   },

   get_albums({commit}, page){
    axios.get(`https://jsonplaceholder.typicode.com/albums?_page=${page}&_limit=10`).then(res=>{
      commit("getAlbums", res.data)
    })
   },

   get_comments({commit}, page){
    axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`).then(res=>{
      commit("getComments", res.data)
    })
   },

   get_posts({commit}, page){
    axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`).then(res=>{
      commit("getPosts", res.data)
    })
   }
  },
  modules: {
    first: First
  }
})
