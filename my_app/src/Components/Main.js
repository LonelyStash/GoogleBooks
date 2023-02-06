import React, { useState } from "react";
import Card from "./Card";
import Loader from "./Loader/Loader";
import Loadmore from "./Loadmore";
import axios from "axios";
const Main = () => {
    const [search, setSearch] = useState("");
    const [cat, setCat] = useState("");
    const [order, setOrder] = useState("relevance");
    const [bookData, setData] = useState([]);
    const [allres, setAll] = useState("0");
    const [isloading, setIsloading] = useState(false);
    const [isbooks,setIsbooks]=useState(false);
    const [start, setStart] = useState(0);

    let p = 'https://www.googleapis.com/books/v1/volumes?q=' + search + cat + '&maxResults=30&orderBy=' + order + '&key=AIzaSyAdZB61IXcjoA9BQOFo4JEa7d77928bCnY&startIndex=' + start;
    
    function loadMore2() {
        setStart(start + 30)
        console.log(p)
    }

    const searchBook = (evt) => {
        if (evt.key === "Enter") {
            setIsloading(true)
            setStart(0)
            axios.get(p)
                .then(res => {
                    setData(bookData.concat(res.data.items))
                    if(start==0){
                        setAll(res.data.totalItems)
                    }
                    setIsloading(false)
                    setIsbooks(true)
                })
                .catch(err => console.log(err))
        }
    }
    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>Search for books</h1>
                </div>
                <div className="search">
                    <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e => setSearch(e.target.value)}
                        onKeyPress={searchBook} />
                    <button><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div className="options">
                    <p>Categories</p>
                    <select name="option_1" onChange={e => setCat(e.target.value)}>
                        <option value="">all</option>
                        <option value=":subject:art">art</option>
                        <option value=":subject:biography">biography</option>
                        <option value=":subject:computers">computers</option>
                        <option value=":subject:history">history</option>
                        <option value=":subject:medical">medical</option>
                        <option value=":subject:poetry">poetry</option>
                    </select>
                    <p>Sorting by</p>
                    <select name="option_2" onChange={e => setOrder(e.target.value)}>
                        <option value="relevance">relevance</option>
                        <option value="newest">newest</option>
                    </select>
                </div>
            </div>

            <p className="results">Found {allres} results</p>

            {isloading ? <Loader /> : null}

            <div className="container">
                {
                    <Card book={bookData} />
                }
            </div>

            {isbooks?<Loadmore loadMore2={loadMore2}/>:null}
        </>
    )
}

export default Main;