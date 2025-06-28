import React from 'react'
import Header from '../other/Header'
import TaskDetails from '../other/TaskDetails'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  // console.log(data);
  return (
    <div className='text-center p-10 bg-[#1C1C1C] h-screen'>
    <Header changeUser={props.changeUser} data={props.data}/>
    <TaskDetails data={props.data}/>
    <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
