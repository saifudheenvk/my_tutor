export interface LoginRequest {
    password: string
    email: string
}

export interface ForgotPasswordRequest {
    password: string;
    email: string;
    npassword: string;
    otp: string;
}