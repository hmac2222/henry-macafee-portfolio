import React, { Component } from 'react';
import classes from './Portfolio.module.css';
import AppBar from './Layout/AppBar/AppBar';
import Card from '@material-ui/core/Card';
import pastvibe from './assets/pastvibe.svg'
import pastvibeScreenshot from './assets/pastvibe-screenshot.png'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';




class Portfolio extends Component {
    state = {
        drawer: false
    }

    drawerShow = () => {
        this.setState({ drawer: true })
    }

    drawerHide = () => {
        this.setState({ drawer: false })
    }
    render() {

        const sideList = (
            <div className={classes.list}>
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );

        return (
            <div style={{ height: '100vh', display: 'block' }}>
                <AppBar 
                drawerButtonClicked={this.drawerShow} 
                homeButtonClicked={this.props.homeButtonClicked}
                portButtonClicked={this.props.portButtonClicked} />
                <Drawer open={this.state.drawer} onClose={this.drawerHide}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.drawerHide}
                        onKeyDown={this.drawerHide}
                    >
                        {sideList}
                    </div>
                </Drawer>
                <div style={{ textAlign: 'center' }}>
                    <Card className={classes.Card} elevation={2} >
                        <div><img width="200px" src={pastvibe} /></div>
                        <div ><img style={{ border: '1px solid black', dropShadow: '1 1 1' }} width="300px" src={pastvibeScreenshot} /></div>

                    </Card>
                    <Card className={classes.Card} elevation={2} >Blues Barbershop</Card>
                    <Card className={classes.Card} elevation={2} >Project 3</Card>
                </div>
            </div >
        );
    }

}

export default Portfolio