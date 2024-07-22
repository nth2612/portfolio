const Button = ({ text, onClick, icon }) => {
  return (
    <button onClick={onClick} className="text-lg rounded-full text-primary dark:text-primary-dark px-3 py-1 border-2 border-primary dark:border-primary-dark transition-all duration-300 hover:text-white dark:hover:text-white hover:bg-primary dark:hover:bg-primary-dark" >
      {icon}
      {text}
    </button>
  )
}

export default Button
