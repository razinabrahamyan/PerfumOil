<template>
    <div class="row gy-5 g-xl-8">
        <div class="card">

            <!--begin::Card header-->
            <div class="card-header border-0 pt-6">
                <!--begin::Card title-->
                <div class="card-title">
                    <!--begin::Search-->
                    <div class="d-flex align-items-center position-relative my-1">
          <span class="svg-icon svg-icon-1 position-absolute ms-6">
            <inline-svg src="media/icons/duotune/general/gen021.svg" />
          </span>
                        <input
                            type="text"
                            data-kt-subscription-table-filter="search"
                            class="form-control form-control-solid w-250px ps-14"
                            placeholder="Search Subscriptions"
                        />
                    </div>
                    <!--end::Search-->
                </div>
                <!--begin::Card title-->

                <!--begin::Card toolbar-->
                <div class="card-toolbar">
                    <!--begin::Toolbar-->
                    <div
                        class="d-flex justify-content-end"
                        data-kt-subscription-table-toolbar="base"
                    >
                        <!--begin::Export-->
                        <button
                            type="button"
                            class="btn btn-light-primary me-3"
                            data-bs-toggle="modal"
                            data-bs-target="#kt_subscriptions_export_modal"
                        >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/arrows/arr078.svg" />
            </span>
                            Export
                        </button>
                        <!--end::Export-->

                        <!--begin::Add subscription-->
                        <router-link
                            to="/subscriptions/add-subscription"
                            class="btn btn-primary"
                        >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
            </span>
                            Add Subscription
                        </router-link>
                        <!--end::Add subscription-->
                    </div>
                    <!--end::Toolbar-->

                    <!--begin::Group actions-->
                    <div
                        class="d-flex justify-content-end align-items-center d-none"
                        data-kt-subscription-table-toolbar="selected"
                    >
                        <div class="fw-bolder me-5">
            <span
                class="me-2"
                data-kt-subscription-table-select="selected_count"
            ></span>
                            Selected
                        </div>

                        <button
                            type="button"
                            class="btn btn-danger"
                            data-kt-subscription-table-select="delete_selected"
                        >
                            Delete Selected
                        </button>
                    </div>
                    <!--end::Group actions-->
                </div>
                <!--end::Card toolbar-->
            </div>
            <!--end::Card header-->

            <!--begin::Card body-->
            <div class="card-body pt-0">
                <Datatable
                    :loading="loading"
                    :table-data="questionsData"
                    :table-header="headerConfig"
                    :enable-items-per-page-dropdown="false">
                    <template v-slot:cell-title="{ row: question }">
                        {{ question.title }}
                    </template>
                    <template v-slot:cell-level="{ row: question }">
                        <span class="badge"
                              :class="{
                            'badge-light-danger':question.level_id === 3,
                            'badge-light-success':question.level_id === 1,
                            'badge-light-warning':question.level_id === 2,

                            }">{{ question.level.level }}</span>

                    </template>
                    <template v-slot:cell-rating="{ row: question }">
                        <inline-svg class="table_start_rate" src="media/icons/duotune/general/gen029.svg" />
                        <span style="vertical-align: baseline">{{question.rate}}</span>
                    </template>
                    <template v-slot:cell-type="{ row: question }">
                        <SetIcon :type="question.type_id"></SetIcon>
                    </template>
                </Datatable>

            </div>
            <!--end::Card body-->
        </div>
    </div>

</template>
<style>
.table_start_rate path{
    fill:#FFAD0F
}
</style>

<script lang="ts">

import {defineComponent, onMounted, ref} from "vue";
import Datatable from "@/components/kt-datatable/KTDatatable.vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";
import ApiService from "@/core/services/ApiService";
import SetIcon from "@/dashboard/components/SetIcon.vue"

export default defineComponent({
    name: "questions",
    components: {
        Datatable,
        SetIcon
    },
    data(){
        return {
            questionsData:[],
            loading:true,
        }
    },
    mounted(){
        ApiService.get("axios/get-questions")
            .then(({ data }) => {
                console.log(data)
                Object.assign(this.questionsData, data.questions)
                this.loading = false;
            })
            .catch(({ response }) => {
                console.log(response, 'store-question response  error')

            });
    },

    setup() {
        const headerConfig = ref([
            {
                name: "Վերնագիր",
                key: "title",
                sortable: true,
            },
            {
                name: "Բարդությունը",
                key: "level",
            },
            {
                name: "Վարկանիշ",
                key: "rating",
            },
            {
                name: "Տեսակ",
                key: "type",
            },
        ]);
        onMounted(() => {
            setCurrentPageTitle("Հարցեր");

        });
        return {
            headerConfig,
        }
    },

});
</script>
