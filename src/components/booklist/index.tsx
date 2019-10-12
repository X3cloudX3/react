import React from 'react';
import BookCard from "../bookcard"

export default function Booklist(props: any) {


    return <div className="List">
        {
            props.books.map((movie: any, i: any) => {
                return (


                    <BookCard
                        key={i}
                        image={movie.Poster}
                        title={movie.Title}
                        Type={movie.Type}
                        Director={movie.Director}
                        Actors={movie.Actors}
                        Genre={movie.Genre}
                        Language={movie.Language}
                        ReleasedDate={movie.Year}
                        Plot={movie.Plot}
                    />


                )
            })
        }
    </div>
}