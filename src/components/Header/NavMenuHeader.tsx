import { useAppSelector } from "../../redux/store";
import styled from "styled-components";
import { HomeIconProps, MenuTextProps, ThemeProps } from "../../utils/types/theme";
import { Col, Menu, Row } from "antd";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HomeOutlined } from '@ant-design/icons';



const MenuHeader = styled.div`
  width: 100% !important;
  height: 60px;
  background: ${(props: ThemeProps) =>
        props.themestate === 'dark' ? '#2a2d34' : '#49548D'} !important;
  display: flex;
  align-items: center;
`;

const MenuContainer = styled(Menu)`
  width: 50% !important;
  background: none !important;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: auto !important;
  &:hover,
  &:active {
    color: '#fff' !important;
  }
`;

const MenuText = styled.span`
  @media (max-width: 639px) {
    display: none;
  }
  display: inline-block;
  font-weight: ${(props: MenuTextProps) => {
        if (props.themestate === 'dark') return props.isActive ? 600 : 300;
        return props.isActive ? 600 : 'normal';
    }};
  font-size: 12px;
  color: ${props => {
        if (props.themestate === 'dark')
            return props.isActive ? '#ffffff' : '#848C94';
        return '#ffffff';
    }};
`;

const TopMenuItem = styled(Menu.Item)`
  line-height: 39px !important;
  && {
    border-bottom: ${(props: MenuTextProps) => {
        if (props.themestate !== 'dark')
            return props.isActive
                ? '3px solid #fff !important'
                : '3px solid transparent !important';
        return 'none !important';
    }};
  }
  @media (max-width: 414px) {
    &.ant-menu-item,
    .ant-menu-submenu-title {
      padding: 0 15px;
    }
  }
`;

const HomeIcon = styled(HomeOutlined)`
  color: ${(props: HomeIconProps) => {
        if (props.themestate === 'dark')
            return props.activePath === 'home' ? '#fff' : '#848C94';
        return '#fff';
    }} !important;
`;

const NavMenuHeader = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const pathname = location.pathname.split('/').slice(1);
    const themeState = useAppSelector(state => state.themeReducer);
    const changeRoute = useCallback(
        ({ keyPath }) => {
            navigate(`/${keyPath}`);
        },
        []
    );
    const menuConfig = [
        {
            name: 'Home',
            key: 'home',
            icon: <HomeIcon activePath={pathname[0]} themestate={themeState} />,
        },
        {
            name: 'Dashboards',
            key: 'dashboards',
            icon: <HomeIcon activePath={pathname[0]} themestate={themeState} />,
        },
        {
            name: 'Buildings',
            key: 'buildings',
            icon: <HomeIcon activePath={pathname[0]} themestate={themeState} />,
        },
        {
            name: 'Equipments',
            key: 'equipments',
            icon: <HomeIcon activePath={pathname[0]} themestate={themeState} />,
        },
        {
            name: 'Alerts',
            key: 'alerts',
            icon: <HomeIcon activePath={pathname[0]} themestate={themeState} />,
        },
    ];
    return (
        <MenuHeader themestate={themeState}>
            <MenuContainer
                mode="horizontal"
                onClick={changeRoute}
            >
                {menuConfig.map(menuItem => (
                    <TopMenuItem
                        themestate={themeState}
                        key={menuItem.key}
                        isActive={pathname[0] === menuItem.key}
                    >
                        <Row>
                            <Col>{menuItem.icon}</Col>
                            <Col>
                                <MenuText
                                    isActive={pathname[0] === menuItem.key}
                                    themestate={themeState}
                                >
                                    {menuItem.name}
                                </MenuText>
                            </Col>
                        </Row>
                    </TopMenuItem>
                ))}
            </MenuContainer>
        </MenuHeader>
    );
}

export default NavMenuHeader;