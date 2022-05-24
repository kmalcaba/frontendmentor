import "../css/AdviceBox.css";
import AdviceNumber from "./AdviceNumber";
import Advice from "./Advice";
import Divider from "./Divider";

const AdviceBox = () => {
  return (
    <div className='AdviceBox'>
      <AdviceNumber />
      <Advice />
      <Divider />
    </div>
  );
};

export default AdviceBox;
