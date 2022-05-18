import { Card, Col, Row } from "antd";
import { FC } from "react";
import styled from "styled-components";
import Icon from '@ant-design/icons';

import ListServices from "./ListServices";
import { useAppSelector } from "../../redux/store";


const Container = styled(Row)`
    width:95%;

`;

const ServicesText = styled.p`
    text-align: left;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 2em;
`;

const StyledCard = styled(Card)`
    height: 160px;
    width: 160px;
    cursor: pointer;
    border: none !important;
    &:hover {
        box-shadow: 3px 3px 10px 7px rgba(0, 0, 0, 0.1);
        cursor: pointer;
      }
  && {
    box-sizing: border-box;
    border-radius: 19px;
  }
`;

const ServiceName = styled.p`
    margin-top: 5px;
    margin-left: 50px;
    text-align: justify;
    font-size: 15px;
    font-weight: 600;
`;


interface IProps {

}

const Services: FC<IProps> = () => {
    const themeState = useAppSelector(state => state.themeReducer)

    return (
        <>
            <ServicesText>Services</ServicesText>
            <Container>
                <Col lg={4} md={3} xs={8} sm={3} xxl={5} />
                <Col lg={17} md={20} xs={12} sm={20} xxl={16}>
                    <Row>
                        {
                            ListServices(themeState === "dark" ? "#ffc107" : "#49548D").map(service => {
                                return (
                                    <Col style={{ margin: "20px 10px" }} key={service.title} lg={6} xl={6} md={7} xs={24} sm={10} xxl={4}>
                                        <StyledCard  >
                                            <Icon component={service.icon} />
                                        </StyledCard>
                                        <ServiceName>{service.title}</ServiceName>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Col>
                <Col lg={3} md={1} xs={4} sm={1} xxl={3} />
            </Container>
        </>
    )
}


export default Services;