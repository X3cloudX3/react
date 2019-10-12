import React from 'react';
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { setFavMovies } from "../../redux/actions"

export default function BookCard(props: any) {
    const restrictedStyle = { backgroundColor: "black", border: "solid 3px black", color: "white", width: "50%" }
    console.log(props);

    const mapDispatchToProps = (dispatch: any) => {
        return {
            actions: {
                setFavAction: (movies: any) => {
                    dispatch(setFavMovies(movies))


                }
            }
        }
    }
    connect(
        null,
        mapDispatchToProps
    )(BookCard)
    return (


        <div className="card m-5 " style={restrictedStyle}>

            <img className="card-img-top" src={props.image} alt={props.image} />
            <div className="card-body">
                <Link to={`/movie/${props.title}`}>
                    <h2 className="card-title">{props.title}</h2>
                </Link>
                <h5 className="card-title">year:{props.ReleasedDate}</h5>
                <button onClick={() => {
                    const { setFavAction } = props.actions
                    // const { inputvalue } = this.state



                    setFavAction(props)
                }} className="btn btn-danger btn-block">add to favorits</button>

            </div>

        </div>

    )



}