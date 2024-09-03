
const FilterBtn = ({ name, icon, onClick }) => {
  return (
    <button className="flex items-center gap-3 border justify-between border-primaryGray rounded-md px-3 py-1 hover:bg-yellow-600 hover:text-white duration-200 max-w-40 h-full" onClick={onClick}>
      <h1 className="font-medium text-xs">{name}</h1>
      {icon}
    </button>
  )
};

export default FilterBtn;
