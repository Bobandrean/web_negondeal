import authServices from '~~/services/authServices'

import {
    defineStore
} from 'pinia'

export const useAuthStore = defineStore('auth', () => {
    const user = ref([])

    const getUser =computed(() => user.value)

    const setUser = (data) => {
        user.value = data
    }

    async function fetchUser() {
        try {

            const res = await authServices.getUser()

            setBlog(res.data)

        } catch (error) {
            console.error(error)
        }
    }

    async function createUser(payload) {
        try {

            const res = await authServices.createUser({
                payload
            })

            return res

        } catch (error) {
            console.error(error)
        }
    }

    return {
        createUser
    }

})