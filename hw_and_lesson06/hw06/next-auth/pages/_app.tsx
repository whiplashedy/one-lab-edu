import '../styles/globals.css'
import Navbar from "./components/Navbar/Navbar";
import React from 'react'

function MyApp({ Component, pageProps }) {
  return <><Navbar/><Component {...pageProps} /></>
}

export default MyApp
