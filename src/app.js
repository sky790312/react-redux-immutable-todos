import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducer';
import { TodoList } from './containers';

const store = createStore(reducer);

// use Provider to connect react & redux
render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('app')
);

// before single store by redux:
//<TodoList todos={state}
//          addTodo={text => dispatch(addTodo(text))}
//          toggleTodo={id => dispatch(toggleTodo(id))} />


// react with redux
// 1. design actions
// 2. design reducer
// 3. connect
// 4. Provider with single store