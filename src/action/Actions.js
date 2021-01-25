import {getData} from '../services'

export const dataTypes={
    GET_DATA:'GET_DATA'
}


export const  getUser=()=>{
    return (dispatch)=>{
        getData().then(res=>{
            dispatch( {
                type:dataTypes.GET_DATA,
                payload:res.data.data
            })
            console.log('pay',res)
        })



    }
}
