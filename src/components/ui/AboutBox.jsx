export default function AboutBox({data: { title, description, image } }) {

  const isAmenities = title === 'AMENITIES' ? 'md:flex-row-reverse' : 'md:flex-row';

  const divClass = `flex flex-col ${isAmenities} items-center justify-between w-full gap-14`;

  const imgAfter = `after:absolute after:top-5 after:-bottom-5 ${title === 'AMENITIES' ? 'after:-left-5 after:right-5' : 'after:left-5 after:-right-5'} after:-z-10 after:border after:border-black after:rounded-md`;
  const imgClass = `img w-10/12 md:basis-2/5 bg-black h-64 rounded-md relative ${imgAfter}`;

  return (
    <div className={divClass}>
      <div className={imgClass} style={{
        background: `url(src/assets/images/landing_page/${image}.jpg) no-repeat center / cover`
      }}>s</div>

      <div className="details flex flex-col gap-3 items-center justify-center text-center basis-3/5">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-sm font-semibold w-4/5 md:w-full">{description}</p>
      </div>
    </div>
  )
}