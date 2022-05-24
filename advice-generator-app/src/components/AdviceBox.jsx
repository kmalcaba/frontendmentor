import "../css/AdviceBox.css";
import AdviceNumber from "./AdviceNumber";
import Advice from "./Advice";

const AdviceBox = () => {
  return (
    <div className='AdviceBox'>
      <AdviceNumber />
      <Advice />
    </div>
  );
};

export default AdviceBox;
