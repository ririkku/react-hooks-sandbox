import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [xxx, setXxx] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const twoTimes = () => setCount(previousCount => previousCount * 2);

  const onlyThree = () => {
    if(count % 3 !== 0) {
      console.log('割り切れない！');
      return setXxx(0);
    }
    const value = count / 3;
    return setXxx(value);
  }

  const reset = () => setCount(0);

  return (
    <>
      <p>count: {count}</p>
      <p>3で割った時のあれ。: {xxx}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={twoTimes}>X2</button>
      <button onClick={onlyThree}>3の倍数の時だけ3で割る</button>
      <br></br>
      <button onClick={reset}>reset</button>
    </>
  );
}

export default App;
