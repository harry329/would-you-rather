import React, {Component} from "react";
import {connect} from "react-redux";
import QuestionList from "./QuestionList";

class UserHome extends Component {

    constructor(props) {
        super(props);
        this.state = {answered: false}
    }

    answeredList = (ans) => {
        this.setState({
            answered: ans
        })
    };


    render() {
        console.log("I am coming from UserHome");
        console.log(this.props);
        const ansList = Object.keys(this.props.users[this.props.authedUser.value].answers).reverse();
        const allQuestions = this.props.questions2;
        // const notAns = this.props.questions.map(question => question  ansList)
        console.log(ansList);
        console.log(allQuestions);
        const nonAnsweredList = allQuestions.filter((question) => !ansList.find(ansQuestion => ansQuestion === question));
        console.log(nonAnsweredList);
        return (
            <div>
                <div className="User-Header">
                    <button onClick={() => this.answeredList(false)}>UnAnswered Question</button>
                    <button onClick={() => this.answeredList(true)}>Answered Question</button>
                </div>
                {this.state.answered ? <QuestionList list={ansList}></QuestionList> :
                    <QuestionList list={nonAnsweredList}></QuestionList>}
            </div>
        )
    }

}

function mapStateToProps({authedUser, users, questions}) {
    const questions2 = Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp);
    return {
        authedUser,
        users,
        questions2
    }
}


export default connect(mapStateToProps)(UserHome)