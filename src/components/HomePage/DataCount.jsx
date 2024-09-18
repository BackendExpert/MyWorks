import React from 'react'
import CountUp from 'react-countup'

const DataCount = () => {
    const Data = [
        {id: 1, name: 'NPM Packages', value: <CountUp end={6}/>},
        {id: 2, name: 'VSCode Extensions', value: <CountUp end={5}/>},
        {id: 3, name: 'Web Based Application', value: <CountUp end={10}/>},
        {id: 4, name: 'Blogs', value: <CountUp end={3}/>},
        {id: 4, name: 'Android Apps', value: <CountUp end={1}/>},
    ]
  return (
    <div className='my-20'>
        <h1 className=""></h1>
        <div className="md:grid grid-cols-5 gap-4">
            {
                Data.map((items, index) => {
                    return(
                        <div key={index} className="bg-[#536DFE] rounded-xl py-8 px-4 text-center text-white md:my-0 my-2">
                            <h1 className="text-4xl mb-4">{items.value}+ </h1>
                            <p className="">{items.name}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default DataCount