import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Menu from './Components/Menu';

function App() {
  return (
    <BrowserRouter>
          <Navbar />
          <Routes> 
            <Route path="" exact element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/menu" element={<Menu />}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;