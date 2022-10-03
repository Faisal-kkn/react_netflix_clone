import React from "react";
import axios from "axios";
import {useState} from 'react'
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import './App.css'

function App() {
  const [state, setState] = useState([])
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost />
      <h1>Hello WOrld</h1>
      {/* <button onClick={()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
          console.log(response.data);
          setState(response.data)
        })
      }}>Click me</button>
      {
        state.map((obj, index)=>{
          return(
            <div>
              <h1>{index + 1}</h1>
              <h1>{obj.title}</h1>
              <h4>{obj.body}</h4>

            </div>
          )
        })
      } */}
    </div>
  );
}

export default App;
