import axios from "axios";

const host = "https://api-nnd.sitama.co.id";
const baseUrl = `${host}/api/`;

let accessToken = null;

if (process.client) {
  const getAccessToken = localStorage.getItem("access_token");
  if (getAccessToken) {
    accessToken = getAccessToken;
  }
}

console.log("accessToken", accessToken);

class Api {
  async doGet(url) {
    return await axios
      .get(baseUrl + url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => res.data)
      .catch((err) => err);
  }

  async doPost(url, params) {
    return await axios
      .post(baseUrl + url, params, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
  }

  async doPut(url, params) {
    return await axios
      .put(baseUrl + url, params, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
  }

  async doDelete(url, params) {
    return await axios
      .delete(baseUrl + url, params, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
  }

  async doGetBlob(url, params) {
    return await axios
      .post(baseUrl + url, params, {
        responseType: "blob",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
  }

  async doPostMultipart(url, params) {
    return await axios
      .post(baseUrl + url, params, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
  }
}

export default new Api();
