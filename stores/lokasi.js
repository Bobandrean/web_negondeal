import lokasiServices from '~~/services/lokasiServices'
import {
    defineStore
} from 'pinia'

export const useLokasiStore = defineStore('provinsi', () => {
    const provinsi = ref([])
    const city = ref([])
    const district = ref([])


    const getCity = () => {
        return city.value
    }

    const setCity = (data) => {
        city.value = data
    }

    async function fetchCity(payload) {
        console.log(payload, "storefetch")
        try {

            const res = await lokasiServices.getCity(payload)

            setCity(res.data)

        } catch (error) {
            console.error(error)
        }
    }

    const getDistrict = () => {
        return district.value
    }

    const setDistrict = (data) => {
        district.value = data
    }

    async function fetchDistrict(payload) {
        try {

            const res = await lokasiServices.getDistrict(payload)

            setDistrict(res.data)

        } catch (error) {
            console.error(error)
        }
    }

    const getProvince = () => {
        return provinsi.value
    }
    const setProvinsi = (data) => {
        provinsi.value = data
    }

    async function fetchLokasi() {
        try {

            const res = await lokasiServices.getProvince()

            setProvinsi(res.data)

        } catch (error) {
            console.error(error)
        }
    }

    return {
        provinsi,
        city,
        district,
        getCity,
        getDistrict,
        getProvince,
        fetchCity,
        fetchDistrict,
        fetchLokasi
    }
})