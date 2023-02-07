import React from "react";
import './style.css';
const Loadmore = ({ loadMore2 }) => {
    return (
        <div className="lm">
            <button onClick={loadMore2} className='button-55'>Load more</button>
        </div>
    )
}
export default Loadmore;
