import api from '@/utils/api.js'

class UnitServices {
  async doDelete(payload) {
    return await api.doPost(`v1/unit/delete/${payload}`, payload)
      .then((res) => res)
      .catch((err) => err)
  }

  async getUnit(query) {
    return await api.doGet(`v1/get_unit_all_tayang?${new URLSearchParams(query || "").toString()}`)
      .then((res) => res)
      .catch((err) => err)
  }

  async getTayangUnit(query) {
    return await api.doGet(`v1/get_tayang_unit?${new URLSearchParams(query || "").toString()}`)
      .then((res) => res)
      .catch((err) => err)
  }

  async getPendingUnit(query) {
    return await api.doGet(`v1/get_pending_unit?${new URLSearchParams(query || "").toString()}`)
      .then((res) => res)
      .catch((err) => err)
  }

  async getConfirmedUnit(query) {
    return await api.doGet(`v1/get_confirmed_unit?${new URLSearchParams(query || "").toString()}`)
      .then((res) => res)
      .catch((err) => err)
  }

  async getRejectedUnit(query) {
    console.log(query)
    return await api.doGet(`v1/get_rejected_unit?${new URLSearchParams(query || "").toString()}`)
      .then((res) => res)
      .catch((err) => err)
  }

  async statusUnit(payload) {
    console.log(payload, "service payload")
    return await api.doPost(`v1/unit/update_status/${payload.id}`, payload)
      .then((res) => res)
      .catch((err) => err)
  }

  async postUnit(payload) {
    console.log(payload, "final")
    return await api.doPost('v1/unit/create', payload)
      .then((res) => res)
      .catch((err) => err)
  }

  async previewUnit(payload) {
    return await api.doPost(`v1/get_preview_unit/${payload}`)
      .then((res) => res)
      .catch((err) => err)
  }

  async detailUnit(id) {
    return await api.doPost(`v1/getdetailunit/${id}`)
      .then((res) => res)
      .catch((err) => err)
  }

  async doUpdate(id, payload) {
    return await api.doPost(`v1/unit/update/${id}`, payload)
      .then((res) => res)
      .catch((err) => err)
  }

  async getBast(payload) {
    return await api.doPost('v1/pdf/print_pdf', payload)
      .then((res) => res)
      .catch((err) => err)
  }
}

export default new UnitServices()