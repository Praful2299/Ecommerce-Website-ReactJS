import { MutatingDots } from 'react-loader-spinner'
import { useState } from 'react';

const Success=()=>{
    const [visible,setvisible]=useState(true)
    
    setTimeout(() => {
        setvisible(false)
    }, 3000);
   
    return(
        <>

{visible?<div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
    <h1 style={{color:"silver"}}>Payment is processing...</h1>
 <MutatingDots
  visible={true}
  height="100"
  width="100"
  color="#a6f7e2"
  secondaryColor="#a6f7e2"
  radius="12.5"
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
  </div>:<h1 style={{textAlign:"center"}}>Payment Recieved Successfully!</h1>}
 
        
        
        </>
    )
}
export default Success;