import * as Yup from "yup";


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const signUpSchema = Yup.object().shape({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  // password: Yup.string().min(6).matches(
  //    "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
  //   "Please follow the rules")
  // .required("Please enter your password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
    phone_number:Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    country: Yup.string().required("Please choose country"),
    state: Yup.string().required("Please choose state"),
  
});