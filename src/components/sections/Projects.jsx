import React from 'react'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { makeStyles, Typography } from '@material-ui/core'
import logo from './../../assets/logo_dark.svg'
import HeartIcon from './../../assets/HeartIcon';
import Grid from '@material-ui/core/Grid';
import WebsiteImage from './../../assets/website_bg.jpg';
import AiImage from './../../assets/word_embedding_bg.jpg';
import Fade from 'react-reveal/Fade'
import TriangleOne from './../../assets/TringleOne';
import TriangleTwo from './../../assets/TriangleTwo';
import LineCircle from './../../assets/line_circle_dark.svg'
import BgImage from './../../assets/4249454.jpg';
import BgImageTwo from './../../assets/2754227.jpg';

function Projects(props) {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Container maxWidth="lg">
                <Toolbar disableGutters className={classes.toolbar}>
                    <img className={classes.logo} src={logo} alt="logo" />
                    <div className={classes.links}>
                        <Link className={classes.link} to="/our-work" >
                            OUR WORK
                            </Link>
                        <Link className={classes.link} to="/blog" >
                            BLOG
                            </Link>
                        <Link className={classes.link} to="/contact-us" >
                            CONTACT US
                            </Link>
                    </div>
                </Toolbar>

                <Grid container className={classes.heroGrid}>
                    <Grid item xs={7}>
                        <Typography variant="h1" component="h1" className={classes.title}>
                            Built with Deduction and Love
                        </Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography variant="h5">
                            We love what we do and we are always ready
                            to use what we learn to go above and beyond
                            for our clients. Here are some of our works:
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={10}>
                    <Grid item xs={8} className={classes.projectContainer}>
                        <Typography className={classes.projectTitle} variant="h4">
                            Study from home.
                        </Typography>
                        <Typography className={classes.projectDesc} variant="h6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                    </Grid>
                    <Grid item xs={4} className={classes.pictureContainer}>
                        <img className={classes.lineCircle} src={LineCircle} width="200" alt="line circle icon" />
                        <div className={classes.pictureBackground}>
                            <img className={classes.imageOne} width="100%" src={BgImage} alt="Background Image" />
                            <div className={classes.logoContainer}>
                                <TriangleOne className={classes.imageLogo} />
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={10} className={classes.addPadding}>

                    <Grid item xs={4} className={classes.pictureContainer}>
                        <img className={classes.lineCircle} src={LineCircle} width="200" alt="line circle icon" />
                        <div className={classes.pictureBackground}>
                            <img className={classes.imageTwo} width="100%" src={BgImageTwo} alt="Background Image" />
                            <div className={classes.logoContainer}>
                                <TriangleTwo className={classes.imageLogo} />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={8} className={classes.projectContainer}>
                        <Typography className={classes.projectTitle} variant="h4">
                            Study from home.
                        </Typography>
                        <Typography className={classes.projectDesc} variant="h6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                    </Grid>
                </Grid>

            </Container>

        </div>
    )

}

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#f9f9f9',
        padding: '30px 0'
    },
    logo: {
        height: 18,
        cursor: 'pointer'
    },
    link: {
        marginLeft: 50,
        color: '#0F0A3C',
        fontWeight: 500,
        textDecoration: 'none',
        '&:hover': {
            color: '#009F9D',
            textDecoration: 'none',
        },
    },
    links: {
        marginLeft: 'auto',
    },
    title: {
        fontWeight: '600',
        fontSize: '120pt',
        color: '#0F0A3C'
    },
    heroGrid: {
        alignItems: 'flex-end',
        paddingTop: 100,
        paddingBottom: 150,
    },
    projectContainer: {
        textAlign: 'left',
        alignSelf: 'center'
    },
    projectTitle: {
        color: '#0F0A3C',
        fontWeight: 600,
        marginBottom: 30
    },
    pictureBackground: {
        backgroundColor: 'purple',
        width: '100%',
        height: '100%',
        position: 'relative',
        boxShadow: '0 0 40px grey'

    },
    imageOne: {
        transform: 'rotate(-10deg)'
    },
    imageTwo: {
        transform: 'rotate(10deg)'
    },
    logoContainer: {
        backgroundColor: '#f9f9f9',
        height: '80%',
        width: '70%',
        position: 'absolute',
        right: 0,
        left: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        top: '10%',
        boxShadow: '0 0 40px grey',
        textAlign: 'center'
    },
    imageLogo: {
        width: '50%',
        transform: 'translateY(120%)'

    },
    lineCircle: {
        position: 'absolute',
        width: '130%',
        transform: 'rotate(180deg)',
        left: '-20%',
        top: 100
    },
    pictureContainer: {
        position: 'relative'
    },
    addPadding : {
        paddingBottom:100
    }
}));

export default Projects;