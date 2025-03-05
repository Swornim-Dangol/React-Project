import React from 'react'

function Blogs() {
  return (
    <div className="h-[500px] w-full flex justify-center items-center">
      <div className="bg-gray-700 p-8 rounded-lg text-center">
        <h1 className="text-3xl text-white mb-4">Blog Posts</h1>
        <ul className="text-white">
          <li>React Routing Basics</li>
          <li>Stopwatch Implementation</li>
          <li>State Management in React</li>
        </ul>
      </div>
    </div>
  )
}

export default Blogs