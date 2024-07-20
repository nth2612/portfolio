const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="text-lg rounded-full text-primary px-3 py-1 border-2 border-primary transition-all duration-300 hover:text-white hover:bg-primary" >
      {text}
    </button>
  )
}

export default Button
