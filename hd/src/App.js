import logo from './logo.svg';

import PostDisplay from './Componets/other/PostDisplay';
import PostGet from './Componets/other/PostGet';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element = {<PostDisplay/>}></Route>
    <Route path="/getdetails" element = {<PostGet/>}></Route>
    
    </Routes>
    </div>
  );
}

export default App;
