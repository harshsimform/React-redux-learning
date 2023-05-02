import { buyCake } from "../redux";
import { connect } from "react-redux";

const CakeContainer = (props) => {
  return (
    <>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </>
  );
};

// mapStateTOProps function gets the redux state as a parameter and returns an object.
const mapStateTOProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

// mapDispatchToProps function gets the redux dispatch method as a parameter and again return an object.
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateTOProps, mapDispatchToProps)(CakeContainer);
// connect is an HOC that connects functions with our react component. here in our case those functions are mapStateTOProps and mapDispatchToProps.

//? When you want to access redux state in your component you first define mapStateToProps function, it gets the redux state as a parameter which can be used to retrieve the appropriate state properties. in our case we map state.numOfCakes to a prop called numOfCakes which will then render in the JSX.

//? similarly for dispatching actions we have the mapDispatchToProps function this function gets the dispatch method as parameter and allows us to map action creators to props in our component. in our example we mapped dispatch(buyCake()) to a prop called buyCake, this allows us to call buyCake as props.buyCake in ourComponent.
