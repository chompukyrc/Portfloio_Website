import React, { useState, useEffect } from "react"

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const moutain = document.getElementById("moutain")
      const kanyarat = document.getElementById("kanyarat")
      const sun = document.getElementById("sun")
      const forest = document.getElementById("forest")

      const value = window.scrollY
      moutain.style.left = value * 0.5 + "px"
      kanyarat.style.left = value * -3 + "px"
      sun.style.top = value * 1 + "px"
      forest.style.scale = value * 3 + "px"
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="App">
      {/* navbar */}
      <div className="flex w-full justify-between z-50 absolute bg-white bg-opacity-50">
        <div>
          <ul>
            <li className="mx-12 my-4 text-4xl font-extrabold text-black hover:cursor-pointer hover:scale-105">
              <a href="#logo">LOGO</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex mr-8">
            <li className="my-4 mx-12 text-2xl font-bold text-black hover:cursor-pointer hover:scale-105">
              <a href="#home">Home</a>
            </li>
            <li className="my-4 mx-12 text-2xl font-bold text-black hover:cursor-pointer hover:scale-105">
              <a href="#about">About</a>
            </li>
            <li className="my-4 mx-12 text-2xl font-bold text-black hover:cursor-pointer hover:scale-105">
              <a href="#work">Work</a>
            </li>
            <li className="my-4 mx-12 text-2xl font-bold text-black hover:cursor-pointer hover:scale-105">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gradient-to-t from-transparent via-transparent to-orange-300">
        <img
          src="\src\assets\Image\moutain.png"
          alt="ScrollImage"
          id="moutain"
          className="absolute w-screen z-6"
        ></img>
        <img
          src="\src\assets\Image\forest.png"
          alt="ScrollImage"
          id="forest"
          className="absolute w-screen z-10"
        ></img>
        <div
          className="font-extrabold text-white absolute flex flex-col justify-center h-screen z-9 w-full scale-125 -bottom-32"
          id="kanyarat"
          alt="ScrollImage"
        >
          <div className="text-8xl flex justify-end">KANYARAT</div>
          <div className="text-7xl flex justify-end">CHAIYANBOON</div>
        </div>
        <img
          src="\src\assets\Image\sun2.png"
          id="sun"
          className="w-screen relative -z-10"
          alt="ScrollImage"
        ></img>
      </div>

      <div
        className="bg-[#7eb837] h-screen pt-12 text-center font-extrabold text-7xl text-white"
        id="home"
      >
        My Portfolio
      </div>
    </div>
  )
}

export default App
