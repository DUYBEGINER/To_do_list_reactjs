import KeyStrokeHandler from "./KeyStrokeHandler";
import StateProvider from "./StateProvider";
import TodoList from "./TodoList";
import React, { Component } from 'react';


class App extends Component {

 
  render() {
    return (
        <div className="container">
            <div className="row">
                <StateProvider>
                <KeyStrokeHandler>
                    <TodoList/>
                </KeyStrokeHandler>
                </StateProvider>
            </div>
        </div>
    );
}

 
}

export default App;
