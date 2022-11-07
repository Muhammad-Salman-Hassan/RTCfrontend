import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

import Authentication from "./pages/Authentication/Authentication";
import Activate from "./pages/Activate/Activate";
import { useSelector } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <GuestRoute>
              <Home />
            </GuestRoute>
          }
        />
        {/* <Route path="/register" element={<Register />} /> */}



        <Route
          path="/authenticate"
          element={
            <GuestRoute>
              <Authentication />
            </GuestRoute>
          }
        />


        <Route path="/rooms" element={<ProtectedRoute><h1>Rooms</h1></ProtectedRoute>} />


        <Route path="/activate" element={<SemiProtectedRoute><Activate/></SemiProtectedRoute>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export const GuestRoute = ({ children }) => {
  let location = useLocation();
  const{isAuth}=useSelector((state)=>state.auth)
  return isAuth ? (
    <Navigate to="/rooms" state={{ from: location }} replace />
  ) : (
    children
  );
};

const SemiProtectedRoute=({children})=>{
  const{isAuth,user}=useSelector((state)=>state.auth)
  let location=useLocation()
  return(
   !isAuth?(<Navigate to="/" state={{from:location}} replace/>):isAuth && !user.activated?(children):(<Navigate to="/rooms" state={{from:location}} replace/>)
  )
}


const ProtectedRoute=({children})=>{
  const{isAuth,user}=useSelector((state)=>state.auth)
  let location=useLocation()
  return(
   !isAuth?(<Navigate to="/" state={{from:location}} replace/>):isAuth && !user.activated ?(<Navigate to="/activate" state={{from:location}} replace/>):(children)
  )
}
export default App;
