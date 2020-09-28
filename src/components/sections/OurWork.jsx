import React from 'react';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Grid } from '@material-ui/core'
import BgImage from './../../assets/4249454.jpg';
import BgImageTwo from './../../assets/2754227.jpg';
import Fade from 'react-reveal/Fade'
import Rotate from 'react-reveal/Rotate'
import TriangleOne from './../../assets/TringleOne';
import TriangleTwo from './../../assets/TriangleTwo';
import LineCircle from './../../assets/line_circle_dark.svg'

function OurWork(props) {
    const classes = useStyles();
    return (
        <div className={classes.container} id="ourwork">
            <Container maxWidth="lg">
                <Typography variant="h3" component="h2" className={classes.title}>
                    OUR WORK
                    </Typography>
                <Typography variant="h5" component="p" className={classes.description}>
                    We are a team of dreamers pushed by our curiosity
                    <br />to experiment and create meaningful solutions using what we learned.
                </Typography>


                <Grid container spacing={10}>
                    <Grid item xs={8} className={classes.projectContainer}>
                        <Fade duration={3000}>

                            <Typography className={classes.projectTitle} variant="h4">
                                Study from home.
                        </Typography>
                        </Fade>
                        <Fade delay={500} duration={3000}>

                            <Typography className={classes.projectDesc} variant="h6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                        </Fade>
                    </Grid>
                    <Grid item xs={4} className={classes.pictureContainer}>

                        <img className={classes.lineCircle} src={LineCircle} width="200" alt="line circle icon" />
                        <div className={classes.pictureBackground}>
                            <Rotate delay={1000} top right>
                                <>
                                    <img className={classes.imageOne} width="100%" src={BgImage} alt="Background" />
                                </>
                            </Rotate>
                            <Fade>
                                <div className={classes.logoContainer}>
                                    <Fade delay={800}>
                                        <TriangleOne className={classes.logo} />
                                    </Fade>

                                </div>
                            </Fade>
                        </div>

                    </Grid>
                </Grid>

                <Grid container spacing={10}>

                    <Grid item xs={4} className={classes.pictureContainer}>
                        <img className={classes.lineCircle} src={LineCircle} width="200" alt="line circle icon" />
                        <div className={classes.pictureBackground}>
                            <Rotate delay={1000} top left>
                                <>
                                    <img className={classes.imageTwo} width="100%" src={BgImageTwo} alt="One" />
                                </>
                            </Rotate>
                            <div className={classes.logoContainer}>
                                <Fade>
                                    <TriangleTwo className={classes.logo} />
                                </Fade>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={8} className={classes.projectContainer}>
                        <Fade delay={500} duration={3000}>
                        </Fade>
                        <Typography className={classes.projectTitle} variant="h4">
                            Study from home.
                        </Typography>
                        <Fade delay={500} duration={3000}>

                            <Typography className={classes.projectDesc} variant="h6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                        </Fade>
                    </Grid>
                </Grid>
            </Container>

        </div>
    )
}


const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
        padding: '0 0 100px 0',
        position: 'relative'
    },
    title: {
        color: '#0F0A3C',
        fontWeight: 600,
        marginBottom: 40
    },
    description: {
        color: '#404040',
        marginBottom: 100
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
        backgroundColor: '#eeeeee',
        height: '80%',
        width: '70%',
        position: 'absolute',
        right: 0,
        left: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        top: '10%',
        boxShadow: '0 0 40px grey',
    },
    logo: {
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
    }

}));

export default OurWork;