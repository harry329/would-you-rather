import React, {Component} from "react";
import {connect} from "react-redux";

class Question extends Component {

    render() {
        const question = this.props.questions[this.props.id];
        const author = this.props.users[question.author];
        console.log(question);
        console.log(author);
        return (
            <div className="Question-Container">
                <div className="Question-Header">
                    {author.name + " asks"}
                </div>
                <div className="Question-Body">
                    <img src={author.avatarURL} style={{width: 100, height: 100, padding: 20}}></img>
                    <div className="Question-Text-Body">
                        <div style={{padding: 10}}>Would you Rather</div>
                        <div style={{padding: 10}}> {"..." + question.optionOne.text.slice(0, 10) + "..."}</div>
                        <button style={{padding: 5}}>View Poll</button>
                    </div>
                </div>
            </div>
        )
    }

}

function mapStateToProps({questions, users}, id) {
    return {
        questions,
        users
    }
}

export default connect(mapStateToProps)(Question)