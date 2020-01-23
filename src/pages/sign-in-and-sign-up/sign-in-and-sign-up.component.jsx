import React from 'react';
import SignInComponent from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import './sign-in-and-sign-up.styles.scss'
export default function SignInSignUpComponent() {
    return (
        <div>
            <SignInComponent/>
            <SignUp/>
        </div>
    )
}
