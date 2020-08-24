import React from 'react';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Grid } from '@material-ui/core'
import WebsiteImage from './../../assets/website_bg.jpg';
import AiImage from './../../assets/word_embedding_bg.jpg';
import Fade from 'react-reveal/Fade'
function OurWork(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Container maxWidth="lg">
                <Fade bottom>
                    <Typography variant="h3" component="h2" className={classes.title}>
                        OUR WORK
                    </Typography>
                </Fade>

                <Grid container spacing={10}>
                    <Grid item xs={6} >
                        <Fade bottom>

                            <div className={classes.imagebox}>
                                <img src={WebsiteImage} className={classes.projectImage} alt="Project four" />
                            </div>

                            <Typography variant="h5" component="p" className={classes.projectTitle}>
                                Mama Moualimati
                            </Typography>
                            <Typography variant="p" component="p" className={classes.projectDesc}>
                                Study from home :)
                            </Typography>
                        </Fade>
                        <Fade bottom>

                            <div className={classes.imagebox}>
                                <img src={AiImage} className={classes.projectImage} alt="Project four" />
                            </div>

                            <Typography variant="h5" component="p" className={classes.projectTitle}>
                                Mama Moualimati
                            </Typography>
                            <Typography variant="p" component="p" className={classes.projectDesc}>
                                Study from home :)
                            </Typography>
                        </Fade>

                    </Grid>
                    <Grid item xs={6} className={classes.addPadding}>
                        <Fade bottom>

                            <div className={classes.imagebox}>
                                <img src={AiImage} className={classes.projectImage} alt="Project four" />
                            </div>

                            <Typography variant="h5" component="p" className={classes.projectTitle}>
                                Mama Moualimati
                            </Typography>
                            <Typography variant="p" component="p" className={classes.projectDesc}>
                                Study from home :)
                            </Typography>
                        </Fade>
                        <Fade bottom>

                            <div className={classes.imagebox}>
                                <img src={WebsiteImage} className={classes.projectImage} alt="Project four" />
                            </div>

                            <Typography variant="h5" component="p" className={classes.projectTitle}>
                                Mama Moualimati
                            </Typography>
                            <Typography variant="p" component="p" className={classes.projectDesc}>
                                Study from home :)
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
        padding: '100px 0 100px 0',
        position: 'relative'
    },
    title: {
        color: "#0F0A3C",
        fontWeight: 600,
        marginBottom: 60
    },
    projectTitle: {
        color: '#404040',
        textAlign: 'left',
        fontWeight: 600,
        paddingLeft: 5,
        paddingTop: 10
    },
    projectDesc: {
        color: '#606060',
        textAlign: 'left',
        paddingBottom: 60,
        paddingLeft: 5,
    },
    addPadding: {
        paddingTop: '150px !important'
    },
    projectImage: {
        cursor: 'pointer',
        maxWidth: '100%',
        transition: 'all 4s ',
        width: '100%',
        height: 'auto',
        transform: 'scale(1)',
        display: 'inline-block',
        '&:hover': {
            transform: 'scale(1.1)'
        }
    },
    imagebox: {
        position: 'relative',
        margin: 'auto',
        overflow: 'hidden',
        width: '100%',
    }
}));

export default OurWork;