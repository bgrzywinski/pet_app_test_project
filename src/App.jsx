import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Main from './components/Main';
import SignUp from './components/SignUp';
import SignIn from './components/SingIn';

import './App.scss';

function App() {


  return (
    <Router>
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
        </Routes>
    </Router>
  )
}

export default App
