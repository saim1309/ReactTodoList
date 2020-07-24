import React from 'react';
import logo from './logo.jpg'
import './App.css'

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      newItem:"",
      list: []
    }
  }

  addItem = (todoValue) =>{
    if(todoValue != ""){
      const newItem ={
        id: Date.now(),
        value: todoValue,
        isDone: false
      };
      const list = [...this.state.list]
      list.push(newItem);
      this.setState({
        list,
        newItem:""
      })
    }
  }

  deleteItem = (id) =>{
    const list = [...this.state.list]
    let updatedList = list.filter(item => item.id !== id)
    this.setState({
      list: updatedList
    })
  }


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
