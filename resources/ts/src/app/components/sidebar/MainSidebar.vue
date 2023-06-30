<template>
    <div class="aside-primary d-flex flex-column align-items-lg-center flex-row-auto">
        <div id="kt_aside_logo"
             class="side-logo d-none d-lg-flex flex-column align-items-center flex-column-auto py-10">
            <a href="#">
                <h1>User</h1>
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

                </ul>
            </div>
        </div>


    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import KTQuickLinksMenu from "@/layout/header/partials/QuickLinksMenu.vue";
import KTNotificationsMenu from "@/layout/header/partials/NotificationsMenu.vue";
import KTUserMenu from "@/layout/header/partials/UserMenu.vue";

export default defineComponent({
    name: "MainSidebar",
    components: {
        KTQuickLinksMenu,
        KTNotificationsMenu,
        KTUserMenu,
    },
});
</script>
