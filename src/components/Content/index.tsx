import { Layout } from "antd";
import { FC, Suspense, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { changeTheme } from "../../redux/actions/theme";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import theme_one from "../../theme_one";
import theme_two from "../../theme_two";
import Header from "../Header";
import RouteMap from "./RouteMap";

declare const window: any;

const { Content: AntdContent } = Layout;

const ContainerLayout = styled.div`
&& {
    height: 100vh;
  }

  & ::-webkit-scrollbar {
    background-color: ${props =>
    props.theme === 'dark' ? '#2f323b' : '#ffffff'};
    width: 6px;
    // -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
  & ::-webkit-scrollbar-thumb {
    background-color: ${props =>
    props.theme === 'dark' ? '#3b3e48' : '#ffffff'};
    -webkit-border-radius: 1ex;
  }
  `;


const Container = styled(AntdContent)`
  padding: 15px 18px;
  min-height: 280px;
  overflow-y: auto;
  height: calc(100% - 55px);
  @media (max-width: 768px) {
    padding: 0px;
  }
`;

interface IProps {

}

const Content: FC<IProps> = (props) => {

  const dispatch = useAppDispatch();
  const themeRedux = useAppSelector(state=>state.themeReducer)

  const themeSelector = (themeState: string) => {
    if (themeState !== 'white') {
      dispatch(changeTheme('dark'));
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

  const navigate = useNavigate();
  useEffect(() => {
    const themeState = localStorage.getItem('app_theme')|| "dark";
    themeSelector(themeState)

    const token = localStorage.getItem("auth_token");
    if(!token){
      navigate('/sign-in')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <ContainerLayout theme={themeRedux} >
        <Header />
        <Container>
          <Suspense fallback="loading" >
            <RouteMap user={{ id: "abc" }} />
          </Suspense>
        </Container>
    </ContainerLayout>
  )
}

export default Content