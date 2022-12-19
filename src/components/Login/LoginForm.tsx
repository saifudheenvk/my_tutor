import { FC, useState } from "react";
import { authenticateUser } from "../../actions/users/auth";
import { LoginRequest } from "../../utils/types/actions/user";
import { LoginContainer, LoginTitle } from "../styled_components/Login";
import InputBox from "./InputBox";



interface IProps {
}


const LoginForm: FC<IProps> = (props) => {

    const [formData, setFormData] = useState<LoginRequest>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, valueType: string) => {
        setFormData((prev: any) => {
            return { ...prev, [valueType]: e.target.value }
        })
    }

    const loginToYourAccount = () => {
        if (formData) {
            authenticateUser(formData).then(res=>{
                console.log(res.data)
            })
        }
    }

    return (
        <LoginContainer>
            <LoginTitle>Login to your Account</LoginTitle>
            <InputBox placeholder="email" handleChange={handleChange} formData={formData} type="email" /><br /><br />
            {formData?.email && <InputBox placeholder="password" submitFunction={loginToYourAccount} handleChange={handleChange} formData={formData} type="password" />}
        </LoginContainer>
    )

}

export default LoginForm;