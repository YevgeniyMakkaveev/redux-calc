import { useDispatch } from "react-redux";
import { getNum, getAction, backspace } from "../../store/CalcSlicer";
const Buttons = () => {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
  const symbol = ["+", "-", "/", "*", "="];
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

  const mapNBtns = (btns) =>
    btns.map((btn) => (
      <button key={btn} value={btn} onClick={(e) => tapNumBtn(e.target.value)}>
        {btn}
      </button>
    ));

  const mapCBtns = (btns) =>
    btns.map((btn) => (
      <button key={btn} value={btn} onClick={(e) => getRes(e.target.value)}>
        {btn}
      </button>
    ));

  return (
    <div className="button__group">
      {mapNBtns(numbers)}
      {mapCBtns(symbol)}
      <button onClick={() => deleteNum()}>backspace</button>
    </div>
  );
};
export default Buttons;
