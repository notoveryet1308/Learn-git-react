import React, { Component } from 'react';
import './Sign-in.styles.scss';
import { signInWithGoogle } from './../../firebase/firebase.utils';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ email: '', password: '' })


    }

    handleChange(e) {
        const { value, name } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} className="form">
                    <button className="btn google-btn" onClick={signInWithGoogle}>Sign In With Google </button>
                    <label>Email</label>
                    <input
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />

                    <label>Password</label>
                    <input
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />

                    <button className="btn-register btn">Register</button>

                </form>

            </div>
        )
    }
}

