import React, {Component} from "react";
import {connect} from "react-redux";
import LearderBoardItem from "./LearderBoardItem";

class LeaderBoardList extends Component {

    render() {
        return (
            <div>
                {this.props.userList.map((user) => (
                    <ul key={user}><LearderBoardItem userId={user}></LearderBoardItem></ul>))}
            </div>
        )
    }

}

function mapStateToProps({users}) {
    const userList = Object.keys(users).sort((a, b) => (Object.keys(users[b].answers).length + users[b].questions.length)
        - (Object.keys(users[a].answers).length + users[a].questions.length));
    console.log("I am user list");
    console.log(userList);
    return {
        userList
    }
}

export default connect(mapStateToProps)(LeaderBoardList)