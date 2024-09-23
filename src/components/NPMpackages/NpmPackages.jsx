import React from 'react'
import NPMImg from '../../assets/Npms.png'
import Software from '../../assets/Software.png'

const NpmPackages = () => {
  return (
    <div className='md:mx-24 mx-8'>
        <div className="md:flex  md:my-[10%] my-[30%]">
            <div className="w-full">
                <h1 className="text-4xl">
                    <span className='font-semibold text-[#536DFE]'>NPM </span>
                    <span>Packages</span>
                </h1>

                <p className="my-4 text-xl">
                    Node Package Managers (NPM) That I Developed
                </p>

                <a href="">
                    <button className='bg-[#536DFE] py-4 px-8 rounded-full text-white font-semibold my-4'>Get Started</button>
                </a>
                
            </div>
            <div className="w-full  md:block hidden">
                <center>
                    <img src={NPMImg} alt="" className='h-80 w-auto'/>
                </center>
            </div>
        </div>

        <div className="mb-8">
            <h1 className="text-center text-3xl text-[#536DFE] font-semibold">NPM Packages</h1>
        </div>
    </div>
  )
}

export default NpmPackages