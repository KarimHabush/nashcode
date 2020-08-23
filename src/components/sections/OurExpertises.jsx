import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box'
import FrontEndIcon from './../../assets/frontend_icon.svg';
import BackEndIcon from './../../assets/backend_icon.svg';
import AiIcon from './../../assets/ai_icon.svg';
import ManagementIcon from './../../assets/management_icon.svg';
import Grid from '@material-ui/core/Grid'
import LineCircle from './../../assets/line_circle_dark.svg';
import AnimateOnScroll from './../../helpers/AnimateOnScroll';
import Fade from 'react-reveal/Fade'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}


const expertisesList = [
    {
        id: 0,
        icon: AiIcon,
        title: 'Data Science',
        description: 'We\'ll help you get the best out of your data and make new business decisions faster. Not that? Well, propose your future idea and we\'ll make it your present.',

    },
    {
        id: 1,
        icon: FrontEndIcon,
        title: 'Front End',
        description: 'none',
    },
    {
        id: 2,
        icon: BackEndIcon,
        title: 'Back End',
        description: 'none',
    },
    {
        id: 3,
        icon: ManagementIcon,
        title: 'Project Management',
        description: 'none',
    }
]

function OurExpertises(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.container}>
            <Container maxWidth="lg">
                <Fade bottom>
                    <Typography variant="h3" component="h2" className={classes.title}>OUR EXPERTISES</Typography>

                </Fade>
                <Fade bottom>
                    <Typography variant="h5" component="p" className={classes.description}>
                        We use the latest technologies to provide the best software engineering
                    <br />solutions that respond to the modern market needs.
                </Typography>
                </Fade>

                <Fade bottom>
                    <Tabs
                        className={classes.tabs}
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        {expertisesList.map(item => (
                            <Tab key={item.id} className={classes.tab} icon={<img className={classes.tabIcon} width="100" src={item.icon} alt={item.title} />} {...a11yProps()} />
                        ))}
                    </Tabs>
                    {expertisesList.map(item => (
                        <TabPanel className={classes.tabPanel}
                            key={item.id}
                            index={item.id}
                            value={value}
                        >
                            <div className={classes.lineCircle} >
                                <AnimateOnScroll animationStyle="rotate" loops={2} method={"perc"} from={180}  >
                                    <img src={LineCircle} width="200" alt="line circle icon" />
                                </AnimateOnScroll>
                            </div>
                            <Grid container >
                                <Grid item xs={4} >
                                    <img src={item.icon} height="150" alt="AI icon" />
                                </Grid>
                                <Grid item xs={8} className={classes.tabInfo}>
                                    <Typography variant="h3" component="h4" className={classes.infoTitle} >
                                        {item.title}
                                    </Typography>
                                    <Typography variant="h5" component="p"  >
                                        {item.description}
                                    </Typography>
                                </Grid>

                            </Grid>
                        </TabPanel>
                    ))}
                </Fade>


            </Container>

        </div>
    )
}


const useStyles = makeStyles((theme) => ({
    container: {
        textAlign: 'center',
        padding: '100px 0',
        backgroundColor: '#f9f9f9'
    },
    title: {
        fontWeight: 600,
        color: '#0F0A3C',
        marginBottom: 60
    },
    description: {
        color: '#404040',
        marginBottom: 100
    },
    tabs: {
        width: "100%"
    },
    tab: {
        minWidth: '25%',

    },
    tabIcon: {
        padding: 20
    },
    tabInfo: {
        textAlign: 'left'
    },
    tabPanel: {
        padding: '50px 0',
        boxShadow: '0 0 10px #009F9D',
        position: 'relative'
    },
    infoTitle: {
        fontWeight: 600,
        color: '#0F0A3C',
        marginBottom: 20
    },
    infoDesc: {
        color: '#404040'
    },
    lineCircle: {
        color: "#0F0A3C",
        position: 'absolute',
        right: -30,
        bottom: -60
    }
}));

export default OurExpertises;