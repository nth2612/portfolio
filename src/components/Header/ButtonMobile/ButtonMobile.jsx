import MenuIcon from '@mui/icons-material/Menu'
import ClearIcon from '@mui/icons-material/Clear'
const ButtonMobile = ({ setIsOpen, isOpen }) => {
  return (
    <div className='inline-flex md:hidden dark:text-icon-dark'>
      { isOpen
        ? <ClearIcon fontSize='large' sx={{ cursor: 'pointer' }} onClick={() => setIsOpen(false)} />
        : <MenuIcon fontSize='large' sx={{ cursor: 'pointer' }} onClick={() => setIsOpen(true)} />
      }
    </div>
  )
}

export default ButtonMobile
