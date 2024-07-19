import { useEffect, useState } from "react"

const myNameChar = ['N', 'g', 'u', 'y', 'ễ', 'n', 'T', 'u', 'ấ', 'n', 'H', 'ả', 'i']

const Overview = () => {
  const [firstLetter, setFirstLetter] = useState(5)
  // const [count, setCount] = useState(0)
  // useEffect(() => {
  //   const timeId = setInterval(() => {
  //     let randomText = ''
  //     for( let i = 0; i < 13; i++) {
  //       const randomLetter = myNameChar[Math.floor(Math.random() * 13)]
  //       randomText += randomLetter
  //     }
  //     setFirstLetter(randomText)
  //     set
  //   }, 500)
  //   return () => clearInterval(timeId)
  // })
  return (
    <div className="container px-2 bg-black h-96">
      <div></div>
      <div></div>
    </div>
  )
}

export default Overview
