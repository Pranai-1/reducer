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
                            id:action.payload.count
                          }
                          console.log(letter)
                          action.payload.setCount((prev)=>prev+1)
                          action.payload.setTitle("")
                          action.payload.setDescription("")
                         return [...state,letter] 
            }
            case "delete":{
                console.log(action.payload.id)
                        return state.filter((state)=>state.id!=action.payload.id)
            }
            default:{
                return state;
            } 
         }
    }
console.log(count)
    function create(){
        dispatch({type:"create" , payload: { count,setCount,setTitle,setDescription }})
        alert("created")
    }

    function DeleteLetter(id){
       dispatch({type:"delete" , payload: { id }})
    }

    console.log(state)
    return(
        <div className=" min-h-[694px] h-full w-full bg-gray-200 p-2">
            <div className="flex flex-col justify-center items-center ">
            <p className="flex justify-center items-center text-2xl text-orange-600 font-bold py-3">Enjoy Creating NewsLetters Here!</p>
            <div className="mt-5 p-3 bg-white w-[800px] rounded-lg flex flex-col gap-3">
            <div className="flex flex-col items-start bg-gray-100 rounded-lg p-2">
                <label>Title:</label>
                <input type="text" className="w-full p-2 rounded-lg mt-2" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            </div>

            <div className="flex flex-col items-start bg-gray-100 rounded-lg p-2">
                <label>Description:</label>
                <textarea className="w-full p-2 rounded-lg mt-2" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            </div>
           
            </div>
            <button className="bg-orange-600 p-2 font-medium text-lg rounded-lg mt-5 px-6"
            onClick={create}>create</button>
            </div>
            <div className="mt-10">
               <p className="flex justify-center items-center p-2 font-medium text-xl text-orange-600">News Letters</p>
               <div className="flex flex-col justify-center items-center">
                {state.length==0 ?(
                    <p className="p-2">Empty</p>
                ):(
                    (state.map((state)=>(
                        <div className="bg-white w-2/3 rounded-lg m-2 p-2 flex flex-col justify-center items-start">
                        <p className="text-lg font-bold flex justify-center items-center w-full">Author: {state.author}</p>
                     <p className="text-xl font-semibold p-2">Title: {state.title}</p>
                     <p className="text-base p-2">Description: {state.description}</p>
                       
                        <button className="p-2 bg-red-600 rounded-lg font-medium "
                        onClick={()=>{DeleteLetter(state.id)}}>Delete</button>
                    
                       </div>
                )))
                )}
               
             </div>
            </div> 
        </div>
    )
}