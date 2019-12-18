import React from 'react';

const ThankYou = ({ showResult }) => {
    return (
        <div className='container'>
            <h4>Thank you!</h4>
            <button className="btn btn-primary" onClick={showResult}>Submit</button>
        </div>);
}

export default ThankYou;