import supabase from "../../../services/supabase.js";
import ProfileList from './ProfileList';
import SearchingBar from './SearchingBar';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const FirstMainCard = () => {
    const navigate = useNavigate();

    const [profiles, setProfiles] = useState([]);
    const [filteredProfiles, setFilteredProfiles] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                await fetchProfiles();
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);


    const fetchProfiles = async () => {
        try {
            const { data, error } = await supabase.from('Profile').select('*');
            if (error) {
                console.error(error);
            } else {
                setProfiles(data);
                setFilteredProfiles(data);
            }
        } catch (error) {
            console.log(error);
        }
    };


    const handleSearch = (searchData) => {
        const filtered = profiles.filter((profile) => {
            return (
                profile.animal === searchData.animal &&
                profile.size === searchData.size &&
                profile.city === searchData.city &&
                profile.dateOfWalk === searchData.dateOfWalk
            );
        });
        setFilteredProfiles(filtered);
        navigate('/profiles');
    };

    return (
        <main>
            <div className="first_main_card">
                <h1 className="first_title">Pets Garden</h1>
                <h2 className="second_title">
                    Spacery dla zwierząt domowych<br />
                    Znajdź miejsce dla swojego pupila w naszym ogrodzie!
                </h2>
                <SearchingBar onSearch={handleSearch} />
                <ProfileList profiles={filteredProfiles} />
            </div>
        </main>
    );
};

export default FirstMainCard;



