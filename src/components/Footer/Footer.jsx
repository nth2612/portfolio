import CopyrightIcon from '@mui/icons-material/Copyright'
import FavoriteIcon from '@mui/icons-material/Favorite'

const Footer = () => {
  return (
    <footer className='p-5 dark:text-normal-dark text-center mt-10'>
      <p><FavoriteIcon sx={{ color: 'red' }} /> Thank you for taking your time to scroll this far <FavoriteIcon sx={{ color: 'red' }} /></p>
      <p><CopyrightIcon/> Copyright 2024 by NguyenTuanHai. All rights reserved.</p>
    </footer>
  )
}

export default Footer
