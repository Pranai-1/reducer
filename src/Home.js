import { useNavigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import { useSelector } from "react-redux"

export default function Home(){
    const navigate=useNavigate()
    const username=useSelector((state)=>state.username)
    console.log(username)

    function start(){
        if(username){
            navigate("/letter")
        }else{
           navigate("/signup")
        }
    }
    return(
        <div className=' h-screen md:h-full w-full bg-gray-200 p-3'>
        <Navbar/>
        <p className='flex justify-center items-center text-xl lg:text-3xl font-bold text-orange-600  p-2'>Welcome to the DoWell Subscribe Newsletter 
        API service!</p>
        <p className='p-2 flex justify-center items-center text-lg font-normal'> Our platform provides convenient functionality 
          to create newsletters effortlessly.</p>
          <div className='flex flex-col mt-5 justify-center items-center'>
          <div className=' flex flex-col md:flex  justify-center items-center p-2'>
        
           <img src="https://tse4.explicit.bing.net/th?id=OIP.wmk6ArkWIhvadmw0Y7bX0wHaE6&pid=Api&P=0&h=180" 
           className="block md:w-[600px]"/>
            <div className='flex flex-col justify-center items-center gap-3 py-2'>
            <p className='md:text-3xl  lg:text-4xl font-bold  lg:px-8'>Get customizable templates for your email newsletter</p>
            <p className=' md:text-xl lg:text-2xl '>Design beautiful newsletters to tell your brand story and keep people engaged.</p>
            </div>
           
           </div>
          <button className='rounded-lg mt-3 p-2 px-4 bg-orange-600 font-medium text-lg w-max'
          onClick={start}>Start here</button>
         
          </div>
          
      </div>
    )
}