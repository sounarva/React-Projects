import React from "react";

const TaskDetails = ({data}) => {
  return (
    <div className="flex text-left justify-between mt-10 gap-5 screen">
      <div className="rounded-xl bg-red-400 w-[45%] py-6 px-10">
        <h2 className="text-3xl font-semibold">{data.taskStats.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl bg-blue-400 w-[45%] py-6 px-10">
        <h2 className="text-3xl font-semibold">{data.taskStats.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="rounded-xl bg-green-400 w-[45%] py-6 px-10">
        <h2 className="text-3xl font-semibold">{data.taskStats.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="rounded-xl bg-yellow-400 w-[45%] py-6 px-10">
        <h2 className="text-3xl font-semibold">{data.taskStats.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskDetails;
