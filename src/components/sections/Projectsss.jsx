import React from 'react'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles, Typography } from '@material-ui/core'
import logo from './../../assets/logo_dark.svg'
import HeartIcon from './../../assets/HeartIcon';
import Grid from '@material-ui/core/Grid';
import WebsiteImage from './../../assets/website_bg.jpg';
import AiImage from './../../assets/word_embedding_bg.jpg';
import Fade from 'react-reveal/Fade'
const categories = ['Featured', 'AI', 'Websites', 'Apps', 'e-Commerce']

const projects = [
    {
        id: 1,
        category: ['Featured', 'Websites'],
        title: 'Mama Moualimati',
        desc: 'Self-education is always best.',
        image: WebsiteImage
    },
    {
        id: 2,
        category: ['Featured', 'AI'],
        title: 'MTSA',
        desc: 'Moroccan sentiments in one query.',
        image: AiImage
    },

]


class Projects extends React.Component {
    constructor() {
        super();
        this.state = {
            active: 'Featured'
        }
    }

    setActive = (item) => {
        this.setState({
            active: item
        })
    }

    render() {
        const { classes } = this.props
        return (
            <div className={classes.container}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters className={classes.toolbar}>
                        <img className={classes.logo} src={logo} alt="logo" />
                        <div className={classes.links}>
                            <Link className={classes.link} to="/our-work" >
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
                    <div >
                        <Fade >
                            <Typography variant="h4" className={classes.addPadding}>Projects we built with <HeartIcon width="25" />!</Typography>
                        </Fade>
                        <Toolbar disableGutters className={classes.addPadding}>
                            {
                                categories.map(categorie => (
                                    <Fade >

                                        <Typography
                                            onClick={() => { this.setActive(categorie) }}
                                            style={this.state.active === categorie ? { fontWeight: 600 } : {}}
                                            variant="h5"
                                            className={classes.plink}
                                        >
                                            {categorie}
                                        </Typography>
                                    </Fade>
                                ))
                            }
                        </Toolbar>

                        <Grid container spacing={10} className={classes.addPadding}>
                            {
                                projects.map(project => (
                                    project.category.includes(this.state.active) ? (
                                        <Grid key={project.id} item xs={6}>
                                            <Fade >
                                                <div className={classes.imagebox}>
                                                    <img src={project.image} className={classes.projectImage} alt="Project four" />
                                                </div>

                                                <Typography variant="h5">
                                                    {project.desc}
                                                </Typography>
                                                <Typography className={classes.projectTitle} variant="h6">
                                                    {project.title}
                                                </Typography>
                                            </Fade>

                                        </Grid>
                                    ) : (null)
                                ))
                            }

                        </Grid>
                    </div>



                </Container>
            </div>
        )
    }

}


const styles = () => ({
    container: {
        backgroundColor: '#f9f9f9',
        padding: '30px 0'
    },
    logo: {
        height: 18,
        cursor: 'pointer'
    },
    link: {
        marginLeft: 50,
        color: '#0F0A3C',
        fontWeight: 500,
        textDecoration: 'none',
        '&:hover': {
            color: '#009F9D',
            textDecoration: 'none',
        },
    },
    plink: {
        marginRight: 50,
        color: '#0F0A3C',
        fontWeight: 500,
        textDecoration: 'none',
        cursor: 'pointer'
    },
    links: {
        marginLeft: 'auto',
    },
    addPadding: {
        padding: '60px 40px 0 40px'
    },
    projectTitle: {
        color: '#606060',
        fontSize: '1em'
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
})

Projects.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
