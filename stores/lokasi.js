import lokasiServices from '~~/services/lokasiServices'
import {
    defineStore
} from 'pinia'

export const useLokasiStore = defineStore('lokasi', () => {
    const lokasi = ref([])


    const getProvince = () => {
        return lokasi.value
    }
    const setLokasi = (data) => {
        lokasi.value = data
    }

    async function fetchLokasi() {
        try {

            const res = await lokasiServices.getProvince()

            setLokasi(res.data)

        } catch (error) {
            console.error(error)
        }
    }

    return {
        lokasi,
        getProvince,
        fetchLokasi
    }
})