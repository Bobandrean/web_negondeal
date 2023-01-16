import api from '@/utils/api.js'


class LokasiServices{

async getProvince() {

  const res = await api.doGet(`v1/getprovince`)
  // console.debug('GET FETCH', res)
  return res
  }

}

export default new LokasiServices()