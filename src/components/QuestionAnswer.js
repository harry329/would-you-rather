import React, {Component} from "react";
import {connect} from "react-redux";
import {saveAnswerToQuestion} from "../actions/shared";
import {Link} from "react-router-dom";

class QuestionAnswer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "optionOne"
        }
    }

    handleOptionChange = changeEvent => {
        this.setState({
            selectedOption: changeEvent.target.value
        });
    };

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        console.log("You have submitted:", this.state.selectedOption);
        const info = {
            authedUser: this.props.authedUser.value,
            qid: this.props.match.params.id,
            answer: this.state.selectedOption
        };
        console.log(info);
        this.props.dispatch(saveAnswerToQuestion(info))
    };

    render() {
        const questionId = this.props.match.params.id;
        const {authedUser, users, questions} = this.props;
        const answeredQuestion = users[authedUser.value].answers;
        const answeredQuestionList = Object.keys(answeredQuestion);
        const aswOrUnans = answeredQuestionList.find(questions => questions === questionId) ? true : false;
        const ansOption = aswOrUnans ? answeredQuestion[questionId] : undefined;
        const optionOneShown = ansOption === 'optionOne' ? ' , & you have voted for this option.' : '.';
        const optionTwoShown = ansOption === 'optionTwo' ? ' , & you have voted for this option.' : '.';
        const question = questions[questionId];
        const questionAuthorName = users[question.author].name;
        const questionAuthorURL = users[question.author].avatarURL;
        const optionOneVotes = question.optionOne.votes.length;
        const optionTwoVotes = question.optionTwo.votes.length;
        const totalVotes = optionOneVotes + optionTwoVotes;
        const optionOneText = question.optionOne.text;
        const optionTwoText = question.optionTwo.text;

        return (
            <div className="Question-Answer-Body">
                <div className="Question-Answer-Body-Header">{questionAuthorName + ' has asked :'} </div>
                <div className="Question-Answer-Body-Image-Text">
                    <img src={questionAuthorURL} alt='author' className="Question-Answer-Body-Image"/>
                    {aswOrUnans ? (<div className="Question-Answer-Body-Text">
                        <div> Results</div>
                        <form className="Question-Answer-Body-Text">
                            <div>
                                {'Would you rather ' + optionOneText} {', \n' + optionOneVotes + ' out of total ' + totalVotes + ', ' + (optionOneVotes / totalVotes * 100).toString().slice(0, 2) + '% votes' + optionOneShown}
                            </div>
                            <div>
                                {'Would you rather ' + optionTwoText} {', \n' + optionTwoVotes + ' out of total ' + totalVotes + ', ' + (optionTwoVotes / totalVotes * 100).toString().slice(0, 2) + '% votes' + optionTwoShown}
                            </div>
                            <button><Link to='/'>Go To Home </Link></button>
                        </form>
                    </div>) : (<div className="Question-Answer-Body-Text">
                        <form className="Question-Answer-Body-Text" onSubmit={this.handleFormSubmit}>
                            <div>
                                <label>
                                    <input
                                        type='radio'
                                        value='optionOne'
                                        checked={this.state.selectedOption === "optionOne"}
                                        onChange={this.handleOptionChange}
                                    />
                                    {'Would you rather ' + optionOneText}
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type='radio'
                                        value='optionTwo'
                                        checked={this.state.selectedOption === "optionTwo"}
                                        onChange={this.handleOptionChange}
                                    />
                                    {'Would you rather ' + optionTwoText}
                                </label>
                            </div>
                            <button type='submit'> Submit</button>
                        </form>
                    </div>)}

                </div>
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

export default connect(mapStateToProps)(QuestionAnswer)