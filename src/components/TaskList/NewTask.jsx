import React from 'react'

const NewTask = ({data}) => {
  return (
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex items-center justify-between'>
                <h3 className='bg-red-600 text-sm px-3 py-1 font-bold rounded'>{data.category}</h3>
                <h4 className='font-semibold'>{data.date}</h4>
            </div>
            <h2 className='text-left mt-7 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-left text-sm mt-2'>{data.description}</p>
        <div className='mt-4'>
            <button className='bg-blue-500 px-1 py-3 text-sm rounded w-full'>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask
