import { useDispatch, useSelector } from "react-redux"
import { changeColor } from "./colorSlice"

const App=()=>{
    const dispatch=useDispatch();
    const bgclr=useSelector((state)=>state.mycolor.bgclr)
    return(
        <>
        <h1>this is background color change program</h1>
        <button onClick={()=>dispatch(changeColor())}>changeColor</button>
        <div style={{width:"300px",height:"200px",backgroundColor:bgclr}}>

        </div>

        </>
    )
}
export default App;