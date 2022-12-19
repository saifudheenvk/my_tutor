import { Input } from "antd";
import styled from "styled-components";

export const LoginInput = styled(Input)`
    background-color: #fff !important ;
    padding: 10px;
    border-radius: 10px !important;
    width: 300px;
    & .ant-input{
        background-color: #fff !important ;
    }
`;

export const LoginTitle = styled.p`
    color: black;
    font-size: 16px;
`;


export const LoginContainer = styled.div`
    margin-top: 6%;
`;
