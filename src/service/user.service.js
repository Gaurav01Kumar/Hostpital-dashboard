import { getBaseDomain } from "../domainHandler/handler";
import { postRequest } from "../domainHandler/request";

export const loginService = async (email, password) => {
  try {
    const payload = {
      email: email,
      password: password,
    };

    const response = await postRequest({
      url: getBaseDomain() + "/users/login",
      data: payload,
      headers: null,
    });

    return response;
  } catch (error) {
    return null;
  }
};
export const RegisterService = async (fullname, email, password) => {
  try {
    const payload = {
      fullname: fullname,
      email: email,
      password: password,
    };

    const response = await postRequest({
      url: getBaseDomain() + "/users/register",
      data: payload,
      headers: null,
    });

    return response;
  } catch (error) {
    return null;
  }
};

export const OtpGenrate = async (email) => {
  try {
    const res = await postRequest({
      url: getBaseDomain() + "/users/otp",
      data: { email: email },
      headers: null,
    });
    return res;
  } catch (error) {
    return error;
  }
};
export const VerifyOtp = async (token, otp) => {
  try {
    const response = await postRequest({
      url: getBaseDomain() + "/users/verify",
      data: { token: token, otp: otp },
      headers: null,
    });
    return response;
  } catch (error) {
    return error;
  }
};
