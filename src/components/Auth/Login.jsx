import React, { useState } from "react";

const Login = (props) => {

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  function inputHandler(event){
    let {name , value} = event.target;
    if (name === "email") {
      setEmail(value)
    } else if (name === "password"){
      setPassword(value)
    }
  }

    function submitHandler(event){
        event.preventDefault();
        props.handleLogin(email , password);
        setEmail("");
        setPassword("");
    }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form onSubmit={submitHandler} className="flex flex-col items-center justify-center">
            <input
            value={email}
            name="email"
            onChange={inputHandler}
             required className="border-2 border-emerald-600 py-3 px-5 text-xl outline-none bg-transparent rounded-full placeholder:text-gray-400" type="email" placeholder="Enter Your Email"/>
            <input
            value={password}
            name="password"
            onChange={inputHandler}
             required className="border-2 border-emerald-600 py-3 px-5 text-xl outline-none bg-transparent rounded-full mt-3 placeholder:text-gray-400" type="password" placeholder="Enter Your Password"/>
            <button className="my-3 border-none bg-emerald-600 py-3 px-5 text-xl outline-none rounded-full mt-3 text-white w-full">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
