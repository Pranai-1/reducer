import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setData } from "../user/userReducer"

export default function Navbar(){
    const navigate=useNavigate()

    const username=useSelector((state)=>state.username)
    const dispatch=useDispatch()
    function Logout(){
      dispatch(setData({username:null,password:null}))
      alert("success")
    }
    return(
        <div className="h-[50px] w-full p-4 flex justify-between items-center bg-gray-300 rounded-lg">
          <p className="font-bold text-2xl text-black">DoWellUXLab</p>
          {username?(
             <button className="p-2 bg-orange-600 rounded-lg font-medium text-lg text-blue-900"
             onClick={Logout}>Logout</button>
          ):(
                <button className="p-2 bg-orange-600 rounded-lg font-medium text-lg text-blue-900"
                onClick={()=>{navigate("/signup")}}>signup</button>
          )}
         
        </div>
    )
}