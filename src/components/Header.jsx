import React from 'react'
import { useNavigate, useLocation  } from 'react-router-dom'

const Header = ({score,total,category,difficulty}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const goToHome = () => {
        navigate('/');
    }
    const goToResults = () => {
        navigate('/ResultPage', {
            state: {
                score,
                total,
                category,
                difficulty
            }
        });
    }

    const isHomePage = location.pathname === '/';
    const isGamePage = location.pathname === '/GamePage';
    const isResultPage = location.pathname === '/ResultPage';

    return (
        <header>
            <h1>Quizzat</h1>
            <div className='navigator'>
                {!isHomePage && <button className='navigation-button' onClick={goToHome}>Home</button>}
                {isGamePage && <button className='navigation-button' onClick={goToResults}>End Quiz</button>}
                
            </div>
        </header>
    )
}

export default Header