import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link as ScrollLink } from 'react-scroll'

function Sidebar(props) {


    const classes = useStyles();
    return (
        <div className={classes.container}>
            <ul className={classes.list}>
                <li className={classes.element}>
                <ScrollLink
                    className={classes.unactiveDot}
                    activeClass={classes.activeDot}
                    to="hero"
                    spy={true}
                    smooth={true}
                    duration={500}
                />
                </li>
                <li className={classes.element}>
                <ScrollLink
                    className={classes.unactiveDot}
                    activeClass={classes.activeDot}
                    to="wepresent"
                    spy={true}
                    smooth={true}
                    duration={500}
                />
                </li>
                <li className={classes.element}>
                <ScrollLink
                    className={classes.unactiveDot}
                    activeClass={classes.activeDot}
                    to="ourexpertises"
                    spy={true}
                    smooth={true}
                    duration={500}
                />
                </li>
                <li className={classes.element}>
                <ScrollLink
                    className={classes.unactiveDot}
                    activeClass={classes.activeDot}
                    to="ourwork"
                    spy={true}
                    smooth={true}
                    duration={500}
                />
                </li>
                <li className={classes.element}>
                <ScrollLink
                    className={classes.unactiveDot}
                    activeClass={classes.activeDot}
                    to="whoweare"
                    spy={true}
                    smooth={true}
                    duration={500}
                />
                </li>
                <li className={classes.element}>
                <ScrollLink
                    className={classes.unactiveDot}
                    activeClass={classes.activeDot}
                    to="motivation"
                    spy={true}
                    smooth={true}
                    duration={500}
                />
                </li>
                
                
            </ul>

        </div>
    )

}

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'fixed',
        top: '30%',
        left: '50px'
    },
    list : {
        listStyleType : 'none',
        textAlign : 'center'
    },
    unactiveDot: {
        display: 'inline-block',
        width: 7,
        height: 7,
        borderRadius: '50%',
        border: '1px solid grey',
        cursor: 'pointer',
    },
    activeDot: {
        display: 'inline-block',
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: 'grey',
        cursor: 'pointer',
    },
    element : {
        paddingTop : 20
    }
}));


export default Sidebar;