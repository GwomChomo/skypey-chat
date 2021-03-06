import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';


const render = () => {
    fancyLog();
    ReactDOM.render(<App />, document.getElementById('root'));}


const fancyLog= () =>{
    console.log("%c Rendered with 👉 👉👇", "background: purple; color: #FFF");
    console.log(store.getState());
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
render();

serviceWorker.unregister();
store.subscribe(render);




