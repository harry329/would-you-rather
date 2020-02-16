import React, {Component} from "react";
import {connect} from "react-redux";
import {saveQuestionFromUser} from "../actions/shared";
import {Redirect} from "react-router-dom";

class NewQuestion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textOne: '',
            textTwo: '',
            toHome: false
        }
    }

    textValOneChange = (e) => {
        this.setState({
            textOne: e.target.value
        })

    };

    textValTwoChange = (e) => {
        this.setState({
            textTwo: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const question = {
            optionOneText: this.state.textOne,
            optionTwoText: this.state.textTwo,
            author: this.props.authedUser.value
        };
        this.props.dispatch(saveQuestionFromUser(question));
        this.setState(
            {
                toHome: true
            }
        )

    };

    render() {

        if (this.state.toHome === true) {
            return <Redirect to="/"/>
        }

        return (
            <div>
                <div className="New-Question-Container">
                    <div className="New-Question-Header">
                        Create New Question
                    </div>
                    <div className="New-Question-Body">
                        <div className="New-Question-Body-Text">
                            Complete the question
                        </div>
                        <div className="New-Question-Body-Text">
                            Would you rather :
                        </div>
                        <div className="New-Question-Body-Form">
                            <form onSubmit={this.handleSubmit} className="New-Question-Body-Form">
                                <input className="New-Question-Body-Form-Input" value={this.state.textOne}
                                       onChange={this.textValOneChange}></input>
                                <input className="New-Question-Body-Form-Input" value={this.state.textTwo}
                                       onChange={this.textValTwoChange}></input>
                                <button className="New-Question-Body-Form-Button" type="submit"> Submit</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }

}

export default connect(mapStateToProps)(NewQuestion)