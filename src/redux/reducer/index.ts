import { combineReducers } from 'redux';
import themeReducer from './theme/themeReducer';
import loginReducer from './user/auth';


const allReducers = combineReducers({
    themeReducer,
    loginReducer
});

export default allReducers;