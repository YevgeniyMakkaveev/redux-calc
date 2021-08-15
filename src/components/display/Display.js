import "./Display.css";
import { useSelector } from "react-redux";
const Display = () => {
  const data = useSelector((state) => state.calc);
  const { num1, num2 } = data;
  const display = num2 === "" ? num1 : num2;

  return <div className="calc__display">{display}</div>;
};
export default Display;
