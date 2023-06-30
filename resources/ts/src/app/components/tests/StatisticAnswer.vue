<template>
    <template v-if="question">
        <template v-if="question.type_id === 1">
            <template v-for="item in question.history">
                <div class="d-flex stat_ans_item align-items-center">
                    <div class="fs-2 check_right_sign " >
                        <template v-if="item.right">
                            <span v-if="item.right === item.answer.right"><i class="bi fs-1 bi-check-lg text-success"></i></span>
                            <span v-else><i class="bi fs-1 bi-x-lg text-danger"></i></span>
                        </template>
                    </div>

                    <div class="rounded my-4 p-4 w-100" :class="{'bg-light-success' : item.answer.right === 1}">
                        <div class="d-flex">
                            <div class="form-check form-check-custom form-check-solid">
                                <input class="form-check-input" type="radio" disabled :checked="item.right">
                                <label class="form-check-label fs-2">{{item.answer.title}}</label>
                            </div>
                        </div>
                    </div>
                </div>


            </template>
        </template>
        <template v-else-if="question.type_id === 2">
            <div class="row">
                <div class="col-6">
                    <template v-for="item in rightOnes(question.history)">
                        <div class="d-flex stat_ans_item align-items-center">
                            <div class="rounded my-4 p-4 w-100"
                                 :class="[item.answer.right?'bg-light-success':'bg-light-danger']">
                                <div class="d-flex">
                                    <label class="form-check-label fs-4">{{item.answer.title}}</label>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
                <div class="col-6">
                    <template v-for="item in wrongOnes(question.history)">
                        <div class="d-flex stat_ans_item align-items-center">
                            <div class="rounded my-4 p-4 w-100"
                                 :class="[item.answer.right?'bg-light-success':'bg-light-danger']">
                                <div class="d-flex">
                                    <label class="form-check-label fs-4">{{item.answer.title}}</label>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>

        </template>
        <template v-else-if="question.type_id === 3">
            <template v-for="item in question.history">
                <div class="d-flex stat_ans_item align-items-center">
                    <div class="fs-2 check_right_sign">
                        <span class="text-success" v-if="item.order === item.answer.order"><i class="bi pe-2 fs-1 bi-check-lg text-success"></i>{{item.answer.order}}</span>
                        <span class="text-danger" v-else><i class="bi pe-2 fs-1 bi-x-lg text-danger"></i>{{item.answer.order}}</span>
                    </div>
                    <div class="rounded my-4 p-4 w-100"
                         :class="[item.order === item.answer.order?'bg-light-success':'bg-light-danger']">
                        <div class="d-flex">
                            <div class="form-check form-check-custom form-check-solid">
                                <label class="form-check-label fs-2">{{item.answer.title}}</label>
                            </div>
                        </div>
                    </div>
                </div>


            </template>
        </template>

    </template>

</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({
    name: "StatisticAnswer",
    props:['question'],
    methods:{
        rightOnes(answers){
            return answers.filter(answer => answer.right)
        },
        wrongOnes(answers){
            return answers.filter(answer => !answer.right)
        }
    }

})
</script>

<style scoped>
.check_right_sign{
    font-size: 22px !important;
    width: 50px;
    line-height: 1;
}
.stat_ans_item label{
    word-break: break-all;
}
</style>
