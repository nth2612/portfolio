import SectionName from "../General/SectionName"
import coop from '~/assets/Cooperate-PNG-Free-Download.png'

const ContactMe = () => {
  return (
    <div id="contact" className="container px-2">
      <SectionName text='Contact me' />
      <h2 className="text-2xl dark:text-normal-dark text-center mb-2">Let&apos;s make something together!</h2>
      <div className="flex">
        <div className="px-2 max-w-[600px]">
          <img src={coop} alt="" className="w-full" />
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default ContactMe
