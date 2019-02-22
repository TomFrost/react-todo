import React from 'react';
import { render } from 'react-dom';


import 'semantic-ui-css/semantic.min.css'
import './index.css'

import App from './App';
import TodoStore from './TodoStore';

const store = new TodoStore();

render(<App todos={ store } />, document.getElementById('root'));