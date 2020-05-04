
export default class AuthApi {
  static AUTH_ENDPOINT = "auth";
  static login(params: any) {
    return new Promise((resolve) => {
        resolve(params);
    })
    // return Api.get(this.AUTH_ENDPOINT, params);
  }

  static logout() {
    return new Promise((resolve) => {
        resolve();
    })
  }
}
