import EndStrip from "../pages/EndStrip";
import Midstrip from "../pages/MidStrip";
import TopStrip from "../pages/TopStrip";



const Navibar=()=>{
    return(
        <>
        <TopStrip/>
        <div className="stickynav"> 
        <Midstrip/>
        <EndStrip/>
        </div>
        </>
    )
}
export default Navibar;