import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/SkillsStyles';
import SkillsData from './SkillsData';
import ScrollAnimation from 'react-animate-on-scroll';
import ComputerIcon from '@material-ui/icons/Computer';
import WorkIcon from '@material-ui/icons/Work';

class Skills extends Component{
    render(){
        const {classes} = this.props;
        const rowLen = SkillsData.webTech.length;

        return(
            
            <div className={classes.Skills}>
                <ScrollAnimation animateIn='fadeIn'
                    animateOut='fadeOut'
                    duration='1'
                >

                    <div className={classes.SkillsHeaderTitle}>
                        <h2>{"Knowledge Bank of Tools & Technologies"}</h2>
                    </div>

                    <div className={classes.SkillsGroup}>

                        <div className={classes.SkillIconContainer}>
                            <ComputerIcon />
                        </div>

                        <div className={classes.SkillsContainer}>
                            <p key={SkillsData.webTechTitle.toLowerCase()}>
                                <strong>{SkillsData.webTechTitle}:</strong>
                                {
                                SkillsData.webTech && SkillsData.webTech.map((item, i) => (
                                <span key={item.name.toLowerCase()}> {item.name}{(SkillsData.webTech.length == i + 1) ? '' : ','}</span>
                                ))
                                }
                            </p>

                            <p key={SkillsData.scriptsTitle.toLowerCase()}>
                                <strong>{SkillsData.scriptsTitle}:</strong>
                                {
                                SkillsData.scriptsTitle && SkillsData.scripts.map((item, i) => (
                                <span key={item.name.toLowerCase()}> {item.name}{(SkillsData.scripts.length == i + 1) ? '' : ','}</span>
                                ))
                                }
                            </p>

                            <p key={SkillsData.databaseTitle.toLowerCase()}>
                                <strong>{SkillsData.databaseTitle}:</strong>
                                {
                                SkillsData.databaseTitle && SkillsData.database.map((item, i) => (
                                <span key={item.name.toLowerCase()}> {item.name}{(SkillsData.database.length == i + 1) ? '' : ','}</span>
                                ))
                                }
                            </p>
                            
                            <p key={SkillsData.webToolsTitle.toLowerCase()}>
                                <strong>{SkillsData.webToolsTitle}:</strong>
                                {
                                SkillsData.webToolsTitle && SkillsData.webTools.map((item, i) => (
                                <span key={item.name.toLowerCase()}> {item.name}{(SkillsData.webTools.length == i + 1) ? '' : ','}</span>
                                ))
                                }
                            </p>

                            <p key={SkillsData.languagesTitle.toLowerCase()}>
                                <strong>{SkillsData.languagesTitle}:</strong>
                                {
                                SkillsData.languagesTitle && SkillsData.languages.map((item, i) => (
                                <span key={item.name.toLowerCase()}> {item.name}{(SkillsData.languages.length == i + 1) ? '' : ','}</span>
                                ))
                                }
                            </p>

                        </div>

                    </div>

                    <div className={classes.SkillsGroup}>
                        
                        <div className={classes.SkillIconContainer}>
                            <WorkIcon />
                        </div>

                        <div className={classes.SkillsContainer}>
                            <p key={SkillsData.techSkillsTitle.toLowerCase()}>
                                <strong>{SkillsData.techSkillsTitle}:</strong>
                                {
                                SkillsData.techSkills && SkillsData.techSkills.map((item, i) => (
                                <span key={item.name.toLowerCase()}> {item.name}{(SkillsData.techSkills.length == i + 1) ? '' : ','}</span>
                                ))
                                }
                            </p>

                            <p key={SkillsData.managerialSkillsTitle.toLowerCase()}>
                                <strong>{SkillsData.managerialSkillsTitle}:</strong>
                                {
                                SkillsData.managerialSkills && SkillsData.managerialSkills.map((item, i) => (
                                <span key={item.name.toLowerCase()}> {item.name}{(SkillsData.managerialSkills.length == i + 1) ? '' : ','}</span>
                                ))
                                }
                            </p>

                        </div>

                    </div>
                </ScrollAnimation>
            </div>
            
            
        );
    }
}

export default withStyles(styles)(Skills);