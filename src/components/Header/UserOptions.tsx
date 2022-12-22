import { Dropdown, Menu, Switch } from "antd";
import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { changeTheme } from "../../redux/actions/theme";
import { useAppDispatch, useAppSelector } from "../../redux/store";
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

const UserOptions: FC<IProps> = (props) => {

    const themeState = useAppSelector(state => state.themeReducer);
    const user = useAppSelector(state => state.loginReducer)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onChangeTheme = (e: boolean) => {
        if (e) {
            dispatch(changeTheme('dark'));
            localStorage.setItem('app_theme', 'dark');
        } else {
            dispatch(changeTheme('white'));
            localStorage.setItem('app_theme', 'white');
        }
    };

    const logout = () => {
        localStorage.setItem("auth_token", "")
        dispatch(changeTheme('white'));
        navigate("/sign-in")
    }

    const menu = (
        <UserOptionsMenu themestate={themeState}>
            <UserDropDown key="profile">
                <Link to={`/profile/${user.id}`}>Profile</Link>
            </UserDropDown>
            <UserDropDown key="theme">
                <ThemeText>Dark Theme</ThemeText>
                <Switch
                    checked={themeState === 'dark'}
                    onChange={onChangeTheme}
                />
            </UserDropDown>
            <UserDropDown onClick={logout} key="logout">
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