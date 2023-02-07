import React from "react";
const Modal=()=>{
    return(
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close"><i class="fa-solid fa-square-xmark"></i></button>
                    <div className="inner-box">
                        <img src="public/images/book.png" alt=""></img>
                        <div className="info">
                            <h1>Title</h1>
                            <h3>dfsdf</h3><br/>
                            <h4>pack publisj <span>2016-04-21</span></h4><br/>
                            <a href="#"><button className="button-55">More</button></a>
                        </div>
                    </div>
                    <h5 className="description">fgggggggggggggggggggggggggggggggggggggggggggggggggggg</h5>
                </div>
            </div>
        </>
    )
}

export default Modal;