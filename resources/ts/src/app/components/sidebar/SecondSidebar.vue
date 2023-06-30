<template>
    <div
        v-if="asideSecondaryDisplay"
        class="aside-secondary d-flex flex-row-fluid">
        <div id="kt_aside_wordspace" class="aside-workspace my-5 p-5">
            <div class="d-flex h-100 flex-column">
                <div
                    class="flex-column-fluid hover-scroll-y"
                    data-kt-scroll="true"
                    data-kt-scroll-activate="true"
                    data-kt-scroll-dependencies="#kt_aside_secondary_footer"
                    data-kt-scroll-height="auto"
                    data-kt-scroll-offset="0px"
                    data-kt-scroll-wrappers="#kt_aside_wordspace">
                    <div class="tab-content">
                        <div
                            id="questions_tab"
                            class="tab-pane fade active show"
                            role="tabpanel">
                            <div>
                                <MainMenu></MainMenu>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="kt_aside_secondary_footer" class="flex-column-auto pt-10 px-5">
                    <a
                        class="btn btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100"
                        data-bs-custom-class="tooltip-dark"
                        data-bs-dismiss-="click"
                        data-bs-offset="0,5"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        href="https://preview.keenthemes.com/metronic8/vue/docs/#/doc-overview">
                        <span class="btn-label"> Docs & Components </span>
                        <span class="svg-icon btn-icon svg-icon-4 ms-2">
                            <inline-svg src="media/icons/duotune/general/gen005.svg"/>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <button
        v-if="asideSecondaryDisplay && minimizationEnabled"
        :class="{ active: minimizedAsideSecondary }"
        class="btn btn-sm btn-icon btn-white btn-active-primary position-absolute translate-middle start-100 end-0 bottom-0 shadow-sm d-none d-lg-flex"
        data-kt-toggle="true"
        data-kt-toggle-name="aside-minimize"
        data-kt-toggle-state="active"
        data-kt-toggle-target="body"
        style="margin-bottom: 1.35rem"
    >
    <span class="svg-icon svg-icon-2 rotate-180">
      <inline-svg src="media/icons/duotune/arrows/arr063.svg"/>
    </span>
    </button>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import MainMenu from "@/app/components/MainMenu.vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";
import KTTasksOverview from "@/layout/aside/tabs/TasksOverview.vue";
import KTAuthors from "@/layout/aside/tabs/Authors.vue";
import KTNotifications from "@/layout/aside/tabs/Notifications.vue";
import {asideSecondaryDisplay, minimizationEnabled, minimizedAsideSecondary,} from "@/core/helpers/config";

export default defineComponent({
    name: "SecondSidebar",
    components: {
        MainMenu,
        Dropdown1,
        KTTasksOverview,
        KTAuthors,
        KTNotifications,
    },
    setup() {
        return {
            minimizedAsideSecondary,
            asideSecondaryDisplay,
            minimizationEnabled,
        };
    },
});
</script>
