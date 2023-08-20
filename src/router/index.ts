import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from "@/components/shared/Tabs.vue";

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
          path: "/characters/character/:characterId",
          component: () => import("@/views/Character.vue"),
        },
        {
          path: "/characters/location/:locationId",
          component: () => import("@/views/Location.vue"),
        },
        {
          path: "/characters/episode/:episodeId",
          component: () => import("@/views/Episode.vue"),
        },
        {
          path: "/locations",
          component: () => import("@/views/Locations.vue"),
        },
        {
          path: "/locations/character/:characterId",
          component: () => import("@/views/Character.vue"),
        },
        {
          path: "/locations/location/:locationId",
          component: () => import("@/views/Location.vue"),
        },
        {
          path: "/locations/episode/:episodeId",
          component: () => import("@/views/Episode.vue"),
        },
        {
          path: '/episodes',
          component: () => import('@/views/Episodes.vue')
        },
        {
          path: "/episodes/episode/:episodeId",
          component: () => import("@/views/Episode.vue"),
        },
        {
          path: "/episodes/character/:characterId",
          component: () => import("@/views/Character.vue"),
        },
        {
          path: "/episodes/location/:locationId",
          component: () => import("@/views/Location.vue"),
        },
      ]
    }
  ],
});

router.beforeEach(async () => {

});

export default router;
