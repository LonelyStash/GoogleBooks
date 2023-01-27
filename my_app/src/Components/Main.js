import React ,{useState} from "react";
import Card from "./Card";
import axios from "axios";
const Main=()=>{
    const [search, setSearch]=useState("");
    const searchBook=(evt)=>{
        if(evt.key === "Enter"){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyAdZB61IXcjoA9BQOFo4JEa7d77928bCnY')
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>Search for books</h1>
                </div>
                <div className="search">
                    <input type="text" placeholder="Enter Your Book Name"
                    value={search} onChange={e=>setSearch(e.target.value)}
                    onKeyPress={searchBook}/>
                    <button><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div className="options">
                    <p>Categories</p>
                    <select name="option_1">
                        <option value="1">all</option>
                        <option value="2">art</option>
                        <option value="3">biography</option>
                        <option value="4">computers</option>
                        <option value="5">history</option>
                        <option value="6">medical</option>
                        <option value="7">poetry</option>
                    </select>
                    <p>Sorting by</p>
                     <select name="option_2">
                        <option value="1">relevance</option>
                        <option value="2">newest</option>
                    </select>
                </div>
            </div>

            <p className="results">Found 222 results</p>
            
            <div className="container">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </>
    )
}

export default Main;