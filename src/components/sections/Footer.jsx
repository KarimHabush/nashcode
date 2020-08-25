import React from 'react'
import { Container, Typography, makeStyles, Grid } from '@material-ui/core'
import LogoLight from './../../assets/logo_light.svg'
import LineCircle from './../../assets/line_circle.svg'
function Footer(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <img src={LineCircle} alt="Line circle" width="400" className={classes.lineCircle} />
            <Container>
                <Typography variant="h3" component="h2" className={classes.title}>
                    Let's start something great!
                </Typography>
                <Typography className={classes.emailus} variant="h5" componenet="p">Email us at <span className={classes.highlight}>hello@nash-code.com</span></Typography>

                <Grid container >
                    <Grid item xs={6} className={classes.alignLeft}>
                        <img width="120" src={LogoLight} alt="Logo dark" />
                    </Grid>
                    <Grid item xs={6} className={classes.alignRight}>
                        <Typography variant="h6" component="p" >Copyright by NASH-CODE. All rights reserved. 2020</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )

}

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#0F0A3C',
        textAlign: 'center',
        padding: '100px 0 40px 0',
        position: 'relative'
    },
    title: {
        color: "#f9f9f9",
        fontWeight: 600,
        marginBottom: 30
    },
    highlight: {
        color: '#009F9D'
    },
    emailus: {
        color: '#f9f9f9',
        marginBottom: 80
    },
    alignLeft: {
        textAlign: 'left'
    },
    alignRight: {
        textAlign: 'right',
        color: '#f9f9f9'
    },
    lineCircle: {
        position: 'absolute',
        transform: 'rotate(200deg)',
        left: -100,
        top: -70
    },
}));


export default Footer;