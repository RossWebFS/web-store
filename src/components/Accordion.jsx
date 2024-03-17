import { IoIosArrowDown } from "react-icons/io";

export const Accordion = ({ isOpened, setIsOpened, title, children }) => {
  return (
    <div className="px-3 py-1.5">
      <div
        className="flex justify-between items-center"
        onClick={() => {
          setIsOpened(title === "Men" ? isOpened : !isOpened);
        }}
      >
        <span>{title}</span>
        <IoIosArrowDown
          className={`${isOpened && "-rotate-90"} transition-all ease-in-out`}
        />
      </div>

      <div className="py-1">
        <div
          className={`${
            !isOpened ? "max-h-96" : "max-h-0"
          } transition-all duration-300 ease-in-out overflow-hidden`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
