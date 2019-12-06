/*In case if you want to set the value and involve user interaction.
You should send onChange event to update the state of initial value.
This is like two - way binding as angular support.
If u want to update the state then we are going create on change handlor event that 
will take the value from the user and upstream
the value to the state object in the app and update it.*/


import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { auth } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }

    }
    handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { email, password } = this.state;
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: "",
                password: ""
            });
        }
        catch (error) {
            console.log(error.message);
        }


    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>
                {/* FORM BEGINS */}
                <form onSubmit={this.handleSubmit}>

                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        label="email"
                        handleChange={this.handleChange}
                        required />
                    <FormInput
                        type="password"
                        name="password"
                        label="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required />

                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                            {''} Sign In With Google{''}
                        </CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}
export default SignIn;