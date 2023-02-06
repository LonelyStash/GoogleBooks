import React from "react";
const Card = ({ book }) => {
    console.log(book);
    return (
        <>
            {
                book.map((item) => {
                    
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    if (thumbnail != undefined) {
                        return (
                            <>
                                <div className="card">
                                    <p className="pic"><img src={thumbnail} alt="" /></p>
                                    <div className="bottom">
                                        <p className="category" value="">{item.volumeInfo.categories}</p>
                                        <h3 className="title" value="">{item.volumeInfo.title}</h3>
                                        <p className="author" value="">{item.volumeInfo.authors}</p>
                                    </div>
                                </div>
                            </>
                        )
                    }
                })
            }
        </>
    )
}
export default Card;