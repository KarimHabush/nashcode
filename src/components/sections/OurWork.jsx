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
                            <img src={WebsiteImage} width="100%" alt="Karim's picture" />
                            <Typography variant="h5" component="p" className={classes.presentations}>
                                We built it, we'll rebuild it :)
                        </Typography>
                        </Fade>
                        <Fade bottom>
                            <img src={AiImage} width="100%" alt="Karim's picture" />
                            <Typography variant="h5" component="p" className={classes.presentations}>
                                We built it, we'll rebuild it :)
                        </Typography>
                        </Fade>

                    </Grid>
                    <Grid item xs={6} className={classes.addPadding}>
                        <Fade bottom>

                            <img src={AiImage} width="100%" alt="Karim's picture" />
                            <Typography variant="h5" component="p" className={classes.presentations}>
                                We built it, we'll rebuild it :)
                        </Typography>
                        </Fade>
                        <Fade bottom>

                            <img src={WebsiteImage} width="100%" alt="Karim's picture" />
                            <Typography variant="h5" component="p" className={classes.presentations}>
                                We built it, we'll rebuild it :)
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
    presentations: {
        color: '#0F0A3C',
        textAlign: 'left',
        padding: 20,
        paddingBottom: 60
    },
    addPadding: {
        paddingTop: '150px !important'
    }
}));

export default OurWork;