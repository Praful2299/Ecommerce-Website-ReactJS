import cardimg from '../images/debitcard.avif'

const Debit=()=>{
    return(
        <>
        <h1 style={{textAlign:"center"}}>Debit Mode</h1>
        <div style={{textAlign:"center"}} >
        <img style={{height:"50%", width:"50%"}} src={cardimg}  />
        </div>
        </>
    )
}
export default Debit;