import React from 'react'
import MyStatus from '../../assets/Status.png'

const HomePage = () => {
  return (
    <div>
        <div className="md:flex md:mx-24 mx-8 md:my-[10%] my-[30%]">
            <div className="w-full">
                <h1 className="text-4xl">
                    <span className='font-semibold text-[#536DFE]'>Hi, </span>
                    <span className='font-semibold'>I am </span>
                    <span className='font-semibold text-[#536DFE]'>Jehan Weerasuriya</span>
                </h1>

                <p className="my-4 text-xl">
                    In here is my Work According to the Fullstack Developer, VScode Extensions Developer and NPM Package Developer
                </p>

                <a href="">
                    <button className='bg-[#536DFE] py-4 px-8 rounded-full text-white font-semibold my-4'>Get Started</button>
                </a>
                
            </div>
            <div className="w-full  md:block hidden">
                <center>
                    <img src={MyStatus} alt="" className='h-80 w-auto'/>
                </center>
            </div>
        </div>
    </div>
  )
}

export default HomePage