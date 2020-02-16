import React, {Component} from "react";
import {connect} from "react-redux";

class LearderBoardItem extends Component {

    render() {
        const user = this.props.users[this.props.userId];
        console.log(user);
        return (
            <div>
                <div className="LearderBoardItem">
                    <div><img src={user.avatarURL} alt="user" className="LearderBoardItem-Image"></img></div>
                    <div className="LearderBoardItem-Text">
                        <div>{user.name}</div>
                        <div>{'Answered Questions ' + Object.keys(user.answers).length}</div>
                        <div>{'Asked Questions ' + user.questions.length}</div>
                    </div>
                    <div className="LearderBoardItem-Text2">
                        <div>
                            Score
                        </div>
                        <div>{Object.keys(user.answers).length + user.questions.length}</div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        users
    }
}

export default connect(mapStateToProps)(LearderBoardItem)