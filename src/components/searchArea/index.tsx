import React from 'react';


export default function SearchArea(props: any) {



    return <div className="search-area ">
        <form onSubmit={props.searchBook}>
            <input className="p-1 col-2" onChange={props.HandleSearch} type="text"></input>
            <button className="btn btn-danger" type="submit">search</button>
        </form>
    </div>
}