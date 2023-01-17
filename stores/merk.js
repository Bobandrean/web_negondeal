import merkServices from '~~/services/merkServices'
import {
    defineStore
} from 'pinia'

export const useMerkStore = defineStore('merk', () => {
    const merk = ref([])


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
            console.log(res)
            setMerk(res.data)

        } catch (error) {
            console.error(error)
        }
    }

    return {
        merk,
        getMerk,
        fetchMerk
    }
})