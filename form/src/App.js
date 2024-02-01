
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import PersonalDetails from './Components/PersonalDetails';
import Address from './Components/Address';
import Payment from './Components/Payment';
import ProgressBar from './Components/ProgressBar';
import Verification from './Components/Verification';
function App() {
  return (
    <div className="App">

<BrowserRouter>
      <Routes>
         
         <Route path='/' element={<PersonalDetails/>}></Route>
         <Route path='/Address' element={<Address/>}></Route>
         <Route path="/Payment" element={<Payment/>}></Route>
         <Route path="/Verification" element={<Verification/>}></Route>
      </Routes> </BrowserRouter>
      
    </div>
  );
}

export default App;
