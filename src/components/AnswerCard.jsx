import React from 'react'

const AnswerCard = ({choice,correct,selected,onClick}) => {
    let className = 'answer';
    let isDisabled = false;

    if (selected) {
        if (choice === correct) {
            className += 'Correct';
        } else if (!(choice === correct)) {
            className += 'Wrong';
            isDisabled = true;
        }
    }

    return (
        <>
            <button className={className} onClick={onClick} disabled={isDisabled}>
                {choice}
            </button>

        </>
    );
}

export default AnswerCard