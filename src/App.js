import React from 'react';
import './App.css';
import Commentbox from './componeents/Commentbox';
import Navebar from './componeents/Navbar';
import Viewcomments from './componeents/Viewcomments';



function App() {
  return (
    
      <div className="App">
        <Navebar />
        <Commentbox />
        <Viewcomments />
        
      </div>
    
  );
}

export default App;
