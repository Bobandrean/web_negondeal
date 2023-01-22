import merkServices from '~~/services/merkServices'
import {
    defineStore
} from 'pinia'

export const useMerkStore = defineStore('merk', () => {
    const merk = ref([])
    const brand = ref([])


    const getMerk = () => {
        return merk.value
    }
    const setMerk = (data) => {
        merk.value = data
    }

    async function fetchMerk() {
        const request = {
            assettype: "MOBIL"
        }
        try {
            const res = await merkServices.getMerk(request)
            setMerk(res.data)

        } catch (error) {
            console.error(error)
        }
    }

    const getBrand = () => {
        return brand.value
    }

    const setBrand = (data) => {
        brand.value = data
    }

    async function fetchBrand(payload) {
        try {
            const res = await merkServices.getBrand(payload)
            setBrand(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    return {
        merk,
        brand,
        getMerk,
        getBrand,
        fetchMerk,
        fetchBrand
    }
})