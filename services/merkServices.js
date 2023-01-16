import api from '@/utils/api.js'


class MerkServices{

async getMerk() {

  const res = await api.doPost(`v1/getlistbrand`)
  // console.debug('GET FETCH', res)
  return res
  }

}

export default new MerkServices()