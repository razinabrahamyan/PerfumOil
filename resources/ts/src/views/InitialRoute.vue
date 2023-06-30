<template>
    <KTLoader v-if="loaderEnabled" :logo="loaderLogo"></KTLoader>
    <template v-if="hasPermission">
        <router-view />
    </template>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { Actions } from "@/store/enums/StoreEnums";
import HtmlClass from "@/core/services/LayoutService";
import {DrawerComponent, MenuComponent, ScrollComponent} from "@/assets/ts/components";
import KTLoader from "@/components/Loader.vue";
import {
    loaderEnabled,
    loaderLogo,
} from "@/core/helpers/config";
import {removeModalBackdrop} from "@/core/helpers/dom";
export default defineComponent({
    name: "InitialRoute",
    components: {
        KTLoader
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        const router = useRouter();
        HtmlClass.init();
        if(!store.getters.getRole){
            store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");
        }
        console.log('initial route')
        const hasPermission = computed(() => {
            if(store.getters.getRole){
                store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
                let parentRoute:any = route.matched.find(m => m.meta.auth)
                if(!parentRoute){
                    console.log('!parentRoute')
                    switch (store.getters.getRole){
                        case 'user': router.push({path: 'catalogue'})
                            break;
                        case 'admin': router.push({path: 'dashboard'})
                            break;
                        default:break;
                    }
                }
                else if(parentRoute.meta.auth !== store.getters.getRole){
                    router.push({path: '/404'})
                }

                return true
            }
            return false;
        })
        if (!store.getters.isUserAuthenticated) {
            router.push({ name: "sign-in" });
        }
        onMounted(() => {
            onMounted(() => {
                DrawerComponent.bootstrap();
                ScrollComponent.bootstrap();
                DrawerComponent.updateAll();
                ScrollComponent.updateAll();
            });
        });

        watch(
            () => route.path,
            () => {
                if (!store.getters.isUserAuthenticated) {
                    router.push({ name: "sign-in" });
                }
                MenuComponent.hideDropdowns(undefined);

                DrawerComponent.hideAll();

                removeModalBackdrop();
            }
        );
        watch(
            () => store.getters.isUserAuthenticated,
            (auth) => {
                if(!auth){
                    router.push({path:'sign-in'})
                }
            }
        );
        return {
            hasPermission,
            loaderEnabled,
            loaderLogo,
        }

    },
});
</script>
