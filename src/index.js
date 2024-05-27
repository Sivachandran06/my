import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import RouterApp from './12.ReactRouting/2.RouterApp/RouterApp';
//import { BrowserRouter } from 'react-router-dom';
import ReactAppContextProblem from './14.ContextApi/1.ProblemStatement/Component/ReactAppContextProblem';
// import DarkTheamApp from './15.DarkTheamAPP/DarkTheamApp';
import { BrowserRouter } from 'react-router-dom';
import MainComponent from './16.ContextHell/Component/MainComponent';
import ContectHellApp from './16.ContextHell/ContextHellApp';
import SimpleFormatingComponnent from './18.UseRef/1.SimpleFormatingComponnent/SimpleFormatingComponnent';
import UnduMessage from './18.UseRef/2.useRefExample/UndoMessage';
import EmployeeHerarchy from './0.InterviewQuestions/2.EmployeHirarchy/EmployeeHirarchy';
import hirarchyDataStructure from'./0.InterviewQuestions/2.EmployeHirarchy/File';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ReactAppContextProblem /> */}
    {/* <App /> */}

    
    {/* <BrowserRouter>
    <DarkTheamApp />
    </BrowserRouter> */}
    
    {/* <RouterApp /> */}

    {/* <ContectHellApp /> */}

    {/* <SimpleFormatingComponnent /> */}
    {/* <UnduMessage /> */}
    <EmployeeHerarchy data ={hirarchyDataStructure}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
