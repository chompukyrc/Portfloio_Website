import React, { useState, useEffect, useRef } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"

import Greeting from "@/page/greeting"

function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

function App() {
  return (
    <div className="">
      <ButtonAppBar />
      <Greeting />
      <div className="mt-4 bg-red-300  w-screen">Hello world</div>
      {/* navbar */}
      {/* <div className="flex w-full justify-between z-50 absolute bg-white bg-opacity-50">
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
      </div> */}
    </div>
  )
}

export default App
