import actions from './actions';
import axios from 'axios';
import {API_HOST, API} from "../../config/Api";

const { getlistStack,getlistOperator } = actions;
const getListStacks = () => async (dispatch) => {
    try {
        const URL = API_HOST + API.stack.list;
        const res = await axios.get(URL)
        dispatch(getlistStack(res.data))

    } catch (e) {
        console.log(e.message)
    }
}
const getListOperators = () => async (dispatch) => {
    try {
        const URL = API_HOST + API.operator.list;
        const res = await axios.get(URL)
        dispatch(getlistOperator(res.data))
    } catch (e) {
        console.log(e.message)
    }
}
const addStack = (data) => async (dispatch) => {
    try {
        console.log(data)
        const URL = API_HOST + API.stack.add;
         const res = await axios.post(URL,data)
         dispatch(getListStacks(res.data))
    } catch (e) {
        console.log(e.message)
    }
}
const deleteStack = (data) => async (dispatch) => {
    try {
        console.log(data)
        const URL = API_HOST + API.stack.delete+'/'+data;
        const res = await axios.delete(URL,data)
        dispatch(getListStacks(res.data))
    } catch (e) {
        console.log(e.message)
    }
}
const updateStack = (data) => async (dispatch) => {
    try {
        const URL = API_HOST + API.stack.update+'/'+data.id;
        const res = await axios.patch(URL,data.value)
        dispatch(getListStacks(res.data.value))
    } catch (e) {
        console.log(e.message)
    }
}
const applyOpStack = (data) => async (dispatch) => {
    try {
        console.log(data)
        const URL = API_HOST + '/rpn/op/'+data.op+'/stack/'+data.stack;
        console.log(API_HOST + '/rpn/op/'+data.op+'/stack/'+data.stack)
        const res = await axios.post(URL,data.value)
        dispatch(getListStacks(res.data.value))
    } catch (e) {
        console.log(e.message)
    }
}
export {getListStacks, getListOperators,addStack,deleteStack,applyOpStack,updateStack}