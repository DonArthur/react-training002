import React from 'react'

function Search({ handleInput, searchData }) {
    return(
        <section className="searchbox-wrap">
            <input 
                type="text" 
                placeholder="Search for a movie.." 
                className="searchbox" 
                onChange={handleInput}
                onKeyPress={searchData} 
            />
        </section>
    )
}

export default Search