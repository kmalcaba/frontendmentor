import "../css/AdviceBox.css";
import AdviceNumber from "./AdviceNumber";
import Advice from "./Advice";
import Dice from "./Dice";
import { ReactComponent as Divider } from "../img/pattern-divider-desktop.svg";
import { ReactComponent as DividerMobile } from "../img/pattern-divider-mobile.svg";
import { useEffect, useState } from "react";

const AdviceBox = () => {
  const [advice, setAdvice] = useState(
    "It is easy to sit up and take notice what's difficult is getting up and taking action."
  );

  useEffect(() => {
    getAdvice();
  });

  const getAdvice = async () => {
    const advice = await fetchAdvice();

    setAdvice(advice.slip.advice);
  };

  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    return data;
  };

  return (
    <div className='AdviceBox'>
      <AdviceNumber />
      <Advice advice={advice} />
      <Divider />
      <Dice handleClick={getAdvice} />
    </div>
  );
};

export default AdviceBox;
