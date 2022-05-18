import { Dropdown, Menu, Switch } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { changeTheme } from "../../redux/actions/theme";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import theme_one from "../../theme_one";
import theme_two from "../../theme_two";
import { ThemeProps } from "../../utils/types/theme";


const UserOptionsMenu = styled(Menu)`
  &.ant-dropdown-menu {
    background-color: ${(props: ThemeProps) =>
        props.themestate === 'dark' ? '#2f323b' : '#E8ECEF'};
  }
`;
const UserDropDown = styled(Menu.Item)`
  width: 230px;
`;
const ThemeText = styled.span`
  margin-right:10px;
`;


interface IProps {

}

declare const window: any;

const UserOptions: FC<IProps> = (props) => {

    const themeState = useAppSelector(state => state.themeReducer);
    const dispatch = useAppDispatch();

    const onChangeTheme = (e: boolean) => {
        if (e) {
            dispatch(changeTheme('dark'));
            localStorage.setItem('app_theme', 'dark');
            window.less
                .modifyVars({
                    ...theme_two,
                })
                .then(() => {
                    console.log('success');
                })
                .catch(() => {
                    console.log('fail');
                });
        } else {
            dispatch(changeTheme('white'));
            localStorage.setItem('app_theme', 'white');
            window.less
                .modifyVars({
                    ...theme_one,
                })
                .then(() => {
                    console.log('success');
                })
                .catch(() => {
                    console.log('fail');
                });
        }
    };

    const menu = (
        <UserOptionsMenu themestate={themeState}>
            <UserDropDown key="profile">
                <Link to="/profile">Profile</Link>
            </UserDropDown>
            <UserDropDown key="theme">
                <ThemeText>Dark Theme</ThemeText>
                <Switch
                    checked={themeState === 'dark'}
                    onChange={onChangeTheme}
                />
            </UserDropDown>
            <UserDropDown key="logout">
                Logout
            </UserDropDown>
        </UserOptionsMenu>
    );
    return (
        <Dropdown
            overlay={menu}
            trigger={['click']}
            placement="bottomRight"
            overlayStyle={{ width: '230px' }}
        >
            {props.children}
        </Dropdown>
    );
}

export default UserOptions