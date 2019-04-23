import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#801313"
        },
        secondary: {
            main: "#FF715B"
        }
    },
    typography: {
        useNextVariants: true
    }
})

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

const appBar = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" color="secondary" >
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" color="inherit" align="center" className={classes.grow}>
                        Henry MacAfee
          </Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Resume</Button>
                    <Button color="inherit">Portfolio</Button>
                </Toolbar>
            </AppBar>
        </div >
    );
}

export default withStyles(styles)(appBar);