import sneeze2 from '~/assets/sneeze2-removebg.png'
import sneeze1 from '~/assets/sneeze1-removebg.png'

const NavMobile = ({ isOpen, mode, setIsOpen, skillRef, aboutRef, contactRef, projectRef }) => {
  const handleRef = (ref) => {
    if (ref && ref.current) {
      const offsetPosition = ref.current.offsetTop - 66
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }
  return (
    <div className="fixed z-50 top-14 p-10 bottom-0 left-0 bg-slate-600 transition-transform duration-700 w-full md:hidden" style={{ transform: `translateX(${isOpen ? '0' : '-100%'})` }} >
      <img src={mode === "light" ? sneeze2 : sneeze1} alt="" className="drop-shadow-primary dark:drop-shadow-primary-dark mx-auto mb-5" />
      <ul>
        <li className='border-b border-gray-500'>
          <a href="#about" onClick={(e) => {setIsOpen(false);e.preventDefault();handleRef(aboutRef)}} className="block py-2 px-3 text-center text-white hover:text-primary">ABOUT</a>
        </li>
        <li className='border-b border-gray-500'>
          <a href="#skills" onClick={(e) => {setIsOpen(false);e.preventDefault();handleRef(skillRef)}} className="block py-2 px-3 text-center text-white hover:text-primary">SKILLS</a>
        </li>
        <li className='border-b border-gray-500'>
          <a href="#projects" onClick={(e) => {setIsOpen(false);e.preventDefault();handleRef(projectRef)}} className="block py-2 px-3 text-center text-white hover:text-primary">PROJECTS</a>
        </li>
        <li className='border-b border-gray-500'>
          <a href="#contact" onClick={(e) => {setIsOpen(false);e.preventDefault();handleRef(contactRef)}} className="block py-2 px-3 text-center text-white hover:text-primary">CONTACT</a>
        </li>
        <li className='border-b border-gray-500'>
          <a href="/" onClick={() => setIsOpen(false)} className="block py-2 px-3 text-center text-white hover:text-primary">WIBU</a>
        </li>
      </ul>
    </div>
  )
}

export default NavMobile
