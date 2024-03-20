import { useProductContext } from "../contexts/ProductProvider";

export const Checkbox = ({filterTitle}) => {
  const { selectedFilter, setSelectedFilter } = useProductContext();

  return (
    <input
      className="mr-2 custom-checkbox"
      id={`${filterTitle}-checkbox`}
      type="checkbox"
      onChange={(event) => {
        event.target.checked
          ? setSelectedFilter([...selectedFilter, filterTitle])
          : setSelectedFilter(selectedFilter.filter((i) => i !== filterTitle))
      }}
      checked={selectedFilter.find((c) => c === filterTitle)}
    />
  );
};
