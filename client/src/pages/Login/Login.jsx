import React, { Component } from 'react';

function Login(props) {
    console.log(props)
    return (

        <div><input /><input /><button children="login" onClick={() => props.login(props.location.from)} /></div>

    )

}

export default Login;