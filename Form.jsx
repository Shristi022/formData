
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import { number } from "yup";
import { CountryDropdown ,  RegionDropdown} from 'react-country-region-selector';
import {useNavigate} from 'react-router-dom'
//import { useState } from "react";
import '../App.css'; 
//import Newpage from "./NewPage";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  phone_number:number,
  country:"",
  state:"",
  
};

const Form = (props) => {

  

  const navigate = useNavigate();

  const navigateToNewPage = () => {

   
    navigate('/newpage',{state:{name:'',password:''
    ,confirm_password:'',phone_number:'',country:'',state:''}})
    
  };
  const formik=
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      //validateOnMount:true,
      onSubmit: (values, action) => {
       
        action.resetForm();
      },
    });
    console.log(formik.values);
    //console.log("visisted fields",formik.touched)
    //console.log( formik.errors);
  return (
    <>
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Welcome!</h1>
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-control">
                    <label htmlFor="name" className="input-label">
                      Name
                    </label>
                    <input
                      type="name"
                      autoComplete="off"
                      name="name"
                      id="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.name && formik.touched.name ? (
                      <div className="form-error">{formik.errors.name}</div>
                    ) : null}
                  </div>
                  <div className="form-control">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <input 
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <p className="form-error">{formik.errors.email}</p>
                    ) : null}
                  </div>
                  <div className="form-control">
                    <label htmlFor="password" className="input-label">
                      Password
                    </label>
                    <input
                      type="password"

                      name="password"
                      id="password"
                    
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.password && formik.touched.password ? (
                      <p className="form-error">{formik.errors.password}</p>
                    ) : null}
                  </div>
                  <div className="form-control" >
                    <label htmlFor="confirm_password" className="input-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                     
                      name="confirm_password"
                      id="confirm_password"
              
                      value={formik.values.confirm_password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.confirm_password && formik.touched.confirm_password ? (
                      <p className="form-error">{formik.errors.confirm_password}</p>
                    ) : null}
                    </div>
                    <div className="form-control">
                    <label htmlFor="phone_number" className="input-label">
                     Phone Number
                    </label>
                    <input
                      type="number"
                     
                      name="phone_number"
                      id="phone_number"
                     
                      value={formik.values.phone_number}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.phone_number && formik.touched.phone_number ? (
                      <p className="form-error">{formik.errors.phone_number}</p>
                    ) : null}
                  </div>
                  <div className="form-control">
                    <label htmlFor="country" className="input-label">
                     Country
                    </label>
                    <CountryDropdown 
                      type="number"
                      autoComplete="off"
                      name="country"
                      id="country"
                    
                      value={formik.values.country}
                      onChange={(_, e) => formik.handleChange(e)}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.country && formik.touched.country ? (
                      <p className="form-error">{formik.errors.country}</p>
                    ) : null}
                  </div>
                  <div className="form-control">
                    <label htmlFor="country" className="input-label">
                     State
                    </label>
                    <RegionDropdown
                      type="state"
                      autoComplete="off"
                      name="state"
                      id="state"
                    
                      country={formik.values.country}
                      value={formik.values.state}
                      onChange={(_, e) => formik.handleChange(e)}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.state && formik.touched.state ? (
                      <p className="form-error">{formik.errors.state}</p>
                    ) : null}
                  </div>
                
                  
                  <div className="modal-buttons">
                   
                    <button className="input-button" 
                    type="submit" 
                    onClick={()=>{navigateToNewPage()}}
                    disabled={!(formik.isValid && formik.dirty)}>
                    Submit
                    </button>
                    
                  </div>
                </form>
                
              </div>
              <div className="modal-right">
                <img
                  src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        
        </div>
     
    </>
  );
};
export default Form;