import { useAppSelector } from "../../redux/store";
import styled from "styled-components";
import { MenuTextProps } from "../../utils/types/theme";
import { Col, Menu, Row } from "antd";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FireFilled, FireOutlined, MessageOutlined, MessageFilled, BellOutlined, BellFilled, ProfileOutlined, ProfileFilled } from '@ant-design/icons';



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
        if (props.themestate === 'dark') return props.isActive ? 600 : 300;
        return props.isActive ? 600 : 'normal';
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

const TrendingIcon1 = styled(FireOutlined)`
    color: #848C94!important;
`;
const TrendingIcon2 = styled(FireFilled)`
    color: #848C94!important;
`;
const MessageIcon1 = styled(MessageOutlined)`
    color: #848C94!important;
`;
const MessageIcon2 = styled(MessageFilled)`
    color: #848C94!important;
`;
const NotificationIcon1 = styled(BellOutlined)`
    color: #848C94!important;
`;
const NotificationIcon2 = styled(BellFilled)`
    color: #848C94!important;
`;
const ProfileIcon1 = styled(ProfileOutlined)`
    color: #848C94!important;
`;
const ProfileIcon2 = styled(ProfileFilled)`
    color: #848C94!important;
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
            name: 'Trending',
            key: 'trending',
            icon1: <TrendingIcon1 />,
            icon2: <TrendingIcon2 />,
        },
        {
            name: 'Dashboards',
            key: 'dashboards',
            icon1: <TrendingIcon1 />,
            icon2: <TrendingIcon2 />,
        },
        {
            name: 'People',
            key: 'people',
            icon1: <ProfileIcon1 />,
            icon2: <ProfileIcon2 />,
        },
        {
            name: 'Messages',
            key: 'messages',
            icon1: <MessageIcon1 />,
            icon2: <MessageIcon2 />,

        },
        {
            name: 'Notifications',
            key: 'notifications',
            icon1:<NotificationIcon1 rotate={10} />,
            icon2: <NotificationIcon2 rotate={10} />,

        }
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
                        isActive={pathname[0] === menuItem.key}
                    >
                        <Row>
                            <Col>{pathname[0] === menuItem.key?menuItem.icon2:menuItem.icon1}</Col>
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