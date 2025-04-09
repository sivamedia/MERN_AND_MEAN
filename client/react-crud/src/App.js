
import './App.css';
import ShoppingList from './pages/ShoppingList.js';
import Greeting from './components/Greeting';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Tutorials from "./pages/Tutorials.js";
import AddTutorial from './pages/AddTutorial.js';

import Parent from './components/Parent.js';

function App() {
  return (
/*     <div className="App">
      <ShoppingList/>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <Greeting message="Hello, World!"/>
     </div>
    </div> */
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shopping" element={<ShoppingList />} />
        <Route path="tutorials" element={<Tutorials />} />
        <Route path="addTutorials" element={<AddTutorial />} />
        
        <Route path="greeting" element={<Greeting message="Hello, World!"/>} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>

  
  );
}

export default App;
