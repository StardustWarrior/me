import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/VisualPortfolioStyles';
import VisualPortfolioData from './VisualPortfolioData';
import ScrollAnimation from 'react-animate-on-scroll';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class VisualPortfolio extends Component{
    render(){
        const {classes} = this.props;

        return(
            
            <div className={classes.VisualPortfolio}>
                <div className={classes.VisualPortfolioContainer}>
                    <div key={VisualPortfolioData.PortfolioName.toLowerCase()}>
                        <h2><strong>{VisualPortfolioData.PortfolioName}</strong></h2>
                        <Carousel autoPlay>
                            {
                            VisualPortfolioData.websites.map((item, i) => (
                                <div key={item.websiteName.toLowerCase()}>
                                    <img src={item.screenshot} alt={item.websiteName} />
                                    <p className="legend">{item.websiteName}</p>
                                </div>
                            ))
                            }
                        </Carousel>
                    </div>
                </div>
            </div>
            
            
        );
    }
}

export default withStyles(styles)(VisualPortfolio);