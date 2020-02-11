import React, {Component} from "react";
import '../style/App-style.css'
import NavBar from "./NavBar";
import SignIn from "./SingIn";

export default class Container extends Component {

    render() {
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
                    <SignIn></SignIn>
                </div>
            </div>
        )
    }
}