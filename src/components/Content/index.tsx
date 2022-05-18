import { Layout } from "antd";
import { FC, Suspense } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import styled from "styled-components";
import { useAppSelector } from "../../redux/store";
import Header from "../Header";
import RouteMap from "./RouteMap";

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

  const themeRedux = useAppSelector(state => state.themeReducer)
  return (
    <ContainerLayout theme={themeRedux} >
      <Router>
        <Header />
        <Container>
          <Suspense fallback="loading" >
            <RouteMap user={{ id: "abc" }} />
          </Suspense>
        </Container>
      </Router>
    </ContainerLayout>
  )
}

export default Content