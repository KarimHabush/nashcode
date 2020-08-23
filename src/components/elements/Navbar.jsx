import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import logo from './../assets/logo_light.svg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: '#0F0A3C'
    },
    logo: {
        height: 18,
        cursor: 'pointer'
    },
    link: {
        marginLeft: theme.spacing(5),
        color: '#f9f9f9',
        fontWeight: 500,
        '&:hover': {
            color: '#009F9D',
            textDecoration: 'none',
        },
    },
    links: {
        marginLeft: 'auto',
    }
}));




function Navbar(props) {
    const classes = useStyles();
    return (
        <div>
            <AppBar className={classes.navbar}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        <img className={classes.logo} src={logo} alt="logo" />
                        <div className={classes.links}>
                            <Link className={classes.link} href="/our-wrok/" >
                                OUR WORK
                            </Link>
                            <Link className={classes.link} href="/blog/" >
                                BLOG
                            </Link>
                            <Link className={classes.link} href="/contact-us/" >
                                CONTACT US
                            </Link>
                        </div>

                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}


export default Navbar;