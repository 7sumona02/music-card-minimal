import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-screen page bg-neutral-50'>
      <div className='card-bg h-80 w-80 rounded-[15%] page relative'>
        <div className='h-80 w-80 absolute morphism'></div>
          <div className='absolute top-10 left-10'>
            <img src='/assets/logo.svg' className='w-6' />
          </div>
          <div className='page gap-14 z-1'>
            <div className='text-gradient'>
              <h1>Ultraviolence</h1>
              <p>Lana del ray</p>
            </div>
            <div>
              <img src='/assets/play.svg' className='w-12' />
            </div>
          </div>
          <div className=''>
            <div>
              <img src='/assets/prevbtn.svg' className='w-5 absolute bottom-10 left-10' />
            </div>
            <div>
              <img src='/assets/nextbtn.svg' className='w-5 absolute bottom-10 right-10' />
            </div>
          </div>
      </div>
    </div>
  )
}

export default page