import { createSlice } from "@reduxjs/toolkit";

const inputControl = (field, action) => {
  const input = action.payload;
  const hasDot = /\d+\./;
  console.log(hasDot.test(field));
  console.log(input);
  if ((input === "." && hasDot.test(field)) || (field == "0" && input == "0")) {
    return field;
  } else if (input !== "." && field == "0") {
    return `${input}`;
  } else {
    return field + `${input}`;
  }
};
const calcIt = (num1, num2, action) => {
  const n1 = +num1;
  const n2 = +num2;
  let res;
  switch (action) {
    case "+":
      res = n1 + n2;
      break;
    case "-":
      res = n1 - n2;
      break;
    case "*":
      res = n1 * n2;
      break;
    case "/":
      res = n1 / n2;
      break;
    default:
      res = n1 + n2;
  }
  return res;
};

const remover = (str) => {
  if (str !== "") {
    return str.slice(0, -1);
  } else return str;
};

const calc = createSlice({
  name: "calculator",
  initialState: {
    num1: "0",
    num2: "",
    calcAction: null,
    num1Reset: false,
  },
  reducers: {
    reset(state) {
      state.num1 = "0";
      state.num2 = "";
      state.calcAction = null;
      state.num1Reset = false;
    },
    getNum(state, action) {
      if (!state.calcAction) {
        if (state.num1Reset) {
          state.num1 = inputControl("", action);
          state.num1Reset = false;
        } else {
          state.num1 = inputControl(state.num1, action);
        }
      } else {
        state.num2 = inputControl(state.num2, action);
      }
      console.log(state.num1, state.num2);
    },
    getAction(state, action) {
      const { num1, num2, calcAction } = state;
      if (
        num1 !== 0 &&
        calcAction === "*" &&
        num2 === "" &&
        action.payload === "="
      ) {
        const res = Math.pow(+num1, 2);
        state.num1 = `${res}`;
        state.calcAction = null;
        state.num1Reset = true;
      } else if (num2 === "") {
        state.calcAction = action.payload !== "=" ? action.payload : null;
        state.num1Reset = false;
      } else {
        const res = calcIt(num1, num2, calcAction);
        state.num1 = `${res}`;
        state.num2 = "";

        if (action.payload === "=") {
          state.calcAction = null;
          state.num1Reset = true;
        } else {
          state.calcAction = action.payload;
          state.num1Reset = false;
        }
      }
      console.log(state.num1, state.num2, state.calcAction);
    },
    backspace(state) {
      const { num1, num2, calcAction } = state;
      if (calcAction) {
        state.num2 = remover(num2);
      } else {
        state.num1 = remover(num1);
      }
    },
  },
});

export const { getAction, getNum, backspace, reset } = calc.actions;
export default calc.reducer;
