import { useDispatch } from "react-redux";
import { getNum, getAction, backspace, reset } from "../../store/CalcSlicer";
import "./Buttons.scss";
const Buttons = () => {
  const dispatch = useDispatch();

  const tapNumBtn = (value) => {
    dispatch(getNum(value));
  };
  const getRes = (value) => {
    dispatch(getAction(value));
  };

  const deleteNum = () => {
    dispatch(backspace());
  };

  const createNBtn = (btn) => {
    return (
      <button
        className="btn btn__regular"
        key={btn}
        value={btn}
        onClick={(e) => tapNumBtn(e.target.value)}
      >
        {btn}
      </button>
    );
  };
  const createAcBtn = (btn, label) => {
    if (!label) {
      label = btn;
    }
    return (
      <button
        className="btn btn__regular"
        key={btn}
        value={btn}
        onClick={(e) => getRes(e.target.value)}
      >
        {label}
      </button>
    );
  };
  const createOtherBtn = (btn) => {
    return (
      <button className="btn btn_special" key={btn} onClick={() => deleteNum()}>
        {btn}
      </button>
    );
  };

  return (
    <div className="btn__keyboard">
      <div className="keyboard__group">
        {createNBtn("7")}
        {createNBtn("8")}
        {createNBtn("9")}
        {createOtherBtn("DEL")}
        {createNBtn("4")}
        {createNBtn("5")}
        {createNBtn("6")}
        {createAcBtn("+")}
        {createNBtn("1")}
        {createNBtn("2")}
        {createNBtn("3")}
        {createAcBtn("-")}
        {createNBtn("0")}
        {createNBtn(".")}
        {createAcBtn("/")}
        {createAcBtn("*", "X")}
      </div>
      <div className="nest__big">
        <button
          className="btn__big btn_special"
          onClick={() => dispatch(reset())}
        >
          RESET
        </button>
        <button
          className="btn__big btn__red"
          value="="
          onClick={(e) => getRes(e.target.value)}
        >
          =
        </button>
      </div>
    </div>
  );
};
export default Buttons;
