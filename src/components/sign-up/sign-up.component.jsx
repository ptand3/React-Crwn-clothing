import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("password dont match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            });

        }
        catch (error) {
            console.log(error.message);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (

            <div className="sign-up">
                <h2>I don't have an account</h2>
                <span>Sign Up with email and password</span>
                {/*FormInput BEGINS*/}
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        label="DisplayName"
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        label="Email"
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        label="Password"
                        handleChange={this.handleChange}
                        required
                    />

                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}  
                        label="Confirm Password"
                        handleChange={this.handleChange}
                        required
                    />

                    <CustomButton type="submit">Sign Up</CustomButton>

                </form>
            </div>
        )
    }
}

export default SignUp;