export const CHANGE_THEME = "CHANGE_THEME"


export const changeTheme = (theme: string) => ({
    type: CHANGE_THEME,
    theme,
});