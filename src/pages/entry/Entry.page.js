import React, {useState} from "react";
import {Jumbotron} from "react-bootstrap"


import './entry.style.css';
import { LoginForm } from "../../components/login/Login.comp";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";

export const Entry = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [frmLoad, setFrmLoad ] = useState('login');

const handleOnChange = e => {
        const {name, value} = e.target;

        switch(name){
            case 'email':
                setEmail(value)
               break
               case 'password':
                setPassword(value)
               break   

               default:
                break

        }
        console.log(name,value);
};

const handleOnSubmit = e => {
    e.preventDefault()

    if(!email || !password){
       return alert("Fill Up All The Forms!");
    }

    console.log(email,password);
}

const handleOnResetSubmit = e => {
    e.preventDefault()

    if(!email){
       return alert("Please Enter The Email");
    }

    console.log(email,password);
}

const formSwitcher = frmType => {
    setFrmLoad(frmType);
}


    return (
        <div className="entry-page bg-info">
                <Jumbotron className="form-box">
                    {frmLoad === 'login' && 
                    <LoginForm 
                    handleOnChange={handleOnChange}
                    handleOnSubmit={handleOnSubmit}
                    formSwitcher={formSwitcher}
                    email = {email}
                    password = {password}
                    />
                    }
                    {frmLoad === 'reset' &&
                    <ResetPassword
                    handleOnChange={handleOnChange}
                    handleOnResetSubmit={handleOnResetSubmit}
                    formSwitcher={formSwitcher}
                    email = {email}
                    />
                    }
                </Jumbotron>

                
        </div>
    )
}