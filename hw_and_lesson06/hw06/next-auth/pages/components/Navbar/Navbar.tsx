import {AppBar, Button, Toolbar} from '@material-ui/core';
import { useRouter } from 'next/router'
import React from 'react'
import styles from './Navbar.module.css'

const Navbar: React.FC = () => {
    const router: any = useRouter();

    return (<AppBar position="static">
        <Toolbar>
        <div className = {styles.menuButtons}>
            <Button color="inherit" onClick = {() => router.push('/login')}>Login</Button>
            <Button color="inherit" onClick = {() => router.push('/')}>Home</Button>
        </div>
        </Toolbar>
    </AppBar>)
}

export default Navbar;
