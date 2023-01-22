import React from 'react';
import './App.css';

const  App = () =>{
  return (
    <div className="App">
     <Header />
     <Technologies />
    </div>
  );
}
const Technologies = () =>{
    return(
        <ul>
            <li>js</li>
            <li>css</li>
            <li>php</li>
            <li>react</li>
        </ul>
    )
}

const Header = () =>{
    return (
        <div>
            <a href="#">Menu</a>
            <a href="#">Find</a>
            <a href="#">Messages</a>
        </div>
    )
}

export default App;
