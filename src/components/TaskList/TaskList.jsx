import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  // console.log(data);
  return (
    <div id='taskList' className='flex items-center overflow-x-auto justify-start flex-nowrap gap-5 h-[55%] py-5 w-full mt-10'>
      {data.tasks.map((e , index) =>{
        if (e.active) {
          return <AcceptTask key={index} data={e}/>
        }
        if (e.newTask) {
          return <NewTask key={index} data={e}/>
        }
        if (e.completed) {
          return <CompleteTask key={index} data={e}/>
        }
        if (e.failed) {
          return <FailedTask key={index} data={e}/>
        }
      })}

    </div>
  )
}

export default TaskList
