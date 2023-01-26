import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { loadLayoutMiddleware } from './middleware/loadLayout';
import { LayoutsEnum } from '@/layouts/types';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    meta: {
      layout: LayoutsEnum.default,
    },
    children: [
      {
        path: '',
        component: () => import('@/pages/IndexPage.vue'),
      },
      {
        path: 'auth',
        meta: {
          layout: LayoutsEnum.empty,
        },
        children: [
          {
            path: 'signup',
            component: () => import('@/pages/auth/SignUpPage.vue'),
          },
          {
            path: 'signin',
            component: () => import('@/pages/auth/SignInPage.vue'),
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(loadLayoutMiddleware);

export default router;
