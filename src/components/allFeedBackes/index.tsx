import React from 'react';
import { connect } from "react-redux"
import Header from "../Header"

class AllFeedbacks extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {}
    }
    render() {
        const { feedbackArray } = this.props
        console.log(this.props);
        console.log(feedbackArray);

        const customStyle = {
            width: "18rem",
            display: "inline-block",
            margin: "5px"
        }

        return (<div>
            <Header title="All The Feedbacks" />
            {feedbackArray.map((fb: any) => {
                const { title, feedback } = fb
                console.log(title);

                return (
                    <div className="card" style={customStyle}>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{feedback}</p>
                        </div>
                    </div>
                )

            })}
        </div>);
    }
}

const mapStateToProps = (state: any) => {
    console.log(state);

    const { feedbackArray } = state
    return { feedbackArray };
};

// const mapDispatchToProps = (dispatch: any) => {
//     return {}
// }
export default connect(
    mapStateToProps,
    null
)(AllFeedbacks)