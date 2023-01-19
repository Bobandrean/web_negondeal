import authServices from '~~/services/authServices'

import {
    defineStore
} from 'pinia'

export const useAuthStore = defineStore('auth', () => {

    const isAuth = ref(localStorage.getItem('auth_token') ? localStorage.getItem('auth_token') : "")
    const isUser = ref(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : "")

    const getIsAuth = computed(() => isAuth.value)
    const getIsUser = computed(() => isUser.value)

    const setAuth = (data) => {
        isAuth.value = data
    }

    const setUser = (data) => {
        isUser.value = data
    }

    async function login(payload) {
        try {
            const res = await authServices.login({
                payload
            })

            console.log("res", res)

            localStorage.setItem('auth_token', res.data.sanctum.accessToken)
            localStorage.setItem('user', JSON.stringify(res.data.user))

            setUser(res.data.sanctum.accessToken)
            setAuth(res.data.user)

            window.location.reload()

            return res
        } catch (error) {
            console.error(error)
        }
    }

    async function logout() {
        try {
            await authServices.logout()

            setUser("")
            setAuth("")
            localStorage.removeItem('auth_token')
            localStorage.removeItem('user')

            window.location.reload()
        } catch (error) {
            console.error(error)
        }



    }

    return {
        getIsAuth,
        getIsUser,
        login,
        logout
    }
})