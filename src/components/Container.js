import React, {Component} from "react";
import '../style/App-style.css'
import NavBar from "./NavBar";
import SignIn from "./SingIn";
import {connect} from "react-redux";
import {Route, Switch} from 'react-router-dom';
import UserHome from "./UserHome";
import {handleInitialData} from "../actions/shared";
import QuestionAnswer from "./QuestionAnswer";
import NewQuestion from "./NewQuestion";
import LeaderBoardList from "./LeaderBoardList";

class Container extends Component {

    componentDidMount() {
        console.log("I am mounting");
        this.props.dispatch(handleInitialData())
    }

    render() {
        console.log("I am coming from container");
        console.log(this.props);
        console.log("***************");
        return (
            <div className="Container">
                <div className="Header">
                    <div>
                        React App
                    </div>
                </div>
                <div className="NavBar">
                    <NavBar></NavBar>
                </div>
                <div className="Content">
                    <Switch>
                        <Route exact path="/"
                               render={() => (this.props.authedUser ? <UserHome></UserHome> : <SignIn></SignIn>)}/>
                        <Route exact path="/new_question"
                               render={() => (this.props.authedUser ? <NewQuestion></NewQuestion> :
                                   <SignIn></SignIn>)}/>
                        <Route exact path="/leader_board"
                               render={() => (this.props.authedUser ? <LeaderBoardList> </LeaderBoardList> :
                                   <SignIn></SignIn>)}/>
                        <Route exact path="/question/:id" component={this.props.authedUser ? QuestionAnswer : SignIn}/>
                        <Route exact path="/404" render={() => <div>This Page doesn't exist</div>}/>
                        <Route exact path="/*" render={() => <div>This Page doesn't exist</div>}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users}) {
    return {
        authedUser,
        users
    }
}


export default connect(mapStateToProps)(Container)