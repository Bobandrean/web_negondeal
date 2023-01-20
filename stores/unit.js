import unitServices from '~/services/unitServices'
import {
    defineStore
} from 'pinia'

export const useUnitStore = defineStore('unit', () => {
    const unit = ref([])
    const detailUnit = ref({});

    const getUnit = () => {
        return unit.value
    }

    const setUnit = (value) => {
        unit.value = value
    }

    const getUnitService = async (payload) => {
        console.log(payload.name, "check")
        const query = {
            name: payload.name ? payload.name : "",
            min_price: payload.min_price ? payload.min_price : "",
            max_price: payload.max_price ? payload.max_price : "",
            min_year: payload.min_year ? payload.min_year : "",
            max_year: payload.max_year ? payload.max_year : "",
            tipe_body: payload.tipe_body ? payload.tipe_body : "",
            plat_nomor: payload.plat_nomor ? payload.plat_nomor : "",
            warna: payload.warna ? payload.warna : "",
            transmisi: payload.transmisi ? payload.transmisi : "",
            bahan_bakar: payload.bahan_bakar ? payload.bahan_bakar : "",
            provinsi: payload.provinsi ? payload.provinsi : "",
            kota: payload.kota ? payload.kota : "",
            kecamatan: payload.kecamatan ? payload.kecamatan : "",
            highest: payload.highest ? payload.highest : "",
            lowest: payload.lowest ? payload.lowest : "",
            merk: payload.merk ? payload.merk : "",
            type: payload.type ? payload.type : ""
        }
        try {
            const res = await unitServices.getUnit(query)
            console.log(res)
            setUnit(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    const getDetailUnit = computed(() => detailUnit.value)

    const setDetailUnit = (data) => {
        detailUnit.value = data
    }

    async function fetchDetailUnit(id) {
        try {

            const res = await unitServices.detailUnit({
                id
            })
            setDetailUnit(res.data)

        } catch (error) {
            console.error(error)
        }
    }


    return {
        unit,
        getUnit,
        getUnitService,
        detailUnit,
        getDetailUnit,
        fetchDetailUnit
    }
})