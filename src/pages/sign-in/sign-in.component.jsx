import React from 'react'
import { Link } from "react-router-dom"

import SignIn from "../../components/sign-in/sign-in.component"

import "./sign-in.styles.scss"

const SignInPage = (props) => (
    <div className="sign-in">
        <SignIn />
        <Link className='option' to='/signup'>SIGN UP FOR NEW ACCOUNT</Link>
    </div>
)

export default SignInPage;