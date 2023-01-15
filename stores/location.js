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
        console.log(payload.name, "check")
        const query = {
            name: payload.name ? payload.name : "",
            min_price: payload.min_price ? payload.min_price : "",
            max_price: payload.max_price ? payload.max_price : "",
            min_year: payload.min_year ? payload.min_year : "",
            max_year: payload.max_year ? payload.max_year : "",
            merk: payload.merk ? payload.merk : "",
            type: payload.type ? payload.type : "",
            tipe_body: payload.tipe_body ? payload.tipe_body : ""
        }
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