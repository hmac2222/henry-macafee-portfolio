import React from 'react';
import classes from './projectCard.module.css';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';



const projectCard = (props) => {
    return(
            <Card className={classes.Card} elevation={2} >
                <div>
                        <img style={{ border: '1px solid black', dropShadow: '1 1 1' }} width="100%" src={props.cover} />
                </div>
                <div>
                    <a href={props.url}><img className={ cx(classes['project-logo'], classes.grow)} style={{border: '3px solid #ccc', borderRadius: '120px', marginRight: '220px', marginTop: '-50px'}} src={props.logo} /></a>
                </div>
                <div>
                        <Typography variant="p" style={{ color: 'black', textAlign: 'center', padding: '20px' }}><strong>{props.title}</strong>{props.description}</Typography>
                </div>
                <div className={classes.technologies}>
                        <Typography variant="p">Technologies Used:</Typography>
                    <div className={classes['technologies-list']}>
                        {props.techs.map(tech => {
                            console.log(tech);
                            return <a href={tech.url} ><img className={classes.techLogo}
                                        src={tech.logo} 
                                        alt={tech.name} 
                                        title={tech.name}
                                        url={tech.url} /></a>
                        })}
                    </div>
                </div>
             </Card>
    )
}

export default withStyles(classes)(projectCard);