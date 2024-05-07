import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/feed' },
    {
      path: '/feed',
      name: 'feed',
      component: () => import('@/views/FeedView.vue')
    },
    {
      path: '/productions',
      name: 'home',
      meta: { requiresRender: false },
      component: () => import('@/views/ProductionsListView.vue')
    },
    {
      path: '/create-resource',
      name: 'createResource',
      component: () => import('@/views/CreateResourceView.vue')
    },
    {
      path: '/spip-conversion',
      name: 'spipConversion',
      component: () => import('@/views/SpipConversionView.vue')
    },
    {
      path: '/platform-presentation',
      name: 'platformPresentation',
      component: () => import('@/views/PlatformPresentationView.vue')
    },
    {
      path: '/resources/:id/feed',
      name: 'resourceFeed',
      props: true,
      component: () => import('@/views/ResourceFeedView.vue')
    },
    {
      path: '/resources',
      name: 'resourcesList',
      component: () => import('@/views/ResourcesListView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/resources/:id',
      name: 'seeResource',
      props: true,
      component: () => import('@/views/SeeResourceView.vue')
    },
    {
      path: '/thought_inputs/:id',
      name: 'seeThoughtInput',
      props: true,
      component: () => import('@/views/SeeThoughtInputView.vue')
    },
    {
      path: '/thought_inputs',
      name: 'thoughtInputs',
      props: false,
      component: () => import('@/views/ThoughtInputsView.vue')
    },
    {
      path: '/problems',
      name: 'problemsList',
      component: () => import('@/views/ProblemsView.vue')
    },
    {
      path: '/users',
      name: 'usersList',
      component: () => import('@/views/UsersView.vue')
    },
    {
      path: '/users/:pageUserId',
      name: 'userFeed',
      meta: { requiresRender: false },
      props: true,
      component: () => import('@/views/UserFeedView.vue')
    },
    {
      path: '/writer',
      name: 'writer',
      component: () => import('@/views/WriterView.vue')
    }
  ]
})

export default router
