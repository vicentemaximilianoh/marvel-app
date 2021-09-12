import axios from "axios";

const PUBLIC_API = "4b762fd5a3572cdc233601d010c607c5";

const DEFAULT_PARAMS = {
  offset: 0,
  limit: 20,
  apikey: PUBLIC_API
};

function getApiUrl(endpoint) {
  return `https://gateway.marvel.com:443/v1/public/${endpoint}`;
}

function get(endpoint, params = {}) {
  const offset =
    params.page === 1
      ? params.page - 1
      : (params.page - 1) * DEFAULT_PARAMS.limit;

  return new Promise((resolve, reject) => {
    axios
      .get(getApiUrl(endpoint), {
        params: {
          ...DEFAULT_PARAMS,
          offset
        }
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

const api = {
  get
};

export default api;