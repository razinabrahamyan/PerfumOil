import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import store from "@/store";
import { Mutations, Actions } from "@/store/enums/StoreEnums";
import {Roles} from "@/router/Roles";
import JwtService from "@/core/services/JwtService";
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "initial",
        component: () => import("@/views/InitialRoute.vue"),
        children: [
            {
                path: "/user",
                name: "user",
                meta: { auth: Roles.User },
                component: () => import("@/views/app/layouts/UserLayout.vue"),
                children: [
                    {
                        path: "/catalogue",
                        name: "catalogue",
                        component: () => import("@/views/app/catalogue/Catalogue.vue"),
                    },

                ]
            },
            {
                path: "/admin",
                name: "admin",
                meta: { auth: Roles.Admin },
                component: () => import("@/views/dashboard/layouts/Layout.vue"),
                children: [
                    {
                        path: "/dashboard",
                        name: "dashboard",
                        component: () => import("@/views/dashboard/questions/QuestionsIndex.vue"),
                    },
                    {
                        path: "/create-question",
                        name: "create",
                        component: () => import("@/views/dashboard/questions/CreateQuestion.vue"),
                    },
                ],
            },
        ]
    },

    {
        path: "/",
        component: () => import("@/components/page-layouts/Auth.vue"),
        children: [
            {
                path: "/sign-in",
                name: "sign-in",
                component: () =>
                    import("@/views/crafted/authentication/basic-flow/SignIn.vue"),
            },
            {
                path: "/sign-up",
                name: "sign-up",
                component: () =>
                    import("@/views/crafted/authentication/basic-flow/SignUp.vue"),
            },
            {
                path: "/password-reset",
                name: "password-reset",
                component: () =>
                    import("@/views/crafted/authentication/basic-flow/PasswordReset.vue"),
            },
        ],
    },
    {
        // the 404 route, when none of the above matches
        path: "/404",
        name: "404",
        component: () => import("@/views/crafted/authentication/Error404.vue"),
    },
    {
        path: "/500",
        name: "500",
        component: () => import("@/views/crafted/authentication/Error500.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/404",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


router.beforeEach((to, from, next) => {
    store.commit(Mutations.RESET_LAYOUT_CONFIG);
    store.dispatch(Actions.VERIFY_AUTH).then((response) => {
    });
    // Scroll page to top on every route change
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
    next();

});

export default router;
