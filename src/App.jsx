import React, { useState } from 'react'
import { FiPlus } from "react-icons/fi";
import { BsSend, BsSunFill, BsFillDropletFill, BsFillCloudFog2Fill, BsFillCloudRainFill, BsThermometerHalf, BsUmbrellaFill } from "react-icons/bs";
import { BsFillSunsetFill } from "react-icons/bs";
import { BsFillSunriseFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { BsFillCloudyFill } from "react-icons/bs";
import graph from './assets/graph.png';
import building from './assets/building.png';
import semicircle from './assets/semicircle.png';
import semi2 from './assets/semi2.png';



function App() {

  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };


  return (
  
      <div className='bg-blue-200 h-screen pl-[17%] pt-[5%] pb-[2%] flex '>
        <div className="w-[20%] h-[93%] bg-blue-500 rounded-l-2xl flex flex-col">
          <div className='pt-6  px-4 flex '>
            <FiPlus className='bg-white h-5 w-5 text-blue-500 rounded  ' />
            <div className="w-4 h-2 bg-white rounded-full mr-1 ml-12 mt-1"></div>
            <div className="w-2 h-2 bg-white rounded-full mr-1 mt-1"></div>
            <div className="w-2 h-2 bg-white rounded-full  mt-1"></div>
            
            <span className=" text-white ml-10 mr-1">C°</span>
            <button
      className={`relative flex items-center justify-center w-8  h-3 mt-1 rounded-full focus:outline-none transition-colors ${
        isActive ? 'bg-blue-200' : 'bg-gray-300'
      }`}
      onClick={handleToggle}
    >
      <span
        className={`absolute inline-block w-4 mr-3 h-4 bg-white rounded-full transform transition-transform ${
          isActive ? 'translate-x' : 'translate-x-3'
        }`}
      ></span>
    </button>
    <span className=" text-white  ml-1">F°</span>
          </div>

          <div className='flex-col'>
            <div className='flex text-blue-100 px-5 pt-6 text-sm'>
              <BsSend className='text-blue-200' />
              <p className='ml-5'>New York, USA</p>
              <p className='flex ml-3'><BsFillSunriseFill className='mr-2'/>07:19</p>
            </div>
            <div className='flex text-blue-100 px-4 py-2 text-sm'>
            <p className='ml-4'>Today 28 Sept</p>
            <p className='flex ml-8'><BsFillSunsetFill className='mr-2'/>19:32</p>
            </div>

          </div>

          <div className='flex mt-6'>
            <AiOutlineLeft  className='text-white w-5 h-5 mt-4  ml-1'/>
            <p className='text-white text-6xl mb-5 ml-[17%] '> 27°</p>
            <AiOutlineRight className='text-white w-5 h-5 ml-[18%] mt-4 mr-1' />
          </div>
          <div className='flex pl-[30%] '>
            <p className='text-white flex'><BsSunFill className=' h-4 w-4 mr-2 mt-1'/>  Sunny</p>
          </div>
          <img src={building} alt='' className='w-[80%] h-[56%]' />
        </div>

         <div className="w-[60%] h-[93%] bg-blue-100 p-3 px-8 rounded-2xl">

          <div className='m-2 flex flex-col-2'>
            <div className=''>
            <p className='text-md font-semibold'>Welcome back Isabella!</p>
            <p className='text-sm'>Check out today's weather information</p>
            </div>
            <div className="flex ml-auto">
              <div className="bg-black w-2 h-2 rounded-full"></div>
              <div className="bg-black w-2 h-2 rounded-full ml-1"></div>
              <div className="bg-black w-2 h-2 rounded-full ml-1"></div>
          </div>
          </div>

         <div className="bg-white p-1  rounded-xl h-[41%]">
          <div className='flex items-start justify-between text-sm p-1 pt-3'>
            <p className='font-semibold'>Upcoming hours</p>
            <div className="flex flex-row-reverse">
            <p className="order-3 bg-gray-200 rounded-full p-1 opacity-50">rain precipitation</p>
              <p className="order-2 mr-5 bg-gray-200 rounded-full p-1 ml-4 flex">Next days <AiOutlineRight className='text-gray-600 mt-1 ml-1'/></p>
            </div>
          </div>
          <div className='flex flex-col-8 text-sm mt-2'>
            <div className='ml-[3%]'>
              <p>Now</p>
              <p className='my-1'><BsSunFill /></p>
              <p>27°</p>
            </div>
            <div className='ml-[9%] '>
              <p>11:00</p>
              <p className='my-1'><BsSunFill /></p>
              <p>28°</p>
            </div>
            <div className='ml-[8%] '>
              <p>12:00</p>
              <p className='my-1'><BsFillCloudyFill /></p>
              <p>28°</p>
            </div>
            <div className='ml-[8%] '>
              <p>13:00</p>
              <p className='my-1'><BsFillCloudyFill /></p>
              <p>29°</p>
            </div>
            <div className='ml-[8%] '>
              <p>14:00</p>
              <p className='my-1'><BsSunFill /></p>
              <p>30°</p>
            </div>
            <div className='ml-[7%] '>
              <p>15:00</p>
              <p className='my-1'><BsFillCloudyFill /></p>
              <p>29°</p>
            </div>
            <div className='ml-[8%] '>
              <p>16:00</p>
              <p className='my-1'><BsFillCloudyFill /></p>
              <p>29°</p>
            </div>
            <div className='ml-[8%] '>
              <p>17:00</p>
              <p className='my-1'><BsSunFill /></p>
              <p>28°</p>
            </div>
          </div>
          <img src={graph} alt='' />
         </div>

          <p className='text-sm font-semibold mt-3'>More details on today's weather</p>
            {/* Small Cards */}
          <div className="grid grid-cols-3 gap-4 mt-3 ">

              <div className="bg-white rounded-lg h-26 p-4">
                <div className='text-xs flex mb-2'>
                  <p className='ml-4'>Humidity </p>
                  <BsFillDropletFill className='text-blue-500 h-5 w-5 ml-[35%]' />
                </div>
                <div className='flex items-center justify-center my-1'>
                  <p className='text-sm font-extrabold mr-3'>82%</p><p className='text-xs'>bad</p>
                </div>
                <div className='flex text-sm ml-4'>
                  <div className="w-12 h-2 bg-blue-500 rounded-lg mt-2 mr-2"><p className='text-xs text-gray-400 mt-1'>good</p></div>
                  <div className="w-12 h-2 bg-blue-500 rounded-lg mt-2 mr-2"><p className='text-xs text-gray-400 mt-1'>normal</p></div>
                  <div className="relative w-12 h-2 bg-gray-300 rounded-lg mt-2">
                     <div className="absolute top-0 left-0 h-full bg-blue-500 rounded-lg" style={{ width: '30%' }}><p className='text-xs text-gray-400 mt-1'>bad</p></div>
                  </div>
                  </div>
              </div>

              <div className="bg-white rounded-lg h-26 p-4">
              {/* <div className='text-xs flex mb-2'>
                  <p className='ml-4'>Wind </p>
                  <BsFillCloudFog2Fill className='text-blue-500 h-5 w-5 ml-[35%]' />
                </div>
                 */}
                 <img src={semi2} alt='' className='h-[100%] ' />


              </div>

              <div className="bg-white rounded-lg h-26 p-4">
              <div className='text-xs flex mb-2'>
                  <p className='ml-4'>Precipitaion </p>
                  <BsFillCloudRainFill className='text-blue-500 h-5 w-5 ml-[35%]' />
                </div>
                <div className='flex items-center justify-center my-1'>
                  <p className='text-sm font-extrabold mr-3'>1.4 cm</p>
                </div>
                <div className="flex items-center">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value, index) => (
        <div key={index} className="relative flex flex-col items-center mr-1">
          <div
            className={`w-3 h-2 rounded-full ${
              index < 2 ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></div>
          <span className="text-xs text-gray-400 mt-1">{value * 10}</span>
        </div>
      ))}
    </div>
              </div>

              <div className="bg-white rounded-lg h-26 p-4">
              <div className='text-xs flex mb-2'>
                  <p className='ml-4'>UV index </p>
                  <BsSunFill className='text-blue-500 h-5 w-5 ml-[35%]' />
                </div>
                <div className='flex items-center justify-center'>
                  <p className='text-sm font-extrabold mr-3'>4 medium</p>
                </div>
                <div className='flex text-xs text-gray-400'>
                  <span className='ml-3'>0-2</span>
                  <span className='ml-5'>3-5</span>
                  <span className='ml-4'>6-7</span>
                  <span className='ml-4'>8-10</span>
                  <span className='ml-4'>11+</span>
                </div>
                <div className='flex'>
                <div className="w-6 h-2 bg-blue-500 rounded-lg  mr-3 ml-3"><p className='text-xs text-gray-400 '></p></div>
                <div className="relative w-6 h-2 bg-gray-300 rounded-lg mr-3">
                     <div className="absolute top-0 left-0 h-full bg-blue-500 rounded-lg" style={{ width: '50%' }}></div>
                  </div>
                  <div className="w-6 h-2 bg-gray-300 rounded-lg mr-3"><p className='text-xs text-gray-400 '></p></div>
                  <div className="w-6 h-2 bg-gray-300 rounded-lg mr-3"><p className='text-xs text-gray-400 '></p></div>
                  <div className="w-6 h-2 bg-gray-300 rounded-lg mr-3"><p className='text-xs text-gray-400 '></p></div>
                </div>
              </div>
              <div className="bg-white rounded-lg h-26 p-4">
              <div className='text-xs flex mb-2'>
                  <p className='ml-4'>Feels like </p>
                  <BsThermometerHalf className='text-blue-500 h-5 w-5 ml-[35%]' />
                </div>
                <div className='flex items-center justify-center mt-1'>
                  <p className='text-sm font-extrabold mr-3'>30°</p>
                </div>
                <div className='flex text-xs text-gray-400'>
                  <p className='ml-4'>0</p>
                  <p className='ml-[32%]'>25</p>
                  <p className='ml-12'>50</p>
                </div>
                <div className="relative w-[80%] h-2 bg-gray-300 rounded-lg  ml-4">
                     <div className="absolute top-0 left-0 h-full bg-blue-500 rounded-lg" style={{ width: '65%' }}></div>
                  </div>
              </div>
              <div className="bg-white rounded-lg h-26 p-4">
              <div className='text-xs flex mb-2'>
                  <p className='ml-4'>Chance of rain </p>
                  <BsUmbrellaFill className='text-blue-500 h-5 w-5 ml-[35%]' />
                </div>
                <div className='flex items-center justify-center mt-1'>
                  <p className='text-sm font-extrabold mr-3'>42%</p>
                </div>
                <div className='flex text-xs text-gray-400'>
                  <p className='ml-4'>0</p>
                  <p className='ml-5'>25</p>
                  <p className='ml-5'>50</p>
                  <p className='ml-5'>75</p>
                  <p className='ml-5'>100</p>
                </div>
                <div className="relative w-[80%] h-2 bg-gray-300 rounded-lg  ml-4">
                     <div className="absolute top-0 left-0 h-full bg-blue-500 rounded-lg" style={{ width: '42%' }}></div>
                  </div>                
              </div>
          </div>

         </div>

{/* Inner Card */}
      
    </div>
  )
}

export default App
