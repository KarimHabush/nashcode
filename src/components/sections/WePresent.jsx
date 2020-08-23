import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import HeartIcon from './../../assets/heart.svg';
import LineCircle from './../../assets/line_circle.svg';
const useStyles = makeStyles((theme) => ({
    container: {
        background: 'linear-gradient(180deg, #0F0A3C 50%, #F9F9F9 50%)',

    },
    rectangle: {
        backgroundColor: '#07456F',
        textAlign: 'center',
        borderRadius: 10,
        padding: 70,
        position: 'relative',

    },

    lineCircle: {
        position: 'absolute',
        left: -100,
        top: -70
    },
    titles: {
        color: "#f9f9f9"
    },
    animatePos: {
        left: -300,
        position: 'absolute'
    }
}));


function WePresent(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>

            <Container maxWidth="md" className={classes.rectangle}>
                <div className={classes.lineCircle} >
                    <img src={LineCircle} width="200" alt="line circle icon" />
                </div>


                <Typography variant="h3" component="h2" className={classes.titles}>
                    We'd <img width="50" src={HeartIcon} alt="heart icon" /> to present ourselves
                </Typography>
                <Typography variant="h4" component="h2" className={classes.titles}>
                    Don't forget to reach out too!
                </Typography>
            </Container>

        </div>
    )
}

export default WePresent;