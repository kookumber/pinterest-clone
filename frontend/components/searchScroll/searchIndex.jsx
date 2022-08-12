import React, { useState } from "react";

import userPinSearch from "./userPinSearch";

export default function SearchIndex() {
    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState(1)

    
    const handleSearch = (e) => {
        setQuery(e.target.value)
        setPageNumber(1)
    }

    const {
        pins,
        hasMore,
        loading,
        error
    } = userPinSearch(query, pageNumber)

    if (pins === undefined) return null
    // console.log("from pins", pins)

    return (
        // The <> </> brackets are called fragments
        <>
            <div className="body-container">
                <input type="text" onChange={handleSearch}/>
                {pins.map((pin, idx) => {
                    console.log("my pin", pin)
                    return ( 
                        <>
                            <br/>
                            <div key={idx}>{pin}</div>
                            <br/>
                        </>
                    )
                })}
                <div>Pin</div>
                <div>Loading...</div>
                <div>Error</div>
            </div>
        </>
    )
}