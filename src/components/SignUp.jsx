import { useNavigate } from 'react-router-dom';


import '../App.scss'
import supabase from "../services/supabase.js";
import Header from "./offComponents/Header.jsx";
import Footer from "./offComponents/Footer.jsx";
import SignUpMain from "./offComponents/SignUpComponents/SignUpMain.jsx";


function SignUp() {

    const navigation = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        const { email, password, password_repeat } = e.target.elements;

        if (password.value !== password_repeat.value) {
            alert('Oba hasła muszą być identyczne');
            return;
        }

        let { error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
        });

        if (!error) {
            navigation('/');
            return;
        }

        console.error(error);
    }

    return (
        <>
            <Header />
            <SignUpMain handleSignUp={handleSignUp}/>
            <Footer/>
        </>

    )
}

export default SignUp;