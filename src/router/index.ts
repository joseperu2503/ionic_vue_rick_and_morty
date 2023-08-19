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
          name: "characters",
          component: () => import("@/views/Characters.vue"),
        },
        {
          path: "/characters/:characterId",
          name: "character",
          component: () => import("@/views/Character.vue"),
        },
        {
          path: "/locations",
          name: "locations",
          component: () => import("@/views/Locations.vue"),
        },
        {
          path: "/locations/:locationId",
          name: "location",
          component: () => import("@/views/Location.vue"),
        },
        {
          path: '/episodes',
          name: 'episodes',
          component: () => import('@/views/Episodes.vue')
        },
        {
          path: "/episodes/:episodeId",
          name: "episode",
          component: () => import("@/views/Episode.vue"),
        }
      ]
    }
  ],
});

router.beforeEach(async () => {

});

export default router;
