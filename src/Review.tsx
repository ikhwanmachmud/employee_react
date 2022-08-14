//People.js
import React from 'react';
import { useState } from 'react';
import reviews from './data.jsx';
import people from './data.jsx';


const Review = () => {
    const [index, setIndex] = useState(0);
    const { firstName, age, image, phone, gender } = people[index];


    const checkNumber = (number) => {
        if (number > people.length - 1){
            return 0
        } 
        if (number < 0) {
            return people.length - 1
        }
        return number;
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return  checkNumber(newIndex);
        })
    };

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
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
        <div className="flex flex-wrap space-x-2 justify-center ">
            <div className="w-full max-w-xs ">
                <div className=" shadow-md rounded px-6 pt-6 pb-8 mb-4 bg-red-300">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-left">
                            Phone Number
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" 
                            value={phone}
                        />
                                           <label className="block text-gray-700 text-sm font-bold mb-2 text-left" >
                            Age
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"
                            value={age}
                        />
                         <label className="block text-gray-700 text-sm font-bold mb-2 text-left" >
                            Gender
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"
                            value={gender}
                        />
                        
                    </div>
                    


                    <div className="flex flex-row space-x-2 justify-center ">
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