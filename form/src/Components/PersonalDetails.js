import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Address from './Address'
import Swal from 'sweetalert2'
import {useFormik} from 'formik'
import { loginSchema } from '../validationSchema/loginSchema'
import * as yup from "yup";
import ProgressBar from './ProgressBar'
export default function PersonalDetails() {
  const navigate=useNavigate()
  function next(e){
    e.preventDefault()

    var fullname=document.getElementById("floatingInput").value
    var email=document.getElementById("floatingEmail").value
    var mobile=document.getElementById("floatingMobile").value
    
    if(fullname==''||email==''||mobile==''){

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All field are required",
        footer: 'you must fill all details before going Next',
        iconColor: "",
        customClass: {
          popup: 'error-modal', // Add a class for custom styling
          title: "tit",
          icon: "iconic",
          footer:'foot',
          confirmButton: 'confirm',
        },
        
        
      });
    }
    else{

      localStorage.setItem("fullname",fullname)
      localStorage.setItem("email",email)
      localStorage.setItem("mobile",mobile)
   
navigate('/Address')
    }

  }
  const initialValues={

    fullname:"",
    mobile:"",
    email:"",
    }


    const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
      initialValues:initialValues,
      validationSchema:loginSchema,
      onSubmit:(values,action)=>{
      console.log(values);
      action.resetForm();
      }
      })
  return (
    <div className='container'>
  
  <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{marginTop:"1rem"}}>
  <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width:"1%" }}></div>
</div>
<div className='row' style={{marginBottom:'2rem',marginTop:'3rem'}}>
 <div className='col-sm-12 col-md-6 col-lg-6'><img  className="img-fluid" src="personal.png"></img></div>
  
 <div className='col-sm-12 col-md-6 col-lg-6'>


  
  <h3 className="text-center">Personal Details</h3>
  


 <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="Enter Fullname" name='fullname' onChange={handleChange}  value={values.fullname}  onBlur={handleBlur} />
  <label for="floatingInput">FullName</label>
</div>
{errors.fullname && touched.fullname?(<p  style={{color:'red'}}className='form-error'>{errors.fullname}</p>):null}
<div class="form-floating mb-3">
  <input type="number" class="form-control" id="floatingMobile" placeholder="Enter Fullname" name='mobile' onChange={handleChange}  value={values.mobile}  onBlur={handleBlur}/>
  <label for="floatingMobile">Phone no</label>
</div>
{errors.mobile && touched.mobile?(<p  style={{color:'red'}}className='form-error'>{errors.mobile}</p>):null}

<div class="form-floating mb-3">
  <input type="email" class="form-control email" id="floatingEmail" placeholder="name@example.com" name='email' onChange={handleChange}  value={values.email}  onBlur={handleBlur}/>
  <label for="floatinEmail">Email address</label>
</div>
{errors.email && touched.email?(<p  style={{color:'red'}}className='form-error'>{errors.email}</p>):null}
<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button" onClick={next}>Next</button>
</div>
 </div>

</div>






    </div>
  )
}
