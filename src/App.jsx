import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Review from './Review'



function App() {



  // Generate JSX code for Display each item
  // const renderList = peopleList.map(("id", "firstName") => 
  // <div key={"id"}>{"firstName"}</div>
  // );

  return (
    <main className='border-2 px-2'>
      <section className="container">
        <div >
          <h1 className='font-serif'>Meet Our Staff</h1>
        </div>
          <br />
        <div> 
          <Review />
          
        </div>
      </section>
    </main>


  )
}

export default App
