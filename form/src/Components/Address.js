import React from 'react'
import {useFormik} from 'formik'
import { NavLink, useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
import * as yup from "yup";
import Swal from 'sweetalert2';
import {AddressSchema} from '../validationSchema/AddressSchema'
export default function Address() {
    const navigate=useNavigate()
  function next(e){
    e.preventDefault();
    var city=document.getElementById("floatingInput1").value;
    var state=document.getElementById("floatingInput2").value;
    var vill=document.getElementById("floatingInput3").value;
    var zip=document.getElementById("floatingInput4").value;
    var country=document.getElementById("floatingInput5").value;
    if(city==''||state==''||vill==''||zip==''||country==''){
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
      else {

        localStorage.setItem("city",city)
        localStorage.setItem("state",state)
        localStorage.setItem("vill",vill)
        localStorage.setItem("zip",zip)
        localStorage.setItem("country",country)
        navigate("/Payment")
      }
  }
 

 
    const initialValues={

        city:"",
        state:"",
        vill:"",
        zip:"",
        country:"",
        }

        const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
            initialValues:initialValues,
            validationSchema:AddressSchema,
            onSubmit:(values,action)=>{
            console.log(values);
            action.resetForm();
            }
            })

  return (
    <div className='container'>
      
      <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{marginTop:"1rem"}}>
  <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width:"33.33%" }}></div>
</div>

      <div className='row' style={{marginTop:'3rem'}}>
  <div className='col-sm-2 col-md-3 col-lg-3'><hr style={{backgroundColor:'black'}}></hr></div>
  <div className='col-sm-6 col-md-3 col-lg-3'><h3 className="text-center">Address</h3></div>
  <div className='col-sm-4 col-md-6 col-lg-6'><hr style={{backgroundColor:'black'}}></hr></div>
</div>

     <div className='row' style={{marginTop:'2rem'}}>

        <div className='col-sm-12 col-lg-6 col-md-6'>
        <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput1" placeholder="Enter CityName" name='city' onChange={handleChange} value={values.city}  onBlur={handleBlur}/>
  <label for="floatingInput">CityName</label>
</div>
{errors.city && touched.city?(<p  style={{color:'red'}}className='form-error'>{errors.city}</p>):null}


        </div>

        <div className='col-sm-12 col-lg-6 col-md-6'>
        <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput2" placeholder="Enter Fullname" name='state' onChange={handleChange} value={values.state}  onBlur={handleBlur} />
  <label for="floatingInput">StateName</label>
</div>
{errors.state && touched.state?(<p  style={{color:'red'}}className='form-error'>{errors.state}</p>):null}
        </div>

        <div className='col-sm-12 col-lg-12 col-md-12'>
        <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput3" placeholder="Enter Fullname" name='vill' onChange={handleChange} onSubmit={handleSubmit} value={values.vill}  onBlur={handleBlur} />
  <label for="floatingInput">Village/Street Name</label>
</div>
{errors.vill && touched.vill?(<p  style={{color:'red'}}className='form-error'>{errors.vill}</p>):null}
        </div>

        <div className='col-sm-12 col-lg-6 col-md-6'>
        <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput4" placeholder="Enter zip" name='zip' onChange={handleChange} value={values.zip}  onBlur={handleBlur} />
  <label for="floatingInput">Zip Code</label>
</div>
{errors.zip && touched.zip?(<p  style={{color:'red'}}className='form-error'>{errors.zip}</p>):null}
        </div>

        <div className='col-sm-12 col-lg-6 col-md-6'>
        <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput5" placeholder="Enter zip" name='country' onChange={handleChange} value={values.country}  onBlur={handleBlur}/>
  <label for="floatingInput">Country</label>
</div>
{errors.country && touched.country?(<p  style={{color:'red'}}className='form-error'>{errors.country}</p>):null}
        </div>

     </div>

<div class="d-grid gap-2" style={{marginTop:"2rem"}}>
  <button class="btn btn-primary" type="submit" onClick={next}>Next</button>
</div>
    </div>
  )
}
