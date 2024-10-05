import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NPMImg from '../../assets/Npms.png'
import { BsDot } from 'react-icons/bs'

const ViewPackage = () => {

    const { NamePCK } = useParams() // Get package name from URL parameters
    const navigate = useNavigate()

    // Your npm packages array
    const npmPackages = [
        {
            id: 1,
            pckName: "JKCSS-Framework",
            npmLink: "https://www.npmjs.com/package/@jehankandy/jkcss",
            pckDesc: "This NPM package develoeped for the First CSS Frmework in Sri Lanka. and the Utility-First Approach from Verison  v6.0.0 - 05 May 2024 Latest"
        },
        {
            id: 2,
            pckName: "React-JKcss",
            npmLink: "https://www.npmjs.com/package/@jehankandy/react-jkcss",
            pckDesc: "This NPM package develoeped for the First CSS Frmework in Sri Lanka Support for the ReactJS. Currently v1.2.0 - 01 June 2024"
        },
        {
            id: 3, 
            pckName: 'JKReact ICONS',
            npmLink: 'https://www.npmjs.com/package/@jehankandy/jkreact-icons',
            pckDesc: 'First Icons support for React that developed in Sri Lanka Currently v1.1.0 - 29 April 2024'

        },
        {
            id: 4, 
            pckName: 'jkmysql-easy',
            npmLink: 'https://www.npmjs.com/package/jkmysql-easy',
            pckDesc: 'This is the one of Backend Support NPM Package with Node.js in this package the developer not need to type sql Queries Currently v1.4.0 - 25 May 2024'
        },
        {
            id: 5, 
            pckName: 'login-signup-react',
            npmLink: 'https://www.npmjs.com/package/jkmysql-easy',
            pckDesc: 'This NPM Package is Develop for ReactJS Frontend Developers to make development easy. Currently v6.0.0 - 19 August 2024'
        },
        {
            id: 6, 
            pckName: 'js-wysiwyg-editor',
            npmLink: 'https://www.npmjs.com/package/js-wysiwyg-editor',
            pckDesc: 'This is the what you see is what you get editor for ReactJS Development. Currently v1.0.0 - 30 May 2024'
        },
    ]

    return (
        <div className='md:mx-24 mx-8 min-h-auto'>
            <div className="md:flex  md:my-[10%] my-[30%]">
                <div className="w-full">
                    <h1 className="text-4xl">
                        <span className='font-semibold text-[#536DFE]'>{NamePCK}</span>
                    </h1>

                    {
                        npmPackages.map((npmPck) => {
                            if (NamePCK === npmPck.pckName) {
                                return (
                                    <div key={npmPck.id}>
                                        <p className="my-4 text-xl">
                                            {npmPck.pckDesc}
                                        </p>
                                        <a href={npmPck.npmLink} target='_blank'>
                                            <button className='bg-[#536DFE] py-4 px-8 rounded-full text-white font-semibold my-4'>Read More</button>
                                        </a>
                                        
                                    </div>
                                )
                            }
                            return null
                        })
                    }
                </div>
                <div className="w-full md:block hidden">
                    <center>
                        <img src={NPMImg} alt="" className='h-80 w-auto' />
                    </center>
                </div>
            </div>

            <div className="my-12">
                <div>

                </div>
            </div>
        </div>
    )
}

export default ViewPackage
