const AxiosService = require("../helpers/axios-service");

class Manga {
  getManga = async (page, limit = 20) => {
    if (page === undefined) {
      page = 1;
    }
    return new Promise(async (resolve, reject) => {
      try {
        const response = await AxiosService(`manga/page/${parseInt(page)}`);
        const data = {};
        const res = response.data.manga_list.slice(0, limit);
        data.page = page;
        data.total = res.length;
        data.manga_list = [...res];
        return resolve(data);
      } catch (error) {
        return reject(error);
      }
    });
  };

  detailManga = async (endpoint) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await AxiosService(`manga/detail/${endpoint}`);
        let data = response.data;
        return resolve(data);
      } catch (error) {
        return reject(error);
      }
    });
  };
}

module.exports = new Manga();
