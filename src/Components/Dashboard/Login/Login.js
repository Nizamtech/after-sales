import React from "react";
import "./Login.css";
import logo from "../../../Assets/Image/Logo.png";
import { FaUser, FaLock } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Login = () => {
  const [name,setName]=React.useState();
  const [password,setPassword]=React.useState();

  const handleSubmit=(event)=>{
    event.preventDefault();
    const data={name,password}
    console.log("Login-Data",data);
  }

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="screen relative h-[600px] lg:w-96 w-[97%]">
          <div className="absolute top-8 left-[50%] -translate-x-[50%] z-50">
            <img src={logo} alt="Main Logo" />
            <h2 className="font-semibold text-xl text-[#5D54A4]">
              Please Login
            </h2>
          </div>
          <div className="z-50 relative h-full">
            <form onSubmit={handleSubmit} className="w-[100%] px-8 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              <div className="py-4 relative">
                <FaUser className="absolute top-7 left-2 text-[#5D54A4]" />
                <input
                  type="text"
                  onChange={(e)=>setName(e.target.value)}
                  className="border-b-2 border-b-[#D1D1D4] text-[17px] bg-none py-2 pl-9 pr-2 w-full hover:border-b-[#5D54A4] outline-none active:outline-none active:border-b-[#5D54A4] focus:outline-none focus:border-b-[#5D54A4] duration-300"
                  placeholder="User Name"
                  required
                />
              </div>
              <div className="py-4 relative">
                <FaLock className="absolute top-7 left-2 text-[#5D54A4]" />
                <input
                  type="password"
                  onChange={(e)=>setPassword(e.target.value)}
                  className="border-b-2 text-[17px] border-b-[#D1D1D4] bg-none py-2 pl-9 pr-2 w-full hover:border-b-[#5D54A4] outline-none active:outline-none active:border-b-[#5D54A4] focus:outline-none focus:border-b-[#5D54A4] duration-300"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                type="submit"
                className="submit-button bg-white text-sm mt-12 px-5 py-2.5 rounded-full border font-semibold flex items-center justify-between w-full text-[#5D54A4] duration-300">
                <span>Log In</span>
                <BsArrowRight className="text-lg ml-auto text-[#5D54A4]" />
              </button>
            </form>
            <div className="absolute right-0 bottom-0 text-white text-center h-24 lg:w-40 w-full">
              <Link
                to="/home"
                className="underline hover:text-gray-300 duration-300 pb-4 block">
                <h3>Forgot Password?</h3>
              </Link>
              <div className="flex justify-center items-center">
                <Link
                  to="/register"
                  className="underline hover:text-gray-300 duration-300 pb-4 block">
                  <h3>Register Now</h3>
                </Link>
              </div>
            </div>
          </div>
          <div className="background-container absolute top-0 left-0 right-0 bottom-0 z-0">
            <span className="absolute rotate-45 h-[400px] w-[190px] bg-[#5D54A4] top-[420px] right-[50px] rounded-[60px]"></span>
            <span className="absolute rotate-45 h-[220px] w-[220px] bg-[#5D54A4] top-[-172px] right-0 rounded-[32px]"></span>
            <span
              className="absolute rotate-45 h-[520px] w-[520px] bg-white top-[-50px] right-[120px]"
              style={{ borderRadius: "0 72px 0 0" }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
