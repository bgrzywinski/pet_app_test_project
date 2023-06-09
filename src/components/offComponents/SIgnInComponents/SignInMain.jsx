import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {animateScroll as scroll} from "react-scroll";

function SignInMain(props) {

    const handleButtonClick = () => {
        scroll.scrollToTop();
    };

    const { handleSignIn, authError } = props;
    SignInMain.propTypes = {
        handleSignIn: PropTypes.func,
        authError: PropTypes.func,
    };

    return (
        <main>
            <div className='main_card'>
                <h1>Jesteś już z nami ?</h1>
                <h2>Zaloguj się</h2>
                <button className='btn btn_aut'>Kontynuuj z Facebook</button>
                <button className='btn btn_aut'>Kontynuuj z Google</button>
                <button className='btn btn_aut'>Kontynuuj z Github</button>
                <p>Lub</p>
                <div className='form_container'>
                    {
                        authError && <div style={{ color: 'red', fontSize: '16px', fontFamily: 'Roboto, sans-serif' }}>{authError}</div>
                    }
                    <form onSubmit={handleSignIn}>
                        <input className='sign_input' id="email" placeholder="Podaj swój adres email" />
                        <input className='sign_input' id="password" type="password" placeholder="Podaj hasło" />
                        <button className='btn btn_log'>Zaloguj</button>
                        <p className='password_forgot_q'>Zapomniałeś hasła ?</p>
                    </form>
                </div>
                <div className='form_footer'>
                    <h2>Jeszcze się nie zarejestrowałeś ?</h2>
                    <h3>Na co czekasz ?</h3>
                    <button className='btn btn_aut btn_sign'><Link to="/signup" onClick={handleButtonClick}>Zarejestruj się</Link></button>
                </div>
            </div>
        </main>
    )
}

export default SignInMain;