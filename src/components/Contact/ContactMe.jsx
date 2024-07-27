import { useState } from "react"
import SectionName from "../General/SectionName"
import coop from '~/assets/meeting.png'

const ContactMe = ({ useRef }) => {
  const [status, setStatus] = useState("")
  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.target
    const data = new FormData(form)
    try {
      const response = await fetch('https://formspree.io/f/xrbzpgwy', {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      })
      if (response.ok) {
        setStatus('success')
        form.reset()
      }
      else {
        setStatus('error')
      }
    }
    catch (error) {
      setStatus('error')
    }
  }
  return (
    <div ref={useRef} id="contact" className="container px-2">
      <SectionName text='Contact me' />
      <h2 className="text-2xl dark:text-normal-dark text-center mb-2">Let&apos;s make something cool together!</h2>
      <div className="flex flex-col lg:flex-row items-center lg:justify-center">
        <div className="px-2 max-w-[600px]">
          <img src={coop} loading="lazy" alt="" className="w-full" />
        </div>
        <div className="flex-1 max-w-[550px]">
          <form action="https://formspree.io/f/xrbzpgwy" onSubmit={handleSubmit} method="post" className="space-y-2">
            <input type="text" name="name" id="" placeholder="Your name" className="rounded-lg dark:bg-[#31302f] text-normal dark:text-normal-dark" required/>
            <input type="email" name="email" id="" placeholder="Your email" className="rounded-lg dark:bg-[#31302f] text-normal dark:text-normal-dark" required/>
            <textarea name="message" rows={5} id="" placeholder="Your messages" className="rounded-lg dark:bg-[#31302f] text-normal dark:text-normal-dark" required/>
            <button type="submit" className="bg-primary dark:bg-primary-dark text-white px-4 py-2 rounded-lg" >Submit</button>
            {status == 'success' && <p>Thành công</p>}
            {status == 'error' && <p>Thất bại</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
