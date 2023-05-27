import {Link} from "react-router-dom";


function SecondMainCard() {
    return (
        <main style={{
            padding: '80px 0'
        }}>
            <h1>Oto jak działamy</h1>
            <h3>Wyszukaj i nawiąż kontakt z zaufanymi opiekunami !</h3>
            <div className='second_main_card_part1'>
             <div className='second_main_columns'>
                 <h3>1. Znajdź zweryfikowanego opiekuna</h3>
                 <p>Wyszukaj odpowiedniego i doświadczonego opiekuna dla Twojego pupila w okolicy.</p>
             </div>
                <div className='second_main_columns'>
                    <h3>2. Zaaranżuj z naszą pomocą spotkanie</h3>
                    <p>To ważne aby poznać swojego potencjalnego opiekuna i móc wspólnie ustalić szczegóły i charakter opieki.</p>
                </div>
                <div className='second_main_columns'>
                    <h3>3. Zapłać całkowicie online</h3>
                    <p>Z pomocą naszego systemu możesz zarezerwować sittera, a w razie zmiany planów odwołać go całkowicie za darmo.</p>
                </div>
            </div>
            <div className='second_main_card_part2'>
                <div className='img_container'></div>
                <ul className='primary_check_container'>
                    <h2 style={{
                        fontFamily: 'Sigmar One, cursive',
                        marginBottom: '30px',
                    }}>Dlaczego warto nam zaufać ?</h2>
                <li>Dokładnie sprawdzamy każdego zarejestrowanego opiekuna (dowód tożsamości, social media, wywiad).</li>
                <li>Na specjalną prośbę przygotowywujemy umowę, którą opiekun podpisuje przed rozpoczęciem świadczenia wybranej usługi.</li>
                <li>Organizujemy wykłady i szkolenia dotyczące szerokopojętego petsittingu.</li>
                <li>Tworzymy naszą społeczność z pasji i przyjaźni z naszymi czworonogami i nie tylko!</li>
                </ul>
            </div>
            <h3 style={{
                marginTop: '80px',
            }} className='service_title'>Przyjacielskie podejście, żadnych klatek</h3>
            <div className='second_main_card_part3'>
                <div className='service'>
                <div className='service_wrap'>
                    <div className='service_icon1'></div>
                    <p className='service_text'>Elastyczna i dogodna lokalizacja</p>
                </div>
                </div>
                <div className='service'>
                    <div className='service_wrap'>
                        <div className='service_icon2'></div>
                        <p className='service_text'>Zweryfikowana i sprawdzona opieka</p>
                    </div>
                </div>
                <div className='service'>
                    <div className='service_wrap'>
                        <div className='service_icon3'></div>
                        <p className='service_text'>Zaangażowane wsparcie 24/7</p>
                    </div>
                </div>
            </div>
            <div className='second_main_card_part4'>
                <ul className='secondary_check_container'>
                    <h2 style={{
                        fontFamily: 'Sigmar One, cursive',
                    }}>W jakich sytuacjach możesz na nas liczyć ?</h2>
                    <li>Wyjeżdzasz na wakacje ?</li>
                    <li>Intensywnie pracujesz i nie chcesz a by Twój pupil przez to cierpiał ?</li>
                    <li>Nie masz z kim zostawić swojego zwierzaka ?</li>
                    <li>Nie masz kogo poprosić o pomoc i opiekę ?</li>
                    <li>Chcesz spróbować nowych rozwiązań i sposobów opieki ?</li>
                    <button style={{
                        borderRadius: '16px',
                        border: '1px solid transparent',
                        padding: '7px 9px',
                        fontSize: '0.9em',
                        fontFamily: 'Sigmar One, cursive',
                        cursor: 'pointer',
                        boxShadow: '0 2px 2px rgba(0, 0, 0, 0.5)',
                        marginTop: '50px',
                    }}><Link to='/' style={{
                        color: '#213547',
                    }}>Znajdź opiekuna</Link></button>
                </ul>
                <div className='second_img_container'></div>
            </div>

        </main>
    )
}

export default SecondMainCard;