import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
// import TableData from './Component/assignment'
// import Quizqns from './Component/quizeqns'
// import FootballMainCom from './Assignment8Com/mainCom';
import KidsQuiz from "./KidsQuezCom/mainComponent"

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TableData /> */}
    {/* <Quizqns /> */}
    {/* <FootballMainCom/> */}
    <KidsQuiz/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
