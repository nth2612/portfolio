const Project = ({ index, name, description, imageSrc, linkCode, linkWeb }) => {
  const delay = 900 + ((index-1) * 4000)
  return (
    <div className='flex flex-col mb-6 md:flex-row max-[767px]:max-w-md max-[767px]:mx-auto max-[767px]:px-0 max-[767px]:pt-0 hover:bg-[rgba(0,0,0,0.2)] items-center md:items-start dark:hover:bg-[rgba(255,255,255,0.2)] rounded-xl p-2' data-aos='fade-right' data-aos-duration={delay}>
      <div className='max-w-md aspect-video rounded-lg overflow-hidden max-[767px]:rounded-b-none'>
        <img loading='lazy' src={imageSrc} alt="" />
      </div>
      <div className='dark:text-normal-dark px-4 grow flex flex-col gap-2 max-[767px]:self-start'>
        <h2 className='font-medium text-xl mt-2 md:mt-0'>{name}</h2>
        <p>{description}</p>
        <p>
          <a href={linkCode} className="inline-flex" target="_blank" rel="noreferrer" >
            <button className='btn-project relative after:bg-primary dark:after:bg-primary-dark flex justify-center items-center overflow-hidden cursor-pointer border-none rounded-md bg-[#183153]'>
              <span className='text-center px-4 py-2 text-white z-10 font-bold tracking-widest'>View source code</span>
            </button>
          </a>
        </p>
        <p>
          <a href={linkWeb} className="inline-flex" target="_blank" rel="noreferrer" >
            <button className='btn-project relative after:bg-primary dark:after:bg-primary-dark flex justify-center items-center overflow-hidden cursor-pointer border-none rounded-md bg-[#183153]'>
              <span className='text-center px-4 py-2 text-white z-10 font-bold tracking-widest'>Visit website</span>
            </button>
          </a>
        </p>
      </div>
    </div>
  )
}

export default Project
