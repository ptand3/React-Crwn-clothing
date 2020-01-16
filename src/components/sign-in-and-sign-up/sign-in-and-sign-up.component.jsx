import React from "react";
import "./sign-in-and-sign-up.styles.scss";
import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up.component";

class SignInAndSignUpComponent extends React.Component {
       mounted = false;

    componentDidMount() {
        this.mounted = true;
    }

    componentWillUnmount(){
        console.log("unmounted!!");
        this.mounted = false;
    }
    render() {
        return (
            <div className="sign-in-and-sign-up">
                <SignIn />
                <SignUp />
            </div>
        )
    }
}

export default SignInAndSignUpComponent;
