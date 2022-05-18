import { useAppSelector } from "../../redux/store";
import styled from "styled-components";
import { MenuTextProps } from "../../utils/types/theme";
import { Col, Menu, Row } from "antd";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavIcon from "../styled_components/Header/NavIcon";



const MenuHeader = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;

const MenuContainer = styled(Menu)`
  width: 100% !important;
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
        if (props.themestate === 'dark') return props.isactive ? 600 : 300;
        return props.isactive ? 600 : 'normal';
    }};
  font-size: 12px;
  margin-left: 4px;
  color: #848C94;
  margin-bottom: 1px;
`;

const TopMenuItem = styled(Menu.Item)`
  line-height: 39px !important;
  && {
    border-bottom: ${(props: MenuTextProps) => {
        if (props.themestate !== 'dark')
            return props.isactive
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
        { name: 'Trending', key: 'trending', },
        { name: 'Dashboards', key: 'dashboards', },
        { name: 'People', key: 'people', },
        { name: 'Messages', key: 'messages', },
        { name: 'Notifications', key: 'notifications', }
    ];
    return (
        <MenuHeader>
            <MenuContainer
                mode="horizontal"
                onClick={changeRoute}
            >
                {menuConfig.map(menuItem => (
                    <TopMenuItem
                        themestate={themeState}
                        key={menuItem.key}
                        isactive={pathname[0] === menuItem.key}
                    >
                        <Row>
                            <NavIcon type={menuItem.key} active={pathname[0] === menuItem.key} />
                            <Col>
                                <MenuText
                                    isactive={pathname[0] === menuItem.key}
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