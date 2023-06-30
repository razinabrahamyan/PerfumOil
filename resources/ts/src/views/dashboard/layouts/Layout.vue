<template>
    <!-- begin:: Body -->
    <div class="page d-flex flex-row flex-column-fluid">
        <!-- begin:: Aside Left -->
        <Sidebar
            v-if="asideEnabled"
            :lightLogo="themeLightLogo"
            :darkLogo="themeDarkLogo"
        ></Sidebar>
        <!-- end:: Aside Left -->

        <div id="kt_wrapper" class="wrapper d-flex flex-column flex-row-fluid">
            <KTHeader :title="pageTitle" :breadcrumbs="breadcrumbs"></KTHeader>

            <!-- begin:: Content -->
            <div id="kt_content" class="content d-flex flex-column flex-column-fluid">
                <!-- begin:: Content Body -->
                <div
                    id="kt_content_container"
                    :class="{
            'container-fluid': contentWidthFluid,
            'container-xxl': !contentWidthFluid,
          }"
                >
                    <router-view />
                </div>
                <!-- end:: Content Body -->
            </div>
            <!-- end:: Content -->
            <KTFooter></KTFooter>
        </div>
    </div>
    <!-- end:: Body -->
    <KTScrollTop></KTScrollTop>
    <KTExplore></KTExplore>
    <KTDrawerMessenger></KTDrawerMessenger>
    <KTUserMenu></KTUserMenu>
    <KTCreateApp></KTCreateApp>
    <KTInviteFriendsModal></KTInviteFriendsModal>
    <KTUpgradePlanModal></KTUpgradePlanModal>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import Sidebar from "@/dashboard/components/sidebar/Sidebar.vue";
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
    contentWidthFluid,
    asideEnabled,
    subheaderDisplay,
    themeLightLogo,
    themeDarkLogo,
} from "@/core/helpers/config";

export default defineComponent({
    name: "Layout",
    components: {
        Sidebar,
        KTHeader,
        KTFooter,
        KTScrollTop,
        KTCreateApp,
        KTInviteFriendsModal,
        KTUpgradePlanModal,
        KTUserMenu,
        KTExplore,
        KTDrawerMessenger,

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
            contentWidthFluid,
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
