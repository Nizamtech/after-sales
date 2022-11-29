import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { BiLogOutCircle} from 'react-icons/bi';

const MobileMenu = ({ setMobileOpen }) => {
    return (
        <nav className="flex flex-col mx-2 my-6 space-y-3">
            <Link to="/home" className={`text-[17px] py-2 focus:text-[#5D54A4] focus:bg-white rounded-md pl-4 text-center pr-2 duration-300 `}>
                <button onClick={() => setMobileOpen(false)} className="flex items-center justify-start gap-x-4">
                    <FaHome className="text-[#5D54A4]"/>
                    <h4 className="text-gray-900">Home</h4>
                </button>
            </Link>
            {/* User Section Menu */}
            <div
                className={`accordion accordion-item cursor-pointer w-full text-[17px] items-center gap-x-4 justify-center pl-5 rounded-md"} `}
                id='accordionExample3'>
                <div
                    className={`w-full flex items-center collapsed relative accordion-button rounded-md duration-300 `}
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#userCollapse'
                    aria-expanded='false'
                    aria-controls='userCollapse'>

                    <div className={`text-[17px] rounded-md py-2 flex items-center cursor-pointer justify-start gap-x-4 text-center`} >
                        <FaHome className="text-[#5D54A4]" />
                        <h4 className="text-gray-900">Sub Menu Section</h4>
                    </div>
                </div>
                {/* User Sub Menu */}

                <div
                    className='flex flex-col accordion-collapse collapse ml-4'
                    data-bs-parent='#accordionExample3'
                    id='userCollapse'>
                    <div className="my-1">
                        <Link
                            to='/'
                            className="text-gray-900 focus:bg-white rounded-md duration-300 px-2 py-2 block w-full">
                            <div className="flex items-center gap-x-4" onClick={() => setMobileOpen(false)}>
                                <FaHome className="ml-2 text-gray-400" />
                                <h4>Sub Menu</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="my-1">
                        <Link
                            to='/'
                            className=" text-gray-900 focus:bg-white rounded-md duration-300 px-2 py-2 block w-full">
                            <div className="flex items-center gap-x-4" onClick={() => setMobileOpen(false)}>
                                <FaHome className="ml-2 text-gray-400" />
                                <h4>Sub Menu</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Lawyer Section Menu */}
            <div
                className={`accordion accordion-item cursor-pointer w-full text-[17px] items-center gap-x-4 justify-center pl-5 rounded-md"} `}
                id='accordionExample3'>
                <div
                    className={`w-full flex items-center collapsed relative accordion-button rounded-md duration-300 `}
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#lawyerCollapse'
                    aria-expanded='false'
                    aria-controls='lawyerCollapse'>

                    <div className={`text-[17px] rounded-md py-2 flex items-center cursor-pointer justify-start gap-x-4 text-center`} >
                        <FaHome className="text-[#5D54A4]"/>
                        <h4 className="text-gray-900">Sub Menu Section</h4>
                    </div>
                </div>
                {/* User Sub Menu */}

                <div
                    className='flex flex-col accordion-collapse collapse ml-4'
                    data-bs-parent='#accordionExample3'
                    id='lawyerCollapse'>
                    <div className="my-1">
                        <Link
                            to='/'
                            className="text-gray-900 focus:bg-white rounded-md duration-300 px-2 py-2 block w-full">
                            <div className="flex items-center gap-x-4" onClick={() => setMobileOpen(false)}>
                                <FaHome className="ml-2 text-gray-400" />
                                <h4>Sub Menu</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="my-1">
                        <Link
                            to='/'
                            className=" text-gray-900 focus:bg-white rounded-md duration-300 px-2 py-2 block w-full">
                            <div className="flex items-center gap-x-4" onClick={() => setMobileOpen(false)}>
                                <FaHome className="ml-2 text-gray-400" />
                                <h4>Sub Menu</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Customer Section Menu */}

            <div
                className={`accordion accordion-item cursor-pointer w-full text-[17px] items-center gap-x-4 justify-center pl-5 rounded-md"} `}
                id='accordionExample3'>
                <div
                    className={`w-full flex items-center collapsed relative accordion-button rounded-md duration-300 `}
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#customerCollapse'
                    aria-expanded='false'
                    aria-controls='customerCollapse'>

                    <div className={`text-[17px] rounded-md py-2 flex items-center cursor-pointer justify-start gap-x-4 text-center`} >
                        <FaHome className="text-[#5D54A4]"/>
                        <h4 className="text-gray-900">Sub Menu Section</h4>
                    </div>
                </div>
                {/* User Sub Menu */}

                <div
                    className='flex flex-col accordion-collapse collapse ml-4'
                    data-bs-parent='#accordionExample3'
                    id='customerCollapse'>
                    <div className="my-1">
                        <Link
                            to='/'
                            className="text-gray-900 focus:bg-white rounded-md duration-300 px-2 py-2 block w-full">
                            <div className="flex items-center gap-x-4" onClick={() => setMobileOpen(false)}>
                                <FaHome className="ml-2 text-gray-400" />
                                <h4>Sub Menu</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="my-1">
                        <Link
                            to='/'
                            className=" text-gray-900 focus:bg-white rounded-md duration-300 px-2 py-2 block w-full">
                            <div className="flex items-center gap-x-4" onClick={() => setMobileOpen(false)}>
                                <FaHome className="ml-2 text-gray-400" />
                                <h4>Sub Menu</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Service Section Menu */}

            <div
                className={`accordion accordion-item cursor-pointer w-full text-[17px] items-center gap-x-4 justify-center pl-5 rounded-md"} `}
                id='accordionExample3'>
                <div
                    className={`w-full flex items-center collapsed relative accordion-button rounded-md duration-300 `}
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#serviceCollapse'
                    aria-expanded='false'
                    aria-controls='serviceCollapse'>

                    <div className={`text-[17px] rounded-md py-2 flex items-center cursor-pointer justify-start gap-x-4 text-center`} >
                        <FaHome className="text-[#5D54A4]"/>
                        <h4 className="text-gray-900">Sub Menu Section</h4>
                    </div>
                </div>
                {/* User Sub Menu */}

                <div
                    className='flex flex-col accordion-collapse collapse ml-4'
                    data-bs-parent='#accordionExample3'
                    id='serviceCollapse'>
                    <div className="my-1">
                        <Link
                            to='/'
                            className="text-gray-900 focus:bg-white rounded-md duration-300 px-2 py-2 block w-full">
                            <div className="flex items-center gap-x-4" onClick={() => setMobileOpen(false)}>
                                <FaHome className="ml-2 text-gray-400" />
                                <h4>Sub Menu</h4>
                            </div>
                        </Link>
                    </div>
                    <div className="my-1">
                        <Link
                            to='/'
                            className=" text-gray-900 focus:bg-white rounded-md duration-300 px-2 py-2 block w-full">
                            <div className="flex items-center gap-x-4" onClick={() => setMobileOpen(false)}>
                                <FaHome className="ml-2 text-gray-400" />
                                <h4>Sub Menu</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <Link to="/" className={`text-[17px] py-2 focus:text-[#5D54A4] focus:bg-white rounded-md pl-5 text-center pr-2 duration-300 `}>
                <button onClick={() => setMobileOpen(false)} className="flex items-center justify-start gap-x-4">
                    <FaHome className="text-[#5D54A4]"/>
                    <h4 className="text-gray-900">Menu Item</h4>
                </button>
            </Link>
            <Link to="/" className={`text-[17px] py-2 focus:text-[#5D54A4] focus:bg-white rounded-md pl-5 text-center pr-2 duration-300 `}>
                <button onClick={() => setMobileOpen(false)} className="flex items-center justify-start gap-x-4">
                    <FaHome className="text-[#5D54A4]"/>
                    <h4 className="text-gray-900">Menu Item</h4>
                </button>
            </Link>

            <div className="inline-flex items-center justify-center border-t border-gray-200">
                <button className="text-[17px] mx-2 w-full hover:text-[#5D54A4] hover:bg-white focus:bg-white focus:text-[#5D54A4] rounded-md flex items-center justify-center my-2 py-2">
                    <BiLogOutCircle className="mt-1 text-red-600 animate-ping" />
                    <h4 className="text-gray-900 ml-4">Logout</h4>
                </button>
            </div>
        </nav>
    );
};

export default MobileMenu;