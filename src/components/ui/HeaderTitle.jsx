export default function HeaderTitle({title}) {
  return (
    <h1 className="text-4xl font-bold relative inline tracking-wider  after:bg-black after:h-1 after:w-full after:absolute after:-bottom-0.5 after:left-0">{title}</h1>
  )
}