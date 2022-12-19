import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../actions/users/userDetails";
import { SignUpRequest } from "../../utils/types/actions/user";
import { LoginContainer, LoginTitle } from "../styled_components/Login";
import InputBox from "./InputBox";

interface IProps {
}
const SignUpForm:FC<IProps> = props =>{

    const [formData, setFormData] = useState<SignUpRequest>();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, valueType: string) => {
        setFormData((prev: any) => {
            return { ...prev, [valueType]: e.target.value }
        })
    }

    const loginToYourAccount = () => {
        if (formData) {
            registerUser(formData).then(res => {
                console.log(res.data)
            })
        }
    }

    return(
        <LoginContainer>
            <LoginTitle>Create new Account</LoginTitle>
            <InputBox placeholder="first name" handleChange={handleChange} formData={formData} type="firstName" /><br /><br />
            {formData?.firstName&&<><InputBox placeholder="last name" handleChange={handleChange} formData={formData} type="lastName" /><br /><br /></>}
            {formData?.lastName&&<><InputBox placeholder="phone number" handleChange={handleChange} formData={formData} type="mobileNumber" /><br /><br /></>}
            {formData?.mobileNumber&&<><InputBox placeholder="email" handleChange={handleChange} formData={formData} type="email" /><br /><br /></>}
            {formData?.email && <><InputBox callFunc={true} placeholder="password" submitFunction={loginToYourAccount} handleChange={handleChange} formData={formData} type="password" /><br /><br /></>}
            <p>Already a member? login to your account <Link to="/sign-in" >here</Link> </p>
        </LoginContainer>
    )
}

export default SignUpForm;