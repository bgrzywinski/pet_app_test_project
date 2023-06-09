import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from './components/Main';
import SignUp from './components/SignUp';
import SignIn from './components/SingIn';
import User from "./components/User.jsx";

import './App.scss';
import ProfileList from "./components/offComponents/MainComponents/ProfileList.jsx";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path='/user' element={<User />} />
                <Route path='/profiles' element={<ProfileList />} />
            </Routes>
        </Router>
    );
}

export default App;
