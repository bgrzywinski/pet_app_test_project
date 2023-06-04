import SearchingBar from "./SearchingBar.jsx";


function FirstMainCard() {

    return (
        <main style={{
            padding: '0',
            width: '100%',
            height: '100vh',
        }}>
            <div className='first_main_card'>
                <h1 className='first_title'>ZWIERZ OGRÓD</h1>
                <h2 className='second_title'>Opieka i spacery dla zwierząt domowych<br />
                    Znajdź miejsce dla swojego pupila w naszym ogrodzie!
                </h2>
                <SearchingBar/>
            </div>
        </main>
    )
}

export default FirstMainCard;