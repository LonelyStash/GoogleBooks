import React from "react";
const Main=()=>{
    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>Search for books</h1>
                </div>
                <div className="search">
                    <input type="text" placeholder="Enter Your Book Name"/>
                    <button><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
        </>
    )
}

export default Main;