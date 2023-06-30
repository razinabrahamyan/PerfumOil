<template>
    <div>
        <div class="row">
            <template v-for="n in 10">
                <div class="col-6 mb-5">
                    <div class="card_handler">
                        <div class="row">
                            <div class="col-4">
                                <div class="img_part h-100">
                                    <img
                                        src="https://www.freepnglogos.com/uploads/perfume-png/perfume-mon-guerlain-guerlain-7.png"
                                        alt="">
                                </div>
                            </div>

                            <div class="col-8">
                                <div class="w-100 h-100 d-flex flex-column justify-content-between">
                                    <div>
                                        <p class="fs-1 fw-bold">Dolce & Gabbana</p>
                                        <p>
                                            Это только легкий намек на аромат, это дыхание, это вторая кожа. Он немного перекликается с ароматами мускуса, ладанника, стиракса, ассоциирует с мягким ветерком, пудровым облаком, легкой дымкой, он загадочный, непредсказуемый и обволакивающий.
                                        </p>
                                    </div>
                                    <div>
                                        <ul class="nav nav-tabs d-flex" id="myTab" role="tablist">
                                            <li role="presentation">
                                                <button
                                                    class="nav-link mx-auto active"
                                                    id="home-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#home"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="home"
                                                    aria-selected="true">
                                                    <div>
                                                        <i class="fa fs-2 text-dark fa-ruble-sign"></i>
                                                        <div>
                                                            Цены
                                                        </div>
                                                    </div>
                                                </button>
                                            </li>
                                            <li role="presentation">
                                                <button
                                                    class="nav-link mx-auto"
                                                    id="profile-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#profile"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="profile"
                                                    aria-selected="false">
                                                    <h3>
                                                        <i class="fa fs-2 text-dark fa-music"></i>
                                                        <div>
                                                            Ноты
                                                        </div>
                                                    </h3>
                                                </button>
                                            </li>
                                            <li role="presentation">
                                                <button
                                                    class="nav-link mx-auto"
                                                    id="contact-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#contact"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="contact"
                                                    aria-selected="false">
                                                    <h3>
                                                        <i class="fa fs-2 text-dark fa-search"></i>
                                                        <div>
                                                            Описание
                                                        </div>
                                                    </h3>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>

                                </div>


                            </div>
                        </div>


                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">1</div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">2</div>
                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">3</div>
                        </div>
                    </div>
                </div>

            </template>
        </div>

    </div>
</template>

<script>
export default {
    name: "Catalogue"
}
</script>

<style scoped lang="scss">
.card_handler{
    .img_part{
        background: radial-gradient(#d82729, #d97f7f57);
        border-radius: 30px 0 0 30px;
        padding: 16px;
        height: 200px;
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
}
</style>
