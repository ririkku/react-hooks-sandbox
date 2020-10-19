import React, {useState, useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Event from '../components/Event';
import reducer from '../reducers';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = e => {
    e.preventDefault();
    // dispatch関数にはactionを渡す
    dispatch({
        type: 'CREATE_EVENT',
        title,
        body
      });

    setTitle('');
    setBody('');
  };

  const deleteAllEvents = e => {
    e.preventDefault();
    const result = window.confirm('全てのイベントを本当に削除しても良いですか？');
    if(result) {
      dispatch({type: 'DELETE_ALL_EVENTS'});
    }
  }

  const unCreatable = title === '' || body === '';

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="forEventTitle">タイトル</label>
          <input className="form-control" id="forEventTitle" value={title} onChange={e => setTitle(e.target.value)}></input>
        </div>
        <div className="form-group">
          <label htmlFor="forEventBody">ボディ</label>
          <textarea className="form-control" id="forEventBody" value={body} onChange={e => setBody(e.target.value)}></textarea>
        </div>

        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>全てのイベントを削除する</button>
      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch}></Event>))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
