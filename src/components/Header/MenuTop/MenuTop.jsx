const MenuTop = () => {
  return (
    <div className="hidden md:inline-flex px-5 rounded-full border-[0.5px] shadow-lg" >
      <ul className="flex">
        <li className="border-b border-b-transparent hover:border-b-primary">
          <a href="/" className="block py-2 px-3 text-normal hover:text-primary">ABOUT</a>
        </li>
        <li className="border-b border-b-transparent hover:border-b-primary">
          <a href="#skills" className="block py-2 px-3 text-normal hover:text-primary">SKILLS</a>
        </li>
        <li className="border-b border-b-transparent hover:border-b-primary">
          <a href="#projects" className="block py-2 px-3 text-normal hover:text-primary">PROJECTS</a>
        </li>
        <li className="border-b border-b-transparent hover:border-b-primary">
          <a href="#contact" className="block py-2 px-3 text-normal hover:text-primary">CONTACT</a>
        </li>
        <li className="border-b border-b-transparent hover:border-b-primary">
          <a href="/" className="block py-2 px-3 text-normal hover:text-primary">WIBU</a>
        </li>
      </ul>
    </div>
  )
}

export default MenuTop
