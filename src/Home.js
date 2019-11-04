import React from 'react';
import moduleStyles from './Home.module.css'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
    button: {
        background: 'linear-gradient(90deg, rgba(94,105,105,1) 0%, rgba(137,153,136,1) 100%)',
        color: 'white',
        border: 0,
        '&:hover': {
            background: 'linear-gradient(90deg, rgba(109,121,121,1) 0%, rgba(160,179,159,1) 100%) ',
            border: 0
        }
    }
}



const home = (props) => {
    const { classes, children, className, ...other } = props;
    return (
        <div className={moduleStyles.Container}>
            <Typography className={classes.hello}variant="h2" style={{ color: 'white', textAlign: 'center', paddingTop: '40vh' }}>Hi, my name is <strong>Henry MacAfee</strong>.</Typography>
            <Typography className={classes['i-like']} variant="h4" style={{ color: 'white', textAlign: 'center', paddingTop: '4vh' }}>I like to make <span className={moduleStyles.Elegant}>elegant</span>, <code>functional</code> stuff.</Typography>
            <div style={{ textAlign: 'center', marginTop: '30px' }}><Button className={classes.button} onClick={props.portButtonClicked} variant="outlined" color="secondary"  >SEE FOR YOURSELF</Button></div>
        </div >
    )
}

export default withStyles(styles)(home)