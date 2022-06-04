import "../css/Dice.css";
import { ReactComponent as DiceSvg } from "../img/icon-dice.svg";

const Dice = ({ handleClick }) => {
  return (
    <div className='Dice' onClick={handleClick}>
      <DiceSvg />
    </div>
  );
};

export default Dice;
