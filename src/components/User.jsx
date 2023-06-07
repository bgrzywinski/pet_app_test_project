import { useState } from 'react';
import Footer from "./offComponents/Footer.jsx";
import UserHeader from "./offComponents/UserComponents/UserHeader.jsx";
import supabase from "../services/supabase.js";

function User() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [birthYear, setBirthYear] = useState('');
    const [city, setCity] = useState('');
    const [weight, setWeight] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const [profileData, setProfileData] = useState([]);

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleBirthYearChange = (e) => {
        setBirthYear(e.target.value);
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleWeightChange = (e) => {
        setWeight(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Tutaj można dodać logikę zapisu danych do Supabase lub innego serwisu
        // Możesz użyć wartości zmiennych stanu (firstName, lastName, itp.) do pobrania danych wprowadzonych przez użytkownika i zapisania ich w bazie danych.

        // Przykład:
        try {
            const { data, error } = await supabase.from('Profile').select('Name');
            if (error) {
                console.error(error);
            }
            setProfileData(data);
        } catch (error) {
            console.error('Error fetching profile data:', error);
        }

        // Wyczyszczenie formularza po zapisie danych
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setEmail('');
        setBirthYear('');
        setCity('');
        setWeight('');
        setAddress('');
        setGender('');
    }


    return (
        <>
            {profileData.length > 0 ? (
                profileData.map((profile) => (
                    <p key={profile.id}>{profile.Name}</p>
                ))
            ) : (
                <p>Brak dostępnych profili.</p>
            )}
            <UserHeader />
            <div className='profile_data_container'>
                <h2>Uzupełnij swój profil</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="firstName">Imię *</label>
                    <input className='data_input' type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} />

                    <label htmlFor="lastName">Nazwisko *</label>
                    <input className='data_input' type="text" id="lastName" value={lastName} onChange={handleLastNameChange} />

                    <label htmlFor="phoneNumber">Numer telefonu *</label>
                    <input className='data_input' type="text" id="phoneNumber" value={phoneNumber} onChange={handlePhoneNumberChange} />

                    <label htmlFor="email">Email *</label>
                    <input className='data_input' type="text" id="email" value={email} onChange={handleEmailChange} />

                    <label htmlFor="birthYear">Rok urodzenia *</label>
                    <input className='data_input' type="text" id="birthYear" value={birthYear} onChange={handleBirthYearChange} />

                    <label htmlFor="city">Miasto *</label>
                    <input className='data_input' type="text" id="city" value={city} onChange={handleCityChange} />

                    <label htmlFor="district">Jaką wagę zwierzęcia preferujesz ?</label>
                    <input className='data_input' type="text" id="weight" value={weight} onChange={handleWeightChange} />

                    <label htmlFor="address">Adres *</label>
                    <input className='data_input' type="text" id="address" value={address} onChange={handleAddressChange} />

                    <label htmlFor="gender">Płeć</label>
                    <select id="gender" value={gender} onChange={handleGenderChange}>
                        <option value="">Wybierz</option>
                        <option value="male">Mężczyzna</option>
                        <option value="female">Kobieta</option>
                        <option value="other">Inna</option>
                    </select>
                    <button type="submit">Zapisz</button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default User;
