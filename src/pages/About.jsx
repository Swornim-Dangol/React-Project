import React from 'react'

function About() {
  return (
    <div className="h-[500px] w-full flex justify-center items-center">
      <div className="bg-gray-700 p-8 rounded-lg text-center">
        <h1 className="text-3xl text-white mb-4">About This Stopwatch</h1>
        <p className="text-white">
          This is the About page for my stopwatch application.
        </p>
      </div>
    </div>
  )
}

export default About