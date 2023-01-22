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

    async createUser({
        payload
    }) {
        const formData = new FormData()
        formData.append('email', payload.email)
        formData.append('password', payload.password)
        formData.append('c_password', payload.c_password)

        const res = await api.doPost(`v1/create_customer`, formData)
        return res
    }
}

export default new AuthServices()