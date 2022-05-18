import { Col } from "antd";
import { FireFilled, FireOutlined, MessageOutlined, MessageFilled, BellOutlined, BellFilled, ProfileOutlined, ProfileFilled } from '@ant-design/icons';
import { FC } from "react";
import styled from "styled-components";


const IconContainer = styled(Col)`
& .anticon{
    color: #848C94;
}
`;

interface IProps{
    active: boolean;
    type: string;
}
const NavIcon:FC<IProps> = (props)=>{
    const getIcon = ()=>{
        switch(props.type){
            case "trending":
                return props.active?<FireFilled/>:<FireOutlined/>;
            case "people":
                return props.active?<ProfileFilled/>:<ProfileOutlined/>;
            case "messages":
                return props.active?<MessageFilled/>:<MessageOutlined/>;
            case "notifications":
                return props.active?<BellFilled/>:<BellOutlined/>;
            default:
                return props.active?<FireFilled/>:<FireOutlined/>;
        }
    }
    return (
        <IconContainer>
            {getIcon()}
        </IconContainer>
    )
}


export default NavIcon;