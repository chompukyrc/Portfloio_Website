import { useState } from "react"
import reactLogo from "./assets/react.svg"
import Button from "@mui/material/Button"

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <div className="flex w-full justify-between z-50 absolute bg-white bg-opacity-50">
        <div>
          <ul>
            <li
              className="mx-12 my-4 text-4xl font-extrabold text-black hover:cursor-pointer hover:scale-105"
              href="#"
            >
              LOGO
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex mr-8">
            <li
              className="my-4 mx-12 text-2xl font-bold text-black hover:cursor-pointer hover:scale-105"
              href="#"
            >
              Home
            </li>
            <li
              className="my-4 mx-12 text-2xl font-bold text-black hover:cursor-pointer hover:scale-105"
              href="#"
            >
              About
            </li>
            <li
              className="my-4 mx-12 text-2xl font-bold text-black hover:cursor-pointer hover:scale-105"
              href="#"
            >
              Work
            </li>
            <li
              className="my-4 mx-12 text-2xl font-bold text-black hover:cursor-pointer hover:scale-105"
              href="#"
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
      <img
        src="\src\assets\Image\moutain.png"
        alt="moutain"
        className="absolute w-screen"
      ></img>
      <img
        src="\src\assets\Image\forest.png"
        alt="forest"
        className="absolute w-screen z-10"
      ></img>
      <div className="text-8xl font-extrabold text-white absolute flex w-full h-screen justify-center items-center z-9">
        KANYARAT CHAIYANBOON
      </div>
      <img src="\src\assets\Image\sun.png" alt="sun" className=" w-screen"></img>
      <div className="bg-[#7eb837] h-screen pt-12 text-center font-extrabold text-7xl text-white">
        My Portfolio
      </div>
    </div>
  )
}

export default App
