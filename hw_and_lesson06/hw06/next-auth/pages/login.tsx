import Head from 'next/head';
import React from 'react'
import LoginForm from "./components/LoginForm/LoginForm";

export default function Login(){

    return <> <Head><title>login | next</title></Head> <LoginForm message={"asd"}/> </>
}
