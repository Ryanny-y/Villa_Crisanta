const VillaHero = () => {
  return (
    <section id="hero"
      className='relative h-svh flex items-center justify-center
      after:absolute after:top-0 after:h-full after:right-0 after:w-full after:bg-[url("images/villa1/villa-1.webp")] after:bg-cover after:bg-center after:bg-no-repeat after:brightness-50
      '
    >
      <div className="container relative z-10">
        <div className="hero-title flex flex-col items-center justify-center gap-5 text-white text-center">
          <p className='font-sm font-bold'>Welcome to</p>
          <h1 className='font-bold tracking-wider text-5xl sm:text-6xl w-11/12 md:w-4/6 lg:w-1/2 leading-snug'>Villa Crisanta 1 Spring Resort</h1>
          <p className='font-semibold text-base md:text-lg tracking-wide'>BEDROOMS | SWIMMING POOLS | CONFERENCE ROOM | BILLIARDS</p>
        </div>
      </div>
    </section>
  )
}

export default VillaHero