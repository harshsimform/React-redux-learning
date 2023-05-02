// "useSelector" hook is used to extract the state of a component from the redux store using the selector function.
// "useDispatch" hook is used to update the state of the component and return a new state.

import { buyCake } from "../redux";
import { useSelector, useDispatch } from "react-redux";

const CakeContainer2 = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  const handleBuyCake = () => {
    dispatch(buyCake());
  };

  return (
    <>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={handleBuyCake}>Buy Cake</button>
    </>
  );
};

export default CakeContainer2;
