import React from 'react';
import { Spring } from 'react-spring/renderprops';

import RadioOptionsList from './RadioOptionsList';

const Question = ({ currentQuestion, handleChange, showNext }) => {
    return (
        <Spring
            from={{ marginLeft: 1000 }}
            to={{ marginLeft: 0 }}
            key={currentQuestion.id}
        >
            {props => (
                <div style={props}>
                    <div className="container">
                        <h4>{currentQuestion.question}</h4>
                        {currentQuestion.options.length > 0 ? (
                            <RadioOptionsList handleChange={handleChange} currentQuestionId={currentQuestion.id} options={currentQuestion.options} />
                        ) : (
                                <input type="text" value={currentQuestion.answer} onChange={(e) => { handleChange(e.target.value, currentQuestion.id) }} style={{ display: 'block' }} />
                            )}
                        <button disabled={currentQuestion.answer === ''} className="btn btn-primary mt-2" onClick={showNext}>Next</button>
                    </div>
                </div>
            )}
        </Spring>
    );
}


export default Question;