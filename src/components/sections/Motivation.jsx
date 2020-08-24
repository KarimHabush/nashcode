import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import StarIcon from './../../assets/value_star.svg';
import GiftIcon from './../../assets/value_gift.svg';
import DiamondIcon from './../../assets/value_diamond.svg';
import LineCircle from './../../assets/line_circle_dark.svg';
import Rotate from 'react-reveal/Rotate'
import Fade from 'react-reveal/Fade'
import AnimateOnScroll from './../../helpers/AnimateOnScroll';
const valuesList = [
    [{
        id: 0,
        icon: StarIcon,
        title: 'Data Science',

    },
    {
        id: 1,
        icon: GiftIcon,
        title: 'Front End',
    },
    {
        id: 2,
        icon: DiamondIcon,
        title: 'Back End',
    },
    {
        id: 3,
        icon: StarIcon,
        title: 'Project Management',
    }],
    [{
        id: 4,
        icon: StarIcon,
        title: 'Data Science',

    },
    {
        id: 5,
        icon: StarIcon,
        title: 'Front End',
    },
    {
        id: 6,
        icon: StarIcon,
        title: 'Back End',
    },
    {
        id: 7,
        icon: StarIcon,
        title: 'Project Management',
    }]
]



function WhoWeAre(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.lineCircle} >

                <AnimateOnScroll animationStyle="rotate" loops={2} method={"perc"}   >
                    <Rotate top left>
                        <img width='450' src={LineCircle}  alt="Line Circle"/>
                    </Rotate>
                </AnimateOnScroll>
            </div>
            <Container maxWidth="lg">
                <Fade bottom>
                    <Typography variant="h3" component="h2" className={classes.title}>
                        WHAT MOTIVATES US?
                </Typography>
                </Fade>
                <Fade bottom>
                    <Typography variant="h5" component="p" className={classes.description}>
                        We are a team of dreamers pushed by our curiosity
                    <br />to experiment and create meaningful solutions using what we learned.
                </Typography>
                </Fade>



                {
                    valuesList.map(values => (
                        <Grid container spacing={5} className={classes.valueContainer}>

                            {values.map(value => (
                                <Grid item xs={3} key={value.id}>
                                    <Fade bottom>

                                        <img height="40" src={value.icon} alt={value.title} />
                                        <Typography variant="h5" component="p" className={classes.valueTitle}>
                                            {value.title}
                                        </Typography>
                                    </Fade>
                                </Grid>
                            ))}
                        </Grid>
                    ))
                }

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
    description: {
        color: '#404040',
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
    },
    valueTitle: {
        fontWeight: 600,
        marginTop: 20,
        color: '#0F0A3C'
    },
    valueContainer: {
        padding: '30px 0',
    },
    lineCircle: {
        color: "#000000",
        position: 'absolute',
        left: 0,
        top: -70
    }
}));

export default WhoWeAre;