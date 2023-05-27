
import FacebookImage from '../../assets/Facebook.png';
import Twitter from '../../assets/Twitter.png';
import Instagram from '../../assets/instagram_logo_generated.jpg'


function Footer() {
    return (
        <footer>
            <div className='footer_container'>
                <div className='left_footer_container'>
                    <ul className='footer_nav'>
                        <p>Więcej...</p>
                        <li>sdasd</li>
                        <li>sdsds</li>
                        <li>asdasd</li>
                        <li>asdasd</li>
                    </ul>
                    <ul className='footer_nav'>
                        <p>Miasta</p>
                        <li>asdasd</li>
                        <li>asdasd</li>
                        <li>asdasd</li>
                        <li>asdasd</li>
                    </ul>
                    <ul className='footer_nav'>
                        <p>Znajdź nas !</p>
                        <div className='footer_logos'>
                            <a href="http://twitter.com">
                                <img src={Twitter} alt="Twitter" />
                            </a>
                            <a href="http://facebook.com">
                                <img src={FacebookImage} alt="Facebook" />
                            </a>
                            <a href="http://instagram.com">
                                <img style={{
                                    width: '26px',
                                    height: '26px',
                                }} src={Instagram} alt="Instagram" />
                            </a>
                        </div>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;