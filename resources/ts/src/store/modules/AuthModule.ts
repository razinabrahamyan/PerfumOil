import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";
import { AxiosRequestConfig } from "axios";

export interface User {
    id:number,
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    api_token: string;
}

export interface UserAuthInfo {
    errors: unknown;
    user: User;
    isAuthenticated: boolean;
}

@Module
export default class AuthModule extends VuexModule implements UserAuthInfo {
    errors = {};
    user = {} as User;
    isAuthenticated = !!JwtService.getToken();
    role;

    /**
     * Get current user object
     * @returns User
     */
    get currentUser(): User {
        return this.user;
    }
    /**
     * Get current user object
     * @returns User
     */
    get getRole(): string {
        return this.role;
    }


    /**
     * Verify user authentication
     * @returns boolean
     */
    get isUserAuthenticated(): boolean {
        return this.isAuthenticated;
    }

    /**
     * Get authentification errors
     * @returns array
     */
    get getErrors() {
        return this.errors;
    }

    @Mutation
    [Mutations.SET_ERROR](error) {
        this.errors = error;
    }

    @Mutation
    [Mutations.SET_AUTH](data) {
        this.isAuthenticated = true;
        this.user = data.user;
        this.role = data.user.role.role;
        this.errors = [];
        JwtService.saveToken(data.access_token);
    }

    @Mutation
    [Mutations.SET_USER](user) {
        this.user = user;
    }
    @Mutation
    [Mutations.SET_Role](role) {
        this.role = role;
    }

    @Mutation
    [Mutations.SET_PASSWORD](password) {
        this.user.password = password;
    }

    @Mutation
    [Mutations.PURGE_AUTH]() {
        this.isAuthenticated = false;
        this.user = {} as User;
        this.errors = [];

        JwtService.destroyToken();
    }

    @Action
    [Actions.LOGIN](credentials) {
        const params = {
            ...credentials
        };
        return new Promise<void>((resolve, reject) => {
            ApiService.post("axios/login", params)
                .then(({ data }) => {
                    console.log(data, 'login response')
                    this.context.commit(Mutations.SET_AUTH, data);
                    resolve();
                })
                .catch(({ response }) => {
                    console.log(response, 'login response  error')
                    this.context.commit(Mutations.SET_ERROR, response.data.errors);
                    reject();
                });
        });
    }

    @Action
    [Actions.LOGOUT]() {
        this.context.commit(Mutations.PURGE_AUTH);
    }

    @Action
    [Actions.REGISTER](credentials) {
        return new Promise<void>((resolve, reject) => {
            ApiService.post("register", credentials)
                .then(({ data }) => {
                    this.context.commit(Mutations.SET_AUTH, data);
                    resolve();
                })
                .catch(({ response }) => {
                    this.context.commit(Mutations.SET_ERROR, response.data.errors);
                    reject();
                });
        });
    }

    @Action
    [Actions.FORGOT_PASSWORD](payload) {
        const params = {
            params: {
                ...payload,
            },
        };
        return new Promise<void>((resolve, reject) => {
            ApiService.query("forgot_password", params)
                .then(({ data }) => {
                    this.context.commit(Mutations.SET_AUTH, data);
                    resolve();
                })
                .catch(({ response }) => {
                    this.context.commit(Mutations.SET_ERROR, response.data.errors);
                    reject();
                });
        });
    }

    @Action
    [Actions.VERIFY_AUTH]() {
        if (JwtService.getToken()) {
            ApiService.setHeader();
            const params = {
                params: {
                    token: JwtService.getToken(),
                },
            };
            return new Promise<void>((resolve, reject) => {
                ApiService.query("/axios/verify_token", params as AxiosRequestConfig)
                    .then(({ data }) => {

                        this.context.commit(Mutations.SET_AUTH, data);
                    })
                    .catch(({ response }) => {

                        this.context.commit(Mutations.SET_ERROR, response.data.errors);
                        this.context.commit(Mutations.PURGE_AUTH);
                    });
            });

        } else {
            this.context.commit(Mutations.PURGE_AUTH);
        }
    }

    // @Action
    // [Actions.UPDATE_USER](payload) {
    //   ApiService.setHeader();
    //   return new Promise<void>((resolve, reject) => {
    //     ApiService.post("update_user", payload)
    //       .then(({ data }) => {
    //         this.context.commit(Mutations.SET_USER, data);
    //         resolve();
    //       })
    //       .catch(({ response }) => {
    //         this.context.commit(Mutations.SET_ERROR, response.data.errors);
    //         reject();
    //       });
    //   });
    // }
}
