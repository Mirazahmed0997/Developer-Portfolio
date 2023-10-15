import React from 'react';

const Academic = () => {
    return (
        <div className='text-center'>
            <div>
                <h2 className='text-5xl mb-5 text-orange-500  font-bold'>Academic Info</h2>

            </div>
            <div className="card w-full shadow-xl">
                <div className="card-body items-center text-center bg-base-300">
                    <div className='mb-6'>
                        <h3 className=' text-xl font-bold uppercase text-black-500'>University of liberal arts Bangladesh</h3>
                        <p className='text-xl text-gray-500 '>Bsc in CSE || 2022</p>
                    </div>
                    <div>
                        <h3 className=' text-xl font-bold uppercase text-black-500'>dr. Mahbubur rahman mollah college</h3>
                        <p className='text-xl text-gray-500 '>Higher Secondary School Certificate || 2015</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Academic;