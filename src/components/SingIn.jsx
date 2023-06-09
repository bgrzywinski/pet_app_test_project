import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "./offComponents/Header.jsx";
import SignInMain from "./offComponents/SIgnInComponents/SignInMain.jsx";
import Footer from "./offComponents/Footer.jsx";
import supabase from "../services/supabase.js";

function SignIn() {

    const navigation = useNavigate();

    const [authError, setAuthError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSignIn = async (e) => {
        e.preventDefault();

        const { email, password } = e.target.elements;

        let { error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value,
        });

        if (!error) {
            setIsLoggedIn(true);
            navigation('/user');
            return;
        }

        setAuthError(error.message);
    }

    return (
        <>
            <Header isLoggedIn={isLoggedIn} />
            <SignInMain handleSignIn={handleSignIn} authError={authError} />
            <Footer />
        </>
    )
}

export default SignIn;
