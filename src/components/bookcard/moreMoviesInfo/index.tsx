import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom"


class MoreMoviesInfo extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            Movie: null
        };
    }
    componentDidMount() {
        const { Title } = this.props.match.params

        axios.get(`http://www.omdbapi.com/?t=${Title}&apikey=2c7db622&s`).then((res => {
            console.log(res.data);

            this.setState({ Movie: res.data })
        }))
    }
    render() {
        const restrictedStyle = { backgroundColor: "black", border: "solid 3px black", color: "white", width: "100%" }
        const { Movie } = this.state
        if (!Movie) return <h1>Loading...</h1>
        return (<div className="card m-5 " style={restrictedStyle}>

            <img className="card-img-top" src={Movie.Poster} alt={Movie.Poster} />
            <div className="card-body">
                <h2 className="card-title">{Movie.Title}</h2>
                <h3 className="card-title">Directed by:{Movie.Director}</h3>
                <h4 className="card-title">{Movie.Actors}</h4>
                <h5 className="card-title">type:{Movie.Type}</h5>
                <h5 className="card-title">genre:{Movie.Genre}</h5>
                <h5 className="card-title">rated:{Movie.Rated}</h5>
                <h5 className="card-title">language:{Movie.Language}</h5>
                <h5 className="card-title">released date:{Movie.Released}</h5>
                <p className="card-text">
                    {Movie.Plot}
                </p>
                <button className="btn btn-success btn-block"> <Link to={`/feedback/${Movie.Title}`}>Write Feedback</Link> </button>
                <button className="btn btn-success btn-block"> <Link to={`/allFeedbacks`}>movie feedbacks</Link> </button>
            </div>

        </div>)
    }
}

export default MoreMoviesInfo;