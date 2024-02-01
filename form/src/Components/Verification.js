import React from 'react';
import { useNavigate } from 'react-router-dom';
import PersonalDetails from './PersonalDetails';

const Verification = () => {
  const fullname = localStorage.getItem("fullname");
  const email = localStorage.getItem("email");
  const mobile = localStorage.getItem("mobile");
  const city = localStorage.getItem("city");
  const state = localStorage.getItem("state");
  const amount = localStorage.getItem("amount");

  function ok() {
    navigate('/');
  }

  const navigate = useNavigate();

  return (
    <div className='container'>

<div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{marginTop:"1rem"}}>
  <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width:"100%" }}></div>
</div>

      <h2>Verify Details</h2>

      <table className='table'>
        <tbody>
          <tr>
            <td><strong>Fullname:</strong></td>
            <td>{fullname}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td>{email}</td>
          </tr>
          <tr>
            <td><strong>Phone Number:</strong></td>
            <td>{mobile}</td>
          </tr>
          <tr>
            <td><strong>Address:</strong></td>
            <td>city: {city}, state: {state}</td>
          </tr>
          <tr>
            <td><strong>Amount paid:</strong></td>
            <td>{amount}</td>
          </tr>
        </tbody>
      </table>

      <div class="d-grid gap-2" style={{ marginTop: "2rem" }}>
        <button class="btn btn-primary" type="submit" onClick={ok}>Reset</button>
      </div>
    </div>
  );
};

export default Verification;
