import React from 'react'

const LowerCard = () => {
  return (
    <div className='flex flex-wrap   justify-between px-10 bg-slate-800 text-white lg:h-32'>
        <div className='text-2xl flex items-center'>Learn more about our vision</div>
        <div className=' flex items-center'>We are changing the way you think about home <br/>cleaning in the 21st century.</div>
        <button className='w-min h-10 text-black bg-white px-5 lg:mt-12 font-semibold text-xl rounded-lg py-2 flex items-center'> Services</button>
    </div>
  )
}

export default LowerCard