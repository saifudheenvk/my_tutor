import styled from "styled-components";
import { EditOutlined } from '@ant-design/icons';
import { Card, FloatButton } from "antd";
import { ProfileFolatButtonProps, ThemeProps } from "../../../utils/types/theme";


export const ProfileContainer = styled.div`
    display: flex;
    & > div.profile-card-badge-container{
        flex:2;
    }
    & > div > span.ant-badge{
        width:100% !important;
    }
`;

export const ProfileContainerCard = styled(Card)`
    margin-top: 20px;
    border-radius: 10px !important;
    min-height: 85vh;
    &:hover {
        box-shadow: 3px 3px 10px 7px rgba(0, 0, 0, 0.1);
    }
    &:hover > .ant-card-body > .edit-profile-icon{
        display: block;
    }
    position: relative;
`;

export const ProfileContainerExtra = styled.div`
    flex: 1;
`;
export const ImageContainer = styled.div`
    display: flex
`;

export const ProfileInfoContainer = styled.div`
    text-align: left;
    margin-top: 10px;
`;

export const ProfileTextArea = styled.textarea`
    && {
        background-color: transparent !important ;
        border: none; 
    } 
    resize: none;
    width: 100%;
    &:focus {
        outline: none !important;
        border-radius: 5px;
    }
    color: ${(props: ThemeProps) =>
		props.themestate === 'dark' ? '#ffffff80' : '#848C94'};
`;

export const ProfileTextAreaName = styled(ProfileTextArea)`
    font-weight: bold;
    color: ${(props: ThemeProps) => props.themestate === 'dark' ? '#fff' : '#49548D'};;
    font-size: 20px;
`;

export const EditIcon = styled(EditOutlined)`
   font-size: 18px;
`;

export const ProfileSaveButton = styled(FloatButton)`
    position: absolute;
    right: ${(props: ProfileFolatButtonProps) => props.rightAlighn}px;
`;