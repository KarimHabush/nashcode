import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import KarimPic from './../../assets/DSCN3403.jpg'
import Fade from 'react-reveal'


function WhoWeAre(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Container maxWidth="lg">
                <Fade bottom>
                    <Typography variant="h3" component="h2" className={classes.title}>
                        WHO WE ARE?
                </Typography>
                </Fade>
                <Fade bottom>

                    <Typography variant="h5" component="p" className={classes.description}>
                        We are a team of dreamers pushed by our curiosity
                    <br />to experiment and create meaningful solutions using what we learned.
                </Typography>
                </Fade>



                <Grid container >
                    <Grid item xs={1} />

                    <Grid item xs={4} >
                        <Fade bottom>

                            <img src={KarimPic} width="100%" alt="Karim's picture" />
                            <Typography variant="h5" component="p" className={classes.presentations}>
                                <span className={classes.bold}>NADA DABACH</span> is a Big Data student, lorem ipsum.
                        </Typography>
                        </Fade>
                    </Grid>
                    <Grid item xs={2} />

                    <Grid item xs={4} >
                        <Fade bottom>

                            <img src={KarimPic} width="100%" alt="Karim's picture" />
                            <Typography variant="h5" component="p" className={classes.presentations}>
                                <span className={classes.bold}>NADA DABACH</span> is a Big Data student, lorem ipsum.
                            </Typography>
                        </Fade>
                    </Grid>
                    <Grid item xs={1} />

                </Grid>
                <Grid container >
                    <Grid item xs={1} />

                    <Grid item xs={4} >
                        <Fade bottom>

                            <img src={KarimPic} width="100%" alt="Karim's picture" />
                            <Typography variant="h5" component="p" className={classes.presentations}>
                                <span className={classes.bold}>NADA DABACH</span> is a Big Data student, lorem ipsum.
                        </Typography>
                        </Fade>
                    </Grid>
                    <Grid item xs={2} />

                    <Grid item xs={4} >
                        <Fade bottom>

                            <img src={KarimPic} width="100%" alt="Karim's picture" />
                            <Typography variant="h5" component="p" className={classes.presentations}>
                                <span className={classes.bold}>NADA DABACH</span> is a Big Data student, lorem ipsum.
                            </Typography>
                        </Fade>
                    </Grid>
                    <Grid item xs={1} />

                </Grid>
            </Container>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#0F0A3C',
        textAlign: 'center',
        padding: '100px 0 40px 0'
    },
    title: {
        color: "#f9f9f9",
        fontWeight: 600,
        marginBottom: 60
    },
    description: {
        color: '#f9f9f9',
        marginBottom: 100
    },
    presentations: {
        color: '#f9f9f9',
        textAlign: 'left',
        padding: 20,
        paddingBottom: 60
    },
    bold: {
        fontWeight: 600
    }
}));

export default WhoWeAre;