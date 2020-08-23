import React from 'react';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo_light.svg';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NIcon from './../../assets/NIcon';
const styles = theme => ({
    logo: {
        height: 18,
        cursor: 'pointer'
    },
    link: {
        marginLeft: 50,
        color: '#f9f9f9',
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
    sectionOne: {
        backgroundColor: '#0F0A3C',
    },

    containerOne: {
        height: '100vh',
        paddingTop: 30,

    },
    homeTitle: {
        color: '#f9f9f9',
        fontWeight: 500
    },
    colorPrimary: {
        color: '#009F9D'
    },
    gridOne: {
        height: '90%',
        alignItems: 'center'
    },
    button: {
        marginTop: 100,
        padding: '7px 20px',
        fontSize: '18px',
        fontWeight: 600,
        color: '#0F0A3C',
        backgroundColor: '#f9f9f9',
        cursor: 'pointer',
        border: 'none'
    },
    nIcon: {
        width: '80%',
    },
    nLineOne: {
        position: 'absolute',
        right: '30%',
        top: '15%',
        width: '250px',
    },
    nLineTwo: {
        position: 'absolute',
        right: '5%',
        top: '13%',
        width: '250px',
    },
    subGridTwo: {
        textAlign: 'right'
    }
});
class Hero extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.sectionOne}>

                    <Container maxWidth="lg" className={classes.containerOne}>
                        <Toolbar disableGutters className={classes.toolbar}>
                            <img className={classes.logo} src={logo} alt="logo" />
                            <div className={classes.links}>
                                <Link className={classes.link} to="/our-wrok" >
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
                        <Grid container direction="row" spacing={1} className={classes.gridOne}>
                            <Grid item xs={7} >

                                <Typography component="h1" variant="h3" className={classes.homeTitle}>
                                    We build products to satisfy<br />both <span className={classes.colorPrimary}>you</span> and <span className={classes.colorPrimary}>our</span> team!
                                    </Typography>
                                <button className={classes.button}>SEE OUR WORK</button>

                            </Grid>
                            <Grid item xs={5} className={classes.subGridTwo}>
                                <NIcon className={classes.nIcon} />
                            </Grid>

                        </Grid>
                    </Container>
                </div>
            </div>

        )
    }
}


Hero.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);

