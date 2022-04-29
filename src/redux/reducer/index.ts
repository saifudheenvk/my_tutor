import { combineReducers } from 'redux';
import themeReducer from './theme/themeReducer';


const allReducers = combineReducers({
    themeReducer
});

export default allReducers;