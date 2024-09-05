import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Signin />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
