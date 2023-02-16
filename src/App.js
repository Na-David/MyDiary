import React, { useReducer, useRef } from 'react';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

const reducer = (state, action) => {
  let newState = [];
  switch (action.type){
    case 'INIT' : {
      return action.data;
    }
    case 'CREATE' : {
      newState = [action.data, ...state];
      break;
    }
    case 'DELETE' : {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case 'EDIT' : {
      newState = state.map((it) => it.id === action.data.id ? {...action.data} : it)
      break;
    }
    default : return state;
  }
  return newState;
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: "Today's diary #1",
    date: 1676371289684
  },
  {
    id: 2,
    emotion: 2,
    content: "TTTToday's diary #2",
    date: 1676371289685
  },
  {
    id: 3,
    emotion: 3,
    content: "TTTToday's diary #3",
    date: 1676371289686
  },
  {
    id: 4,
    emotion: 4,
    content: "DDDToday's diary #4",
    date: 1676371289687
  },
  {
    id: 5,
    emotion: 5,
    content: "TDDDDDoday's diary #5",
    date: 1676371289688
  }
]

const App = () => {

  const [data, dispatch] = useReducer(reducer,dummyData);

  const dataId = useRef(0);
  //CREATE, DELETE, EDIT

  const onCreate = (date, content, emotion) => {
    dispatch({type : "CREATE", data : {
      id : dataId.current,
      date : new Date(date).getTime(),
      content,
      emotion
    }});
    dataId.current += 1;
  };

  const onDelete = (targetId) => {
    dispatch({type : "DELETE", targetId})
  };

  const onEdit = (targetId, date, content, emotion) => {
    dispatch({type : "EDIT", data : {
      id : targetId,
      date : new Date(date).getTime(),
      content,
      emotion
    }});

  }

  return (
    <DiaryStateContext.Provider value = {data}>
      <DiaryDispatchContext.Provider
        value = {{
          onCreate, 
          onDelete, 
          onEdit
        }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/new' element={<New />} />
              <Route path='/edit' element={<Edit />} />
              <Route path='/diary' element={<Diary />} />
              <Route path='/diary/:id' element={<Diary />} />
            </Routes>
         </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
