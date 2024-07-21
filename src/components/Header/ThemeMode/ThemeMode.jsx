import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
// import { useState } from 'react'

const ThemeMode = ({ mode, setMode }) => {
  const handleMode = () => {
    if (mode === "light") {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      document.body.style.backgroundColor = "#101204"
      setMode("dark")
    }
    else if (mode === "dark") {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      document.body.style.backgroundColor = "#ffffff"
      setMode("light")
    }
  }
  return (
    <div className='w-10 h-10 hover:bg-rgba dark:hover:bg-rgba-dark p-2 rounded-full border dark:border-[#6b7280] shadow-circlebtn dark:shadow-circlebtn-dark' >
      { mode === "dark"
        ? <DarkModeOutlinedIcon onClick={handleMode} sx={{ cursor: 'pointer', mt: '-5px', ml: '-1px', color: 'white' }}/>
        : <LightModeOutlinedIcon onClick={handleMode} sx={{ cursor: 'pointer', mt: '-4px', ml: '-1px' }}/>
      }
    </div>
  )
}

export default ThemeMode
