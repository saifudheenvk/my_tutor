import { Dropdown, Menu } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../../redux/store";
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


interface IProps {

}

const UserOptions: FC<IProps> = (props) => {

    const themeState = useAppSelector(state => state.themeReducer);
    const handleLogout = (e: MouseEvent) => {

    };
    const menu = (
        <UserOptionsMenu themestate={themeState}>
            <UserDropDown key="profile">
                <Link to="/profile">Profile</Link>
            </UserDropDown>
            <UserDropDown key="logout">
                <a >
                    Logout
                </a>
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
            <a>{props.children}</a>
        </Dropdown>
    );
}

export default UserOptions