import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import Navbar from "./Pages/Shared/Navbar";
import AllParts from "./Pages/BicycleParts/AllParts";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/User/MyOrders";
import AddReview from "./Pages/Dashboard/User/AddReview";
import Profile from "./Pages/Dashboard/Profile";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import RequireAuth from "./Pages/Auth/RequireAuth";
import AllUsers from "./Pages/Dashboard/Admin/AllUsers";
import AllAdmin from "./Pages/Dashboard/Admin/AllAdmin";
import ManageProducts from "./Pages/Dashboard/Admin/ManageProducts";
import ManageOrders from "./Pages/Dashboard/Admin/ManageOrders";
import AddProduct from "./Pages/Dashboard/Admin/AddProduct";
import DashboardHome from "./Pages/Dashboard/DashboardHome";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import RequireUser from "./Pages/Auth/RequireUser";
import RequireAdmin from "./Pages/Auth/RequireAdmin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Purchase from "./Pages/Purchase/Purchase";
import Checkout from "./Pages/CheckOut/Checkout";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/allParts"
          element={
            <RequireAuth>
              <RequireUser>
                <AllParts></AllParts>
              </RequireUser>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/purchase/:product_id"
          element={
            <RequireAuth>
              <RequireUser>
                <Purchase></Purchase>
              </RequireUser>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/checkout/:order_id"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<DashboardHome></DashboardHome>}></Route>
          <Route
            path="allAdmin"
            element={
              <RequireAdmin>
                <AllAdmin></AllAdmin>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="allUsers"
            element={
              <RequireAdmin>
                <AllUsers></AllUsers>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addProduct"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageProducts"
            element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageOrders"
            element={
              <RequireAdmin>
                <ManageOrders></ManageOrders>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="myOrders"
            element={
              <RequireUser>
                <MyOrders></MyOrders>
              </RequireUser>
            }
          ></Route>
          <Route
            path="addReview"
            element={
              <RequireUser>
                <AddReview></AddReview>
              </RequireUser>
            }
          ></Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
        </Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/myPortfolio"
          element={<MyPortfolio></MyPortfolio>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
    </>
  );
}

export default App;
