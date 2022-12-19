import { FC, useState } from "react";
import { authenticateUser } from "../../actions/users/auth";
import { ForgotPasswordRequest } from "../../utils/types/actions/user";
import { LoginContainer, LoginTitle } from "../styled_components/Login";
import InputBox from "./InputBox";



interface IProps {
}


const ForgotPassword: FC<IProps> = (props) => {

    const [formData, setFormData] = useState<ForgotPasswordRequest>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, valueType: string) => {
        setFormData((prev: any) => {
            return { ...prev, [valueType]: e.target.value }
        })
    }

    const loginToYourAccount = () => {
        if (formData) {
            authenticateUser(formData).then(res => {
                console.log(res.data)
            })
        }
    }

    return (
        <LoginContainer>
            <LoginTitle>Forgot or Reset Password</LoginTitle>
            <InputBox placeholder="email" callFunc={true} handleChange={handleChange} formData={formData} type="email" /><br /><br />
            {formData?.email && <><InputBox placeholder="otp" handleChange={handleChange} formData={formData} type="otp" /><br /><br /></>}
            {formData?.otp && <><InputBox placeholder="new password" handleChange={handleChange} formData={formData} type="npassword" /><br /><br /></>}
            {formData?.npassword && <InputBox callFunc={true} placeholder="confirm password" submitFunction={loginToYourAccount} handleChange={handleChange} formData={formData} type="password" />}
        </LoginContainer>
    )

}

export default ForgotPassword;