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
    component: () => import('@/pages/IndexPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(loadLayoutMiddleware);

export default router;
