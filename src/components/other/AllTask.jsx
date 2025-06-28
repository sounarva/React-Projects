import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData , setUserData] = useContext(AuthContext);
  // console.log(authData);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-48">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active</h5>
        <h5 className="text-lg font-medium w-1/5">Completed Task</h5>
        <h5 className="text-lg font-medium w-1/5">Failed Task</h5>
      </div>
      <div id="allTask" className="h-[80%] overflow-auto">
        {userData.map((e , idx) => {
          return (
            <div key={idx} className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded">
              <h2 className="text-lg font-medium  text-white w-1/5">
                {e.firstName}
              </h2>
              <h3 className="text-lg font-medium text-blue-600 w-1/5">
                {e.taskStats.newTask}
              </h3>
              <h5 className="text-lg font-medium text-yellow-600 w-1/5">
                {e.taskStats.active}
              </h5>
              <h5 className="text-lg font-medium text-green-600 w-1/5">
                {e.taskStats.completed}
              </h5>
              <h5 className="text-lg font-medium text-red-600 w-1/5">
                {e.taskStats.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
