export const fetchSend = (url, data) => {
    // let promise = new Promise(resolve,reject){
    //    return fetch()
    // }
    return new Promise((resolve,reject)=>{
        fetch(url, data).then((res) => {
            if (res.status && res.status === 1) {

            }else{

            }
        }).catch((error)=>{

        })
    })

}