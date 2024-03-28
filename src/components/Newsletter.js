import { useReducer, useState } from "react"
import { useSelector } from "react-redux"

export default function NewsLetter(){
    const[title,setTitle]=useState("")
    const[description,setDescription]=useState("")
    const username=useSelector((state)=>state.username)
    const initialState=[]
    const[state,dispatch]=useReducer(reducer,initialState)
   const [count,setCount]=useState(0)
    function reducer(state,action){
         switch(action.type){
            case "create" :{
                          const letter={
                            author:username,
                            title,
                            description,
                            id:count
                          }
                          setCount(count++)
            }
         }
    }

    function create(){
        dispatch({type:"create"})
        alert("created")
    }
    return(
        <div className="h-screen w-screen bg-gray-200 p-2">
            <div className="flex flex-col justify-center items-center ">
            <p className="flex justify-center items-center text-2xl text-orange-600 font-bold">Enjoy Creating NewsLetters Here!</p>
            <div className="mt-5 p-3 bg-white w-[800px] rounded-lg flex flex-col gap-3">
            <div className="flex flex-col items-start bg-gray-100 rounded-lg p-2">
                <label>Title:</label>
                <input type="text" className="w-full p-2 rounded-lg mt-2" onChange={(e)=>{setTitle(e.target.value)}}/>
            </div>

            <div className="flex flex-col items-start bg-gray-100 rounded-lg p-2">
                <label>Description:</label>
                <textarea className="w-full p-2 rounded-lg mt-2" onChange={(e)=>{setDescription(e.target.value)}}/>
            </div>
           
            </div>
            <button className="bg-orange-600 p-2 font-medium text-lg rounded-lg mt-5 px-6">create</button>
            </div>
        </div>
    )
}