const axios = require("axios").default;

axios.defaults.baseURL = "https://api.illyasviel.pw/api/";
axios.defaults.headers = {
  "Content-Type": "application/json",
};

const AxiosService = async (url) => {
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      return Promise.resolve(response);
    }
    return Promise.reject(response.status);
  } catch (error) {
    return Promise.reject({
      message: error.message,
    });
  }
};

module.exports = AxiosService;
