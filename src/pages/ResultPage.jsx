import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';


const ResultPage = () => {
    const location = useLocation();
    const { score, total, category, difficulty } = location.state || {};

    const capitalizeFirstLetter = (str) => {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    return (
        <main>
            <Header/>
            <div className='wrapper flex items-center justify-center'>
                <div className='final'>
                    <h2>
                        Quiz finished. Your score is {score}/{total}.
                    </h2>
                    <br />
                    <h3>
                        Category: {capitalizeFirstLetter(category)}
                        <br />
                        Difficulty: {capitalizeFirstLetter(difficulty)}
                    </h3>
                </div>
            </div>
        </main>
    )
}

export default ResultPage