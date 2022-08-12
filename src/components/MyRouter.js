import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "../App";
import  Updatenav  from './UpdateNav'



function MyRouter(){
   
        return <>
            
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<App />} />
                    <Route path="/updateNav" element={<Updatenav />} />
                    {/* <Route path="/login" element={<SignIn />} /> */}
                    {/* <Route path="/" element={<App />} />
                    <Route path="/*" element={<Error />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/details/:cakeid"  element={<CakeDetails />}/>
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout /> }>
                        <Route path="address" element={<AddAddress   />}></Route>
                        <Route path="payment" element={<Payment  />}></Route>
                    </Route>
                    <Route path="/emailverify"  element={<Emailverify  />} /> */}
                </Routes>
            </BrowserRouter>
            
        
        </>

}

export default MyRouter