import React from 'react';
import Header from "../Header"
import { connect } from "react-redux"
import { setFeedback } from "../../redux/actions"

class Feedback extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            inputvalue: "",
            feedback: "",
        };
    }
    render() {
        const { Title } = this.props.match.params
        return (<div>
            <Header title={`Feedback to: ${Title}`} />
            <span>Please tell us what you think about the movie <strong>{Title}</strong></span>
            <br />
            <textarea onChange={(e) => this.setState({ inputvalue: e.target.value })} rows={10} cols={50} />
            <br />
            <button type="button" onClick={() => {
                const { setFeedbackAction } = this.props.actions
                const { inputvalue } = this.state



                setFeedbackAction(inputvalue, Title)
            }} className="btn btn-primary">Send Feedback</button>
        </div>)
    }
}




const mapDispatchToProps = (dispatch: any) => {
    return {
        actions: {
            setFeedbackAction: (feedback: any, title: any) => {
                dispatch(setFeedback(feedback, title))


            }
        }
    }
}
export default connect(
    null,
    mapDispatchToProps
)(Feedback)