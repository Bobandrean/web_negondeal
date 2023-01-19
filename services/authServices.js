import api from '@/utils/api.js'

class AuthServices {
    
    async login({
        payload
    }) {
        const res = await api.doPost(`v1/login`, payload)
        // console.debug('GET FETCH', res)
        return res
    }

    async logout() {
        const res = await api.doPost(`v1/logout`)

        return res
    }
}

export default new AuthServices()