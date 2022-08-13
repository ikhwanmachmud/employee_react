//People.js
import React from 'react';
import { useState } from 'react';
import reviews from './data.jsx';
import people from './data.jsx';


const Review = () => {
    const [index, setIndex] = useState(0);
    const { firstName, age, image, phone } = people[index];

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return newIndex;
        })
    };

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return newIndex;
        })
    };
    return <article>

        <div className="rounded-lg">

            <div className="flex flex-wrap justify-center ">
                <div className="w-6/12 sm:w-4/12 px-2">
                    <img src={image} alt={firstName}
                        className="shadow rounded-full max-w-full h-auto align-middle border-none bg-teal-300"
                    />
                </div>


            </div>
        </div>

        <div>
            <h2>{firstName}</h2>
        </div>


        <br />
        <div className="flex flex-wrap justify-center ">
            <div className="w-full max-w-xs ">
                <div className="bg-red-300 shadow-md rounded px-6 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
                            Phone Number
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" 
                            value={phone}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left" >
                            Age
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"
                            value={age}
                        />
                         <label className="block text-gray-700 text-sm font-bold mb-2 text-left" >
                            Age
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"
                            value={age}
                        />
                    </div>
                    


                    <div className="flex flex-row space-x-0.5 justify-center ">
                        <div className="basis-1/4">
                            <button onClick={prevPerson}>Prev</button></div>

                        <div className="basis-1/4">
                            <button onClick={nextPerson}>Next</button></div>

                    </div>



                </div>
            </div>
        </div>






    </article>
};




export default Review;