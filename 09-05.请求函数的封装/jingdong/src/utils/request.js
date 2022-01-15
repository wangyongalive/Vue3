import axios from "axios";

/*封装请求函数*/
export const post = (url, data = {}) => {
  /*返回一个promise对象*/
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
        baseURL:
          "https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(
        (response) => {
          /*直接获取到data数据*/
          resolve(response.data);
        },
        (err) => {
          reject(err);
        }
      );
  });
};
