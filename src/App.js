
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Wrapper from './container/Wrapper/Wrapper';
import DashboardContainer from './container/DashboardContainer/DashboardContainer';
import OrdersContainer from './container/OrdersContainer/OrdersContainer';
import PaycheckContainer from './container/PaycheckContainer/PaycheckContainer';
import OrderFormContainer from './container/OrderFormContainer/OrderFormContainer';

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
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
