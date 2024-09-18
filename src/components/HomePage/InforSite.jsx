import React from 'react'
import WebSiteIMg from '../../assets/Website.png'
import { BsDot } from 'react-icons/bs'

const InforSite = () => {
  return (
    <div>
        
        <div className="md:flex">
            <div className="">
                <img src={WebSiteIMg} alt="" />
            </div>
            <div className="w-full my-24">
                <h1 className="text-[#536DFE] font-semibold uppercase text-xl md:text-left text-center">About the Site</h1>
                <p className="my-6 md:text-left text-center">
                    I Developed this website for Give to the best and full documentation of each NPM packages, Visual Studio Code Extensions and the each Web based Application and Androind Apps
                </p>
            </div>
        </div>
    </div>
  )
}

export default InforSite