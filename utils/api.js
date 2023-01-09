import axios from 'axios'

const host = "https://api-nnd.sitama.co.id"
const baseUrl = `${host}/api/`

class Api {
    async doGet(url, params) {
        return await axios
            .get(baseUrl + url, params)
            .then((res) => res.data)
            .catch((err) => err)
    }

    async doPost(url, params) {
        return await axios
            .post(baseUrl + url, params)
            .then((res) => res.data)
            .catch((error) => {
                throw error
            })
    }

    async doPut(url, params) {
        return await axios
            .put(baseUrl + url, params)
            .then((res) => res.data)
            .catch((error) => {
                throw error
            })
    }

    async doDelete(url, params) {
        return await axios
            .delete(baseUrl + url, params)
            .then((res) => res.data)
            .catch((error) => {
                throw error
            })
    }

    async doGetBlob(url, params) {
        return await axios
            .post(baseUrl + url, params, {
                responseType: 'blob'
            })
            .then((res) => res.data)
            .catch((error) => {
                throw error
            })
    }

    async doPostMultipart(url, params) {
        return await axios
            .post(baseUrl + url, params, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((res) => res.data)
            .catch((error) => {
                throw error
            })
    }
}

export default new Api()