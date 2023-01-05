import unitServices from '~/services/unitServices'
import {
    defineStore
} from 'pinia'

export const useUnitStore = defineStore('unit', () => {
    const unit = ref([])

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
            setUnit(res)
        } catch (error) {
            console.error(error)
        }
    }

    return {
        unit,
        getUnit,
        getUnitService
    }
})