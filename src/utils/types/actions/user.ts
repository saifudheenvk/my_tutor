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

export interface SignUpRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    mobileNumber: string;
}

export interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: any;
    mobileNumber: string;
    archived?: boolean;
  }
  