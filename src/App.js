
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Wrapper from './container/Wrapper/Wrapper';
import DashboardContainer from './container/DashboardContainer/DashboardContainer';
import OrdersContainer from './container/OrdersContainer/OrdersContainer';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path = "/" element={<Wrapper children = {<DashboardContainer/>} />}/>
        <Route path = "/dashboard" element={<Wrapper children = {<DashboardContainer/>} />}/>
        <Route path = "/orders" element={<Wrapper children = {<OrdersContainer/>} />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
