import "../css/AdviceBox.css";
import AdviceNumber from "./AdviceNumber";
import Advice from "./Advice";
import Dice from "./Dice";
import { ReactComponent as Divider } from "../img/pattern-divider-desktop.svg";
import { ReactComponent as DividerMobile } from "../img/pattern-divider-mobile.svg";

const AdviceBox = () => {
  return (
    <div className='AdviceBox'>
      <AdviceNumber />
      <Advice />
      <Divider />
      <Dice />
    </div>
  );
};

export default AdviceBox;
