import React from 'react';

const Technology = ({ technology }) => {
    const { name, description, img } = technology
    return (
        <div className="card w-72  shadow-xl bg-base-300">
            <figure className="px-10 pt-10">
                <img src={img} alt="" className="rounded-xl w-1/2" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}!</h2>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default Technology;