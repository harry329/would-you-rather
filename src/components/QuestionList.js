import React, {Component} from "react";
import Question from "./Question";

export default class QuestionList extends Component {

    render() {
        console.log("I am coming from questionlist");
        console.log(this.props);
        return (
            <div>
                {this.props.list.map((id) =>
                    (
                        <ul className="Question-List" key={id}>
                            <Question id={id}></Question>
                        </ul>
                    )
                )}
            </div>
        )
    }

}