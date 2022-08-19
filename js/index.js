// select dom element
const counterElement = document.getElementById("counter");
const incrementElement = document.getElementById("increment");
const decrementElement = document.getElementById("decrement");
// initial value
const initialValue = {
  value: 0,
};

// create reducer function

function reducerFunction(state = initialValue, action) {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - 1,
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
  store.dispatch({
    type: "increment",
  });
});
decrementElement.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
  });
});
