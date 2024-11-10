import TodoList from "./TodoList";
import React, { Component } from 'react';


class App extends Component {

 
  render() {
    return (
        <div className="container">
            <div className="row">
                <TodoList/>
            </div>
        </div>
    );
}

 
}

export default App;
