
import { useSelector , useDispatch } from "react-redux";
import { removeItem } from '../components/cartSlice';
import { FaPlusCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import React from 'react';
import {  MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { incProduct , decProduct } from "../components/cartSlice";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Cart=()=>{
  const MyCartData=useSelector((state)=>state.cart.cards)
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const navigatecheckout=()=>{
    navigate("/checkout")
  }

  let grandTotal=0;
  
 
  const CartItem=MyCartData.map((cart)=>{
     grandTotal+=cart.qty*cart.Price;    
    return(
            <>
         <MDBTableBody>
         <tr>
          <td>
            <div  className='d-flex align-items-center' >  
              <img
                src={"./cardimages/"+cart.image}
                alt=''
                style={{ width: '25%', height: '40%' }}
                className='rounded-circle'
              />
              <div style={{textAlign:"center"}}>
                <p className='fw-bold mb-1'>{cart.title}</p>
                <p className='text-muted mb-0'>{cart.text}</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>
             <FaCircleMinus style={{marginRight:"5px" , cursor:"pointer" , fontSize:"20px"}} onClick={()=>{dispatch(decProduct(cart.id))}} />
              <b>{cart.qty}</b>
             <FaPlusCircle style={{marginLeft:"5px" , cursor:"pointer", fontSize:"20px"}} onClick={()=>{dispatch(incProduct(cart.id))}} />
              </p>
           
          </td>
          <td><b>{cart.Price}</b></td>
          <td><b>{cart.qty*cart.Price}</b></td>
          <td>
          <Button onClick={()=>{dispatch(removeItem(cart.id))}} variant="danger">Remove</Button>{' '}
          </td>
        </tr>
        
        </MDBTableBody>
        
            </>
        )
   })
   
    return (
        <>
        <h1 style={{textAlign:"center"}}><FaCartShopping />MyCart</h1>
        <MDBTable align='middle'>
        <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Quantity</th>
          <th scope='col'>Price</th>
          <th scope='col'>Total</th>
          <th scope='col'></th>
        </tr>
      </MDBTableHead>
      {CartItem}
      </MDBTable>

      <div style={{textAlign:"end"}}>
      <h4>Cart Totals</h4>
       <div ><h5 >Total:{grandTotal}</h5></div>
      </div>
      <hr />
     <div style={{textAlign:"center"}}>
      <Button onClick={navigatecheckout} style={{padding:"0px 50px", marginBottom:"20px"}} variant="outline-success">Check Out</Button>{' '}
      </div>
        </>
    )
}
export default Cart;






// import {
//   MDBBtn,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBCardText,
//   MDBCol,
//   MDBContainer,
//   MDBIcon,
//   MDBInput,
//   MDBRow,
//   MDBTypography,
//   } from "mdb-react-ui-kit";
//   import React from "react";
  
//   export default function QuantityEdit() {
//   return (
//   <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
//     <MDBContainer className="py-5 h-100">
//       <MDBRow className="justify-content-center align-items-center h-100">
//         <MDBCol size="12">
//           <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
//             <MDBCardBody className="p-0">
//               <MDBRow className="g-0">
//                 <MDBCol lg="8">
//                   <div className="p-5">
//                     <div className="d-flex justify-content-between align-items-center mb-5">
//                       <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
//                         Shopping Cart
//                       </MDBTypography>
//                       <MDBTypography className="mb-0 text-muted">
//                         3 items
//                       </MDBTypography>
//                     </div>
  
//                     <hr className="my-4" />
  
//                     <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
//                       <MDBCol md="2" lg="2" xl="2">
//                         <MDBCardImage
//                           src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
//                           fluid className="rounded-3" alt="Cotton T-shirt" />
//                       </MDBCol>
//                       <MDBCol md="3" lg="3" xl="3">
//                         <MDBTypography tag="h6" className="text-muted">
//                           Shirt
//                         </MDBTypography>
//                         <MDBTypography tag="h6" className="text-black mb-0">
//                           Cotton T-shirt
//                         </MDBTypography>
//                       </MDBCol>
//                       <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
//                         <MDBBtn color="link" className="px-2">
//                           <MDBIcon fas icon="minus" />
//                         </MDBBtn>
  
//                         <MDBInput type="number" min="0" defaultValue={1} size="sm" />
  
//                         <MDBBtn color="link" className="px-2">
//                           <MDBIcon fas icon="plus" />
//                         </MDBBtn>
//                       </MDBCol>
//                       <MDBCol md="3" lg="2" xl="2" className="text-end">
//                         <MDBTypography tag="h6" className="mb-0">
//                           € 44.00
//                         </MDBTypography>
//                       </MDBCol>
//                       <MDBCol md="1" lg="1" xl="1" className="text-end">
//                         <a href="#!" className="text-muted">
//                           <MDBIcon fas icon="times" />
//                         </a>
//                       </MDBCol>
//                     </MDBRow>
  
//                     <hr className="my-4" />
  
//                     <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
//                       <MDBCol md="2" lg="2" xl="2">
//                         <MDBCardImage
//                           src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp"
//                           fluid className="rounded-3" alt="Cotton T-shirt" />
//                       </MDBCol>
//                       <MDBCol md="3" lg="3" xl="3">
//                         <MDBTypography tag="h6" className="text-muted">
//                           Shirt
//                         </MDBTypography>
//                         <MDBTypography tag="h6" className="text-black mb-0">
//                           Cotton T-shirt
//                         </MDBTypography>
//                       </MDBCol>
//                       <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
//                         <MDBBtn color="link" className="px-2">
//                           <MDBIcon fas icon="minus" />
//                         </MDBBtn>
  
//                         <MDBInput type="number" min="0" defaultValue={1} size="sm" />
  
//                         <MDBBtn color="link" className="px-2">
//                           <MDBIcon fas icon="plus" />
//                         </MDBBtn>
//                       </MDBCol>
//                       <MDBCol md="3" lg="2" xl="2" className="text-end">
//                         <MDBTypography tag="h6" className="mb-0">
//                           € 44.00
//                         </MDBTypography>
//                       </MDBCol>
//                       <MDBCol md="1" lg="1" xl="1" className="text-end">
//                         <a href="#!" className="text-muted">
//                           <MDBIcon fas icon="times" />
//                         </a>
//                       </MDBCol>
//                     </MDBRow>
  
//                     <hr className="my-4" />
  
//                     <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
//                       <MDBCol md="2" lg="2" xl="2">
//                         <MDBCardImage
//                           src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img7.webp"
//                           fluid className="rounded-3" alt="Cotton T-shirt" />
//                       </MDBCol>
//                       <MDBCol md="3" lg="3" xl="3">
//                         <MDBTypography tag="h6" className="text-muted">
//                           Shirt
//                         </MDBTypography>
//                         <MDBTypography tag="h6" className="text-black mb-0">
//                           Cotton T-shirt
//                         </MDBTypography>
//                       </MDBCol>
//                       <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
//                         <MDBBtn color="link" className="px-2">
//                           <MDBIcon fas icon="minus" />
//                         </MDBBtn>
  
//                         <MDBInput type="number" min="0" defaultValue={1} size="sm" />
  
//                         <MDBBtn color="link" className="px-2">
//                           <MDBIcon fas icon="plus" />
//                         </MDBBtn>
//                       </MDBCol>
//                       <MDBCol md="3" lg="2" xl="2" className="text-end">
//                         <MDBTypography tag="h6" className="mb-0">
//                           € 44.00
//                         </MDBTypography>
//                       </MDBCol>
//                       <MDBCol md="1" lg="1" xl="1" className="text-end">
//                         <a href="#!" className="text-muted">
//                           <MDBIcon fas icon="times" />
//                         </a>
//                       </MDBCol>
//                     </MDBRow>
  
//                     <hr className="my-4" />
  
//                     <div className="pt-5">
//                       <MDBTypography tag="h6" className="mb-0">
//                         <MDBCardText tag="a" href="#!" className="text-body">
//                           <MDBIcon fas icon="long-arrow-alt-left me-2" /> Back
//                           to shop
//                         </MDBCardText>
//                       </MDBTypography>
//                     </div>
//                   </div>
//                 </MDBCol>
//                 <MDBCol lg="4" className="bg-grey">
//                   <div className="p-5">
//                     <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
//                       Summary
//                     </MDBTypography>
  
//                     <hr className="my-4" />
  
//                     <div className="d-flex justify-content-between mb-4">
//                       <MDBTypography tag="h5" className="text-uppercase">
//                         items 3
//                       </MDBTypography>
//                       <MDBTypography tag="h5">€ 132.00</MDBTypography>
//                     </div>
  
//                     <MDBTypography tag="h5" className="text-uppercase mb-3">
//                       Shipping
//                     </MDBTypography>
  
//                     <div className="mb-4 pb-2">
//                       <select className="select p-2 rounded bg-grey" style={{ width: "100%" }}>
//                         <option value="1">Standard-Delivery- €5.00</option>
//                         <option value="2">Two</option>
//                         <option value="3">Three</option>
//                         <option value="4">Four</option>
//                       </select>
//                     </div>
  
//                     <MDBTypography tag="h5" className="text-uppercase mb-3">
//                       Give code
//                     </MDBTypography>
  
//                     <div className="mb-5">
//                       <MDBInput size="lg" label="Enter your code" />
//                     </div>
  
//                     <hr className="my-4" />
  
//                     <div className="d-flex justify-content-between mb-5">
//                       <MDBTypography tag="h5" className="text-uppercase">
//                         Total price
//                       </MDBTypography>
//                       <MDBTypography tag="h5">€ 137.00</MDBTypography>
//                     </div>
  
//                     <MDBBtn color="dark" block size="lg">
//                       Register
//                     </MDBBtn>
//                   </div>
//                 </MDBCol>
//               </MDBRow>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   </section>
//   );
//   }