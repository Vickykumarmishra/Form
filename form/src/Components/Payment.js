import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Verification from './Verification';
export default function Payment() {
  const navigate=useNavigate()
    function handleSubmit(e){
e.preventDefault()
        var cardno=document.getElementById("cardno").value
        var amount=document.getElementById("exampleInputAmount").value
        var cvc=document.getElementById("cvc").value
        var date=document.getElementById("date").value
        var name=document.getElementById("cc_name").value

        if(cardno==''||amount==''||cvc==''||date==''||name==''){

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "All field are required",
                footer: 'you must fill all details before submit',
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
            Swal.fire({
                title: "submitted",
                text: "data submitted succesfully",
                icon: "success"
              });

              localStorage.setItem("amount",amount)
              navigate("/verification")
        }
    }
  return (

    <div className='container-fluid'>

<div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{marginTop:"1rem"}}>
  <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width:"66.66%" }}></div>
</div>

    <div className="col-md-6 offset-md-3">
      <span className="anchor" id="formPayment"></span>
      <hr className="my-5" />

      {/* form card cc payment */}
      <div className="card card-outline-secondary">
        <div className="card-body">
          <h3 className="text-center">Credit Card Payment</h3>
          <hr />
          <div className="alert alert-info p-2 pb-3">
            <a className="close font-weight-normal initialism" data-dismiss="alert" href="#"><samp>×</samp></a>
            CVC code is required.
          </div>
          <form className="form" role="form" autoComplete="off">
            <div className="form-group">
              <label htmlFor="cc_name" style={{float:'left'}}>Card Holder's Name</label>
              <input type="text" className="form-control" id="cc_name" pattern="\w+ \w+.*" title="First and last name" required />
            </div>
            <div className="form-group">
              <label style={{float:'left'}}>Card Number</label>
              <input type="text" className="form-control" id="cardno" autoComplete="off" maxLength="20" pattern="\d{16}" title="Credit card number" required name='cardno'/>
            </div>
            <div className="form-group row">
              <label className="col-md-12">Card Exp. Date</label>
              <div className="col-md-4">
                <select className="form-control" name="cc_exp_mo" size="0" id="date">
                  {[...Array(12).keys()].map(month => (
                    <option key={month + 1} value={String(month + 1).padStart(2, '0')}>{String(month + 1).padStart(2, '0')}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <select className="form-control" name="cc_exp_yr" size="0">
                  {[...Array(5).keys()].map(year => (
                    <option key={2022 + year} value={2022 + year}>{2022 + year}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control" autoComplete="off" id="cvc" maxLength="3" pattern="\d{3}" title="Three digits at back of your card" required placeholder="CVC" />
              </div>
            </div>
            {/* <div className="row" >
              <label className="col-md-4" >Amount</label>
            </div> */}
            <div className="form-inline">
              <div className="input-group">
                <div className="input-group-prepend"><span className="input-group-text">$</span></div>
                <input type="text" className="form-control text-right" id="exampleInputAmount" name='amount' placeholder="Enter Amount" />
                <div className="input-group-append"><span className="input-group-text">.00</span></div>
              </div>
            </div>
            <hr />
            <div className="form-group row">
              <div className="col-md-6" style={{marginBottom:"0.5rem"}}>
                <button type="reset" className="btn btn-danger btn-lg btn-block">Cancel</button>
              </div>
              <div className="col-md-6"  style={{marginBottom:"0.5rem"}}>
                <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={handleSubmit}>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* /form card cc payment */}
     
    </div></div>
  );
}
