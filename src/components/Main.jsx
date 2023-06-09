import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../services/supabase';

import FirstMainCard from "./offComponents/MainComponents/FirstMainCard.jsx";
import SecondMainCard from "./offComponents/MainComponents/SecondMainCard.jsx";
import Header from "./offComponents/Header.jsx";
import Footer from "./offComponents/Footer.jsx";

function Main() {
    let alreadyMounted = false;
    const navigation = useNavigate();

    const [session, setSession] = useState(null);
    const [entries, setEntries] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        if (!alreadyMounted) {
            getSession();
        }

        alreadyMounted = true;
    }, []);

    useEffect(() => {
        if (session) {
            getEntries();
        }
    }, [session]);

    const getSession = async () => {
        const { data } = await supabase.auth.getSession();

        if (!data.session) {
            navigation('/signin');
            return;
        }

        setSession(data);
        setIsLoggedIn(true);
    };

    const getEntries = async () => {
        console.log(session);

        let { data, error } = await supabase
            .from('entries')
            .select('*')
            .eq('author', session.session.user.email);

        if (!error) {
            setEntries(data);
        }
    };


    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (!error) {
            setIsLoggedIn(false);
            navigation('/');
        }
    };


    return (
        <div>
            <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            <FirstMainCard/>
            <SecondMainCard/>
            <Footer/>
            {entries && (
                <ul>
                    {entries.map(({ entry, id }) => (
                        <li key={id}>{entry}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Main;



