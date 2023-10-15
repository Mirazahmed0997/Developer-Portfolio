import React from 'react';
import img1 from '../../src/utilities/img1.jpg'
import background from '../../src/utilities/backround-transformed.jpeg'
const Intro = () => {
    return (
        <div className='m-0' >
            <div className="hero text-black m-6">

                <div className="flex justify-center hero-content  flex-col lg:flex-row-reverse">
                    <div className="avatar">
                        <div className="w-64 rounded-full ">
                            <img src={img1} />
                        </div>
                    </div>

                    <div>
                        <div className=''>
                            <h1 className="text-5xl font-bold text-orange-500 ">Hi! I am </h1><br />
                            <h1 className="text-5xl font-bold text-orange-500">Miraz Ahmed</h1>
                        </div>
                        <p className="py-6 text-gray-700 w-1/2 font-semibold">I Believe in myself and my
                            abilities. I have the power to
                            achieve my goals and
                            overcome any obstacles that
                            come my way. Stay focused,
                            stay determined, and never
                            give up. With hard work and
                            dedication, I can make my
                            dreams a reality. Keep
                            pushing forward and never
                            lose faith in myself.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;