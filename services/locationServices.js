import api from '@/utils/api.js'

const locationServices {
    async getLocation(query) {

        return await api.doGet(`v1/get_unit_all_tayang?${new URLSearchParams(query || "").toString()}`)
            .then((res) => res)
            .catch((err) => err)
    }
}