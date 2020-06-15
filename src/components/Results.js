import React from 'react';
import ResultDetail from './ResultDetail';

function Results ({ results, openPopup }) {
    return (
        <section className="results">
            {results.map(result => (
                <ResultDetail result={result} key={result.imdbID} openPopup={openPopup} />
            ))}
        </section>
    )
}

export default Results