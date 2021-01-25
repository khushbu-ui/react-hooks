import merge from 'lodash/merge';
import development from './development';

const settings = {}
export default (() => {
    switch (process.env.REACT_APP_ENV) {
        case 'development':
        case 'dev':
            return merge(development, settings)
        default:
            return merge(development, settings)
    }
})()