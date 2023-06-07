import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../services/supabase';

import FirstMainCard from "./offComponents/MainComponents/FirstMainCard.jsx";
import SecondMainCard from "./offComponents/MainComponents/SecondMainCard.jsx";
import Header from "./offComponents/Header.jsx";
import Footer from "./offComponents/Footer.jsx";

function Main() {
    let alreadyMounted = false;
    const naviation = useNavigate();

    const [session, setSession] = useState(null);
    const [entries, setEntries] = useState(null);

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
            naviation('/signin');
            return;
        }

        setSession(data);
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


    const handleSaveText = async (e) => {
        e.preventDefault();

        const { text } = e.target.elements;

        const { data, error } = await supabase
            .from('entries')
            .insert([{ entry: text.value, author: session.session.user.email }])
            .select('*');

        if (!error) {
            setEntries(prev => [...prev, data[0]]);
        }
    };

    return (
        <div>
            <Header />
            <FirstMainCard/>
            <SecondMainCard/>
            <Footer/>
            <form onSubmit={handleSaveText}>
                <textarea id="text" placeholder="Wpisz tekst..."></textarea>
                <button>Zapisz</button>
            </form>
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



