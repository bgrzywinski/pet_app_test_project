import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
function SearchingBar() {

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedCity, setSelectedCity] = useState('');

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };


    return (
        <>
            <div className='searching_bar'>
                <form className='searching_form'>
                    <label>Poszukuje spaceru dla:</label>
                    <div className='button_form_container'>
                        <button className="btn animal_button">Psa</button>
                        <button className="btn animal_button">Kota</button>
                    </div>
                    <label>Termin:</label>
                        <DatePicker
                            selected={selectedDate}
                            onChange={date => setSelectedDate(date)}
                            dateFormat="dd/MM/yyyy"
                        />
                </form>
                <form className='searching_form'>
                    <label>Rozmiar:</label>
                        <div className='button_form_container'>
                        <button className="btn animal_size_button">do 5kg</button>
                        <button className="btn animal_size_button">do 20kg</button>
                        <button className="btn animal_size_button">do 30kg</button>
                        <button className="btn animal_size_button">40kg</button>
                        </div>
                    <label>Miasto:</label>
                        <select value={selectedCity} onChange={handleCityChange}>
                            <option value="">...</option>
                            <option value="miasto1">Warszawa</option>
                            <option value="miasto2">Gdańsk</option>
                            <option value="miasto3">Kraków</option>
                            <option value="miasto2">Wrocław</option>
                            <option value="miasto3">Poznań</option>
                        </select>
                    <div className='submit_button_container'>
                        <button className='btn btn_log btn_sub' type="submit">Wyszukaj</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SearchingBar;