import React from "react";
import { HashRouter as Router, Routes,Route, Redirect,Outlet,Navigate } from "react-router-dom";
// import Home from "./pages/Home";
// import AdminLogin from "./pages/admin/auth/Login";
// import UserLogin from "./pages/user/auth/Login";
// import Test from "./pages/Test"
// ;import UserRegister from "./pages/user/auth/Register";
// import AdminRegister from "./pages/admin/auth/Register";
// import { Guard } from "./Guard";
// import AdminPrivateRouter from "./AdminPrivateRouter";
// import UserPrivateRouter from "./UserPrivateRouter";
// import { useNavigate } from "react-router-dom"; 
// import Upload from "./pages/Upload";
// import Logout from "./pages/Logout";
// import Login from "./pages/login";
//import { useHistory } from "react-router";
import Login from "./pages/login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import Nav from "./pages/Nav";
import Footer from "./pages/Footer";
import AdminNavbar from "./pages/admin/components/Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductForm from "./pages/admin/components/ProductForm";
import "bootstrap/dist/css/bootstrap.min.css";
import Aside from "./pages/admin/components/Aside";
import Cookies from "js-cookie";
import Logout from "./pages/Logout";
import Shop from "./pages/Shop";
import Shopdetails from "./pages/Shopdetails";
import Home from "./pages/Home";
import BootstrapNav from "./pages/BootstrapNav";
import HomeBlock from "./pages/admin/components/HomeBlock";

export default function CustomRouter(){

// const history = useNavigate();
// console.log(history)

const ProtectedRoute = ({ isAuthenticated }) => {

  let authkey = Cookies.get("auth")
  debugger
  if (!authkey) {
    return <Navigate to="/" replace />;
  }

  return <AdminLayout />;
};

function BasicLayout() {
    return (  
      <>
        <BootstrapNav />
        <Outlet />
        <Footer />
      </>
    )
  }
  
  function AdminLayout() {
    
    return( 
      <>
      <Aside />
      {/* <AdminNavbar /> */}
    {/* <Outlet /> */}
    

    </>)
  }
  
    return (
        <Routes>
            <Route path="/" element={<BasicLayout />} >
             {/* <Route path="/" element ={<Home />} /> */}
             <Route index element={<Home />} /> 
                <Route path="/login" element ={<Login />} />
                <Route path="/register" element ={<Register />} />
                <Route path="/logout" element ={<Logout />} />
                <Route path="/shop" element ={<Shop />} />
                <Route path="/shopdetails/:id" element ={<Shopdetails />} />
            </Route>
            <Route path="/admin" element={<ProtectedRoute isAuthenticated={true} />}>
              <Route path="/admin/product" element ={<ProductForm />} />
              <Route path="/admin/block" element={<HomeBlock />} />
            </Route>
          
            {/* <Route path="/logout" element ={<Logout navigate={history}/>} />
            <Route path="/upload" element ={<Upload />} />
            <Route  path="/" element ={<Home  props={history}/>} />
            <Route  path="/user/login" element ={<UserLogin />} />
            <Route  path="/user/register" element ={<UserRegister />} />
            <Route  path="/admin/login" element ={<AdminLogin />} />
            <Route  path="/admin/register" element ={<AdminRegister />} />
            <Route path='/user' element={<Guard path='/user' token="user-token" routeRedirect="/user/login" component={UserPrivateRouter} />} />
            <Route path ='/admin' element={<Guard path='/admin' token="admin-token" routeRedirect="/admin/login" component={AdminPrivateRouter} /> } /> */}

            
        </Routes>
    )
}