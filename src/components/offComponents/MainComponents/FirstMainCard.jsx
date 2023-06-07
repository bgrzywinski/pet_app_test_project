
import SearchingBar from './SearchingBar';
import { useState } from "react";
import ProfileList from "./ProfileList.jsx";


function FirstMainCard() {

    const [searchResults, setSearchResults] = useState([]);

    const profiles = [
        { id: 1, name: 'Profile 1', animal: 'dog', size: 'small', city: 'Warsaw', date: '2023-06-01' },
        { id: 2, name: 'Profile 2', animal: 'cat', size: 'medium', city: 'Gdańsk', date: '2023-06-02' },
        { id: 3, name: 'Profile 3', animal: 'dog', size: 'large', city: 'Kraków', date: '2023-06-03' },
        { id: 4, name: 'Profile 4', animal: 'cat', size: 'small', city: 'Warsaw', date: '2023-06-04' },
    ];

    const handleSearch = (searchCriteria) => {

        const { animal, size, city, date } = searchCriteria;

        const filteredProfiles = profiles.filter((profile) => {
            return (
                profile.animal === animal &&
                profile.size === size &&
                profile.city === city &&
                profile.date === date
            );
        })
        setSearchResults(filteredProfiles)
    };



    return (
        <main>
            <div className='first_main_card'>
                <h1 className='first_title'>Pets Garden</h1>
                <h2 className='second_title'>Spacery dla zwierząt domowych<br />
                    Znajdź miejsce dla swojego pupila w naszym ogrodzie!
                </h2>
                <SearchingBar onSearch={handleSearch}/>
                <ProfileList searchResults={searchResults}/>
            </div>
        </main>
    )
}

export default FirstMainCard;