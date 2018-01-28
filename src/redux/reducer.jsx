const initState = {
    status: 0
}
const reducers = (state = initState, action) => {
    switch (action.type) {
        case 'changeLoginStatus' :
            console.log('change status');
            return  Object.assign({}, state,{status:action.payload.status});
            break;
        default:return state

    }
}
export  default  reducers