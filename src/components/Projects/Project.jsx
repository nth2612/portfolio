const Project = ({ index, name, description, imageSrc }) => {
  const delay = 900 + ((index-1) * 4000)
  return (
    <div className='flex flex-row' data-aos='fade-right' data-aos-duration={delay}>
      <div className='max-w-md aspect-video rounded-lg overflow-hidden'>
        <img loading='lazy' src={imageSrc} alt="" />
      </div>
      <div className='dark:text-normal-dark px-4 grow flex flex-col gap-2'>
        <h2 className='font-medium text-xl'>{name}</h2>
        <p>{description}</p>
        <p>
          <a href="">
            <button className='btn-project relative after:bg-primary dark:after:bg-primary-dark flex justify-center items-center overflow-hidden cursor-pointer border-none rounded-md bg-[#183153]'>
              <span className='text-center px-4 py-2 text-white z-10 font-bold tracking-widest'>View source code</span>
            </button>
          </a>
        </p>
        <p>
          <a href="">
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
