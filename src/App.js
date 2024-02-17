import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Wrapper from './container/Wrapper/Wrapper';
import DashboardContainer from './container/DashboardContainer/DashboardContainer';
import OrdersContainer from './container/OrdersContainer/OrdersContainer';
import PaycheckContainer from './container/PaycheckContainer/PaycheckContainer';
import OrderFormContainer from './container/OrderFormContainer/OrderFormContainer';
import PaycheckFormContainer from './container/PaycheckFormContainer/PaycheckFormContainer';
import EditOrder from './components/Orders/EditOrder/EditOrder';
import EditPaycheck from './components/Paycheck/EditPaycheck/EditPaycheck';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path = "/" element={<Wrapper children = {<DashboardContainer/>} />}/>
        <Route path = "/dashboard" element={<Wrapper children = {<DashboardContainer/>} />}/>
        <Route path = "/orders" element={<Wrapper children = {<OrdersContainer/>} />}/>
        <Route path = "/orders/create" element={<Wrapper children = {<OrderFormContainer/>} />}/>
        <Route path = "/paycheck" element={<Wrapper children = {<PaycheckContainer/>} />}/>
        <Route path = "/paycheck/create" element={<Wrapper children = {<PaycheckFormContainer/>} />}/>
        <Route path = "/orders/edit/:itemID" element={<Wrapper children = {<EditOrder/>} />}/>
        <Route path = "/paycheck/edit/:itemID" element={<Wrapper children = {<EditPaycheck/>} />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
