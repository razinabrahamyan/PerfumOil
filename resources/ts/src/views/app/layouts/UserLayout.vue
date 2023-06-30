<template>
    <nav class="navbar navbar-light bg-light justify-content-between py-8">
        <div class="container">
            <router-link to="/" class="navbar-brand"><h1><img class="main_logo" src="media/logos/Catalogue.jpg" alt=""></h1></router-link>
            <form class="form-inline d-flex">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>

    </nav>
    <div class="page user_layout d-flex flex-row flex-column-fluid">

        <div id="kt_wrapper" class="wrapper d-flex flex-column flex-row-fluid">
            <div id="kt_content" class="content d-flex flex-column flex-column-fluid">
                <div
                    id="kt_content_container"
                    :class="{'container-fluid': contentWidthFluid, 'container-xxl': !contentWidthFluid}">
                    <router-view />
                </div>
            </div>
            <KTFooter></KTFooter>
        </div>
    </div>
    <KTScrollTop></KTScrollTop>
    <KTExplore></KTExplore>
    <KTDrawerMessenger></KTDrawerMessenger>
    <KTUserMenu></KTUserMenu>
    <KTCreateApp></KTCreateApp>
    <KTInviteFriendsModal></KTInviteFriendsModal>
    <KTUpgradePlanModal></KTUpgradePlanModal>

</template>
<style lang="scss">
.aside-secondary-enabled.aside-fixed .user_layout .wrapper{
    padding-left: 0;
}

</style>
<script lang="ts">
import { defineComponent, computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import Sidebar from "@/app/components/sidebar/Sidebar.vue";
import KTHeader from "@/layout/header/Header.vue";
import KTFooter from "@/layout/footer/Footer.vue";
import KTScrollTop from "@/layout/extras/ScrollTop.vue";
import KTUserMenu from "@/layout/header/partials/ActivityDrawer.vue";
import KTCreateApp from "@/components/modals/wizards/CreateAppModal.vue";
import KTInviteFriendsModal from "@/components/modals/general/InviteFriendsModal.vue";
import KTUpgradePlanModal from "@/components/modals/general/UpgradePlanModal.vue";
import KTExplore from "@/layout/extras/Explore.vue";
import KTDrawerMessenger from "@/layout/extras/DrawerMessenger.vue";
import {
    toolbarDisplay,
    loaderEnabled,
    contentWidthFluid,
    loaderLogo,
    asideEnabled,
    subheaderDisplay,
    themeLightLogo,
    themeDarkLogo,
} from "@/core/helpers/config";

export default defineComponent({
    name: "UserLayout",
    components: {
        Sidebar,
        KTHeader,
        KTFooter,
        KTScrollTop,
        KTUserMenu,
        KTCreateApp,
        KTInviteFriendsModal,
        KTUpgradePlanModal,
        KTDrawerMessenger,
        KTExplore,
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        const router = useRouter();

        const pageTitle = computed(() => {
            return store.getters.pageTitle;
        });

        const breadcrumbs = computed(() => {
            return store.getters.pageBreadcrumbPath;
        });



        return {
            toolbarDisplay,
            loaderEnabled,
            contentWidthFluid,
            loaderLogo,
            asideEnabled,
            subheaderDisplay,
            pageTitle,
            breadcrumbs,
            themeLightLogo,
            themeDarkLogo,
        };
    },
});
</script>
<style>
.main_logo{
    width: 70px;
    height: 70px;
    border-radius: 50%;
}
</style>
