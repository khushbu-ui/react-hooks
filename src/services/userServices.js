import axios from 'axios';
import API from '../config/api'

export function getData(){
    return axios.get(API.GET_DATA);
}
