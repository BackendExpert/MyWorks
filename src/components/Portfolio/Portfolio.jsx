import React from 'react'
import MyImg from '../../assets/My.jpg'
import Education from '../../assets/Education.png'
import WorkImg from '../../assets/WorkExp.png'

const Portfolio = () => {
  return (
    <div className='md:mx-24 mx-8'>
        <div className="md:flex  md:my-[10%] my-[30%]">
            <div className="w-full  md:block hidden">
                <center>
                    <img src={MyImg} alt="" className='h-80 w-auto rounded-xl'/>
                </center>
            </div>
            <div className="w-full">
                <h1 className="text-4xl">
                    <span className='font-semibold text-[#536DFE]'>Hi, </span>
                    <span className='font-semibold'>I am </span>
                    <span className='font-semibold text-[#536DFE]'>Jehan Weerasuriya</span>
                </h1>

                <p className="my-4">
                    Full-Stack Developer | Founder and CEO at JKCSS | NPM Package Developer | VScode Extension Developer 
                </p>


                <a href="">
                    <button className='bg-[#536DFE] py-4 px-8 rounded-full text-white font-semibold my-4'>Download CV</button>
                </a>
                
            </div>
            
        </div>

        
        <div className="my-8">
            <h1 className="mb-8 text-[#536DFE] uppercase font-semibold text-xl">Education</h1>

            <div className="md:grid grid-cols-3 gap-4">
                <div className="flex">
                    <img src={Education} alt="" className='h-20 w-auto'/>
                    <div className="ml-4">
                        <p className="text-xl font-semibold text-[#536DFE]">St.Sylvester's College</p>
                        <p className="">Primary and Secondary Education</p>
                        <p className="font-semibold">2006 - 2020</p>
                    </div>
                </div>
                <div className="flex">
                    <img src={Education} alt="" className='h-20 w-auto'/>
                    <div className="ml-4">
                        <p className="text-xl font-semibold text-[#536DFE]">Sri Lanka International Buddhist Academy (SIBA Campus)</p>
                        <p className="">Higher Education</p>
                        <p className="">BSc in Information Technology</p>
                        <p className="font-semibold">2021 - 2024</p>
                    </div>
                </div>
                <div className="flex">
                    <img src={Education} alt="" className='h-20 w-auto'/>
                    <div className="ml-4">
                        <p className="text-xl font-semibold text-[#536DFE]">Sri Lanka Institute of Tourism & Hotel Management</p>
                        <p className="">foundation in bakery and pastryn</p>
                        <p className="font-semibold">2023 Sep - 2023 Dec</p>
                    </div>
                </div>
            </div>
        </div>


        <div className="my-8">
            <h1 className="mb-8 text-[#536DFE] uppercase font-semibold text-xl">Experience</h1>

            <div className="md:grid grid-cols-3 gap-4">
                <div className="flex">
                    <img src={WorkImg} alt="" className='h-20 w-auto'/>
                    <div className="ml-4">
                        <p className="text-xl font-semibold text-[#536DFE]">National Institute of Fundamental Studies (NIFS)</p>
                        <p className="">Volunteer Research Assistant and Software Developer Intern</p>
                        <p className="font-semibold">2024 Jan - Present</p>
                    </div>
                </div>
                <div className="flex">
                    <img src={WorkImg} alt="" className='h-20 w-auto'/>
                    <div className="ml-4">
                        <p className="text-xl font-semibold text-[#536DFE]">JKCSS</p>
                        <p className="">First CSS Framework in Sri Lanka</p>
                        <p className="">Founder and CEO</p>
                        <p className="font-semibold">2023 May - Present</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio