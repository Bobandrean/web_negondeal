import locationServices from '~/services/unitServices'
import {
    defineStore
} from 'pinia'

export const useLocationStore = defineStore('location', () => {
    const location = ref([])

    const getLocation = () => {
        return location.value
    }

    const setLocation = (value) => {
        location.value = value
    }

    const getLocationService = async (payload) => {
        try {
            const res = await locationServices.getLocation(query)
            console.log(res)
            setLocation(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    return {
        location,
        getLocation,
        getLocationService
    }
})