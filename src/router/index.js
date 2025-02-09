import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../warga/InputBlokWarga.vue"),
    },
    {
        path: "/main",
        name: "main",
        component: () => import("../views/MainLayoutView.vue"),
    },
    {
      path: "/menu",
      name: "menu",
      component: () => import("../views/MainPageLayout.vue"),  
    },
    {
      path: "/form",
      name: "form",
      component: () => import("../views/MainFormSample.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/MainProfilePageView.vue"),
      children: [
        {
          path: "input",
          name: "input",
          component: () => import("../profile/IsiProfileEntity.vue"),
        },
        {
          path: "input/polygon",
          name: "input_polygon",
          component: () => import("../profile/IsiDataPolygon.vue"),
        },
        {
          path: "register/user",
          name: "register_user",
          component: () => import("../profile/RegisterUser.vue"),
        },
        
      ],
    },
    {
      path: "/warga",
      name: "warga",
      component: () => import("../views/MainWargaPageView.vue"),
      children: [
        {
          path: "input/blok",
          name: "input_blok",
          component: () => import("../warga/InputBlokWarga.vue"),
        },
        {
          path: "input/warga",
          name: "input_warga",
          component: () => import("../warga/IsiDataWarga.vue"),
        },
        {
          path: "input/type",
          name: "input_type",
          component: () => import("../warga/InputTypeWarga.vue"),
        },
        {
          path: "input/pekerjaan",
          name: "input_pekerjaan",
          component: () => import("../warga/InputPekerjaanWarga.vue"),
        },
        {
          path: "input/status",
          name: "input_status",
          component: () => import("../warga/InputStatusWarga.vue"),
        },
      ],
    },
    {
      path: "/anggaran",
      name: "anggaran",
      component: () => import("../views/MainAnggaranPageView.vue"),
      children: [
        {
          path: "input/type",
          name: "input_type_anggaran",
          component: () => import("../anggaran/InputTypeAnggaran.vue"),
        },
        {
          path: "input/anggaran",
          name: "input_anggaran",
          component: () => import("../anggaran/InputAnggaranWarga.vue"),
        },
      ],
    },
    {
      path: "/iuran",
      name: "iuran",
      component: () => import("../views/MainIuranPageView.vue"),
      children: [
        {
          path: "input/iuran",
          name: "input_iuran",
          component: () => import("../iuran/IsiIuranWarga.vue"),
        },
        {
          path: "input/jenis",
          name: "input_jenis_iuran",
          component: () => import("../iuran/IsiJenisIuran.vue"),
        },
      ],
    },

    {
      path: "/cobasidebar",
      name: "cobasidebar",
      component: () => import("../components/CobaSidebar.vue"),
    }
  ],
});

export default router;
