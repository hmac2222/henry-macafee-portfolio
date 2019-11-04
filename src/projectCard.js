import React from 'react';
import classes from './projectCard.module.css';
import cx from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import codeIcon from './assets/github-logo.svg'



const projectCard = (props) => {
    return(
            <Card className={classes.Card} elevation={2} >
                <div>
                        <img style={{ border: '1px solid black', dropShadow: '1 1 1' }} width="100%" src={props.cover} />
                </div>
                <div>
                    <a href={props.url}><img className={ cx(classes['project-logo'], classes.grow)} src={props.logo} /></a>
                </div>
                <div className={ cx(classes['code-link'], classes.grow)}><a href={props.codeLink}><img src={codeIcon}></img></a></div>
                <div className={classes['description-text']}>
                        <Typography variant="p" style={{ color: 'black' }}><strong>{props.title}</strong>{props.description}</Typography>
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