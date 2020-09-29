import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
import KarimPic from './../../assets/DSCN3403.jpg'
import Fade from 'react-reveal'
import NOutline from '../../assets/NOutline';
import AOutline from '../../assets/AOutline';
import HOutline from '../../assets/HOutline';
import SOutline from '../../assets/SOutline';



function WhoWeAre(props) {
    const classes = useStyles();

    const ourTeam = [
        {
            id: 1,
            name: 'NADA DABACH',
            desc: 'is a Big Data student, lorem ipsum.',
            icon: <NOutline className={classes.overlayLetter} />,
            image: KarimPic
        },
        {
            id: 2,
            name: 'ABDELKARIM HABOUCH',
            desc: 'is a Big Data student, lorem ipsum.',
            icon: <AOutline className={classes.overlayLetter} />,
            image: KarimPic
        },
        {
            id: 3,
            name: 'SAFOINE ELKHABICHE',
            desc: 'is a Big Data student, lorem ipsum.',
            icon: <SOutline className={classes.overlayLetter} />,
            image: KarimPic
        },
        {
            id: 4,
            name: 'HAMZA MOGNI',
            desc: 'is a Big Data student, lorem ipsum.',
            icon: <HOutline className={classes.overlayLetter} />,
            image: KarimPic
        },
    ]

    return (
        <div className={classes.container} id="whoweare">
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



                <Grid container spacing={10}>

                    {
                        ourTeam.map(member => (
                            <>
                                <Grid item xs={6} className={classes.profileGrid} key={member.id}>
                                    <Fade >
                                        <img src={member.image} width="70%" alt={member.name} />
                                        <Typography variant="h5" component="p" className={classes.presentations}>
                                            <span className={classes.bold}>{member.name}</span> {member.desc}
                                        </Typography>
                                    </Fade>
                                        {member.icon}

                                </Grid>
                            </>
                        ))
                    }
                </Grid>
            </Container>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#0F0A3C',
        textAlign: 'center',
        padding: '60px 0 100px 0'
    },
    title: {
        color: "#f9f9f9",
        fontWeight: 600,
        marginBottom: 40
    },
    description: {
        color: '#f9f9f9',
        marginBottom: 60
    },
    presentations: {
        color: '#f9f9f9',
        textAlign: 'left',
        paddingLeft: 100,
        paddingRight: 100,
        paddingTop: 20,
    },
    bold: {
        fontWeight: 600
    },
    overlayLetter: {
        position: 'absolute',
        height: '43%',
        top: 0,
        right: 0,
        left: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '18%'
    },
    profileGrid: {
        position: 'relative',
    }
}));

export default WhoWeAre;