import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';
import FirstApp from './FirstApp';
import CounterApp from './CounterApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <CounterApp value={ 1 }/> */}
        <FirstApp title='Hola este es mi nuevo titulo'/>
    </React.StrictMode>
)