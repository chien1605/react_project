import videoHomePage from '../../assets/video-homepage.mp4';
import {useSelector} from "react-redux";

const HomePage = (props) => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const account = useSelector(state => state.user.account);

    console.log("isAuthen", isAuthenticated, "account", account)
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                    <source
                        data-testid="currentDefaultVideo"
                        src={videoHomePage}
                        type="video/mp4"/>
            </video>
            <div className="homepage-content">
                <div className="title-1"> Forms
                    that break
                    the norm</div>
                <div className="title-2">Get more data—like signups, feedback, and anything else—with forms designed to be refreshingly different.</div>
                <div className="title-3">
                    <button>Get started is free</button>
                </div>
            </div>
        </div>
    )
};

export default HomePage;