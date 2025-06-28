import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {

  const [userData , setUserData] = useContext(AuthContext);

  const [taskTitle , setTaskTitle] = useState('')
  const [taskDate , setTaskDate] = useState('')
  const [assignTo , setAssignTo] = useState('')
  const [category , setCategory] = useState('')
  const [taskDesc , setTaskDesc] = useState('')

  const [task , setTask] = useState({});

  const submitHandler = (e) =>{
    e.preventDefault();

    const newTask = {title: taskTitle,description: taskDesc,date: taskDate,category: category, active: false, newTask: true, completed: false, failed: false };
    setTask(newTask);
    // console.log(newTask);  

    const data = userData;


    data.forEach((elem) =>{
      if (assignTo === elem.firstName){
        elem.tasks.push(newTask);
        elem.taskStats.newTask = elem.taskStats.newTask + 1;
      }
    })

    setUserData(data);
    console.log(data);

    setTaskTitle('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
    setTaskDesc('');
  }

  return (
    <div className="p-5 bg-[#1C1C1C] mt-7 rounded">
      <form onSubmit={submitHandler} className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
            value={taskTitle}
            onChange={(e) =>{
              setTaskTitle(e.target.value);
            }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make an UI design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date & Time</h3>
            <input
            value={taskDate}
            onChange={(e) =>{
              setTaskDate(e.target.value);
            }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
              name=""
              id=""
              placeholder="dd/mm/yy"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input
            value={assignTo}
            onChange={(e) =>{
              setAssignTo(e.target.value);
            }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
            value={category}
            onChange={(e) =>{
              setCategory(e.target.value);
            }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Design , Dev etc."
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDesc}
            onChange={(e) =>{
              setTaskDesc(e.target.value);
            }}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            id=""
            cols={30}
            rows={10}
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
