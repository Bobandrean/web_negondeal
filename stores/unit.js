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

    const getUnitService = async () => {
        console.log("tests")
        try {
            const res = await unitServices.getUnit()
            console.log(res)
            setUnit(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    const getDetailUnit = computed(() => detailUnit.value)
    console.log(detailUnit.value)

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