import { message } from "antd";
import { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../actions/users/userDetails";
import { SignUpRequest } from "../../utils/types/actions/user";
import { LoginContainer, LoginTitle } from "../styled_components/Login";
import InputBox from "./InputBox";

interface IProps {
}
const SignUpForm:FC<IProps> = props =>{

    const navigate = useNavigate();
    const [formData, setFormData] = useState<SignUpRequest>();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, valueType: string) => {
        setFormData((prev: any) => {
            return { ...prev, [valueType]: e.target.value }
        })
    }

    const createNewAccount = () => {
        if (formData) {
            registerUser(formData).then(res => {
                if(res.status){
                    message.success("Created user successfully")
                    navigate("/sign-in")
                } else{
                    message.error(res.data)
                }
            }).catch(err=>{
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

    return(
        <LoginContainer>
            <LoginTitle>Create new Account</LoginTitle>
            <InputBox placeholder="first name" handleChange={handleChange} formData={formData} type="firstName" /><br /><br />
            {formData?.firstName&&<><InputBox placeholder="last name" handleChange={handleChange} formData={formData} type="lastName" /><br /><br /></>}
            {formData?.lastName&&<><InputBox placeholder="phone number" handleChange={handleChange} formData={formData} type="mobileNumber" /><br /><br /></>}
            {formData?.mobileNumber&&<><InputBox placeholder="email" handleChange={handleChange} formData={formData} type="email" /><br /><br /></>}
            {formData?.email && <><InputBox callFunc={true} placeholder="password" submitFunction={createNewAccount} handleChange={handleChange} formData={formData} type="password" /><br /><br /></>}
            <p>Already a member? login to your account <Link to="/sign-in" >here</Link> </p>
        </LoginContainer>
    )
}

export default SignUpForm;