import React from 'react';
import './App.css';
import 
  {
    Router ,
    Route,
    Routes,
    Link,
    Outlet ,
    useParams 
  }  from 'react-router-dom';

function Home() {
  return (
   <div>
     <h1>HEllo Qasim</h1>
   </div>
    )

}

function App() {
  return (
   <Router>
     <Routes>
       <Route path="/" element={<Home />} />
     </Routes>
   </Router>
  );
}

export default App;
