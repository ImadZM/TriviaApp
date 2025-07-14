import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }
    const goToResults = () => {
        navigate('/ResultPage', {
            state: {
                score,
                total: questions.length,
                category,
                difficulty
            }
        });
    }

    return (
        <header>
            <h1>Quizzat</h1>
            <navigator>
                <button className='navigation-button' onClick={goToHome}>Home</button>
                <button className='navigation-button' onClick={goToResults}>End Quiz</button>
            </navigator>
        </header>
    )
}

export default Header