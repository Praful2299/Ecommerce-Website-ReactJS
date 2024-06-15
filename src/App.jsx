import { BrowserRouter,Route,Routes } from "react-router-dom";
import Layout from "./Layout"
import HomeData from "./components/HomeData";
import Eyeglasses from "./pages/Eyeglasses";
import Computerglasses from "./pages/Computerglasses";
import Kidsglasses from "./pages/Kidsglasses";
import Contactlenses from "./pages/Contactlenses";
import HomeEyeTest from "./pages/HomeEyeTest";
import Sunglasses from "./pages/Sunglasses";
import StoreLocator from "./pages/StoreLocator";
import UserLogin from "./pages/UserLogin";
import UserRegistration from "./pages/UserRegistration";
import Cart from "./pages/Cart";
// import QuantityEdit from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Success from "./pages/Success";



const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<HomeData/>}/>
        <Route path="home" element={<HomeData/>}/>
        <Route path="eyeglasses" element={<Eyeglasses/>}/>
        <Route path="computerglasses" element={<Computerglasses/>}/>
        <Route path="kidsglasses" element={<Kidsglasses/>}/>
        <Route path="contactlenses" element={<Contactlenses/>}/>
        <Route path="eyetest" element={<HomeEyeTest/>}/>
        <Route path="sunglasses" element={<Sunglasses/>}/>
        <Route path="storelocator" element={<StoreLocator/>}/>
        <Route path="login" element={<UserLogin/>}/>
        <Route path="registration" element={<UserRegistration/>}/>
        <Route path="cart" element={<Cart/>} />
        <Route path="checkout" element={<CheckOut/>}/>
        <Route path="success" element={<Success/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
    
    
    </>
  )
}
export default App;