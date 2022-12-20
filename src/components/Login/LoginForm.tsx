import { message } from "antd";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authenticateUser } from "../../actions/users/auth";
import { setUserDetails } from "../../redux/actions/auth";
import { LoginRequest } from "../../utils/types/actions/user";
import { LoginContainer, LoginTitle } from "../styled_components/Login";
import InputBox from "./InputBox";



interface IProps {
}


const LoginForm: FC<IProps> = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState<LoginRequest>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, valueType: string) => {
        setFormData((prev: any) => {
            return { ...prev, [valueType]: e.target.value }
        })
    }

    const loginToYourAccount = () => {
        if (formData) {
            authenticateUser(formData).then(res => {
                if (res.status) {
                    navigate("/")
                    localStorage.setItem("auth_token", res.data.token)
                    dispatch(setUserDetails(res.data))
                } else {
                    message.error(res.data)
                }
                console.log(res.data)
            }).catch(err => {
                message.error(err.message)
            })
        }
    }

    useEffect(()=>{
        const token = localStorage.getItem("auth_token");
        if(token){
            navigate('/')
        }
    })

    return (
        <LoginContainer>
            <LoginTitle>Login to your Account</LoginTitle>
            <InputBox placeholder="email" handleChange={handleChange} formData={formData} type="email" /><br /><br />
            {formData?.email && <><InputBox callFunc={true} placeholder="password" submitFunction={loginToYourAccount} handleChange={handleChange} formData={formData} type="password" /><br /><br /></>}
            <p>Forgot your password or Do you want to reset it? <Link to="/forgot-password">click</Link> </p>
            <p>Do you have an account? create one <Link to="/sign-up" >here</Link> </p>
        </LoginContainer>
    )

}

export default LoginForm;