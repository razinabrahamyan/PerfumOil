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
                                <KTMenu></KTMenu>
                            </div>
                            </div>
                        <div
                            id="kt_aside_nav_tab_projects"
                            class="tab-pane fade "
                            role="tabpanel">
                            <div class="m-0">
                                <div class="d-flex mb-10">
                                    <div
                                        id="kt_header_search"
                                        class="d-flex align-items-center w-lg-400px"
                                        data-kt-menu-flip="bottom"
                                        data-kt-menu-permanent="true"
                                        data-kt-menu-placement="bottom-start"
                                        data-kt-menu-trigger="auto"
                                        data-kt-search="true"
                                        data-kt-search-enter="enter"
                                        data-kt-search-keypress="true"
                                        data-kt-search-layout="menu"
                                        data-kt-search-min-length="2">
                                        <form
                                            autocomplete="off"
                                            class="w-100 position-relative mb-5 mb-lg-0"
                                            data-kt-search-element="form">
                                            <input type="hidden"/>
                                            <span
                                                class=" svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 translate-middle-y ms-5">
                        <inline-svg
                            src="media/icons/duotune/general/gen021.svg"
                        />
                        </span>

                                            <input
                                                class="form-control form-control-solid ps-15"
                                                data-kt-search-element="input"
                                                name="search"
                                                placeholder="Search..."
                                                type="text"
                                                value=""
                                            />

                                            <span
                                                class="
                          position-absolute
                          top-50
                          end-0
                          translate-middle-y
                          lh-0
                          d-none
                          me-5
                        "
                                                data-kt-search-element="spinner"
                                            >
                        <span
                            class="
                            spinner-border
                            h-15px
                            w-15px
                            align-middle
                            text-gray-400
                          "
                        ></span>
                      </span>

                                            <span
                                                class="
                          btn btn-flush btn-active-color-primary
                          position-absolute
                          top-50
                          end-0
                          translate-middle-y
                          lh-0
                          d-none
                          me-4
                        "
                                                data-kt-search-element="clear"
                                            >
                        <span class="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
                          <inline-svg
                              src="media/icons/duotune/arrows/arr061.svg"
                          />
                        </span>
                      </span>
                                        </form>

                                        <div
                                            class="
                        menu menu-sub menu-sub-dropdown
                        w-300px w-md-350px
                        py-7
                        px-7
                        overflow-hidden
                      "
                                            data-kt-menu="true"
                                            data-kt-search-element="content"
                                            style=""
                                        >
                                            <div data-kt-search-element="wrapper">
                                                <div class="d-none" data-kt-search-element="results">
                                                    <div class="scroll-y mh-200px mh-lg-350px">
                                                        <h3
                                                            class="fs-5 text-muted m-0 pb-5"
                                                            data-kt-search-element="category-title"
                                                        >
                                                            Users
                                                        </h3>

                                                        <a
                                                            class="
                                d-flex
                                text-dark text-hover-primary
                                align-items-center
                                mb-5
                              "
                                                            href="#"
                                                        >
                                                            <div class="symbol symbol-40px me-4">
                                                                <img alt="" src="media/avatars/150-1.jpg"/>
                                                            </div>

                                                            <div
                                                                class="
                                  d-flex
                                  flex-column
                                  justify-content-start
                                  fw-bold
                                "
                                                            >
                                                                <span class="fs-6 fw-bold">Karina Clark</span>
                                                                <span class="fs-7 fw-bold text-muted"
                                                                >Marketing Manager</span
                                                                >
                                                            </div>
                                                        </a>

                                                        <a
                                                            class="
                                d-flex
                                text-dark text-hover-primary
                                align-items-center
                                mb-5
                              "
                                                            href="#"
                                                        >
                                                            <div class="symbol symbol-40px me-4">
                                                                <img alt="" src="media/avatars/150-3.jpg"/>
                                                            </div>

                                                            <div
                                                                class="
                                  d-flex
                                  flex-column
                                  justify-content-start
                                  fw-bold
                                "
                                                            >
                                                                <span class="fs-6 fw-bold">Olivia Bold</span>
                                                                <span class="fs-7 fw-bold text-muted"
                                                                >Software Engineer</span
                                                                >
                                                            </div>
                                                        </a>

                                                        <a
                                                            class="
                                d-flex
                                text-dark text-hover-primary
                                align-items-center
                                mb-5
                              "
                                                            href="#"
                                                        >
                                                            <div class="symbol symbol-40px me-4">
                                                                <img alt="" src="media/avatars/150-8.jpg"/>
                                                            </div>

                                                            <div
                                                                class="
                                  d-flex
                                  flex-column
                                  justify-content-start
                                  fw-bold
                                "
                                                            >
                                                                <span class="fs-6 fw-bold">Ana Clark</span>
                                                                <span class="fs-7 fw-bold text-muted"
                                                                >UI/UX Designer</span
                                                                >
                                                            </div>
                                                        </a>

                                                        <a
                                                            class="
                                d-flex
                                text-dark text-hover-primary
                                align-items-center
                                mb-5
                              "
                                                            href="#"
                                                        >
                                                            <div class="symbol symbol-40px me-4">
                                                                <img alt="" src="media/avatars/150-11.jpg"/>
                                                            </div>

                                                            <div
                                                                class="
                                  d-flex
                                  flex-column
                                  justify-content-start
                                  fw-bold
                                "
                                                            >
                                                                <span class="fs-6 fw-bold">Nick Pitola</span>
                                                                <span class="fs-7 fw-bold text-muted"
                                                                >Art Director</span
                                                                >
                                                            </div>
                                                        </a>

                                                        <a
                                                            class="
                                d-flex
                                text-dark text-hover-primary
                                align-items-center
                                mb-5
                              "
                                                            href="#"
                                                        >
                                                            <div class="symbol symbol-40px me-4">
                                                                <img alt="" src="media/avatars/150-12.jpg"/>
                                                            </div>

                                                            <div
                                                                class="
                                  d-flex
                                  flex-column
                                  justify-content-start
                                  fw-bold
                                "
                                                            >
                                                                <span class="fs-6 fw-bold">Edward Kulnic</span>
                                                                <span class="fs-7 fw-bold text-muted"
                                                                >System Administrator</span
                                                                >
                                                            </div>
                                                        </a>

                                                        <h3
                                                            class="fs-5 text-muted m-0 pt-5 pb-5"
                                                            data-kt-search-element="category-title"
                                                        >
                                                            Customers
                                                        </h3>

                                                        <a
                                                            class="
                                d-flex
                                text-dark text-hover-primary
                                align-items-center
                                mb-5
                              "
                                                            href="#"
                                                        >
                                                            <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <img
                                      alt=""
                                      class="w-20px h-20px"
                                      src="media/svg/brand-logos/volicity-9.svg"
                                  />
                                </span>
                                                            </div>

                                                            <div
                                                                class="
                                  d-flex
                                  flex-column
                                  justify-content-start
                                  fw-bold
                                "
                                                            >
                                <span class="fs-6 fw-bold"
                                >Company Rbranding</span
                                >
                                                                <span class="fs-7 fw-bold text-muted"
                                                                >UI Design</span
                                                                >
                                                            </div>
                                                        </a>

                                                        <a
                                                            class="
                                d-flex
                                text-dark text-hover-primary
                                align-items-center
                                mb-5
                              "
                                                            href="#"
                                                        >
                                                            <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <img
                                      alt=""
                                      class="w-20px h-20px"
                                      src="media/svg/brand-logos/tvit.svg"
                                  />
                                </span>
                                                            </div>

                                                            <div
                                                                class="
                                  d-flex
                                  flex-column
                                  justify-content-start
                                  fw-bold
                                "
                                                            >
                                <span class="fs-6 fw-bold"
                                >Company Re-branding</span
                                >
                                                                <span class="fs-7 fw-bold text-muted"
                                                                >Web Development</span
                                                                >
                                                            </div>
                                                        </a>

                                                        <a
                                                            class="
                                d-flex
                                text-dark text-hover-primary
                                align-items-center
                                mb-5
                              "
                                                            href="#"
                                                        >
                                                            <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <img
                                      alt=""
                                      class="w-20px h-20px"
                                      src="media/svg/misc/infography.svg"
                                  />
                                </span>
                                                            </div>

                                                            <div
                                                                class="
                                  d-flex
                                  flex-column
                                  justify-content-start
                                  fw-bold
                                "
                                                            >
                                <span class="fs-6 fw-bold"
                                >Business Analytics App</span
                                >
                                                                <span class="fs-7 fw-bold text-muted"
                                                                >Administration</span
                                                                >
                                                            </div>
                                                        </a>

                                                        <a
                                                            class="
                                d-flex
                                text-dark text-hover-primary
                                align-items-center
                                mb-5
                              "
                                                            href="#"
                                                        >
                                                            <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <img
                                      alt=""
                                      class="w-20px h-20px"
                                      src="media/svg/brand-logos/leaf.svg"
                                  />
                                </span>
                                                            </div>

                                                            <div
                                                                class="
                                  d-flex
                                  flex-column
                                  justify-content-start
                                  fw-bold
                                "
                                                            >
                                <span class="fs-6 fw-bold"
                                >EcoLeaf App Launch</span
                                >
                                                                <span class="fs-7 fw-bold text-muted"
                                                                >Marketing</span
                                                                >
                                                            </div>
                                                        </a>

                                                        <a
                                                            class="
                                d-flex
                                text-dark text-hover-primary
                                align-items-center
                                mb-5
                              "
                                                            href="#"
                                                        >
                                                            <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <img
                                      alt=""
                                      class="w-20px h-20px"
                                      src="media/svg/brand-logos/tower.svg"
                                  />
                                </span>
                                                            </div>

                                                            <div
                                                                class="
                                  d-flex
                                  flex-column
                                  justify-content-start
                                  fw-bold
                                "
                                                            >
                                <span class="fs-6 fw-bold"
                                >Tower Group Website</span
                                >
                                                                <span class="fs-7 fw-bold text-muted"
                                                                >Google Adwords</span
                                                                >
                                                            </div>
                                                        </a>

                                                        <h3
                                                            class="fs-5 text-muted m-0 pt-5 pb-5"
                                                            data-kt-search-element="category-title"
                                                        >
                                                            Projects
                                                        </h3>

                                                        <a
                                                            class="
                                d-flex
                                text-dark text-hover-primary
                                align-items-center
                                mb-5
                              "
                                                            href="#"
                                                        >
                                                            <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <span
                                      class="svg-icon svg-icon-2 svg-icon-primary"
                                  >
                                    <inline-svg
                                        src="media/icons/duotune/general/gen005.svg"
                                    />
                                  </span>
                                </span>
                                                            </div>

                                                            <div class="d-flex flex-column">
                                <span class="fs-6 fw-bold"
                                >Si-Fi Project by AU Themes</span
                                >
                                                                <span class="fs-7 fw-bold text-muted"
                                                                >#45670</span
                                                                >
                                                            </div>
                                                        </a>

                                                        <a
                                                            class="
                                d-flex
                                text-dark text-hover-primary
                                align-items-center
                                mb-5
                              "
                                                            href="#"
                                                        >
                                                            <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <span
                                      class="svg-icon svg-icon-2 svg-icon-primary"
                                  >
                                    <inline-svg
                                        src="media/icons/duotune/general/gen032.svg"
                                    />
                                  </span>
                                </span>
                                                            </div>

                                                            <div class="d-flex flex-column">
                                <span class="fs-6 fw-bold"
                                >Shopix Mobile App Planning</span
                                >
                                                                <span class="fs-7 fw-bold text-muted"
                                                                >#45690</span
                                                                >
                                                            </div>
                                                        </a>

                                                        <a
                                                            class="
                                d-flex
                                text-dark text-hover-primary
                                align-items-center
                                mb-5
                              "
                                                            href="#"
                                                        >
                                                            <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <span
                                      class="svg-icon svg-icon-2 svg-icon-primary"
                                  >
                                    <inline-svg
                                        src="media/icons/duotune/communication/com012.svg"
                                    />
                                  </span>
                                </span>
                                                            </div>

                                                            <div class="d-flex flex-column">
                                <span class="fs-6 fw-bold"
                                >Finance Monitoring SAAS Discussion</span
                                >
                                                                <span class="fs-7 fw-bold text-muted"
                                                                >#21090</span
                                                                >
                                                            </div>
                                                        </a>

                                                        <a
                                                            class="
                                d-flex
                                text-dark text-hover-primary
                                align-items-center
                                mb-5
                              "
                                                            href="#"
                                                        >
                                                            <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <span
                                      class="svg-icon svg-icon-2 svg-icon-primary"
                                  >
                                    <inline-svg
                                        src="media/icons/duotune/communication/com006.svg"
                                    />
                                  </span>
                                </span>
                                                            </div>

                                                            <div class="d-flex flex-column">
                                <span class="fs-6 fw-bold"
                                >Dashboard Analitics Launch</span
                                >
                                                                <span class="fs-7 fw-bold text-muted"
                                                                >#34560</span
                                                                >
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>

                                                <div class="mb-4" data-kt-search-element="main">
                                                    <div class="d-flex flex-stack fw-bold mb-5">
                            <span class="text-muted fs-6 me-2"
                            >Recently Searched</span
                            >

                                                        <div
                                                            class="d-flex"
                                                            data-kt-search-element="toolbar"
                                                        >
                                                            <div
                                                                class="
                                  btn btn-icon
                                  w-20px
                                  btn-sm btn-active-color-primary
                                  me-2
                                  data-bs-toggle=
                                "
                                                                data-kt-search-element="preferences-show"
                                                                title="Show search preferences"
                                                            >
                                <span class="svg-icon svg-icon-1">
                                  <inline-svg
                                      src="media/icons/duotune/coding/cod001.svg"
                                  />
                                </span>
                                                            </div>

                                                            <div
                                                                class="
                                  btn btn-icon
                                  w-20px
                                  btn-sm btn-active-color-primary
                                  me-n1
                                "
                                                                data-bs-original-title="Show more search options"
                                                                data-bs-toggle="tooltip"
                                                                data-kt-search-element="advanced-options-form-show"
                                                                title=""
                                                            >
                                <span class="svg-icon svg-icon-2">
                                  <inline-svg
                                      src="media/icons/duotune/arrows/arr072.svg"
                                  />
                                </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="scroll-y mh-200px mh-lg-325px">
                                                        <div class="d-flex align-items-center mb-5">
                                                            <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <span
                                      class="svg-icon svg-icon-2 svg-icon-primary"
                                  >
                                    <inline-svg
                                        src="media/icons/duotune/electronics/elc004.svg"
                                    />
                                  </span>
                                </span>
                                                            </div>

                                                            <div class="d-flex flex-column">
                                                                <a
                                                                    class="
                                    fs-6
                                    text-gray-800 text-hover-primary
                                    fw-bold
                                  "
                                                                    href="#"
                                                                >BoomApp by Keenthemes</a
                                                                >
                                                                <span class="fs-7 text-muted fw-bold"
                                                                >#45789</span
                                                                >
                                                            </div>
                                                        </div>

                                                        <div class="d-flex align-items-center mb-5">
                                                            <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <span
                                      class="svg-icon svg-icon-2 svg-icon-primary"
                                  >
                                    <inline-svg
                                        src="media/icons/duotune/graphs/gra001.svg"
                                    />
                                  </span>
                                </span>
                                                            </div>

                                                            <div class="d-flex flex-column">
                                                                <a
                                                                    class="
                                    fs-6
                                    text-gray-800 text-hover-primary
                                    fw-bold
                                  "
                                                                    href="#"
                                                                >"Kept API Project Meeting</a
                                                                >
                                                                <span class="fs-7 text-muted fw-bold"
                                                                >#84050</span
                                                                >
                                                            </div>
                                                        </div>

                                                        <div class="d-flex align-items-center mb-5">
                                                            <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <span
                                      class="svg-icon svg-icon-2 svg-icon-primary"
                                  >
                                    <inline-svg
                                        src="media/icons/duotune/graphs/gra006.svg"
                                    />
                                  </span>
                                </span>
                                                            </div>

                                                            <div class="d-flex flex-column">
                                                                <a
                                                                    class="
                                    fs-6
                                    text-gray-800 text-hover-primary
                                    fw-bold
                                  "
                                                                    href="#"
                                                                >"KPI Monitoring App Launch</a
                                                                >
                                                                <span class="fs-7 text-muted fw-bold"
                                                                >#84250</span
                                                                >
                                                            </div>
                                                        </div>

                                                        <div class="d-flex align-items-center mb-5">
                                                            <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <span
                                      class="svg-icon svg-icon-2 svg-icon-primary"
                                  >
                                    <inline-svg
                                        src="media/icons/duotune/graphs/gra003.svg"
                                    />
                                  </span>
                                </span>
                                                            </div>

                                                            <div class="d-flex flex-column">
                                                                <a
                                                                    class="
                                    fs-6
                                    text-gray-800 text-hover-primary
                                    fw-bold
                                  "
                                                                    href="#"
                                                                >Project Reference FAQ</a
                                                                >
                                                                <span class="fs-7 text-muted fw-bold"
                                                                >#67945</span
                                                                >
                                                            </div>
                                                        </div>

                                                        <div class="d-flex align-items-center mb-5">
                                                            <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <span
                                      class="svg-icon svg-icon-2 svg-icon-primary"
                                  >
                                    <inline-svg
                                        src="media/icons/duotune/communication/com010.svg"
                                    />
                                  </span>
                                </span>
                                                            </div>

                                                            <div class="d-flex flex-column">
                                                                <a
                                                                    class="
                                    fs-6
                                    text-gray-800 text-hover-primary
                                    fw-bold
                                  "
                                                                    href="#"
                                                                >"FitPro App Development</a
                                                                >
                                                                <span class="fs-7 text-muted fw-bold"
                                                                >#84250</span
                                                                >
                                                            </div>
                                                        </div>

                                                        <div class="d-flex align-items-center mb-5">
                                                            <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <span
                                      class="svg-icon svg-icon-2 svg-icon-primary"
                                  >
                                    <inline-svg
                                        src="media/icons/duotune/finance/fin001.svg"
                                    />
                                  </span>
                                </span>
                                                            </div>

                                                            <div class="d-flex flex-column">
                                                                <a
                                                                    class="
                                    fs-6
                                    text-gray-800 text-hover-primary
                                    fw-bold
                                  "
                                                                    href="#"
                                                                >Shopix Mobile App</a
                                                                >
                                                                <span class="fs-7 text-muted fw-bold"
                                                                >#45690</span
                                                                >
                                                            </div>
                                                        </div>

                                                        <div class="d-flex align-items-center mb-5">
                                                            <div class="symbol symbol-40px me-4">
                                <span class="symbol-label bg-light">
                                  <span
                                      class="svg-icon svg-icon-2 svg-icon-primary"
                                  >
                                    <inline-svg
                                        src="media/icons/duotune/graphs/gra002.svg"
                                    />
                                  </span>
                                </span>
                                                            </div>

                                                            <div class="d-flex flex-column">
                                                                <a
                                                                    class="
                                    fs-6
                                    text-gray-800 text-hover-primary
                                    fw-bold
                                  "
                                                                    href="#"
                                                                >"Landing UI Design" Launch</a
                                                                >
                                                                <span class="fs-7 text-muted fw-bold"
                                                                >#24005</span
                                                                >
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div
                                                    class="text-center d-none"
                                                    data-kt-search-element="empty"
                                                >
                                                    <div class="pt-10 pb-10">
                            <span class="svg-icon svg-icon-4x opacity-50">
                              <inline-svg
                                  src="media/icons/duotune/files/fil024.svg"
                              />
                            </span>
                                                    </div>

                                                    <div class="pb-15 fw-bold">
                                                        <h3 class="text-gray-600 fs-5 mb-2">
                                                            No result found
                                                        </h3>
                                                        <div class="text-muted fs-7">
                                                            Please try again with a different query
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <form
                                                class="pt-1 d-none"
                                                data-kt-search-element="advanced-options-form"
                                            >
                                                <h3 class="fw-bold text-dark mb-7">Advanced Search</h3>

                                                <div class="mb-5">
                                                    <input
                                                        class="
                              form-control form-control-sm form-control-solid
                            "
                                                        name="query"
                                                        placeholder="Contains the word"
                                                        type="text"
                                                    />
                                                </div>

                                                <div class="mb-5">
                                                    <div class="nav-group nav-group-fluid">
                                                        <label>
                                                            <input
                                                                checked="checked"
                                                                class="btn-check"
                                                                name="type"
                                                                type="radio"
                                                                value="has"
                                                            />
                                                            <span
                                                                class="
                                  btn
                                  btn-sm
                                  btn-color-muted
                                  btn-active
                                  btn-active-primary
                                "
                                                            >All</span
                                                            >
                                                        </label>

                                                        <label>
                                                            <input
                                                                class="btn-check"
                                                                name="type"
                                                                type="radio"
                                                                value="users"
                                                            />
                                                            <span
                                                                class="
                                  btn
                                  btn-sm
                                  btn-color-muted
                                  btn-active
                                  btn-active-primary
                                  px-4
                                "
                                                            >Users</span
                                                            >
                                                        </label>

                                                        <label>
                                                            <input
                                                                class="btn-check"
                                                                name="type"
                                                                type="radio"
                                                                value="orders"
                                                            />
                                                            <span
                                                                class="
                                  btn
                                  btn-sm
                                  btn-color-muted
                                  btn-active
                                  btn-active-primary
                                  px-4
                                "
                                                            >Orders</span
                                                            >
                                                        </label>

                                                        <label>
                                                            <input
                                                                class="btn-check"
                                                                name="type"
                                                                type="radio"
                                                                value="projects"
                                                            />
                                                            <span
                                                                class="
                                  btn
                                  btn-sm
                                  btn-color-muted
                                  btn-active
                                  btn-active-primary
                                  px-4
                                "
                                                            >Projects</span
                                                            >
                                                        </label>
                                                    </div>
                                                </div>

                                                <div class="mb-5">
                                                    <input
                                                        class="
                              form-control form-control-sm form-control-solid
                            "
                                                        name="assignedto"
                                                        placeholder="Assigned to"
                                                        type="text"
                                                        value=""
                                                    />
                                                </div>

                                                <div class="mb-5">
                                                    <input
                                                        class="
                              form-control form-control-sm form-control-solid
                            "
                                                        name="collaborators"
                                                        placeholder="Collaborators"
                                                        type="text"
                                                        value=""
                                                    />
                                                </div>

                                                <div class="mb-5">
                                                    <div class="nav-group nav-group-fluid">
                                                        <label>
                                                            <input
                                                                checked="checked"
                                                                class="btn-check"
                                                                name="attachment"
                                                                type="radio"
                                                                value="has"
                                                            />
                                                            <span
                                                                class=" btn btn-sm btn-color-muted btn-active btn-active-primary"
                                                            >Has attachment</span
                                                            >
                                                        </label>

                                                        <label>
                                                            <input
                                                                class="btn-check"
                                                                name="attachment"
                                                                type="radio"
                                                                value="any"
                                                            />
                                                            <span
                                                                class="
                                  btn
                                  btn-sm
                                  btn-color-muted
                                  btn-active
                                  btn-active-primary
                                  px-4
                                "
                                                            >Any</span
                                                            >
                                                        </label>
                                                    </div>
                                                </div>

                                                <div class="mb-5">
                                                    <select
                                                        aria-hidden="true"
                                                        aria-label="Select a Timezone"
                                                        class="
                              form-select form-select-sm form-select-solid
                              select2-hidden-accessible
                            "
                                                        data-control="select2"
                                                        data-placeholder="date_period"
                                                        data-select2-id="select2-data-1-r6vx"
                                                        name="timezone"
                                                        tabindex="-1"
                                                    >
                                                        <option
                                                            data-select2-id="select2-data-3-rtyr"
                                                            value="next"
                                                        >
                                                            Within the next
                                                        </option>
                                                        <option value="last">Within the last</option>
                                                        <option value="between">Between</option>
                                                        <option value="on">On</option>
                                                    </select
                                                    ><span
                                                    class="
                              select2
                              select2-container
                              select2-container--bootstrap5
                            "
                                                    data-select2-id="select2-data-2-bnkb"
                                                    dir="ltr"
                                                    style="width: 100%"
                                                ><span class="selection"
                                                ><span
                                                    aria-controls="select2-timezone-ek-container"
                                                    aria-disabled="false"
                                                    aria-expanded="false"
                                                    aria-haspopup="true"
                                                    aria-labelledby="select2-timezone-ek-container"
                                                    class="
                                  select2-selection select2-selection--single
                                  form-select form-select-sm form-select-solid
                                "
                                                    role="combobox"
                                                    tabindex="0"
                                                ><span
                                                    id="select2-timezone-ek-container"
                                                    aria-readonly="true"
                                                    class="select2-selection__rendered"
                                                    role="textbox"
                                                    title="Within the next"
                                                >Within the next</span
                                                ><span
                                                    class="select2-selection__arrow"
                                                    role="presentation"
                                                ><b
                                                    role="presentation"
                                                ></b></span></span></span
                                                ><span
                                                    aria-hidden="true"
                                                    class="dropdown-wrapper"
                                                ></span
                                                ></span>
                                                </div>

                                                <div class="row mb-8">
                                                    <div class="col-6">
                                                        <input
                                                            class="
                                form-control form-control-sm form-control-solid
                              "
                                                            name="date_number"
                                                            placeholder="Lenght"
                                                            type="number"
                                                            value=""
                                                        />
                                                    </div>

                                                    <div class="col-6">
                                                        <select
                                                            aria-hidden="true"
                                                            aria-label="Select a Timezone"
                                                            class="
                                form-select form-select-sm form-select-solid
                                select2-hidden-accessible
                              "
                                                            data-control="select2"
                                                            data-placeholder="Period"
                                                            data-select2-id="select2-data-4-hptq"
                                                            name="date_typer"
                                                            tabindex="-1"
                                                        >
                                                            <option
                                                                data-select2-id="select2-data-6-ez49"
                                                                value="days"
                                                            >
                                                                Days
                                                            </option>
                                                            <option value="weeks">Weeks</option>
                                                            <option value="months">Months</option>
                                                            <option value="years">Years</option>
                                                        </select
                                                        ><span
                                                        class="
                                select2
                                select2-container
                                select2-container--bootstrap5
                              "
                                                        data-select2-id="select2-data-5-c0pc"
                                                        dir="ltr"
                                                        style="width: 100%"
                                                    ><span class="selection"
                                                    ><span
                                                        aria-controls="select2-date_typer-vk-container"
                                                        aria-disabled="false"
                                                        aria-expanded="false"
                                                        aria-haspopup="true"
                                                        aria-labelledby="select2-date_typer-vk-container"
                                                        class="
                                    select2-selection select2-selection--single
                                    form-select form-select-sm form-select-solid
                                  "
                                                        role="combobox"
                                                        tabindex="0"
                                                    ><span
                                                        id="select2-date_typer-vk-container"
                                                        aria-readonly="true"
                                                        class="select2-selection__rendered"
                                                        role="textbox"
                                                        title="Days"
                                                    >Days</span
                                                    ><span
                                                        class="select2-selection__arrow"
                                                        role="presentation"
                                                    ><b
                                                        role="presentation"
                                                    ></b></span></span></span
                                                    ><span
                                                        aria-hidden="true"
                                                        class="dropdown-wrapper"
                                                    ></span
                                                    ></span>
                                                    </div>
                                                </div>

                                                <div class="d-flex justify-content-end">
                                                    <button
                                                        class="
                              btn btn-sm btn-light
                              fw-bolder
                              btn-active-light-primary
                              me-2
                            "
                                                        data-kt-search-element="advanced-options-form-cancel"
                                                        type="reset"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <a
                                                        class="btn btn-sm fw-bolder btn-primary"
                                                        data-kt-search-element="advanced-options-form-search"
                                                        href="#"
                                                    >Search</a
                                                    >
                                                </div>
                                            </form>

                                            <form
                                                class="pt-1 d-none"
                                                data-kt-search-element="preferences"
                                            >
                                                <h3 class="fw-bold text-dark mb-7">
                                                    Search Preferences
                                                </h3>

                                                <div class="pb-4 border-bottom">
                                                    <label
                                                        class="
                              form-check
                              form-switch
                              form-switch-sm
                              form-check-custom
                              form-check-solid
                              flex-stack
                            "
                                                    >
                            <span
                                class="
                                form-check-label
                                text-gray-700
                                fs-6
                                fw-bold
                                ms-0
                                me-2
                              "
                            >Projects</span
                            >
                                                        <input
                                                            checked="checked"
                                                            class="form-check-input"
                                                            type="checkbox"
                                                            value="1"
                                                        />
                                                    </label>
                                                </div>

                                                <div class="py-4 border-bottom">
                                                    <label
                                                        class="
                              form-check
                              form-switch
                              form-switch-sm
                              form-check-custom
                              form-check-solid
                              flex-stack
                            "
                                                    >
                            <span
                                class="
                                form-check-label
                                text-gray-700
                                fs-6
                                fw-bold
                                ms-0
                                me-2
                              "
                            >Targets</span
                            >
                                                        <input
                                                            checked="checked"
                                                            class="form-check-input"
                                                            type="checkbox"
                                                            value="1"
                                                        />
                                                    </label>
                                                </div>

                                                <div class="py-4 border-bottom">
                                                    <label
                                                        class="
                              form-check
                              form-switch
                              form-switch-sm
                              form-check-custom
                              form-check-solid
                              flex-stack
                            "
                                                    >
                            <span
                                class="
                                form-check-label
                                text-gray-700
                                fs-6
                                fw-bold
                                ms-0
                                me-2
                              "
                            >Affiliate Programs</span
                            >
                                                        <input
                                                            class="form-check-input"
                                                            type="checkbox"
                                                            value="1"
                                                        />
                                                    </label>
                                                </div>

                                                <div class="py-4 border-bottom">
                                                    <label
                                                        class="
                              form-check
                              form-switch
                              form-switch-sm
                              form-check-custom
                              form-check-solid
                              flex-stack
                            "
                                                    >
                            <span
                                class="
                                form-check-label
                                text-gray-700
                                fs-6
                                fw-bold
                                ms-0
                                me-2
                              "
                            >Referrals</span
                            >
                                                        <input
                                                            checked="checked"
                                                            class="form-check-input"
                                                            type="checkbox"
                                                            value="1"
                                                        />
                                                    </label>
                                                </div>

                                                <div class="py-4 border-bottom">
                                                    <label
                                                        class="
                              form-check
                              form-switch
                              form-switch-sm
                              form-check-custom
                              form-check-solid
                              flex-stack
                            "
                                                    >
                            <span
                                class="
                                form-check-label
                                text-gray-700
                                fs-6
                                fw-bold
                                ms-0
                                me-2
                              "
                            >Users</span
                            >
                                                        <input
                                                            class="form-check-input"
                                                            type="checkbox"
                                                            value="1"
                                                        />
                                                    </label>
                                                </div>

                                                <div class="d-flex justify-content-end pt-7">
                                                    <button
                                                        class="
                              btn btn-sm btn-light
                              fw-bolder
                              btn-active-light-primary
                              me-2
                            "
                                                        data-kt-search-element="preferences-dismiss"
                                                        type="reset"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        class="btn btn-sm fw-bolder btn-primary"
                                                        type="submit"
                                                    >
                                                        Save Changes
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div class="flex-shrink-0 ms-2">
                                        <button
                                            class="
                        btn
                        btn-icon
                        btn-bg-light
                        btn-active-icon-primary
                        btn-color-gray-400
                      "
                                            data-kt-menu-flip="top-end"
                                            data-kt-menu-placement="bottom-end"
                                            data-kt-menu-trigger="click"
                                            type="button"
                                        >
                      <span class="svg-icon svg-icon-2">
                        <inline-svg
                            src="media/icons/duotune/general/gen031.svg"
                        />
                      </span>
                                        </button>

                                        <Dropdown1></Dropdown1>
                                    </div>
                                </div>

                                <div class="m-0">
                                    <h1 class="text-gray-800 fw-bold mb-6 mx-5">Projects</h1>

                                    <div class="mb-10">
                                        <a
                                            class="custom-list d-flex align-items-center px-5 py-4"
                                            href="#"
                                        >
                                            <div class="symbol symbol-40px me-5">
                        <span class="symbol-label">
                          <img
                              alt=""
                              class="h-50 align-self-center"
                              src="media/svg/brand-logos/bebo.svg"
                          />
                        </span>
                                            </div>

                                            <div class="d-flex flex-column flex-grow-1">
                                                <h5
                                                    class="custom-list-title fw-bold text-gray-800 mb-1"
                                                >
                                                    Briviba SaaS
                                                </h5>

                                                <span class="text-gray-400 fw-bold">By James</span>
                                            </div>
                                        </a>

                                        <a
                                            class="custom-list d-flex align-items-center px-5 py-4"
                                            href="#"
                                        >
                                            <div class="symbol symbol-40px me-5">
                        <span class="symbol-label">
                          <img
                              alt=""
                              class="h-50 align-self-center"
                              src="media/svg/brand-logos/vimeo.svg"
                          />
                        </span>
                                            </div>

                                            <div class="d-flex flex-column flex-grow-1">
                                                <h5
                                                    class="custom-list-title fw-bold text-gray-800 mb-1"
                                                >
                                                    Vine Quick Reports
                                                </h5>

                                                <span class="text-gray-400 fw-bold">By Andres</span>
                                            </div>
                                        </a>

                                        <a
                                            class="custom-list d-flex align-items-center px-5 py-4"
                                            href="#"
                                        >
                                            <div class="symbol symbol-40px me-5">
                        <span class="symbol-label">
                          <img
                              alt=""
                              class="h-50 align-self-center"
                              src="media/svg/brand-logos/kickstarter.svg"
                          />
                        </span>
                                            </div>

                                            <div class="d-flex flex-column flex-grow-1">
                                                <h5
                                                    class="custom-list-title fw-bold text-gray-800 mb-1"
                                                >
                                                    KC Account CRM
                                                </h5>

                                                <span class="text-gray-400 fw-bold">By Keenthemes</span>
                                            </div>
                                        </a>

                                        <a
                                            class="custom-list d-flex align-items-center px-5 py-4"
                                            href="#"
                                        >
                                            <div class="symbol symbol-40px me-5">
                        <span class="symbol-label">
                          <img
                              alt=""
                              class="h-50 align-self-center"
                              src="media/svg/brand-logos/balloon.svg"
                          />
                        </span>
                                            </div>

                                            <div class="d-flex flex-column flex-grow-1">
                                                <h5
                                                    class="custom-list-title fw-bold text-gray-800 mb-1"
                                                >
                                                    Baloon SaaS
                                                </h5>

                                                <span class="text-gray-400 fw-bold">By SIA Team</span>
                                            </div>
                                        </a>

                                        <a
                                            class="custom-list d-flex align-items-center px-5 py-4"
                                            href="#"
                                        >
                                            <div class="symbol symbol-40px me-5">
                        <span class="symbol-label">
                          <img
                              alt=""
                              class="h-50 align-self-center"
                              src="media/svg/brand-logos/infography.svg"
                          />
                        </span>
                                            </div>

                                            <div class="d-flex flex-column flex-grow-1">
                                                <h5
                                                    class="custom-list-title fw-bold text-gray-800 mb-1"
                                                >
                                                    Most Cloudy UMC
                                                </h5>

                                                <span class="text-gray-400 fw-bold">By Andrei</span>
                                            </div>
                                        </a>

                                        <a
                                            class="custom-list d-flex align-items-center px-5 py-4"
                                            href="#"
                                        >
                                            <div class="symbol symbol-40px me-5">
                        <span class="symbol-label">
                          <img
                              alt=""
                              class="h-50 align-self-center"
                              src="media/svg/brand-logos/disqus.svg"
                          />
                        </span>
                                            </div>

                                            <div class="d-flex flex-column flex-grow-1">
                                                <h5
                                                    class="custom-list-title fw-bold text-gray-800 mb-1"
                                                >
                                                    Disqus Forum
                                                </h5>

                                                <span class="text-gray-400 fw-bold"
                                                >By Disqus Inc.</span
                                                >
                                            </div>
                                        </a>

                                        <a
                                            class="custom-list d-flex align-items-center px-5 py-4"
                                            href="#"
                                        >
                                            <div class="symbol symbol-40px me-5">
                        <span class="symbol-label">
                          <img
                              alt=""
                              class="h-50 align-self-center"
                              src="media/svg/brand-logos/plurk.svg"
                          />
                        </span>
                                            </div>

                                            <div class="d-flex flex-column flex-grow-1">
                                                <h5
                                                    class="custom-list-title fw-bold text-gray-800 mb-1"
                                                >
                                                    Proove Quick CRM
                                                </h5>

                                                <span class="text-gray-400 fw-bold"
                                                >By Proove Limited</span
                                                >
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            id="kt_aside_nav_tab_menu"
                            class="tab-pane fade "
                            role="tabpanel"
                        >
                            <KTMenu></KTMenu>
                        </div>

                        <div
                            id="kt_aside_nav_tab_subscription"
                            class="tab-pane fade"
                            role="tabpanel"
                        >
                            <!--begin::Subscription-->
                            <div class="mx-5">
                                <!--begin::Container-->
                                <div class="text-center pt-10 mb-20">
                                    <!--begin::Title-->
                                    <h2 class="fs-2 fw-bolder mb-7">My Subscription</h2>
                                    <!--end::Title-->

                                    <!--begin::Description-->
                                    <p class="text-gray-400 fs-4 fw-bold mb-10">
                                        There are no customers added yet.<br/>
                                        Kickstart your CRM by adding a your first customer
                                    </p>
                                    <!--end::Description-->

                                    <!--begin::Action-->
                                    <a
                                        class="btn btn-primary"
                                        data-bs-target="#kt_modal_upgrade_plan"
                                        data-bs-toggle="modal"
                                        href="#"
                                    >Upgrade Plan</a
                                    >
                                    <!--end::Action-->
                                </div>
                                <!--end::Container-->

                                <!--begin::Illustration-->
                                <div class="text-center px-4">
                                    <img
                                        alt=""
                                        class="mw-100 mh-300px"
                                        src="media/illustrations/sigma-1/18.png"
                                    />
                                </div>
                                <!--end::Illustration-->
                            </div>
                            <!--end::Subscription-->
                        </div>

                        <div
                            id="kt_aside_nav_tab_tasks"
                            class="tab-pane fade"
                            role="tabpanel"
                        >
                            <KTTasksOverview></KTTasksOverview>
                        </div>

                        <div
                            id="kt_aside_nav_tab_notifications"
                            class="tab-pane fade"
                            role="tabpanel"
                        >
                            <KTNotifications></KTNotifications>
                        </div>

                        <div
                            id="kt_aside_nav_tab_authors"
                            class="tab-pane fade"
                            role="tabpanel"
                        >
                            <KTAuthors></KTAuthors>
                        </div>
                    </div>
                </div>

                <div id="kt_aside_secondary_footer" class="flex-column-auto pt-10 px-5">
                    <a
                        class="
              btn
              btn-bg-light
              btn-color-gray-600
              btn-flex
              btn-active-color-primary
              flex-center
              w-100
            "
                        data-bs-custom-class="tooltip-dark"
                        data-bs-dismiss-="click"
                        data-bs-offset="0,5"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        href="https://preview.keenthemes.com/metronic8/vue/docs/#/doc-overview"
                    >
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
        class="
      btn btn-sm btn-icon btn-white btn-active-primary
      position-absolute
      translate-middle
      start-100
      end-0
      bottom-0
      shadow-sm
      d-none d-lg-flex
    "
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
import KTMenu from "@/layout/aside/Menu.vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";
import KTTasksOverview from "@/layout/aside/tabs/TasksOverview.vue";
import KTAuthors from "@/layout/aside/tabs/Authors.vue";
import KTNotifications from "@/layout/aside/tabs/Notifications.vue";
import {asideSecondaryDisplay, minimizationEnabled, minimizedAsideSecondary,} from "@/core/helpers/config";

export default defineComponent({
    name: "kt-aside-secondary",
    components: {
        KTMenu,
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
