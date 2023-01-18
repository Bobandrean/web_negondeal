import api from '@/utils/api.js'


class MerkServices {

  async getMerk(payload) {

    const res = await api.doPost(`v1/getlistbrand`, payload)
    // console.debug('GET FETCH', res)
    return res
  }

  async getBrand(payload) {
    const res = await api.doPost(`v1/getlisttype`, payload)
    return res
  }

}

export default new MerkServices()