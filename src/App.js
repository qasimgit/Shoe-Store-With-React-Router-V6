import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Hello Qasim</h1>
    </div>
  );
}

const MySelf = () => {
  return(
    <div>
      <h1>
        This is Muhammad Qasim Qadri, born and rise in Karachi Pakistan.
      </h1>
      <Outlet/>
    </div>
  )
}

function Other() {
  return (
    <div>
      <h2>
        A kind of passionate about the enterpeneur ships and bussiness ideas and aim to change the local bussiness industry
      </h2>
    </div>
  )
}

function NotFound() {
  return (
    <h2>Not Found</h2>
  )
}

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/myself" className="link">MySelf</Link>
        <Link to="/" className="link">Home</Link>
        

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="myself" element={<MySelf />}>
          <Route path="/" element={<Other/>} />
          </Route>
          <Route path="*" element={<NotFound/>} />

      </Routes>
    </Router>
  );
}

export default App;
