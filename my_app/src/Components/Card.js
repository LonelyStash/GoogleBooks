import React from "react";
const Card=()=>{
    return(
        <>
            <div className="card">
                <p className="pic"><img src="./images/book.png" alt="" /></p>
                <div className="bottom">
                    <p className="category">Biography</p>
                    <h3 className="title">React Js</h3>
                    <p className="author">Pavel Novikov</p>
                </div>
            </div>
        </>
    )
}
export default Card;