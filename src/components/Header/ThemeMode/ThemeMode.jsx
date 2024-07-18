import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import { useState } from 'react'

const ThemeMode = () => {
  const [darkMode, setDarkMode] = useState(true)
  const changeMode = () => {
    setDarkMode(prev => !prev)
  }
  return (
    <div className='w-8 h-8 hover:bg-rgba p-1 rounded-full' >
      { darkMode
        ? <LightModeOutlinedIcon onClick={changeMode} sx={{ cursor: 'pointer', mt: '-2px' }}/>
        : <DarkModeOutlinedIcon onClick={changeMode} sx={{ cursor: 'pointer', mt: '-2px' }}/>
      }
    </div>
  )
}

export default ThemeMode
