import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from "@/components/shared/Tabs.vue";
import { useAuth } from '@/composables/useAuth';
import { storeToRefs } from 'pinia';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/characters'
    },
    {
      path: '/',
      component: Tabs,
      children: [
        {
          path: "/characters",
          component: () => import("@/views/Characters.vue"),
        },
        {
          path: "/locations",
          component: () => import("@/views/Locations.vue"),
        },
        {
          path: '/episodes',
          component: () => import('@/views/Episodes.vue')
        }
      ]
    },
    {
      path: "/characters/:characterId",
      component: () => import("@/views/Character.vue"),
    },
    {
      path: "/locations/:locationId",
      component: () => import("@/views/Location.vue"),
    },
    {
      path: "/episodes/:episodeId",
      component: () => import("@/views/Episode.vue"),
    },
  ],
});

router.beforeEach(async () => {
  const { verifyAuth } = useAuth();
  verifyAuth()
});

export default router;
