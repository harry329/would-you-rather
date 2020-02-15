import React, {Component} from "react";
import logo from '../logo.svg';
import ReactDropdown from "react-dropdown";
import {connect} from "react-redux";
import {setAuthUser} from "../actions/authedUser";

class SignIn extends Component {

    users = [{value: 'sarahedo', label: 'Sarah Edo'}, {
        value: 'tylermcginnis',
        label: 'Tyler McGinnis'
    }, {value: 'johndoe', label: 'John Doe'}];

    loginUser = [];
    userPickUp = (e) => {
        console.log("Please sign in");
        console.log(e);
        console.log(this.props);
        this.loginUser = e
    };

    signIn = () => {
        this.props.dispatch(setAuthUser(this.loginUser))
    };

    render() {
        console.log("I am Sign In");
        console.log(this.props);
        return (
            <div>
                <div className="Sign-Container">
                    <div className="Sign-Header">
                        <div style={{fontSize: 22, fontWeight: "bold"}}>Welcome to the Would You Rather App!</div>
                        <div>Please Sign in to continue</div>
                    </div>
                    <img src={logo} alt="react sign in icon"></img>
                    <div style={{color: "green", fontWeight: "bold", fontSize: 22}}>Sign In</div>
                    <ReactDropdown options={this.users}
                                   placeholder={this.props.authedUser ? this.props.authedUser.label : 'Please sign in as user'}
                                   value={this.props.authedUser ? this.props.authedUser.label : 'Please sign in as user'}
                                   onChange={(e) => this.userPickUp(e)}></ReactDropdown>
                    <button style={{background: "Green", fontSize: 20, flex: 1}} onClick={this.signIn}>Sign In</button>
                </div>

            </div>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {authedUser}

}

export default connect(mapStateToProps)(SignIn)