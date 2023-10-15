import React from 'react';
import img2 from '../../src/utilities/img3.jpg'
import logo from '../../src/utilities/logo2-removebg-preview.png'

const Header = () => {
    return (

        <div className='m-0'> 
            <div className="navbar ">
                <div className="flex-1">
                    <img className='w-24' src={logo} alt="" />
                    <p className='italic text-2xl font-semibold text-gray-500'>Developer Portfolio</p>
                </div>

                    <div className="">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
                            <div className="w-10 rounded-full">
                                <img src={img2} />
                            </div>
                        </label>

                    </div>
            </div>
        </div>
    );
};

export default Header;