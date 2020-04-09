import Api from "../api/api";

export default class CharactersApi {
  static SERIES_ENDPOINT = "series";
  static getData(params: any) {
    return Api.get(this.SERIES_ENDPOINT, params);
  }
}
