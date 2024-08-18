import React from 'react'

const AccommodationCard = ({ days, rates, duration }) => {

  return (
    <div className='flex-1 text-center rounded-md relative shadow-lg basis-72 max-w-96' data-aos="slide-left" data-aos-duration={duration}>
      <p className='banner bg-dark text-light py-5 font-semibold text-lg w-4/5 mx-auto px-10 rounded-md absolute -top-10 left-1/2 -translate-x-1/2 h-24 flex items-center justify-center'>{days}</p>

      <div className="flex flex-col gap-2 bg-white pt-20 pb-10 font-medium px-2">
        {rates.map(rate => {
          const [ hrs, price ] = Object.entries(rate)[0];
          return <React.Fragment key={hrs}>
                  <p className='text-base sm:text-lg'>{hrs}</p>
                  <h1 className='text-xl font-bold sm:text-2xl'>{price}</h1>
                </React.Fragment>
        })}
        <p className='text-xs sm:text-sm'>Note: ₱500/person for guest beyond 25</p>
      </div>
    </div>
  )
}

export default AccommodationCard