import React from 'react'
import MyStatus from '../../assets/Status.png'

const HomePage = () => {
  return (
    <div>
        <div className="md:flex md:mx-24 mx-8 md:my-[10%] my-[30%]">
            <div className="w-full">
                
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit et dolore magnam ea itaque, nesciunt debitis enim beatae velit quam error autem, amet nostrum similique accusantium saepe quae rerum tempora!
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