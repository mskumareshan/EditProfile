import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EditProfile from './editProfile';
import {createStore} from "redux";
import profile from "./reducer/profile";
import { Provider } from "react-redux";
import registerServiceWorker from './registerServiceWorker';


const store = createStore( profile );
ReactDOM.render(
    <Provider store={store}>
        <EditProfile />
    </Provider> 
, document.getElementById('root'));
registerServiceWorker();
