import { LoginOutlined } from '@ant-design/icons';
import { FC } from "react";
import { LoginInput } from "../styled_components/Login";


interface IProps {
    type: string;
    formData: any;
    placeholder: string;
    callFunc?: boolean
    handleChange: (e: any, valueType: string) => void
    submitFunction?: () => void
}

const InputBox: FC<IProps> = (props) => {

    return <LoginInput onChange={(e) => props.handleChange(e, props.type)} value={props?.formData ? props?.formData[props.type] : null} placeholder={props.placeholder} type={props.type} suffix={
        <LoginOutlined onClick={props.submitFunction} style={{
            color: 'black',
            fontWeight: 'bold',
            visibility: props.callFunc && props?.formData && props?.formData[props.type] ? "visible" : "hidden"
        }} />
    } />
}

export default InputBox;