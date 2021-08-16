import "./Display.scss";
import { useSelector } from "react-redux";
const Display = () => {
  const data = useSelector((state) => state.calc);
  const { num1, num2, calcAction } = data;
  const bigDisplay = num2 === "" ? num1 : num2;
  const smallDisplay = calcAction ? `${num1} ${calcAction}` : "";

  return (
    <div className="calc__display">
      <div className="small__display">{smallDisplay}</div>
      {bigDisplay}
    </div>
  );
};
export default Display;
