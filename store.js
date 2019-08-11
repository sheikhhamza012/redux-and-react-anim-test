import {createStore} from 'redux'
import rootReducer from './reducer'

const innitialState={
    count:40
};
export default createStore(rootReducer,innitialState)