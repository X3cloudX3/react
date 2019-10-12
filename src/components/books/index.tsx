import React from "react";
import SearchArea from "../searchArea"
import axios from "axios";
import BookList from "../booklist"
import Header from "../Header"

export default class books extends React.Component<any, any>{


    constructor(props: any) {
        super(props);

        this.state = {
            books: [],
            SearchFeild: ""

        }
    }

    searchBook = (e: any) => {
        e.preventDefault()
        axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=2c7db622&s=${this.state.SearchFeild}`).then((res => {
            console.log(res.data.Search);

            this.setState({ books: [...res.data.Search] })


        }))
    }



    HandleSearch = (e: any) => {
        this.setState({ SearchFeild: e.target.value })
    }

    render() {
        return (
            <div className="container">
                <Header title={"movie cards"} />
                <SearchArea searchBook={this.searchBook} HandleSearch={this.HandleSearch} />



                <BookList books={this.state.books} />


            </div>
        )
    }
}


