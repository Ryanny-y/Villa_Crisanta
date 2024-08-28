
const FilterBtn = ({ name, icon, onClick }) => {
  return (
    <button className="flex items-center gap-3 border border-primaryGray rounded-md px-3 py-1" onClick={onClick}>
      <h1 className="font-medium text-xs">{name}</h1>
      {icon}
    </button>
  )
};

export default FilterBtn;
