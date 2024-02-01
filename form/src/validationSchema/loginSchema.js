import * as Yup from "yup";

export const loginSchema = Yup.object({
  fullname: Yup.string().min(3).max(25).required("Please enter your name"),
  
  email: Yup.string().email().required("Please enter your email"),
  mobile: Yup.string().min(10).max(10).required("Please enter phone no correctly"),
  
    
});