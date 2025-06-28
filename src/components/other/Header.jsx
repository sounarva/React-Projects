import React from 'react'

const Header = (props) => {
  const logInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  console.log(logInUser.role);

  const logOutUser = () =>{
    localStorage.setItem('loggedInUser' , '');
    props.changeUser('');
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-left text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{logInUser.role === "employee" ? logInUser.data.firstName + " 🐤" : "Admin 🐤"}</span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

export default Header
