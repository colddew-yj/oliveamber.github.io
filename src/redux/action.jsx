import {createAction} from 'redux-actions'
import {fetchPromise} from  'Common/common'

//同步改变全局的state
export const getStep = (dispatch,data={}) => {
    dispatch(createAction('changeLoginStatus')(data))
};
export const setNum = (dispatch,data={}) => {
    dispatch(createAction('setNum')(data))
};
export const  asySend = (url,data,method) =>{
    return (dispatch)=>{
        fetchPromise(url,data,method).then((res)=>{
            handleXhr(res,'sendObj',dispatch)
        })
    }
};
 const handleXhr =(res,successType,dispatch)=>{
         if(res.status===1){
             dispatch(createAction(successType)(res.data))
         }else{
             dispatch(createAction('error')(res.message))
         }
}

// let fetchPromise =  fetchSend('/api',{status:1})
// export const getStepAsyn = (dispatch,data={}) => {
//     dispatch(createAction('changeLoginStatus')(mockData))
// };
/*
* promiseFetch (异步返回promise数据对象)=>定义异步dispatch函数 => 传入参数并调用函数
* fetch =>
*
* */


//
//
// const { dispatch, selectedPost } = this.props
// // 发出同步 Action
// dispatch(requestPosts(selectedPost));
// // 发出异步 Action
// dispatch(createAction(
//     'FETCH_POSTS',
//     fetch(`/some/API/${postTitle}.json`)
//         .then(response => response.json())
// ));