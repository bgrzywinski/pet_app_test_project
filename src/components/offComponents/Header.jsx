import {Link} from "react-router-dom";

function Header() {


    return (
        <header style={{
            position: "absolute",
        }}>
            <div className="dog-head">
                <img style={{
                    width: '40px',
                    height: '40px'
                }} src="http://www.clker.com/cliparts/j/3/Z/Y/D/5/dog-head-md.png"/>
            </div>
            <nav>
                <div>
                    <h1 className='title_class'><Link to='/'>ZWIERZ OGRÓD</Link></h1>
                </div>
                <div className='nav_elements'>
                    <button className='btn btn_nav'><Link to='/'>Znajdź opiekuna</Link></button>
                    <button className='btn btn_nav'><Link to="/signup">Zarejestruj się</Link></button>
                    <button className='btn btn_nav'><Link to="/signin">Zaloguj się</Link></button>
                </div>
            </nav>
        </header>
    )
}
export default Header