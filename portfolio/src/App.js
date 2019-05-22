import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import profile from './images/profile.png'

function App() {
  return (
    <div className="App">
      <header class="bg-dark py-3 hdr">
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-lg-12">
              <h1 class="display-4 text-black mb-2 fnt" ></h1>
              <img src={profile} class="rounded-circle img-circle" height="250px"></img>
            </div>
          </div>
        </div>
      </header>
      <header class="bg-dark">
      m
      </header>
    </div>
  );
}

export default App;
