import React, { useState, useEffect, useRef } from "react"

export default function Greeting() {
  const moutainRef = useRef(null)
  const kanyaratRef = useRef(null)
  const sunRef = useRef(null)
  const forestRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY

      if (value <= 800) {
        sunRef.current.style.top = value * 1 + "px"
        moutainRef.current.style.left = value * 0.5 + "px"
        kanyaratRef.current.style.left = value * -3 + "px"
        forestRef.current.style.scale = value * 3 + "px"
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-gradient-to-t from-transparent via-transparent to-orange-300">
      <img
        src="\assets\Image\moutain.png"
        alt="ScrollImage"
        ref={moutainRef}
        className="absolute w-screen z-6"
      ></img>
      <img
        src="\assets\Image\forest.png"
        alt="ScrollImage"
        ref={forestRef}
        className="absolute w-screen z-10"
      ></img>
      <div
        className="font-extrabold text-white absolute flex flex-col justify-center h-screen z-9 w-full scale-125 -bottom-32"
        ref={kanyaratRef}
        alt="ScrollImage"
      >
        <div className="text-8xl flex justify-end">KANYARAT</div>
        <div className="text-7xl flex justify-end">CHAIYANBOON</div>
      </div>
      <img
        src="\assets\Image\sun2.png"
        ref={sunRef}
        className="w-screen relative -z-10"
        alt="ScrollImage"
      ></img>
    </div>
  )
}
