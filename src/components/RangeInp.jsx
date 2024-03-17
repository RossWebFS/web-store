import { useEffect, useState } from "react";

export const RangeInp = () => {
  const [rangeValue, setRangeValue] = useState(50);
  const [size, setSize] = useState("XL");
  const [sizePosition, setSizePosition] = useState("70")

    useEffect(() => {
        switch (rangeValue) {
            case "0":
              setSize("S");
              setSizePosition("5")
              break;
            case "1":
              setSize("M");
              setSizePosition("27")
              break;
            case "2":
              setSize("L");
              setSizePosition("48.5")
              break;
            case "3":
              setSize("XL");
              setSizePosition("70")
          }
    }, [rangeValue])

  return (
    <>
      <div className="custom-range-value">
        <span style={{left: sizePosition + "%"}}>{size}</span>
      </div>
      <div className="flex items-center">
        <span className="mr-3">S</span>
        <input
          value={rangeValue}
          onChange={(event) => setRangeValue(event.target.value)}
          className="custom-range-inp"
          type="range"
          min={0}
          max={3}
          step={1}
        />
        <span className="ml-3">XL</span>
      </div>
    </>
  );
};
