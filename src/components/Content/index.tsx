import { FC, Suspense } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import styled from "styled-components";
import RouteMap from "./RouteMap";

const Container = styled.div`
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

interface IProps {

}

const Content: FC<IProps> = (props) => {

    return (
        <Container>
            <Router>
                <Suspense fallback="loading" >
                    <RouteMap user={{ id: "abc" }} />
                </Suspense>
            </Router>
        </Container>
    )
}

export default Content