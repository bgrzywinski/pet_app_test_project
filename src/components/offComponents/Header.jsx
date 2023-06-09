import {Link, useNavigate} from "react-router-dom";
import PropTypes from "prop-types";
import supabase from "../../services/supabase.js";

function Header({ isLoggedIn }) {
    Header.propTypes = {
        isLoggedIn: PropTypes.bool.isRequired,
    };
    const navigation = useNavigate();

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (!error) {
            navigation('/');
        }
    };

    return (
        <header style={{ position: "absolute" }}>
            <div className="dog-head">
                <img
                    style={{
                        width: "40px",
                        height: "40px"
                    }}
                    src="http://www.clker.com/cliparts/j/3/Z/Y/D/5/dog-head-md.png"
                />
            </div>
            <nav>
                <div>
                    <h1 className="title_class">
                        <Link to="/">Pets Garden</Link>
                    </h1>
                </div>
                <div className="nav_elements">
                    {isLoggedIn ? (
                        <>
                            <button className="btn btn_nav">
                                <Link to="/">Znajdź opiekuna</Link>
                            </button>
                            <button className='btn btn_nav'>
                                <Link to="/user">Profil</Link>
                            </button>
                            <button className="btn btn_nav" onClick={handleLogout}>
                                <Link to="/">Wyloguj się</Link>
                            </button>

                        </>
                    ) : (
                        <>
                            <button className="btn btn_nav">
                                <Link to="/">Znajdź opiekuna</Link>
                            </button>
                            <button className="btn btn_nav">
                                <Link to="/signup">Zarejestruj się</Link>
                            </button>
                            <button className="btn btn_nav">
                                <Link to="/signin">Zaloguj się</Link>
                            </button>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;
