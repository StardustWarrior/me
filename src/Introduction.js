import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import photo from './components/img/DSC_0778.png';
//import stylesCSS from './styles/IntroductionStyles';
import ParticlesBg from 'particles-bg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import ScrollableAnchor from 'react-scrollable-anchor';

const styles = theme => ({
    Introduction: {
        flexGrow: 1,
        padding: theme.spacing(8),
        position: "relative",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            padding: `${theme.spacing(5)}px 0`,
        }
    },
    IntroductionContainer: {
        margin: "0",
        /*height: "100%",*/
        "& h1" :{
            color: "rgba(255, 255, 255, 0.87)",
            margin: "0",
            fontSize: "4em"
        },
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            "& h1" :{
                fontSize: "2em"
            }
        }
    },
    IntroductionContent: {
        color: "rgba(255, 255, 255, 0.87)",
        textAlign: "center",
        margin: "0 auto",
        "& h3" :{
            margin: "0",
            fontSize: "1.5em"
        },
        "& p" :{
            fontSize: "1.3em",
            width: "60%",
            margin: "15px auto"
        },
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            width: '90%',
            "& h3" :{
                fontSize: "1.3em"
            },
            "& p" :{
                fontSize: "1.1em",
                width: "90%",
            },
        }
    },
    myPhoto: {
        margin: "20px auto",
        width: "140px",
        height: "140px",
        "& img": {
            width: "100%",
            height: "100%",
            transition: "all 400ms ease-in-out",
        },
        "& :hover":{
            opacity: ".7"
        }
    },
    socialNetworks: {
        "& a": {
            margin: '0 10px',
            color: '#ffffff',
            transition: "all 300ms ease-in-out",
            "& :hover": {
                opacity: ".7"
            }
        }
    },
    arrowDown: {
        color: '#ffffff',
        position: 'absolute',
        bottom: '3%',
        left: '50%',
        marginLeft: '-28px',
        transition: "all 600ms ease-in-out",
        cursor: 'pointer',
        "& a":{
            color: '#ffffff',
        },
        "& svg": {
            fontSize: '4em',
        },
        "& :hover": {
            opacity: ".7"
        }
    }
});

class Introduction extends Component{
    render(){
        const { classes, theme } = this.props;
        const placeTo = "_blank";
        const socialNet = [
            {
                id: 1,
                socialName: 'LinkedIn',
                socialUrl: 'https://www.linkedin.com/in/mchang-dev/',
                icon: '<LinkedInIcon />'
            },
            {
                id: 2,
                socialName: 'GitHub',
                socialUrl: 'https://github.com/StardustWarrior/',
                icon: '<GitHubIcon />'
            }
        ];

        return (
        <div id="Introduction" className={classes.Introduction}>
            <div className={classes.IntroductionContainer}>
                <h1>Hi, I'm Manuel</h1>
                <div className={classes.IntroductionContent}>
                    <div className={classes.myPhoto}>
                        <img src={photo} alt={"my Photo"} />
                    </div>
                    <h3>About me</h3>
                    <p>
                        System Analyst / Web Developer with 5+ years of hands-on experience successfully deploying and maintaining complex digital projects at a fast-paced digital agency. 
                        With a diverse set of technical skills and a serious customer service drive.
                    </p>
                    <div className={classes.socialNetworks}>
                        {socialNet.map((social) =>
                            <a 
                                href={social.socialUrl} 
                                target={placeTo} 
                                alt={social.socialName} 
                                key={social.id}>
                                    {(social.id === 1) ? <LinkedInIcon /> : <GitHubIcon />}
                            </a>
                        )}
                    </div>
                </div>
            </div>
            
            <div className={classes.arrowDown}>
                <a href="#work"><ArrowDropDownCircleIcon /></a>
            </div>

            <ParticlesBg type="cobweb" bg={true} />
        </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Introduction);