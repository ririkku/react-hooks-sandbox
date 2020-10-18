import React, {useState, useEffect} from 'react';

const App = props => {

  const [state, setState] = useState(props);
  const {name, price} = state;

  
  useEffect(() => {
    // useEffectをcomponentDidMountのように扱いたい場合は、第二引数に空配列を渡す
    console.log('This is like componentDidMount');
  }, []);

  useEffect(() => {
    // 状態管理しているnameが変更されたタイミングで呼び出したい場合、第二引数にnameを配列に入れて渡す
    console.log('This callback is for name only');
  }, [name]);

  // 状態が変わる->レンダリング->useEffectの順に呼び出される模様(ComponentDidMonuntとかdidUpdateっぽい？)
  useEffect(() => {
    console.log('This is like componentDidMount or componentDidMount');
  });

  return (
    <>
    <p>{name}は, {price}円</p>
    <button onClick={() => setState({...state, price: price + 1})}>+1</button>
    <button onClick={() => setState({...state, price: price - 1})}>-1</button>
    <button onClick={() => setState(props)}>reset</button>
    <input value={name} onChange={e => setState({...state, name: e.target.value})} />
    </>
  );
}

App.defaultProps = {
  name: 'サンプル',
  price: 100
}

export default App;
