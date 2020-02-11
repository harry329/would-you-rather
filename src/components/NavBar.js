import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {setAuthUser} from "../actions/authedUser";

class NavBar extends Component {

    logout = () => {
        console.log("I am loggino out");
        this.props.dispatch(setAuthUser(null))
    };


    render() {
        console.log("I am navbar");
        console.log(this.props);
        return (
            <div className="NavBody">
                <NavLink to="/" exact activeClassName="ActiveLink" className="NavItem"> Home</NavLink>
                <NavLink to="/new_question" exact activeClassName="ActiveLink"
                         className="NavItem"> NewQuestion </NavLink>
                <NavLink to="/leader_board" exact activeClassName="ActiveLink"
                         className="NavItem"> LeaderBoard</NavLink>
                {this.props.authedUser ?
                    (<div className="NavBody">
                        <div className="NavItem">{this.props.authedUser.label}</div>
                        <div className="NavItem" onClick={this.logout}>Logout</div>
                    </div>) : null
                }
            </div>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NavBar)
