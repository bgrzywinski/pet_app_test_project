

function FirstMainCard() {

    return (
        <main style={{
            padding: '0',
            width: '100%',
            height: '100vh',
        }}>
            <div className='first_main_card'>
                <h1 style={{
                    backgroundColor: '#55efc4',
                    backgroundImage: 'linear-gradient(315deg, #55efc4 0%, #000000 74%)',
                    webkitBackgroundClip: 'text',
                    webkitTextFillColor: 'transparent',
                }}>ZWIERZ OGRÓD</h1>
                <h2 style={{
                    color: '#fff',
                    marginTop: '-30px',
                    fontFamily: 'Libre Baskerville, serif',
                    fontSize: '30px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
                    borderRadius: '45px',
                    padding: '5px 20px',
                }}>Opieka i spacery dla zwierząt domowych<br />
                    Znajdź miejsce dla swojego pupila w naszym ogrodzie!
                </h2>
                <div className='searching_bar'>
                    <form className='searching_form'>
                        <label htmlFor="service">Poszukuje usługi dla...</label>
                        <select id="service">
                            <option value='option1'>...</option>
                            <option value="option2">Pies</option>
                            <option value="option3">Kot</option>
                        </select>
                        <select id="service">
                            <option value='option1'>...</option>
                            <option value="option2">Pies</option>
                            <option value="option3">Kot</option>
                        </select>
                        <label>
                            Termin:
                        </label>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default FirstMainCard;