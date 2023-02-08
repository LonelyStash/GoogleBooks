import React, { useState } from "react";
import Modal from "./Modal";
const Card = ({ book }) => {

    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();

    return (
        <>
            {
                book.map((item) => {

                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    if (thumbnail != undefined) {
                        return (
                            <>
                                <div className="card" id="card" onClick={() => { setShow(true); setItem(item) }}>
                                    <p className="pic"><img src={thumbnail} alt="" /></p>
                                    <div className="bottom">
                                        <p className="category" value="">{item.volumeInfo.categories !== undefined ? String(item.volumeInfo.categories) : 'Unknown'}</p>
                                        <h3 className="title" value="">{item.volumeInfo.title}</h3>
                                        <p className="author" value="">{item.volumeInfo.authors !== undefined ? String(item.volumeInfo.authors) : ''}</p>
                                    </div>
                                </div>
                                <Modal show={show} item={bookItem} />
                            </>
                        )
                    }
                })
            }
        </>
    )
}
export default Card;