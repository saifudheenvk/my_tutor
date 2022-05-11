import { Avatar, Col, Layout, Row } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import styled from "styled-components";
import { useAppSelector } from "../../redux/store";
import LanguageSelector from "./LanguageSelector";
import UserOptions from "./UserOptions";
import { ThemeProps } from "../../utils/types/theme";
import NavMenuHeader from "./NavMenuHeader";

const { Header: AntdHeader } = Layout;

const Container = styled(AntdHeader)`
  width: 100%;
  display: flex !important;
  align-items: center !important;
  flex-direction: column;
  background: #ffffff !important;
  &.ant-layout-header {
    height: auto;
    padding: 0px;
  }
`;
const HeaderContainer = styled(Row)`
  width: 100%;
  height: 55px;
  &.ant-row {
    justify-content: space-between;
  }
`;

const LogoContainer = styled.div`
  width: 100%;
  background: ${(props: ThemeProps) =>
        props.themestate === 'dark' ? '#ffc107' : ''} !important;
  height: 55px;
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 200px;
  cursor: pointer;
`;

const NavOptions = styled(Col)`
  padding-left: 10px;
  padding-right: 15px;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
`;

const LanguageSelectContainer = styled.div`
  margin-right: 10px;
  margin-left: 10px;
`;

const Username = styled.p`
  display: inline-block;
  display: inline-block;
  margin: 4px;
  font-size: 12px;
  color: #848c94;
  @media (max-width: 1000px) {
    display: none;
  }
`;

interface IProps {

}

const Header: FC<IProps> = props => {

    const themeState = useAppSelector(state => state.themeReducer);
    const navigate = useNavigate();
    return (
        <Container>
            <HeaderContainer justify="start">
                <Col xl={4} md={4} sm={4} xs={4}>
                    <LogoContainer
                        themestate={themeState}
                        onClick={() => {
                            navigate('/');
                        }}
                    >
                        My Tutor
                    </LogoContainer>
                </Col>
                <NavOptions xl={4} md={6} sm={10} xs={12}>
                    <Row justify="end">
                        <Col>
                            <LanguageSelectContainer>
                                <LanguageSelector />
                            </LanguageSelectContainer>
                        </Col>
                        <Col>
                            <UserOptions>
                                <Username>Saifu</Username>
                                <Avatar icon={<UserOutlined />} />
                            </UserOptions>
                        </Col>
                    </Row>
                </NavOptions>
            </HeaderContainer>
            <NavMenuHeader />
        </Container>
    )
}

export default Header;