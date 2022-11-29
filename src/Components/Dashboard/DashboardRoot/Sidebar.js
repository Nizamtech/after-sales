import React from "react";
import { Link } from "react-router-dom";
import {FaHome} from "react-icons/fa";
import logo from "../../../Assets/Image/Logo.png";
import Tooltip from "react-simple-tooltip";

const Sidebar = ({ open, display, setDisplay, setOpen }) => {
  return (
    <div>
      <aside className={`hidden sm:flex z-50`}>
        <div
          className={`${
            open === true ? " w-60 duration-300" : "w-20 duration-300"
          } bg-[#EDF2F7]`}
        >
          <div className={`h-16 bg-[#EDF2F7] border-b border-b-gray-300`}>
            <Link
              to="/home"
              className={`inline-flex items-center justify-center h-20 w-60  ${
                open === true ? "" : "mr-20"
              }`}
            >
              <img src={logo} alt="Main Logo" className="w-[65%] lg:-mt-3 mt-0 -ml-12 z-50" />
            </Link>
          </div>

          <div
            className={`${
              open === true
                ? "flex openMenuAnimation"
                : "block closeMenuAnimation"
            } bg-[#EDF2F7]`}
          >
            <div
              className={`flex-grow flex flex-col justify-between text-[#5D54A4] h-[91vh] border-r border-r-gray-300`}
            >
              <nav className="flex flex-col mx-2 my-6 space-y-3 pb-5">
                <Link
                  to="/home"
                  className={`duration-75 text-[17px] py-2 hover:text-[#5D54A4] hover:bg-white focus:text-[#5D54A4] focus:bg-[#dbeafe] rounded-md flex items-center ${
                    open ? "justify-start gap-x-4 pl-4" : "justify-center"
                  } duration-300`}
                >
                  {open ? (
                    <>
                      <FaHome />
                      <h4 className="text-gray-900">Home</h4>
                    </>
                  ) : (
                    <Tooltip
                      content="Home"
                      className="w-full"
                      placement="top"
                      padding={3}
                      fontSize="15px"
                      fadeDuration={500}
                      background="#DBEAFE"
                      color="#5D54A4"
                      border="#5D54A4"
                    >
                      <FaHome className="w-full"/>
                    </Tooltip>
                  )}
                </Link>
                <div
                  className={`accordion accordion-item cursor-pointer w-full text-[17px] ${
                    open === true
                      ? " gap-x-4"
                      : "hover:bg-white hover:text-[#5D54A4] rounded-md"
                  } `}
                  onClick={() =>
                    setDisplay(display === "hidden" ? "block" : "hidden")
                  }
                  id="accordionExample"
                >
                  <div
                    className={`w-full flex items-center justify-center collapsed relative ${
                      open ? "hover:bg-white accordion-button" : ""
                    } hover:text-[#5D54A4] rounded-md duration-300`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#userCollapse"
                    aria-expanded="false"
                    aria-controls="userCollapse"
                  >
                    <div
                      className={`w-full text-[17px] focus:text-[#5D54A4] focus:bg-[#dbeafe] rounded-md py-2 flex items-center cursor-pointer ${
                        open ? "justify-start gap-x-4 pl-4" : "justify-center"
                      } `}
                      onClick={() =>
                        setDisplay(display === "hidden" ? "block" : "hidden")
                      }
                    >
                      {open ? (
                        <>
                          <FaHome />
                          <h4 className="text-gray-900">Sub Menu Section</h4>
                        </>
                      ) : (
                        <Tooltip
                          content="Menu Item"
                          className="w-full"
                          placement="right"
                          padding={3}
                          fontSize="15px"
                          fadeDuration={500}
                          background="#DBEAFE"
                          color="#5D54A4"
                          border="#5D54A4"
                          onClick={() => setOpen(true)}
                        >
                          <FaHome className="w-full" />
                        </Tooltip>
                      )}
                    </div>
                  </div>

                  {/* User Sub Menu */}
                  {open && (
                    <div
                      className="flex flex-col accordion-collapse collapse ml-4"
                      data-bs-parent="#accordionExample"
                      id="userCollapse"
                    >
                      <div className="my-1">
                        <Link
                          to="/"
                          className="text-gray-900 hover:text-[#5D54A4] hover:bg-white focus:bg-[#dbeafe] focus:text-[#5D54A4] rounded-md duration-300 px-2 py-2 block w-full"
                        >
                          <div className="flex items-center gap-x-4">
                            <FaHome className="ml-2 text-gray-500" />
                            {open && <h4>Sub Menu</h4>}
                          </div>
                        </Link>
                      </div>
                      <div className="my-1">
                        <Link
                          to="/"
                          className=" text-gray-900 hover:text-[#5D54A4] hover:bg-white focus:bg-[#dbeafe] focus:text-[#5D54A4] rounded-md duration-300 px-2 py-2 block w-full"
                        >
                          <div className="flex items-center gap-x-4">
                            <FaHome className="ml-2 text-gray-500" />
                            {open && <h4>Sub Menu</h4>}
                          </div>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                {/* Lawyer Section Menu */}
                <div
                  className={`accordion accordion-item cursor-pointer w-full text-[17px] ${
                    open === true
                      ? " gap-x-4"
                      : "hover:bg-white hover:text-[#5D54A4] rounded-md"
                  } `}
                  onClick={() =>
                    setDisplay(display === "hidden" ? "block" : "hidden")
                  }
                  id="accordionExample"
                >
                  <div
                    className={`w-full flex items-center justify-center collapsed relative ${
                      open ? "hover:bg-white accordion-button" : ""
                    } hover:text-[#5D54A4] rounded-md duration-300`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#lawyerCollapse"
                    aria-expanded="false"
                    aria-controls="lawyerCollapse"
                  >
                    <div
                      className={`w-full text-[17px] focus:text-[#5D54A4] focus:bg-[#dbeafe] rounded-md py-2 flex items-center cursor-pointer ${
                        open ? "justify-start gap-x-4 pl-4" : "justify-center"
                      } `}
                      onClick={() =>
                        setDisplay(display === "hidden" ? "block" : "hidden")
                      }
                    >
                      {open ? (
                        <>
                          <FaHome />
                          <h4 className="text-gray-900">Sub Menu Section</h4>
                        </>
                      ) : (
                        <Tooltip
                          content="Menu Item"
                          className="w-full"
                          placement="right"
                          padding={3}
                          fontSize="15px"
                          fadeDuration={500}
                          background="#DBEAFE"
                          color="#5D54A4"
                          border="#5D54A4"
                          onClick={() => setOpen(true)}
                        >
                          <FaHome className="w-full" />
                        </Tooltip>
                      )}
                    </div>
                  </div>
                  {/* Dashboard Sub Menu */}
                  {open && (
                    <div
                      className="flex flex-col accordion-collapse collapse ml-4"
                      data-bs-parent="#accordionExample"
                      id="lawyerCollapse"
                    >
                      <div className="my-1">
                        <Link
                          to="/"
                          className="text-gray-900 hover:text-[#5D54A4] hover:bg-white focus:bg-[#dbeafe] focus:text-[#5D54A4] rounded-md duration-300 px-2 py-2 block w-full"
                        >
                          <div className="flex items-center gap-x-4">
                            <FaHome className="ml-2 text-gray-400" />
                            {open && <h4>Sub Menu</h4>}
                          </div>
                        </Link>
                      </div>
                      <div className="my-1">
                        <Link
                          to="/"
                          className=" text-gray-900 hover:text-[#5D54A4] hover:bg-white focus:bg-[#dbeafe] focus:text-[#5D54A4] rounded-md duration-300 px-2 py-2 block w-full"
                        >
                          <div className="flex items-center gap-x-4">
                            <FaHome className="ml-2 text-gray-400" />
                            {open && <h4>Sub Menu</h4>}
                          </div>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                {/* Customer Section Menu */}
                <div
                  className={`accordion accordion-item cursor-pointer w-full text-[17px] ${
                    open === true
                      ? " gap-x-4"
                      : "hover:bg-white hover:text-[#5D54A4] rounded-md"
                  } `}
                  onClick={() =>
                    setDisplay(display === "hidden" ? "block" : "hidden")
                  }
                  id="accordionExample"
                >
                  <div
                    className={`w-full flex items-center justify-center collapsed relative ${
                      open ? "hover:bg-white accordion-button" : ""
                    } hover:text-[#5D54A4] rounded-md duration-300`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#customerCollapse"
                    aria-expanded="false"
                    aria-controls="customerCollapse"
                  >
                    <div
                      className={`w-full text-[17px] focus:text-[#5D54A4] focus:bg-[#dbeafe] rounded-md py-2 flex items-center cursor-pointer ${
                        open ? "justify-start gap-x-4 pl-4" : "justify-center"
                      } `}
                      onClick={() =>
                        setDisplay(display === "hidden" ? "block" : "hidden")
                      }
                    >
                      {open ? (
                        <>
                          <FaHome />
                          <h4 className="text-gray-900">Sub Menu Section</h4>
                        </>
                      ) : (
                        <Tooltip
                          content="Menu Item"
                          className="w-full"
                          placement="right"
                          padding={3}
                          fontSize="15px"
                          fadeDuration={500}
                          background="#DBEAFE"
                          color="#5D54A4"
                          border="#5D54A4"
                          onClick={() => setOpen(true)}
                        >
                          <FaHome className="w-full" />
                        </Tooltip>
                      )}
                    </div>
                  </div>
                  {/* Customer Section Sub Menu */}
                  {open && (
                    <div
                      className="flex flex-col accordion-collapse collapse ml-4"
                      data-bs-parent="#accordionExample"
                      id="customerCollapse"
                    >
                      <div className="my-1">
                        <Link
                          to="/"
                          className="text-gray-900 hover:text-[#5D54A4] hover:bg-white focus:bg-[#dbeafe] focus:text-[#5D54A4] rounded-md duration-300 px-2 py-2 block w-full"
                        >
                          <div className="flex items-center gap-x-4">
                            <FaHome className="ml-2 text-gray-400" />
                            {open && <h4>Sub Menu</h4>}
                          </div>
                        </Link>
                      </div>
                      <div className="my-1">
                        <Link
                          to="/"
                          className=" text-gray-900 hover:text-[#5D54A4] hover:bg-white focus:bg-[#dbeafe] focus:text-[#5D54A4] rounded-md duration-300 px-2 py-2 block w-full"
                        >
                          <div className="flex items-center gap-x-4">
                            <FaHome className="ml-2 text-gray-400" />
                            {open && <h4>Sub Menu</h4>}
                          </div>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                {/* Service Section Menu */}
                <div
                  className={`accordion accordion-item cursor-pointer w-full text-[17px] ${
                    open === true
                      ? " gap-x-4"
                      : "hover:bg-white hover:text-[#5D54A4] rounded-md"
                  } `}
                  onClick={() =>
                    setDisplay(display === "hidden" ? "block" : "hidden")
                  }
                  id="accordionExample"
                >
                  <div
                    className={`w-full flex items-center justify-center collapsed relative ${
                      open ? "hover:bg-white accordion-button" : ""
                    } hover:text-[#5D54A4] rounded-md duration-300`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#serviceCollapse"
                    aria-expanded="false"
                    aria-controls="serviceCollapse"
                  >
                    <div
                      className={`w-full text-[17px] focus:text-[#5D54A4] focus:bg-[#dbeafe] rounded-md py-2 flex items-center cursor-pointer ${
                        open ? "justify-start gap-x-4 pl-4" : "justify-center"
                      } `}
                      onClick={() =>
                        setDisplay(display === "hidden" ? "block" : "hidden")
                      }
                    >
                      {open ? (
                        <>
                          <FaHome />
                          <h4 className="text-gray-900">Sub Menu Section</h4>
                        </>
                      ) : (
                        <Tooltip
                          content="Menu Item"
                          className="w-full"
                          placement="right"
                          padding={3}
                          fontSize="15px"
                          fadeDuration={500}
                          background="#DBEAFE"
                          color="#5D54A4"
                          border="#5D54A4"
                          onClick={() => setOpen(true)}
                        >
                          <FaHome className="w-full" />
                        </Tooltip>
                      )}
                    </div>
                  </div>
                  {/* Service Section Sub Menu */}
                  {open && (
                    <div
                      className="flex flex-col accordion-collapse collapse ml-4"
                      data-bs-parent="#accordionExample"
                      id="serviceCollapse"
                    >
                      <div className="my-1">
                        <Link
                          to="/"
                          className="text-gray-900 hover:text-[#5D54A4] hover:bg-white focus:bg-[#dbeafe] focus:text-[#5D54A4] rounded-md duration-300 px-2 py-2 block w-full"
                        >
                          <div className="flex items-center gap-x-4">
                            <FaHome className="ml-2 text-gray-400" />
                            {open && <h4>Sub Menu</h4>}
                          </div>
                        </Link>
                      </div>
                      <div className="my-1">
                        <Link
                          to="/"
                          className=" text-gray-900 hover:text-[#5D54A4] hover:bg-white focus:bg-[#dbeafe] focus:text-[#5D54A4] rounded-md duration-300 px-2 py-2 block w-full"
                        >
                          <div className="flex items-center gap-x-4">
                            <FaHome className="ml-2 text-gray-400" />
                            {open && <h4>Sub Menu</h4>}
                          </div>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                <Link
                  to="/cusTaxIssue"
                  className={`duration-75 text-[17px] py-2 hover:text-[#5D54A4] hover:bg-white focus:text-[#5D54A4] focus:bg-[#dbeafe] rounded-md flex items-center ${
                    open ? "justify-start gap-x-4 pl-4" : "justify-center"
                  } duration-300`}
                >
                  {open ? (
                    <>
                      <FaHome />
                      <h4 className="text-gray-900">Menu Item</h4>
                    </>
                  ) : (
                    <Tooltip
                      content="Menu Item"
                      className="w-full"
                      placement="right"
                      padding={3}
                      fontSize="15px"
                      fadeDuration={500}
                      background="#DBEAFE"
                      color="#5D54A4"
                      border="#5D54A4"
                    >
                      <FaHome className="w-full" />
                    </Tooltip>
                  )}
                </Link>

                <Link
                  to="/"
                  className={`duration-75 text-[17px] py-2 hover:text-[#5D54A4] hover:bg-white focus:text-[#5D54A4] focus:bg-[#dbeafe] rounded-md flex items-center ${
                    open ? "justify-start gap-x-4 pl-4" : "justify-center"
                  } duration-300`}
                >
                  {open ? (
                    <>
                      <FaHome />
                      <h4 className="text-gray-900">Menu Item</h4>
                    </>
                  ) : (
                    <Tooltip
                      content="Menu Item"
                      className="w-full"
                      placement="right"
                      padding={3}
                      fontSize="15px"
                      fadeDuration={500}
                      background="#DBEAFE"
                      color="#5D54A4"
                      border="#5D54A4"
                    >
                      <FaHome className="w-full" />
                    </Tooltip>
                  )}
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
