import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Homepage from './components/Homepage';
import Aboutpage from './components/Aboutpage';
import Shoppage from './components/Shoppage';
import Contactpage from './components/Contactpage';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Signin />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/homepage" exact element={<Homepage />} />
          <Route path="/aboutpage" exact element={<Aboutpage />} />
          <Route path="/shoppage" exact element={<Shoppage />} />
          <Route path="/contactpage" exact element={<Contactpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
