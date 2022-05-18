import { SET_USER_DETAILS } from "../../actions/auth";


export type SetUserAction = {
    payload:any
    type: string
}

const loginReducer = (state = {}, action:SetUserAction) => {
  switch (action.type) {
    case SET_USER_DETAILS:
       return action.payload;
    default:
      return state;
  }
};
export default loginReducer;
