import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

function SignInUp(props) {

    const { handleSignUp } = props;
    SignInUp.propTypes = {
        handleSignUp: PropTypes.func,

    };

    return (
        <main>
            <h1>Zarejestruj się</h1>
            <div className='main_card'>
                <h2>Za darmo!</h2>
                <button className='btn btn_aut'>Kontynuuj z Facebook</button>
                <button className='btn btn_aut'>Kontynuuj z Google</button>
                <button className='btn btn_aut'>Kontynuuj z Apple</button>
                <p>Lub</p>
                <div className='form_container'>
                    <form onSubmit={handleSignUp}>
                        <input name='email' id="email" placeholder="Podaj swój adres email" />
                        <input id="password" type="password" placeholder="Podaj hasło" />
                        <input id="password_repeat" type="password" placeholder="Potwierdź hasło" />
                        <button className='btn btn_log'>Zarejestruj się</button>
                    </form>
                </div>
                <div className='form_footer'>
                    <h2>Posiadasz już konto ?</h2>
                    <h3>Na co czekasz ?</h3>
                    <button className='btn btn_aut btn_sign'><Link to="/signin">Zaloguj się</Link></button>
                </div>
            </div>
        </main>
    )
}

export default SignInUp;