<template>
    <div
        class="aside-primary d-flex flex-column align-items-lg-center flex-row-auto">
        <div id="kt_aside_logo"
             class="side-logo d-none d-lg-flex flex-column align-items-center flex-column-auto py-10">
            <a href="#">
                <h1>NorDas</h1>
            </a>
        </div>

        <div id="kt_aside_nav"
             class=" aside-nav d-flex flex-column align-items-center flex-column-fluid w-100 pt-5 pt-lg-0 ">
            <div class="hover-scroll-y mb-10" data-kt-scroll="true"
                 data-kt-scroll-activate="{default: false, lg: true}"
                 data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
                 data-kt-scroll-height="auto"
                 data-kt-scroll-offset="0px"
                 data-kt-scroll-wrappers="#kt_aside_nav">
                <ul class="nav flex-column">
                    <li class="nav-item mb-2" data-bs-dismiss="click" data-bs-original-title="Projects" data-bs-placement="right" data-bs-toggle="tooltip" data-bs-trigger="hover" title="">
                        <a class=" nav-link btn active btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light"
                           data-bs-toggle="tab"
                           href="#questions_tab">
                            <span class="svg-icon svg-icon-2x">
                              <inline-svg src="media/icons/duotune/general/gen025.svg"/>
                            </span>
                        </a>
                    </li>
<!--                    <li
                        class="nav-item mb-2"
                        data-bs-dismiss="click"
                        data-bs-original-title="Menu"
                        data-bs-placement="right"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        title="">
                        <a
                            class=" nav-link btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light active"
                            data-bs-toggle="tab"
                            href="#kt_aside_nav_tab_menu">
                            <span class="svg-icon svg-icon-2x">
                                <inline-svg src="media/icons/duotune/finance/fin006.svg"/>
                            </span>
                        </a>
                    </li>

                    <li
                        class="nav-item mb-2"
                        data-bs-dismiss="click"
                        data-bs-original-title="Subscription"
                        data-bs-placement="right"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        title=""
                    >
                        <a
                            class="nav-link btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light"
                            data-bs-toggle="tab"
                            href="#kt_aside_nav_tab_subscription"
                        >
                            <span class="svg-icon svg-icon-2x">
                              <inline-svg src="media/icons/duotune/general/gen032.svg"/>
                            </span>
                        </a>
                    </li>

                    <li
                        class="nav-item mb-2"
                        data-bs-dismiss="click"
                        data-bs-original-title="Tasks"
                        data-bs-placement="right"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        title=""
                    >
                        <a
                            class=" nav-link btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light"
                            data-bs-toggle="tab"
                            href="#kt_aside_nav_tab_tasks"
                        >
                            <span class="svg-icon svg-icon-2x">
                              <inline-svg src="media/icons/duotune/general/gen048.svg"/>
                            </span>
                        </a>
                    </li>

                    <li
                        class="nav-item mb-2"
                        data-bs-dismiss="click"
                        data-bs-original-title="Notifications"
                        data-bs-placement="right"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        title=""
                    >
                        <a
                            class=" nav-link btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light"
                            data-bs-toggle="tab"
                            href="#kt_aside_nav_tab_notifications"
                        >
                            <span class="svg-icon svg-icon-2x">
                              <inline-svg src="media/icons/duotune/abstract/abs027.svg"/>
                            </span>
                        </a>
                    </li>

                    <li
                        class="nav-item mb-2"
                        data-bs-dismiss="click"
                        data-bs-original-title="Authors"
                        data-bs-placement="right"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        title=""
                    >
                        <a
                            class="nav-link btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light"
                            data-bs-toggle="tab"
                            href="#kt_aside_nav_tab_authors"
                        >
                            <span class="svg-icon svg-icon-2x">
                              <inline-svg src="media/icons/duotune/files/fil005.svg"/>
                            </span>
                        </a>
                    </li>-->
                </ul>
            </div>
        </div>

<!--        <div
            id="kt_aside_footer"
            class=" aside-footer d-flex flex-column align-items-center flex-column-auto"
        >
            <div class="d-flex align-items-center mb-2">
                <div
                    class=" btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light"
                    data-bs-dismiss="click"
                    data-bs-placement="right"
                    data-bs-toggle="tooltip"
                    data-kt-menu-flip="top-end"
                    data-kt-menu-overflow="true"
                    data-kt-menu-placement="top-start"
                    data-kt-menu-trigger="click"
                    title="Quick links"
                >
                        <span class="svg-icon svg-icon-2 svg-icon-lg-1">
                          <inline-svg src="media/icons/duotune/general/gen022.svg"/>
                        </span>
                </div>
                <KTQuickLinksMenu></KTQuickLinksMenu>
            </div>

            <div class="d-flex align-items-center mb-2">
                <div
                    class=" btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light"
                    data-bs-dismiss="click"
                    data-bs-placement="right"
                    data-bs-toggle="tooltip"
                    data-kt-menu-flip="top-end"
                    data-kt-menu-overflow="true"
                    data-kt-menu-placement="top-start"
                    data-kt-menu-trigger="click"
                    title="Notifications"
                >
                        <span class="svg-icon svg-icon-2 svg-icon-lg-1">
                          <inline-svg src="media/icons/duotune/general/gen025.svg"/>
                        </span>
                </div>
                <KTNotificationsMenu></KTNotificationsMenu>
            </div>

            <div class="d-flex align-items-center mb-3">
                <div
                    id="kt_activities_toggle"
                    class=" btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light"
                    data-bs-dismiss="click"
                    data-bs-placement="right"
                    data-bs-toggle="tooltip"
                    data-kt-menu-flip="top-end"
                    data-kt-menu-overflow="true"
                    data-kt-menu-placement="top-start"
                    data-kt-menu-trigger="click"
                    title="Activity Logs"
                >
          <span class="svg-icon svg-icon-2 svg-icon-lg-1">
            <inline-svg src="media/icons/duotune/general/gen032.svg"/>
          </span>
                </div>
            </div>

            <div
                id="kt_header_user_menu_toggle"
                class="d-flex align-items-center mb-10"
            >
                <div
                    class="cursor-pointer symbol symbol-40px"
                    data-bs-dismiss="click"
                    data-bs-placement="right"
                    data-bs-toggle="tooltip"
                    data-kt-menu-flip="top-end"
                    data-kt-menu-overflow="true"
                    data-kt-menu-placement="top-start"
                    data-kt-menu-trigger="click"
                    title="User profile"
                >
                    <img alt="metronic" src="media/avatars/150-26.jpg"/>
                </div>
                <KTUserMenu></KTUserMenu>
            </div>
        </div>-->
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import KTQuickLinksMenu from "@/layout/header/partials/QuickLinksMenu.vue";
import KTNotificationsMenu from "@/layout/header/partials/NotificationsMenu.vue";
import KTUserMenu from "@/layout/header/partials/UserMenu.vue";

export default defineComponent({
    name: "kt-aside-primary",
    components: {
        KTQuickLinksMenu,
        KTNotificationsMenu,
        KTUserMenu,
    },
});
</script>
