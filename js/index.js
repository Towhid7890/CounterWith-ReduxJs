// select dom element
const counterElement = document.getElementById("counter");
const incrementElement = document.getElementById("increment");
const decrementElement = document.getElementById("decrement");
// initial value
const initialValue = {
  value: 0,
};

// identifier action event
const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creator
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

// create reducer function

function reducerFunction(state = initialValue, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
}

// create store
const store = Redux.createStore(reducerFunction);

const render = () => {
  const state = store.getState();
  counterElement.innerText = state.value.toString();
};
render();
store.subscribe(render);

// create click event for button :
incrementElement.addEventListener("click", () => {
  store.dispatch(increment(3));
});
decrementElement.addEventListener("click", () => {
  store.dispatch(decrement(2));
});
