import React from 'react'

const Home = () => {
  return (
    <>
        <div className='h-screen w-full bg-gradient-to-r from-black  to-gray-900 flex flex-col items-center justify-center gap-9'>  
            <h1 className=' font-bold text-8xl text-blue-600'>CoDiFy</h1>
            <p className='text-white text-2xl text-center w-7xl'>Build a strong command over your fundamentals with concept-driven quizzes made for web developers. Strengthen your logic, sharpen your thinking, and turn practice into confidence.</p>
            <h3 className='text-6xl text-red-500'>Strong basics build great developers.</h3>
            <button className='h-20 w-100 bg-green-600 rounded-4xl text-4xl text-white font-bold'>let's go</button>
        </div>
    </>
  )
}

export default Home