<template>
    <div class="card" v-if="question">
        <div class="card-header border-0 mt-7">
            <div>
                <p>Հարց {{order}} / 20</p>
                <h1>{{question.title}}</h1>
                <template v-if="question.image">
                    <img class="w-50 mt-6 test_image" :src="'/storage/tests/images/' + question.image" alt="">
                </template>
            </div>
        </div>
        <div class="card-body pt-15">
            <template v-if="question.type_id === 1">
                <div class="mt-4">
                    <h3>
                        <span class="fw-bolder mb-2 text-dark">Պատասխաններ</span>
                    </h3>
                    <div>
                        <span class="text-muted fw-bold fs-7">Ընտրել Ճիշտ Պատասխանը(ները)</span>
                    </div>
                </div>
                <div class="pt-5">
                    <template v-for="(answer, index) in answers" :key="answer.id">
                        <div class="p-4">
                            <div class="d-flex">
                                <div class="form-check form-check-custom form-check-solid">
                                    <input class="form-check-input" type="checkbox" v-model="answer.right" :id="'answer_' + index">
                                    <label class="form-check-label fs-2" :for="'answer_' + index">{{answer.title}}</label>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </template>
            <template v-else-if="question.type_id === 2">
                <div class="mt-4">
                    <h3>
                        <span class="fw-bolder mb-2 text-dark">Պատասխաններ</span>
                    </h3>
                    <div>
                        <span class="text-muted fw-bold fs-7">Առանձնացնել ճիշտը սխալից</span>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-6">
                        <p class="fs-3">Ճիշտ է</p>
                        <div class="card">
                            <div class="card-body">
                                <div class="draggable_answers_handler">
                                    <draggable group="people"
                                               :list="list1"
                                               itemKey="id">
                                        <template #item="{element, index}">
                                            <div class="answer_card_shadow card mb-8">
                                                <div class=" d-flex align-items-center cursor-pointer">
                                                    <span class="bullet bullet-vertical bg-primary h-40px"></span>
                                                    <div class="flex-grow-1">
                                                        <p class="m-0 ps-4 text-gray-800 text-hover-primary fw-bolder fs-6">{{element.title}}</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </template>
                                    </draggable>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <p class="fs-2">Սխալ է</p>
                        <div class="card">
                            <div class="card-body">
                                <div class="draggable_answers_handler">
                                    <draggable group="people"
                                               :list="list2"
                                               itemKey="id">
                                        <template #item="{element, index}">
                                            <div class="answer_card_shadow card mb-8">
                                                <div class="d-flex align-items-center cursor-pointer">
                                                    <span class="bullet bullet-vertical bg-warning h-40px"></span>
                                                    <div class="flex-grow-1">
                                                        <p class="m-0 ps-4 text-gray-800 text-hover-warning fw-bolder fs-6">{{element.title}}</p>
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
            <template v-else-if="question.type_id === 3">
                <div class="">
                    <div class="mt-4">
                        <h3>
                            <span class="fw-bolder mb-2 text-dark">Պատասխաններ</span>
                        </h3>
                        <div>
                            <span class="text-muted fw-bold fs-7">Դասավորեք ըստ հերթականության</span>
                        </div>
                    </div>
                    <div class="pt-5 answers_timeline">
                        <div class="timeline-label">
                            <draggable group="people"
                                       v-model="answers"
                                       @change="orderChanged"
                                       itemKey="id">
                                <template #item="{element, index}">
                                    <div class="timeline-item align-items-center cursor-pointer">
                                        <div class="timeline-badge">
                                            <i class="fa fa-genderless text-primary fs-1"></i>
                                        </div>
                                        <div class="fw-mormal timeline-content fs-2 text-muted ps-3">
                                            {{element.title}}
                                        </div>
                                    </div>
                                </template>
                            </draggable>
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <div class="card-footer d-flex">
            <div class="ms-auto">
                <button :disabled="buttonDisabled"
                        type="button"
                        @click="submit" class="ms-auto btn btn-primary">
                    <template v-if="buttonDisabled">
                        <span
                            class="spinner-border spinner-border-sm align-middle ms-2"
                        ></span>
                    </template>
                    <template v-else>
                        Հաջորդը
                    </template>

                </button>
            </div>
        </div>
    </div>
</template>
<script>
import {defineComponent} from "vue";
import draggable from 'vuedraggable'
export default defineComponent({
    name: "TestQuestion",
    props:[
        'question',
        'order'
    ],
    components:{
        draggable
    },
    data(){
        return {
            answers:[],
            list1:[],
            list2:[],
            buttonDisabled:true,
        }
    },
    methods:{
        submit(){
            this.buttonDisabled = true
            this.$emit('submit',this.exportData())
        },
        exportData(){
            let answers;
            if(this.question.type_id === 1 || this.question.type_id === 3){
                answers = this.answers
            }else if(this.question.type_id === 2){
                answers = {
                    right:this.list1,
                    wrong:this.list2
                }
            }else{
                answers = []
            }
            return {
                question:this.question,
                answers:answers
            }
        },
        orderChanged(){
            console.log(this.answers, 'orderChanged')
        },
        shuffle(a) {
            let j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
        }
    },
    mounted(){
    },
    updated() {
    },
    watch:{
        'question.id':function(val){
            if(val){
                this.buttonDisabled = false
                console.log('ahannnnnnnn')
                this.answers = [];
                switch (this.question.type_id){
                    case 1:
                        this.question.answers.forEach(ans => {
                            this.answers.push({
                                id:ans.id,
                                title:ans.title,
                                right:false
                            })
                        })
                        break;
                    case 2:
                        let array = [];
                        this.question.answers.forEach(ans => {
                            array.push({
                                id:ans.id,
                                title:ans.title,
                            })
                        })
                        this.answers = this.shuffle(array);
                        let index = Math.floor(Math.random() * array.length)
                        this.list1 = this.answers.slice(0,index)
                        this.list2 = this.answers.slice(index,array.length)
                        break;
                    case 3:
                        let array1 = [];
                        this.question.answers.forEach(ans => {
                            array1.push({
                                id:ans.id,
                                title:ans.title,
                            })
                        })
                        this.answers = this.shuffle(array1);
                        break
                }
            }
        },
        question(value){
        }
    }
})
</script>
<style scoped>
.draggable_answers_handler > div{
    min-height: 78px;
}
.answers_timeline .timeline-label:before{
    left: 1px;
}
.test_image{
    border: 3px solid #fff;
    box-shadow: 0 0 14px 2px #00000059;
    border-radius: 6px;
}
.answer_card_shadow{
    box-shadow: rgb(0 0 0 / 32%) 0px 0px 12px 2px;
    padding: 7px 9px;
    word-break: break-all;
}
</style>
