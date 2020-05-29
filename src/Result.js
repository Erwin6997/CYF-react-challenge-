import React from "react";

const Result = ({name, scores, Order }) => {
    const sortScores = Order
    ? [...scores].sort((a, b) => (a.s < b.s ? -1 : 1))
    : [...scores].sort((a, b) => (a.s > b.s ? -1 : 1));

    return (
        <div className="card1">
            <p > High Scores : {name} </p>
            {sortScores.map((score, index) => (
                <div className="card2">
                <table className="table">
                    <th key={index}>{score.n.toUpperCase()}</th> <td>{score.s}</td>
                </table>
                </div>
                ))
            }
        </div>
    );
};

export default Result;