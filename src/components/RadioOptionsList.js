import React from 'react';

const RadioOptionsList = ({ options, currentQuestionId, handleChange }) => {
    return (
        <div>
            {
                options.map((option, index) => {
                    return <label key={option} style={{ display: 'block' }}>
                        <input onChange={() => { handleChange(option, currentQuestionId) }} type="radio" name={'question-' + currentQuestionId} />
                        {option}
                    </label>
                })
            }
        </div>
    );
}

export default RadioOptionsList;