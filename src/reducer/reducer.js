import {dataTypes} from '../action/Actions';

const user=[];

const  dataReducer= (state=user,action)=>{
    console.log('hgdhs',state)
    switch(action.type){

        case dataTypes.GET_DATA:return [...action.payload]
        default: return state
    }
}

export default dataReducer;
