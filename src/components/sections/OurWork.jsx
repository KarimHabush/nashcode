import React from 'react';
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Grid } from '@material-ui/core'
import WebsiteImage from './../../assets/website_bg.jpg';
import AiImage from './../../assets/word_embedding_bg.jpg';
function OurWork(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Container maxWidth="lg">
                <Typography variant="h3" component="h2" className={classes.title}>
                    OUR WORK
                    </Typography>

                <Grid container spacing={10}>
                    <Grid item xs={6} >
                        <img src={WebsiteImage} width="100%" alt="Karim's picture" />
                        <Typography variant="h5" component="p" className={classes.presentations}>
                            We built it, we'll rebuild it :)
                        </Typography>
                        <img src={AiImage} width="100%" alt="Karim's picture" />
                        <Typography variant="h5" component="p" className={classes.presentations}>
                            We built it, we'll rebuild it :)
                        </Typography>

                    </Grid>
                    <Grid item xs={6} className={classes.addPadding}>

                        <img src={AiImage} width="100%" alt="Karim's picture" />
                        <Typography variant="h5" component="p" className={classes.presentations}>
                            We built it, we'll rebuild it :)
                        </Typography>

                        <img src={WebsiteImage} width="100%" alt="Karim's picture" />
                        <Typography variant="h5" component="p" className={classes.presentations}>
                            We built it, we'll rebuild it :)
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