import api from '@/utils/api.js'


class LokasiServices {

  async getProvince() {

    const res = await api.doGet(`v1/getprovince`)
    // console.debug('GET FETCH', res)
    return res
  }

  async getCity(payload) {

    const res = await api.doGet(`v1/getprovince`, payload)
    // console.debug('GET FETCH', res)
    return res
  }

  async getCity(payload) {
    return await api.doPost('v1/getcity', payload)
      .then((res) => res)
      .catch((err) => err)
  }

  async getDistrict(payload) {
    return await api.doPost('v1/getdistrict', payload)
      .then((res) => res)
      .catch((err) => err)
  }

}

export default new LokasiServices()