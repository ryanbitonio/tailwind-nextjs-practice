import { useState } from "react";
import { IoAddCircle, IoRemoveCircle } from "react-icons/io5";

const FormQuantity = () => {
  // Setting up state for car quantity
  const [cartQuantity, setCartQuantity] = useState(0);

  // Creating function for quantity decrement
  const handleDecrementClick = () => {
    if (cartQuantity > 0) setCartQuantity(cartQuantity - 1);
  };

  // Creating function for quantity increment
  const handleIncrementClick = () => {
    setCartQuantity(cartQuantity + 1);
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center gap-6 text-3xl ">
      <IoRemoveCircle
        className="fill-blue-600 cursor-pointer"
        onClick={handleDecrementClick}
      />
      <span className="select-none"> {cartQuantity}</span>
      <IoAddCircle
        className=" fill-blue-600 cursor-pointer"
        onClick={handleIncrementClick}
      />
    </div>
  );
};

export default FormQuantity;
