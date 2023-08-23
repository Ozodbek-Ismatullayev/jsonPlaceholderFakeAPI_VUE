import { createRouter, createWebHistory } from 'vue-router'
import Users from '../views/Users'
import Todos from '../views/Todos'
import Photos from '../views/Photos'
import Albums from '../views/Albums'
import Comments from '../views/Comments'
import Posts from '../views/Posts'

const routes = [
  {
    path: '/',
    name: 'users',
    component: Users
  },
  {
    path: '/todos',
    name: 'todos',
    component: Todos,
  },
  {
    path: '/photos',
    name: 'photos',
    component: Photos,
  },
  {
    path: '/albums',
    name: 'albums',
    component: Albums,
  },
  {
    path: '/comments',
    name: 'comments',
    component: Comments,
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
