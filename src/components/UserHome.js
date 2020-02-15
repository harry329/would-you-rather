import React, {Component} from "react";
import {connect} from "react-redux";
import QuestionList from "./QuestionList";

class UserHome extends Component {

    constructor(props) {
        super(props);
        this.state = {answered: true}
    }

    answeredList = (ans) => {
        this.setState({
            answered: ans
        })
    };


    render() {
        console.log("I am coming from UserHome");
        console.log(this.props);
        const ansList = Object.keys(this.props.users[this.props.authedUser.value].answers);
        const allQuestions = Object.keys(this.props.questions);
        // const notAns = this.props.questions.map(question => question  ansList)
        console.log(ansList);
        console.log(allQuestions);
        const nonAnsweredList = allQuestions.filter((question) => !ansList.find(ansQuestion => ansQuestion === question));
        console.log(nonAnsweredList);
        return (
            <div>
                <div className="User-Header">
                    <button onClick={() => this.answeredList(true)}>Answered Question</button>
                    <button onClick={() => this.answeredList(false)}>UnAnswered Question</button>
                </div>
                {this.state.answered ? <QuestionList list={ansList}></QuestionList> :
                    <QuestionList list={nonAnsweredList}></QuestionList>}
            </div>
        )
    }

}

function mapStateToProps({authedUser, users, questions}) {
    return {
        authedUser,
        users,
        questions
    }
}


export default connect(mapStateToProps)(UserHome)