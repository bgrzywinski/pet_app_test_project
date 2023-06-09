import { useState } from 'react';
import Footer from './offComponents/Footer.jsx';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import UserHeader from './offComponents/UserComponents/UserHeader.jsx';
import supabase from '../services/supabase.js';

function User() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedAnimal, setSelectedAnimal] = useState('');
    const [selectedWeight, setSelectedWeight] = useState('');
    const [dateOfWalk, setDateOfWalk] = useState('');
    const [position, setPosition] = useState([52.2297, 21.0122]);


    const handleGenderChange = (e) => {
        setSelectedGender(e.target.value);
    };

    const handleWeightChange = (e) => {
        setSelectedWeight(e.target.value);
    };

    const handleAnimalChange = (e) => {
        setSelectedAnimal(e.target.value);
    }

    const handleCityChange = (e) => {
        const city = e.target.value;
        setSelectedCity(city);
        setPosition(cityCoordinates[city] || [52.2297, 21.0122]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Przesłanie danych do supabase
        const { data, error } = await supabase.from('Profile').insert([
            {
                Name: name,
                Surname: surname,
                'Phone number': phoneNumber,
                'Date of birth': dateOfBirth,
                City: selectedCity,
                Gender: selectedGender,
                Animal: selectedAnimal,
                Weight: selectedWeight,
                'Date of walk': dateOfWalk,
            },
        ]);

        if (error) {
            console.error(error);
        } else {
            console.log('Dane zapisane w supabase:', data);
        }

        // Zresetowanie pól formularza
        setName('');
        setSurname('');
        setPhoneNumber('');
        setDateOfBirth('');
        setSelectedCity('');
        setSelectedGender('');
        setSelectedAnimal('');
        setSelectedWeight('');
        setDateOfWalk('');
    };

    const cityCoordinates = {
        city1: [52.2297, 21.0122], // Warszawa
        city2: [54.352, 18.6466], // Trójmiasto
        city3: [51.1079, 17.0385], // Wrocław
        city4: [50.0647, 19.945], // Kraków
        city5: [52.4064, 16.9252], // Poznań
    };

    // Funkcja do obsługi zmiany pozycji
    const handleMapClick = (e) => {
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]);
    };

    return (
        <>
            <UserHeader />
            <div className='user_container'>
                <div className='profile_data_container'>
                    <form className='form_data_container' onSubmit={handleSubmit}>
                        <label>Imię:</label>
                        <input className='data_input' type='text' value={name} onChange={(e) => setName(e.target.value)} />
                        <label>Nazwisko:</label>
                        <input className='data_input' type='text' value={surname} onChange={(e) => setSurname(e.target.value)} />
                        <label>Numer telefonu:</label>
                        <input className='data_input' type='tel' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        <label>Data urodzenia:</label>
                        <input className='data_input' type='date' value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                        <label htmlFor='city'>Miasto:</label>
                        <select className='form_select' id='city' value={selectedCity} onChange={handleCityChange}>
                            <option value='option'>Wybierz miasto</option>
                            <option value='Warszawa'>Warszawa</option>
                            <option value='Trójmiasto'>Trójmiasto</option>
                            <option value='Wrocław'>Wrocław</option>
                            <option value='Kraków'>Kraków</option>
                            <option value='Poznań'>Poznań</option>
                        </select>
                        <label htmlFor='gender'>Płeć:</label>
                        <select className='form_select' id='gender' value={selectedGender} onChange={handleGenderChange}>
                            <option value=''>Wybierz płeć</option>
                            <option value='Mężczyzna'>Mężczyzna</option>
                            <option value='Kobieta'>Kobieta</option>
                            <option value='Inne'>Inne</option>
                        </select>
                        <label htmlFor='animal'>Zwierzę:</label>
                        <select className='form_select' id='animal' value={selectedAnimal} onChange={handleAnimalChange}>
                            <option value=''>Wybierz zwierzę:</option>
                            <option value='Pies'>Pies</option>
                            <option value='Kot'>Kot</option>
                        </select>
                        <label htmlFor='weight'>Waga zwierzęcia:</label>
                        <select className='form_select' id='weight' value={selectedWeight} onChange={handleWeightChange}>
                            <option value=''>Wybierz wagę zwierzęcia</option>
                            <option value='small'>Mała (do 10kg)</option>
                            <option value='medium'>Średnia (11-20kg)</option>
                            <option value='large'>Duża (powyżej 20kg)</option>
                        </select>
                        <label>Preferowana data spaceru:</label>
                        <input className='data_input' type='date' value={dateOfWalk} onChange={(e) => setDateOfWalk(e.target.value)} />
                        <button className='btn btn_log' type='submit'>Zapisz</button>
                    </form>
                    <div className='map_container'>
                        <MapContainer
                            center={position}
                            zoom={13}
                            scrollWheelZoom={true}
                            onClick={handleMapClick}
                        >
                            <TileLayer
                                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                                attribution='Map data &copy; OpenStreetMap contributors'
                            />
                            <Marker position={position} />
                        </MapContainer>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default User;

