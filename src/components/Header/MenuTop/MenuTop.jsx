const MenuTop = () => {
  return (
    <div className="hidden md:inline-flex px-5 rounded-full border-[0.5px] dark:border-[#738496] shadow-md dark:shadow-slate-400" >
      <ul className="flex">
        <li className="border-b border-b-transparent hover:border-b-primary dark:hover:border-b-primary-dark">
          <a href="#about" className="block py-2 px-3 dark:text-[#9fadbc] dark:hover:text-primary-dark hover:text-primary">ABOUT</a>
        </li>
        <li className="border-b border-b-transparent hover:border-b-primary dark:hover:border-b-primary-dark">
          <a href="#skills" className="block py-2 px-3 dark:text-[#9fadbc] hover:text-primary dark:hover:text-primary-dark">SKILLS</a>
        </li>
        <li className="border-b border-b-transparent hover:border-b-primary dark:hover:border-b-primary-dark">
          <a href="#projects" className="block py-2 px-3 dark:text-[#9fadbc] hover:text-primary dark:hover:text-primary-dark">PROJECTS</a>
        </li>
        <li className="border-b border-b-transparent hover:border-b-primary dark:hover:border-b-primary-dark">
          <a href="#contact" className="block py-2 px-3 dark:text-[#9fadbc] hover:text-primary dark:hover:text-primary-dark">CONTACT</a>
        </li>
        <li className="border-b border-b-transparent hover:border-b-primary dark:hover:border-b-primary-dark">
          <a href="/" className="block py-2 px-3 dark:text-[#9fadbc] hover:text-primary dark:hover:text-primary-dark">WIBU</a>
        </li>
      </ul>
    </div>
  )
}

export default MenuTop
