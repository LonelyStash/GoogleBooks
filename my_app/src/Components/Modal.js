import React from "react";
const Modal = ({ show, item, onClose}) => {
    if(!show){
        return null;
    }
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return (
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" onClick={onClose}><i class="fa-solid fa-square-xmark"></i></button>
                    <div className="inner-box">
                        <img src={thumbnail} alt=""></img>
                        <div className="info">
                            <h1>{item.volumeInfo.title}</h1>
                            <h3>{String(item.volumeInfo.authors)}</h3><br />
                            <h4>{item.volumeInfo.publisher}, <span>{item.volumeInfo.publishedDate}</span></h4><br />
                            <a href={item.volumeInfo.previewLink}><button className="button-6">More</button></a>
                        </div>
                    </div>
                    <br /><h5 className="description">{item.volumeInfo.description}</h5>
                </div>
            </div>
        </>
    )
}

export default Modal;