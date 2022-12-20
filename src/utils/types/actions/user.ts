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

export interface LoginUserResponseBody {
    id: string
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    token?: string;
    policies: string [];
    role: string;
    companyId: string;
    status: any
  }
  