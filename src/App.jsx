import React from 'react';
import Home from './Home_page/Home';
import Error from './Error';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import MainHeader from './Home_page/MainHeader';
import Login from './LoginPage/LoginPage';
import Register from './LoginPage/Register';

import Product_page from './Product_info/Product_page';

import Product_grid from './Product_info/Product_grid';

import axios from 'axios';

import {Toaster} from 'react-hot-toast';

import { UserContextProvider } from './Context/userContext.jsx';
import Dashboard from './DashBoard/Dashboard';
import Cart from './cart/cart';


axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials=true

function App() {
  return (
    <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path='/Chairs' element={<Product_grid Type='Chair' />} />
          <Route path='/Sofas' element={<Product_grid Type='Sofa' />} />
          <Route path='/Beds' element={<Product_grid Type='Bed' />} />
          <Route path='/Wardrobes' element={<Product_grid Type='Wardrobe' />} />
          <Route path='/Lamps' element={<Product_grid Type='Lamp' />} />
          <Route path='/Dinings' element={<Product_grid Type='Dining' />} />
          <Route path='/Chairs/Chair1' element={<Product_page Id={1} />}/>
          <Route path='/Chairs/Chair2' element={<Product_page Id={2} />}/>
          <Route path='/Chairs/Chair3' element={<Product_page Id={3} />}/>
          <Route path='/Chairs/Chair4' element={<Product_page Id={4} />}/>
          <Route path='/Chairs/Chair5' element={<Product_page Id={5} />}/>
          <Route path='/Chairs/Chair6' element={<Product_page Id={6} />}/>
          <Route path='/Sofas/Sofa7' element={<Product_page Id={7} />}/>
          <Route path='/Sofas/Sofa8' element={<Product_page Id={8} />}/>
          <Route path='/Sofas/Sofa9' element={<Product_page Id={9} />}/>
          <Route path='/Sofas/Sofa10' element={<Product_page Id={10} />}/>
          <Route path='/Sofas/Sofa11' element={<Product_page Id={11} />}/>
          <Route path='/Sofas/Sofa12' element={<Product_page Id={12} />}/>
          <Route path='/Beds/Bed13' element={<Product_page Id={13} />}/>
          <Route path='/Beds/Bed14' element={<Product_page Id={14} />}/>
          <Route path='/Beds/Bed15' element={<Product_page Id={15} />}/>
          <Route path='/Beds/Bed16' element={<Product_page Id={16} />}/>
          <Route path='/Beds/Bed17' element={<Product_page Id={17} />}/>
          <Route path='/Beds/Bed18' element={<Product_page Id={18} />}/>
          <Route path='/Wardrobes/Wardrobe19' element={<Product_page Id={19} />}/>
          <Route path='/Wardrobes/wardrobe20' element={<Product_page Id={20} />}/>
          <Route path='/Wardrobes/wardrobe21' element={<Product_page Id={21} />}/>
          <Route path='/Wardrobes/wardrobe22' element={<Product_page Id={22} />}/>
          <Route path='/Wardrobes/wardrobe23' element={<Product_page Id={23} />}/>
          <Route path='/Wardrobes/wardrobe24' element={<Product_page Id={24} />}/>
          <Route path='/Lamps/Lamp25' element={<Product_page Id={25} />}/>
          <Route path='/Lamps/Lamp26' element={<Product_page Id={26} />}/>
          <Route path='/Lamps/Lamp27' element={<Product_page Id={27} />}/>
          <Route path='/Lamps/Lamp28' element={<Product_page Id={28} />}/>
          <Route path='/Lamps/Lamp29' element={<Product_page Id={29} />}/>
          <Route path='/Lamps/Lamp30' element={<Product_page Id={30} />}/>
          <Route path='/Dinings/Dining31' element={<Product_page Id={31} />}/>
          <Route path='/Dinings/Dining32' element={<Product_page Id={32} />}/>
          <Route path='/Dinings/Dining33' element={<Product_page Id={33} />}/>
          <Route path='/Dinings/Dining34' element={<Product_page Id={34} />}/>
          <Route path='/Dinings/Dining35' element={<Product_page Id={35} />}/>
          <Route path='/Dinings/Dining36' element={<Product_page Id={36} />}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path="*" element={<Error/>} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />    
        <Route path="/dashboard" element={<Dashboard/>} />     
      </Routes>
    </BrowserRouter>
    <Toaster position='bottom-middle' toastOptions={{ duration: 2000 }} />
    </UserContextProvider>
  );
}

export default App;
