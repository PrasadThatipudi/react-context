import { useEffect, useState } from "react";

const useRepeatedly = (callback, initial, delay) => {
  const [state, setState] = useState(initial);

  useEffect(() => {
    const interval = setInterval(() => setState(callback), delay);

    return () => clearInterval(interval);
  });

  return state;
};

const Timer = () => {
  const count = useRepeatedly((prev) => prev + 1, 0, 1000);

  return <span>Count {count}</span>;
};

const RandomNumber = () => {
  const number = useRepeatedly(Math.random, 0, 1000);

  return <span>Random {number}</span>;
};

const App = () => (
  <>
    <Timer />
    <RandomNumber />
  </>
);

export default App;
