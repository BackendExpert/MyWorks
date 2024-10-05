import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NPMImg from '../../assets/Npms.png'

const ViewPackage = () => {

    const { NamePCK } = useParams() // Get package name from URL parameters
    const navigate = useNavigate()

    // Your npm packages array
    const npmPackages = [
        {
            id: 1,
            pckName: "JKCSS-Framework",
            npmLink: "https://www.npmjs.com/package/@jehankandy/jkcss"
        },
        {
            id: 2,
            pckName: "React-JKcss",
            npmLink: "https://www.npmjs.com/package/@jehankandy/React-JKcss"
        },
    ]

    return (
        <div className='md:mx-24 mx-8'>
            <div className="md:flex  md:my-[10%] my-[30%]">
                <div className="w-full">
                    <h1 className="text-4xl">
                        <span className='font-semibold text-[#536DFE]'>{NamePCK}</span>
                    </h1>

                    <p className="my-4 text-xl">
                        Node Package Managers (NPM) That I Developed
                    </p>

                    <a href="">
                        <button className='bg-[#536DFE] py-4 px-8 rounded-full text-white font-semibold my-4'>Get Started</button>
                    </a>
                </div>
                <div className="w-full md:block hidden">
                    <center>
                        <img src={NPMImg} alt="" className='h-80 w-auto' />
                    </center>
                </div>
            </div>

            <div className="my-12">
                <div>
                    {
                        npmPackages.map((npmPck) => {
                            if (NamePCK === npmPck.pckName) {
                                return (
                                    <div key={npmPck.id}>
                                        <h1 className="text-2xl font-semibold">{npmPck.pckName} dasdasd</h1>
                                    </div>
                                )
                            }
                            return null
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ViewPackage
