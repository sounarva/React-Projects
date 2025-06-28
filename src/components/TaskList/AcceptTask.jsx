import React from 'react'

const AcceptTask = ({data}) => {
    // console.log(data);
  return (
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 text-sm px-3 py-1 font-bold rounded'>{data.category}</h3>
                <h4 className='font-semibold'>{data.date}</h4>
            </div>
            <h2 className='text-left mt-7 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-left text-sm mt-2'>{data.description}</p>
            <div className='flex justify-between mt-4'>
                <button className='text-sm bg-green-500 rounded px-1 py-2'>Mark as completed</button>
                <button className='text-sm bg-red-500 rounded px-1 py-2'>Mark as failed</button>
            </div>
      </div>
  )
}

export default AcceptTask
