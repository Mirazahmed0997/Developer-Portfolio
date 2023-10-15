import React from 'react';

const About = () => {
    return (
        <div className='mt-16 p-16'>
            <div className='text-center mb-6'>
                <h2 className='text-5xl mb-5 text-orange-500  font-bold'>About me</h2>
                <p className=" text-white-500 font-semibold">I am a web developer and designer who is deeply passionate about web development. My expertise lies in creating websites that are elegant, straightforward, and offer genuine benefits to the users. I've had the pleasure of assisting numerous clients, consistently achieving outstanding outcomes. My commitment is to deliver projects on schedule and within the agreed budget, all while ensuring they align with our clients' needs and expectations.
                </p>

            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 p-2 lg:grid-cols-3 gap-20 text-center justify-around'>
                <div className="card w-96  shadow-xl">
                    <div className="card-body items-center text-center bg-base-300">
                    <h3 className=' text-xl font-bold uppercase text-orange-500'>Name</h3>
                    <h2 className='text-3xl text-black font-semibold'>Miraz Ahmed </h2>
                    </div>
                </div>
                <div className="card w-96 shadow-xl">
                    <div className="card-body items-center text-center bg-base-300">
                    <h3 className=' text-xl font-bold uppercase text-orange-500'>Email</h3>
                    <h2 className='text-2xl text-black font-semibold '>miraz.ahmed.cse@ulab.edu.bd</h2>    
                    </div>
                </div>
                <div className="card w-96  shadow-xl">
                    <div className="card-body items-center text-center bg-base-300">
                    <h3 className=' text-xl font-bold  uppercase text-orange-500'>Speciality</h3>
                    <h2 className='text-3xl text-black font-semibold'>Full Stack Development</h2>    
                    </div>
                </div>
                {/* <div className='m-2'>
                    <h3 className=' text-xl font-bold uppercase text-orange-500'>Name</h3>
                    <h2 className='text-3xl text-black font-semibold'>Miraz Ahmed </h2>    
            </div>
            <div className='m-2'>
            </div>
            <div className='m-2'>
            </div> */}

            </div>
        </div>
    );
};

export default About;