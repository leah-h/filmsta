import React from 'react'

import "./sign-in.styles.scss"

class SignIn extends React.Component {
    constructor(props) {
        super();

        this.state={
            email: "",
            password: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: "", password: ""});
    }

    handleChange = event => {
        const { name, value} = event.target;

        this.setState({ [name]: value});
    }

    render() {
        return (
            <div className="sign-in">
                <h2>Sign in to learn, discover and connect with the global community</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                <input name="email" type="email" value={this.state.email} onChange={this.handleChange} required/>
                <label>Email</label>
                <input name="password" type="password" value={this.state.password} onChange={this.handleChange} required/>
                <label>password</label>

                <input type="submit" value="Submit" />
                </form>            
            </div>
        )
    }
}

export default SignIn;