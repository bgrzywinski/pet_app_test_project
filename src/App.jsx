import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Main from './components/Main';
import SignUp from './components/SignUp';
import SignIn from './components/SingIn';

import './App.scss';
import LoggedIn from "./components/LoggedIn.jsx";

function App() {


  return (
    <Router>
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/loggedin' element={<LoggedIn/>}/>
        </Routes>
    </Router>
  )
}

export default App
