import Api from "../api/api";

export default class CharactersApi {
  static CHARACTERS_ENDPOINT = "characters";
  static getData(params: any) {
    return Api.get(this.CHARACTERS_ENDPOINT, params);
  }
}
