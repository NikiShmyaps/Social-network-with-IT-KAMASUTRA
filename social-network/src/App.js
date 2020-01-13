import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://image.winudf.com/v2/image1/Y29tLnJhaW4uY29hc3RfaWNvbl8xNTYyMzIwMTI4XzAxMA/icon.png?w=100&fakeurl=1" alt="logo"/>
      </header>
      <nav className="nav">
        <div>
          <a href="#">Profile</a>
        </div>
        <div>
          <a href="#">Messages</a>
        </div>
        <div>
          <a href="#">News</a>
        </div>
        <div>
          <a href="#">Music</a>
        </div>
        <div>
          <a href="#">Settings</a>
        </div>
      </nav>
      <main className="content">
        <div>
          <img src="https://cdn.nexusnewsfeed.com/images/2019/8/dreamstime_s_63676500-768x512-1568585857430.jpg?w=992&amp;h=744" alt="title"/>
        </div>
        <div>
          ava + description
        </div>
        <div>
          Posts
          <div>
            post one
          </div>
          <div>
            post two
          </div>
          <div>
            post three
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
