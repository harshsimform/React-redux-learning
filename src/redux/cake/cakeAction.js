import { BUY_CAKE } from "./cakeTypes";

// Action Creator
export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};
