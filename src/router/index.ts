import { useSidebarStore } from "@/stores/sidebar";
import { storeToRefs } from "pinia";
import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from "@/components/shared/Tabs.vue";
import Layout2 from "@/components/shared/Layout2.vue";
import Characters from "@/views/Characters.vue";

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
          path: '/',
          component: Layout2,
          children: [
            {
              path: '',
              redirect: '/characters'
            },
            // {
            //   path: "/",
            //   name: "home",
            //   component: () => import("@/views/Home.vue"),
            // },
            {
              path: "/characters",
              name: "characters",
              component: Characters,
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
            }
          ]
        }
      ]
    }

  ],
});

router.beforeEach(async () => {
  const sidebarStore = useSidebarStore();
  const { showSideBar } = storeToRefs(sidebarStore);
  showSideBar.value = false;
});

export default router;
