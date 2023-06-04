import { useNavigate } from "react-router-dom";
import supabase from "../services/supabase.js";

import LoggedInHeader from "./offComponents/LoggedInComponents/LoggedInHeader.jsx";
import Footer from "./offComponents/Footer.jsx";
import LoggedInMain from "./offComponents/LoggedInComponents/LoggedInMain.jsx";
function LoggedIn() {

    const navigation = useNavigate();
        const handleLogout = async () => {
            let { error } = await supabase.auth.signOut();

            if (!error) {
                navigation('/');
            }
        };

    return (
        <>
        <LoggedInHeader handleLogout={handleLogout}/>
        <LoggedInMain />
        <Footer/>
        </>
    )
}

export default LoggedIn;