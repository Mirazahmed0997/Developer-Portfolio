import React from 'react';
import js from '../utilities/JavaScript-Logo-removebg-preview.png'
import react from '../utilities/React-icon.svg-removebg-preview.png'
import mongodb from '../utilities/mongodb-removebg-preview.png'
import node from '../utilities/node-removebg-preview.png'
import Technology from './Technology';



const Technoligies = () => {
    const technologiesData=[
        {
            id:1,
            name:'Vanilla JavaScript',
            description: 'JavaScript: A versatile, high-level programming language, widely used for web development to create interactive, dynamic, and responsive web applications.',
            img:js
        },
        {
            id:2,
            name:'React',
            description: 'React is a popular JavaScript library for building user interfaces, known for its component-based architecture and efficient virtual DOM rendering..',
            img:react
        },
        {
            id:3,
            name:'MongoDB',
            description: 'MongoDB is a NoSQL database, storing data in flexible, JSON-like documents, and is known for its scalability and real-time analytics.',
            img:mongodb
        },
        {
            id:3,
            name:'Node js',
            description: 'Node.js is a runtime environment that executes JavaScript code on the server, enabling non-blocking, event-driven applications for web development.',
            img:node
        }
        
    ]
    return (
        <div className='m-2 p-6'>
            <div className='text-center'>
                <h2 className='text-5xl mb-5 text-orange-500 font-bold'>Technologies</h2>
               
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 p-2 lg:grid-cols-4 gap-8 mt-16 text-center '>
                
            {
                    technologiesData.map(technology=><Technology key={technology.id} technology={technology}>
                    </Technology>)
                }

            </div>
        </div>
    );
};

export default Technoligies;