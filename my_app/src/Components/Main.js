import React, { useState } from "react";
import axios from 'axios';
import './style.css';
import Modal from "./Modal";
import Card from "./Card";
import Loader from "./Loader/Loader";
import Loadmore from "./Loadmore";
const Main = () => {
    const [search, setSearch] = useState("");
    const [allres, setAll] = useState("0");
    const [start, setStart] = useState(0);
    const [books, setBooks] = useState([]);
    const [categ, setCateg] = useState("");
    const [order, setOrder] = useState("relevance");
    const [isloading, setIsloading] = useState(false);
    const [isbooks, setIsbooks] = useState(false);

    function handleChange(event) {
        const search = event.target.value;
        setSearch(search);
    }

    function handleSubmit(event) {
        setIsloading(true)
        event.preventDefault();
        let p = "https://www.googleapis.com/books/v1/volumes?q=" + search + categ + "&key=AIzaSyAdZB61IXcjoA9BQOFo4JEa7d77928bCnY&startIndex=" + start + "&maxResults=30&orderBy=" + order;
        axios.get(p)
            .then(res => {
                console.log(p);
                console.log(res.data.items);
                if (start == 0) {
                    setAll(res.data.totalItems);
                }
                setBooks(books.concat(res.data.items))
                setIsloading(false)
                setIsbooks(true)
            })
            .catch(err => console.log(err))
    }

    function loadMore2() {
        setStart(start + 30)
    }
    function scroller() {
        window.scrollTo(0, 0);
    }
    return (

        <form onSubmit={handleSubmit}>
            <div className="header">
                <div className="row1">
                    <h1>Search for books</h1>
                </div>
                <div className="search">
                    <input onChange={handleChange} type="text" placeholder="Enter Your Book Name"/>
                    <button onClick={() => { setBooks([]); setStart(0); scroller() }}><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div className="options">
                    <p>Categories</p>
                    <select name="option_1" onChange={(e) => { setCateg(e.target.value); setBooks([]); setStart(0); scroller() }} onClick={handleSubmit}>
                        <option value="">all</option>
                        <option value=":subject:art">art</option>
                        <option value=":subject:biography">biography</option>
                        <option value=":subject:computers">computers</option>
                        <option value=":subject:history">history</option>
                        <option value=":subject:medical">medical</option>
                        <option value=":subject:poetry">poetry</option>
                    </select>
                    <p>Sorting by</p>
                    <select name="option_2" onChange={(e) => { setOrder(e.target.value); setBooks([]); setStart(0); scroller() }} onClick={handleSubmit}>
                        <option value="relevance">relevance</option>
                        <option value="newest">newest</option>
                    </select>
                </div>
            </div>

            <p className="results">Found {allres} results</p>

            {isloading ? <Loader /> : null}

            <div className="container">
                {
                    <Card book={books} />
                }
            </div>

            {isbooks ? <Loadmore loadMore2={loadMore2} /> : null}
        </form>
    )
}

export default Main;