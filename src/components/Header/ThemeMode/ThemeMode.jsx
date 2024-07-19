import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import { useState } from 'react'

const ThemeMode = () => {
  const [darkMode, setDarkMode] = useState(true)
  const changeMode = () => {
    setDarkMode(prev => !prev)
  }
  return (
    <div className='w-10 h-10 hover:bg-rgba p-2 rounded-full border' >
      { darkMode
        ? <DarkModeOutlinedIcon onClick={changeMode} sx={{ cursor: 'pointer', mt: '-5px', ml: '-1px' }}/>
        : <LightModeOutlinedIcon onClick={changeMode} sx={{ cursor: 'pointer', mt: '-4px', ml: '-1px' }}/>
      }
    </div>
  )
}

export default ThemeMode
