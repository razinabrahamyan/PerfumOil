<template>
    <div class="row gy-5 g-xl-8">
        <form @submit="submitForm">
            <div class="card mb-10 ">
                <div class="card-body">
                    <div class="form-group">
                        <label class="form-label" :for="'question'">Հարց</label>
                        <textarea required v-model="question" cols="50" rows="6" type="text" :id="'question'" class="form-control w-100"/>
                    </div>

                    <div class="form-group mt-4">
                        <label class="form-label" :for="'type'">Ընտրել տեսակը</label>
                        <select class="form-select form-select" v-model="questionType"  id="type" aria-label="Select example">
                            <option v-for="type in questionTypes" :value="type.id">{{type.type}}</option>
                        </select>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group mt-4">
                                <div>Ընտրել Բարդությունը</div>
                                <div class="d-flex">
                                    <template v-for="level in questionLevels">
                                        <div class="form-check m-2 form-check-custom form-check-solid">
                                            <input class="form-check-input" type="radio" :id="'level_' + level.id" :value="level.id" v-model="questionLevel" />
                                            <label class="form-check-label" :for="'level_' + level.id">{{level.level}}</label>
                                        </div>
                                    </template>
                                </div>
                            </div>
                            <div class="form-group mt-4">
                                <label class="form-label" :for="'rate'">Հավելյալ բարդության աստիճան</label>
                                <div class="rating">
                                    <label
                                        class="btn btn-light fw-bolder btn-sm rating-label me-3"
                                        for="rating_0"
                                    >X</label
                                    >
                                    <input
                                        class="rating-input"
                                        name="rating"
                                        value="0"
                                        checked="checked"
                                        type="radio"
                                        id="rating_0"
                                    />
                                    <template class="d-flex" v-for="rate in 10">

                                        <label class="rating-label" :for="'rating_' + rate">
                                <span class="svg-icon svg-icon-1">
                                  <inline-svg src="media/icons/duotune/general/gen029.svg" />
                                </span>
                                        </label>
                                        <input
                                            class="rating-input"
                                            :value="rate"
                                            name="rating"
                                            :checked = "rating >= rate"
                                            @change="(ev) => {rating = rate}"
                                            type="radio"
                                            :id="'rating_' + rate"
                                        />
                                    </template>

                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <label @click="toggleInput" class="mt-4 form-label" :for="'avatar'">Ընտրել նկար</label>
                            <div
                                class="image-input d-block image-input-outline"
                                data-kt-image-input="true"
                                style="background-image: url(media/avatars/blank.png); width: fit-content"
                            >
                                <img style="max-height: 150px"
                                     ref="preview"
                                     :src="image ? image : 'https://static.remove.bg/remove-bg-web/ea3c274e1b7f6fbbfe93fad8b2b13d7ef352f09c/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg'" alt="">

                                <label
                                    class=" btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
                                    data-kt-image-input-action="change"
                                    data-bs-toggle="tooltip"
                                    title="Change avatar">
                                    <i class="bi bi-pencil-fill fs-7"></i>


                                    <input ref="image" @change="imageChanged" type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                                    <input type="hidden" name="avatar_remove" />

                                </label>

                                <span
                                    class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
                                    data-kt-image-input-action="remove"
                                    data-bs-toggle="tooltip"
                                    @click="removeImage()"
                                    title="Remove avatar">
                                    <i class="bi bi-x fs-2"></i></span>

                            </div>
                        </div>
                    </div>


                </div>


            </div>



            <template v-if="questionType === 1">
                <div class="card">
                    <div class="card-header border-0">
                        <h3 class="card-title fw-bolder text-dark">Պատասխաններ</h3>
                        <div class="card-toolbar">
                            <button @click="addAnswer" type="button" class="btn btn-primary btn-active-light-primary">
                                Ավելացնել
                                <i class="bi bi-plus-lg"></i>
                            </button>

                        </div>
                    </div>
                    <div class="card-body">
                        <template v-for="(answer,index) in answers.type_1" :key="answer.index">
                            <div class="mb-8 d-flex align-items-center">
                                <span class="bullet bullet-vertical h-40px" :class="[answer.right ? 'bg-primary' : 'bg-secondary']"></span>
                                <div class="form-check form-check-custom form-check-solid mx-5">
                                    <input v-model="answer.right" class="form-check-input" type="checkbox" value="">
                                </div>
                                <div class="flex-grow-1">
                                    <input required v-model="answer.text" type="text" class="form-control">
                                </div>
                                <button v-if="answers.type_1.length > 1" type="button" @click="deleteAnswer(index)" class="btn btn-light-danger btn-sm ms-4"><i class="bi bi-trash fs-3 p-0"></i></button>
                            </div>
                        </template>

                    </div>
                </div>
            </template>
            <template v-else-if="questionType === 2">
                <div class="card">
                    <div class="card-header border-0">
                        <h3 class="card-title fw-bolder text-dark">Պատասխաններ</h3>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-6">
                                <div class="justify-content-between d-flex mb-2">
                                    <h4>Ճիշտ</h4>
                                    <button type="button"
                                            class="btn btn-light-primary btn-sm ms-4"
                                            @click="addAnswerV2('right')">
                                        <i class="bi bi-plus p-0"></i>
                                    </button>
                                </div>

                                <div class="border draggable_answers_handler border-1 rounded p-2 py-6">
                                    <draggable group="people"
                                               :list="answers.type_2.right"
                                               itemKey="index">
                                        <template #item="{element, index}">
                                            <div>
                                                <div class="p-5 my-3 item_v2 border border-1 answer_item" >
                                                    <div class="d-flex align-items-center">
                                                        <i class="bi fs-2 bi-list cursor-move"></i>
                                                        <input required v-model="element.text" type="text" class="form-control">
                                                        <button v-if="answers.type_2.wrong.length + answers.type_2.right.length > 1"
                                                                type="button"
                                                                @click="deleteAnswerV2('right',index)"
                                                                class="btn btn-light-danger btn-sm ms-4">
                                                            <i class="bi bi-trash fs-3 p-0"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                    </draggable>
                                </div>

                            </div>
                            <div class="col-6">
                                <div class="justify-content-between d-flex mb-2">
                                    <h4>Սխալ</h4>
                                    <button type="button"
                                            class="btn btn-light-primary btn-sm ms-4"
                                            @click="addAnswerV2('wrong')">
                                        <i class="bi bi-plus p-0"></i>
                                    </button>
                                </div>

                                <div class="border draggable_answers_handler border-1 rounded p-2 py-6">
                                    <draggable group="people"
                                               :list="answers.type_2.wrong"
                                               itemKey="index">
                                        <template #item="{element,index}">
                                            <div>
                                                <div class ="p-5 my-3 item_v2 border border-1 answer_item rounded" >
                                                    <div class="d-flex align-items-center">
                                                        <i class="bi fs-2 bi-list cursor-move"></i>
                                                        <input required v-model="element.text" type="text" class="form-control">
                                                        <button v-if="answers.type_2.wrong.length + answers.type_2.right.length > 1"
                                                                type="button"
                                                                @click="deleteAnswerV2('wrong',index)"
                                                                class="btn btn-light-danger btn-sm ms-4">
                                                            <i class="bi bi-trash fs-3 p-0"></i>
                                                        </button>

                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                    </draggable>
                                </div>

                            </div>


                        </div>

                    </div>
                </div>
            </template>
            <template v-else>
                <div class="card">
                    <div class="card-header border-0">
                        <h3 class="card-title fw-bolder text-dark">Պատասխաններ</h3>
                        <div class="card-toolbar">
                            <button @click="addAnswerV3" type="button" class="btn btn-primary btn-active-light-primary">
                                Ավելացնել
                                <i class="bi bi-plus-lg"></i>
                            </button>

                        </div>
                    </div>
                    <div class="card-body">
                        <div class="border draggable_answers_handler border-1 rounded p-2 py-6">
                            <draggable v-model="answers.type_3"
                                       itemKey="index">
                                <template #item="{element,index}">
                                    <div>
                                        <div class ="p-5 my-3 item_v2 border border-1 answer_item rounded" >
                                            <div class="d-flex align-items-center">
                                                <i class="bi fs-2 bi-list cursor-move"></i>
                                                <input required v-model="element.text" type="text" class="form-control">
                                                <button v-if="answers.type_3.length > 1"
                                                        type="button"
                                                        @click="deleteAnswerV3(index)"
                                                        class="btn btn-light-danger btn-sm ms-4">
                                                    <i class="bi bi-trash fs-3 p-0"></i>
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </draggable>
                        </div>
                    </div>
                </div>
            </template>

            <button class="btn btn-success mt-5" type="submit">Պահպանել</button>
        </form>
    </div>



</template>
<style rel="stylesheet">
.sortable-chosen .answer_item{
    background: #ececec;
}
.rating{
    width: fit-content;
}
.draggable_answers_handler > div{
    min-height: 78px;
}
</style>
<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";
import draggable from 'vuedraggable'
import ApiService from "@/core/services/ApiService";
import {AxiosRequestConfig} from "axios";
import Swal from "sweetalert2/dist/sweetalert2.min.js";

export default defineComponent({
    name: "CreateQuestion",
    components: {
        draggable,
        Swal
    },
    data(){
        return{
            questionTypes:[],
            questionType:parseInt(localStorage.getItem("questionType") || "1"),
            questionLevels:[],
            questionLevel:1,
            rating:0,
            question: '',
            answers:this.initialAnswers(),
            image:''
        }
    },
    watch:{
        questionType(value){
            localStorage.setItem("questionType", value.toString());
        },
    },
    mounted() {
        setCurrentPageTitle("Ավելացնել");
        ApiService.get("axios/get-question-config")
            .then(({ data }) => {
                console.log(data)
                this.questionLevels = data.question_levels
                this.questionTypes = data.question_types
            })
            .catch(({ response }) => {
                console.log(response, 'store-question response  error')

            });
    },
    methods:{
        toggleInput(){
            let image:any = this.$refs.image
            image.click();
        },
        imageChanged(event){
            let reader = new FileReader();
            reader.onload = (e) => {
                this.image = reader.result as string;
                console.log(this.image, 'this.image')
            };
            reader.readAsDataURL(event.target.files[0]);
        },
        addAnswer(){
            this.answers.type_1.push({ right:false, text:'', index:this.uniqueIndex()})
        },
        deleteAnswer(index){
            this.answers.type_1.splice(index,1)
        },
        addAnswerV2(type){
            type === 'right' ?
                this.answers.type_2.right.push({  text:'', index:this.uniqueIndex()}):
                this.answers.type_2.wrong.push({  text:'', index:this.uniqueIndex()})
        },
        deleteAnswerV2(type,index){
            type === 'right' ?
                this.answers.type_2.right.splice(index,1):
                this.answers.type_2.wrong.splice(index,1);

        },
        addAnswerV3(){
            this.answers.type_3.push({ text:'', index:this.uniqueIndex()})
        },
        deleteAnswerV3(index){
            this.answers.type_3.splice(index,1);
        },
        exportData(){
            let answers;
            switch (this.questionType){
                case 1:
                    answers = this.answers.type_1
                    break;
                case 2:
                    answers = this.answers.type_2
                    break;
                case 3:
                    answers = this.answers.type_3
                    break;
            }

            return {
                question:this.question,
                answers: answers,
                type:this.questionType,
                rate:this.rating,
                level:this.questionLevel,
                image:this.image
            }
        },
        submitForm(e){
            e.preventDefault();
            const params = this.exportData();
            ApiService.vueInstance.axios.defaults.headers.common["Content-Type"] =
                "multipart/form-data";
            ApiService.post("axios/store-question", params as AxiosRequestConfig )
                .then(({ data }) => {
                    this.answers = this.initialAnswers();
                    this.question = '';
                    this.rating = 0;
                    Swal.fire({
                        text: "Հարցը պահպանված է",
                        icon: "success",
                        buttonsStyling: false,
                        confirmButtonText: "Ok",
                        timer: 3000,
                        customClass: {
                            confirmButton: "btn fw-bold btn-light-primary",
                        },
                    });
                    console.log(data, 'store-question response')
                })
                .catch(({ response }) => {
                    console.log(response, 'store-question response  error')

                });
        },

        log(ev){
            console.log(ev.target.value)
        },
        initialAnswers(){
            return {
                type_1:[
                    { right:false, text:'', index:this.uniqueIndex() }
                ],
                type_2:{
                    right:[
                        { text:'', index:this.uniqueIndex() },
                    ],
                    wrong:[
                        { text:'', index:this.uniqueIndex() },
                    ]
                },
                type_3:[
                    { text:'', index:this.uniqueIndex() }
                ],

            }
        },
        uniqueIndex(){
            return Date.now() + '' + Math.floor(Math.random() * 1000)
        }

    },


});
</script>
