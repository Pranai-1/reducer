import { useDispatch } from "react-redux"
import { setData } from "../user/userReducer"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Signup(){
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const dispatch=useDispatch()
    const navigate=useNavigate()
 
   function handleSubmit(e){
    e.preventDefault()
    if(username.length>5 && password.length>5){
      const state={
        username,
        password
      }
      dispatch(setData(state))
      alert("success")
      navigate("/")
    }else{
        alert("failed")
    }
   }

    return(
        <div className=" h-full w-full bg-black absolute flex justify-center items-center">
      <div className="bg-white  w-[360px] md:w-[440px] flex flex-col gap-2 mb-5 p-5 rounded-xl justify-center">
        <p className="font-bold text-center text-2xl text-orange-600">
          Signup to DoWellUXLab
        </p>
        <p className="font-medium text-center text-gray-600">
          Start your journey
        </p>
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
         <label>
           Username:
           <input
           className="bg-gray-100 p-2 rounded-xl m-2"
             type="text"
             value={username}
             onChange={(e) => setUsername(e.target.value)}
             required
           />
         </label>
         <label>
           Password:
           <input
             className="bg-gray-100 p-2 rounded-xl m-2 mx-3"
             type="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             required
           />
         </label>
<input type="submit" value="Submit" className="p-2 bg-orange-600 rounded-xl m-2"/>
</div>
       </form>

      </div>
    </div>
    )
}