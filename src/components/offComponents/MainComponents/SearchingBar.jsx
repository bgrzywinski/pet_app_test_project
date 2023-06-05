import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function SearchingBar() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedAnimal, setSelectedAnimal] = useState('');
    const [selectedSize, setSelectedSize] = useState('');

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };

    const handleAnimalChange = (e) => {
        setSelectedAnimal(e.target.value);
    };

    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dodaj logikę obsługi wyszukiwania
    };

    return (
        <>
            <div className='searching_bar'>
                <form className='searching_form' onSubmit={handleSubmit}>
                    <label>Poszukuje spaceru dla:</label>
                    <div className='button_form_container'>
                        <button
                            className={`btn animal_button ${selectedAnimal === 'dog' ? 'selected' : ''}`}
                            type='button'
                            value='dog'
                            onClick={handleAnimalChange}
                        >
                            Psa
                        </button>
                        <button
                            className={`btn animal_button ${selectedAnimal === 'cat' ? 'selected' : ''}`}
                            type='button'
                            value='cat'
                            onClick={handleAnimalChange}
                        >
                            Kota
                        </button>
                    </div>
                    <label>Termin:</label>
                    <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} dateFormat='dd/MM/yyyy' />
                </form>
                <form className='searching_form' onSubmit={handleSubmit}>
                    <label>Rozmiar:</label>
                    <div className='button_form_container'>
                        <button
                            className={`btn animal_button ${selectedSize === 'small' ? 'selected' : ''}`}
                            type='button'
                            value='small'
                            onClick={handleSizeChange}
                        >
                            do 5kg
                        </button>
                        <button
                            className={`btn animal_button ${selectedSize === 'medium' ? 'selected' : ''}`}
                            type='button'
                            value='medium'
                            onClick={handleSizeChange}
                        >
                            do 20kg
                        </button>
                        <button
                            className={`btn animal_button ${selectedSize === 'large' ? 'selected' : ''}`}
                            type='button'
                            value='large'
                            onClick={handleSizeChange}
                        >
                            do 30kg
                        </button>
                        <button
                            className={`btn animal_button ${selectedSize === 'xlarge' ? 'selected' : ''}`}
                            type='button'
                            value='xlarge'
                            onClick={handleSizeChange}
                        >
                            40kg
                        </button>
                    </div>
                    <label>Miasto:</label>
                    <select value={selectedCity} onChange={handleCityChange}>
                        <option value=''>...</option>
                        <option value='miasto1'>Warszawa</option>
                        <option value='miasto2'>Gdańsk</option>
                        <option value='miasto3'>Kraków</option>
                        <option value='miasto2'>Wrocław</option>
                        <option value='miasto3'>Poznań</option>
                    </select>
                    <div className='submit_button_container'>
                        <button className='btn btn_log btn_sub' type='submit'>
                            Wyszukaj
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default SearchingBar;
