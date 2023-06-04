import {Link} from "react-router-dom";
import PropTypes from "prop-types";
function LoggedInHeader({handleLogout}) {

    LoggedInHeader.propTypes = {
        handleLogout: PropTypes.func.isRequired,
    };

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
                    <button className='btn btn_nav'><Link to='/loggedin'>Profil</Link></button>
                    <button onClick={handleLogout}>Wyloguj</button>
                </div>
            </nav>
        </header>
    )
}
export default LoggedInHeader;