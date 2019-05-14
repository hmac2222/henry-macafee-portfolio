import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles'
import { withStyles } from '@material-ui/core/styles';
import MUIAppBar from '@material-ui/core/AppBar';
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
            main: "#889998"
        }
    },
    typography: {
        useNextVariants: true
    }
})

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    },
    navButton: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
});


class AppBar extends Component {

    state = {
        scrolling: false
    }

    handleScroll = (event) => {
        if (window.scrollY <= (Math.max(document.documentElement.clientHeight, window.innerHeight)) && this.state.scrolling === true) {
            this.setState({ scrolling: false });
        }
        else if (window.scrollY >= (Math.max(document.documentElement.clientHeight, window.innerHeight)) && this.state.scrolling !== true) {
            this.setState({ scrolling: true });
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <MUIAppBar position="fixed" style={this.state.scrolling ? { backgroundColor: '#5e6969' } : { backgroundColor: '#000' }} >
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon onClick={this.props.drawerButtonClicked} />
                        </IconButton>
                        <Typography variant="h5" color="inherit" align="center" className={classes.grow}>

                        </Typography>
                        <Button className={classes.navButton} onClick={this.props.homeButtonClicked} color="inherit">Home</Button>
                        <Button className={classes.navButton} color="inherit">Resume</Button>
                        <Button className={classes.navButton} onClick={this.props.portButtonClicked} color="inherit">Portfolio</Button>
                        <Button className={classes.navButton} color="inherit">GitHub</Button>
                        <Button className={classes.navButton} color="inherit">LinkedIn</Button>
                        <Button className={classes.navButton} color="inherit">Contact Me</Button>
                    </Toolbar>
                </MUIAppBar>
            </div >
        );
    }


}

export default withStyles(styles)(AppBar);