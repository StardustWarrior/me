import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/WorkExperienceStyles';
import WorkData from './WorkData';
import ScrollAnimation from 'react-animate-on-scroll';
import { Divider } from '@material-ui/core';

class WorkExperience extends Component{
    render(){
        const {classes} = this.props;

        return(
            
            <div className={classes.WorkExperience}>

                <div className={classes.WorkExperienceHeaderTitle}>
                    <h2>{"Work Experience"}</h2>
                </div>

                <div className={classes.WorkExperiencesGroup}>

                    <ScrollAnimation animateIn='bounceInLeft'
                        animateOut='bounceOutLeft'
                        duration='1'
                    >

                        <div className={classes.WorkExperiencesContainer}>
                            <div key={WorkData.companyName.toLowerCase()}>
                                <h3><strong>{WorkData.companyName}</strong></h3>

                                <p>{WorkData.companyDescription}</p>

                                <ul>
                                {
                                WorkData.roles.map((item, i) => (
                                    <li key={item.position.toLowerCase()}> {item.position} ({item.YearOfStart} - {item.YearOfEnd})</li>
                                ))
                                }
                                </ul>
                            </div>
                        </div>

                        <div className={classes.KeyTasksContainer}>
                            <Divider />

                            <p key={WorkData.companyName.toLowerCase()}>
                                <h3><strong>{"Key Tasks"}</strong></h3>

                                <ul>
                                    {
                                    WorkData.keyTasksJ1.map((item, i) => (
                                        <li key={item.i}>
                                            {item.task}
                                        </li>
                                    ))
                                    }
                                </ul>
                            </p>
                        </div>

                    </ScrollAnimation>

                </div>

                <div className={classes.WorkExperiencesGroup}>

                    <ScrollAnimation animateIn='bounceInRight'
                        animateOut='bounceOutRight'
                        duration='1'
                    >

                        <div className={classes.WorkExperiencesContainer}>
                            <p key={WorkData.freelanceProjects.toLowerCase()}>
                                <h3><strong>{WorkData.freelanceProjects}</strong></h3>
                                {
                                WorkData.freelance.map((item, i) => (
                                    <ul>
                                        <li key={item.Company.toLowerCase()}>
                                            {item.Company}:&nbsp;
                                            {item.jobRole}&nbsp;({item.YearOfStart} - {item.YearOfEnd}) 
                                            / {"Location"}: {item.Location}

                                            <ul>
                                                {
                                                item.tasks.map((x, i) => (
                                                    <li key={i}>{x.project}</li>
                                                ))
                                                }
                                            </ul>
                                        </li>
                                    </ul>
                                ))
                                }
                            </p>
                        </div>
                
                    </ScrollAnimation>

                </div>

            </div>
            
            
        );
    }
}

export default withStyles(styles)(WorkExperience);