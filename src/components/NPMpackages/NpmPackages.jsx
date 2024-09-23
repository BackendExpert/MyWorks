import React from 'react'
import NPMImg from '../../assets/Npms.png'
import Software from '../../assets/Software.png'

const NpmPackages = () => {
    const npmPackages = [
        {id: 1, name: 'JKCSS-Framework'},
        {id: 2, name: 'React-JKcss'},
        {id: 3, name: 'JKReact ICONS'},
        {id: 4, name: 'jkmysql-easy'},
        {id: 5, name: 'login-signup-react'},
        {id: 6, name: 'js-wysiwyg-editor'},
    ]
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

            <div className="">
                <div className="md:grid grid-cols-3 gap-8 my-16">
                    {
                        npmPackages.map((npm, index) => {
                            return (
                                <a href={`/ViewPackage/${npm.name}`}>
                                    <div className="bg-[#536DFE] p-8 md:my-0 my-6 rounded-xl" key={index}>
                                        <center>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-box-seam-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z"/>
                                            </svg>
                                            <h1 className="text-white font-semibold mt-2">{npm.name}</h1>
                                        </center>
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default NpmPackages