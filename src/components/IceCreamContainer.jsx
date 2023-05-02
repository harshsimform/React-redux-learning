import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";

const IceCreamContainer = () => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();

  const handleBuyIceCream = () => {
    dispatch(buyIceCream());
  };

  return (
    <>
      <h2>Number of IceCream - {numOfIceCream} </h2>
      <button onClick={handleBuyIceCream}>Buy Icecream</button>
    </>
  );
};

export default IceCreamContainer;
