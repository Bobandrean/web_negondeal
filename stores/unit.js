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

    const getDetailUnit = () =>{
        return detailUnit.value
    }

    const setDetailUnit = (value) => {
        detailUnit.value = value
    }
    
    const getDetailUnitService = async () => {
        console.log("test")
        try{
            const res = await unitServices.detailUnit({id})
            console.log(res)
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
        getDetailUnitService
    }
})