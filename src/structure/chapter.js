const AxiosService = require("../helpers/axios-service");

class Chapter {
  getChapter = async (endpoint) => {
    if(!endpoint){
        return {
            'message':'endpoint must not be empty'
        }
    }
    return new Promise(async (resolve, reject) => {
      try {
        const response = await AxiosService(`chapter/${endpoint}`);
        const res = response.data;
        let data = res
        return resolve(data);
      } catch (error) {
        return reject(error);
      }
    });
  };
}

module.exports = new Chapter;
