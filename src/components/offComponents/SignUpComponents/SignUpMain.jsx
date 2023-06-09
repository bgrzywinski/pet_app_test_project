import {Link} from "react-router-dom";
import {animateScroll as scroll} from "react-scroll";
import PropTypes from "prop-types";

function SignUpMain({handleSignUp}) {

    SignUpMain.propTypes = {
        handleSignUp: PropTypes.func.isRequired,
    };


    const handleButtonClick = () => {
        scroll.scrollToTop();
    };


    return (
        <main>
            <div className='main_card'>
                <h1>Zarejestruj się</h1>
                <h2>Za darmo!</h2>
                <button className='btn btn_aut'>Kontynuuj z Facebook</button>
                <button className='btn btn_aut'>Kontynuuj z Google</button>
                <button className='btn btn_aut'>Kontynuuj z Github</button>
                <p>Lub</p>
                <div className='form_container'>
                    <form onSubmit={handleSignUp}>
                        <input className='sign_input' name='email' id="email" placeholder="Podaj swój adres email" />
                        <input className='sign_input' id="password" type="password" placeholder="Podaj hasło" />
                        <input className='sign_input' id="password_repeat" type="password" placeholder="Potwierdź hasło" />
                        <button className='btn btn_log'>Zarejestruj się</button>
                    </form>
                </div>
                <div className='form_footer'>
                    <h2>Posiadasz już konto ?</h2>
                    <h3>Na co czekasz ?</h3>
                    <button className='btn btn_aut btn_sign'><Link to="/signin" onClick={handleButtonClick}>Zaloguj się</Link></button>
                </div>
            </div>
        </main>
    )
}

export default SignUpMain;