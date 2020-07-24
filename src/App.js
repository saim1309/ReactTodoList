import React from 'react';
import logo from './logo.jpg'
import './App.css'


class App extends React.Component{
  render(){
    return(
      <div>
        <img src={logo} width="100" hieght="100" className="logo" />
        <h1 className="app-title">Todo App</h1>
        <div className="container">
          Add Item in the list...
          <br/>
          <input 
            type="text"  
            className="input-text"
            placeholder="Insert TODO"
          />
          <button className="add-btn">Add Todo</button>
          <div className="list">
            <ul>
              <li>
                <input type="checkbox" name="" id="" />
                Defult Item
                <button className="btn">DELETE</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
