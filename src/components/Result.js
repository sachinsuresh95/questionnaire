import React from 'react';
import './Result.css';

const Result = ({ questions }) => {
    return (
        <div className="container">
            <h4>Results</h4>
            <table className="result-table">
                <thead>
                    <th>Question</th>
                    <th>Answer</th>
                </thead>
                <tbody>
                    {
                        questions.map(question => {
                            if (question.answer !== '') {
                                return (
                                    <tr key={question.id}>
                                        <td>
                                            {question.question}
                                        </td>
                                        <td>
                                            {question.answer}
                                        </td>
                                    </tr>
                                )
                            } else {
                                return null;
                            }
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Result;