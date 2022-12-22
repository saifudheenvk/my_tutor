import { CHANGE_THEME } from "../../actions/theme";

export type ThemeChangeAction = {
    theme:string
    type: string
}

const themeReducer = (state = 'white', action: ThemeChangeAction) => {
    switch (action.type) {
        case CHANGE_THEME:
            return action.theme;
        default:
            return state;
    }
};

export default themeReducer;