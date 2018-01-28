import {createAction} from 'redux-actions'
import {fetchSend} from  '../common/common'
//同步改变全局的state
export const getStep = (dispatch,data={}) => {
    dispatch(createAction('changeLoginStatus')(data))
};
let mockData =  fetchSend('/api',{status:1})
export const getStepAsyn = (dispatch,data={}) => {
    dispatch(createAction('changeLoginStatus')(mockData))
};