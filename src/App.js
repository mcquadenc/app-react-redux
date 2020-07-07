import React, { Component } from "react";
import Sidebar from './components/Sidebar';
import Video from './components/Video';
import {Provider} from 'react-redux';
import store from './store';

export default class App extends Component {
    state = {
        activeLesson: {},
        modules: [
            {
                id:1, title: 'Start', lessons:[
                    {id: 1, title: 'Primeira aula'},
                    {id: 2, title: 'Segunda aula'}
                ]
            },
            {
                id:1, title: 'Aprendendo', lessons:[
                    {id: 3, title: 'Terceira aula'},
                    {id: 4, title: 'Quarta aula'}
                ]
            }
        ]
    }


  handleInput(){
    
  }
  render(){
    return <div className='App'>
      <Provider store={store}>
        <Video />
        <Sidebar />
      </Provider>
    </div>
  }
}

