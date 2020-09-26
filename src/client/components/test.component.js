import React, { Component } from 'react';
import '../index.css';
import request from 'superagent/lib/client';

class App extends Component {

    componentDidMount(){
        request
        .get('http://localhost:8080/api/posts')
        .then(res=>{
          console.log(res);
        });
      }



    render() {
        return(
            <h1>My App!!</h1>
        )
    }
}

export default App;