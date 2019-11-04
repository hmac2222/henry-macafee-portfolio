import React, { Component } from 'react';
import classes from './Portfolio.module.css';
import cx from 'classnames';
import AppBar from './Layout/AppBar/AppBar';
import ProjectCard from './projectCard'
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
import reactLogo from './assets/techs/react.svg';
import gatsbyLogo from './assets/techs/gatsby.svg'
import cssModulesLogo from './assets/techs/css-modules.svg';
import materialUiLogo from './assets/techs/material-ui.svg';
import sassLogo from './assets/techs/sass.svg';
import pastvibeLogo from './assets/pastvibe-logo.png'
import pastvibeCover from './assets/pastvibe-cover.png'




class Portfolio extends Component {
    state = {
        drawer: false
    }

    projects = [{
        title: 'Pastvibe',
        url: 'https://pastvibe.netlify.com',
        cover: pastvibeCover,
        logo: pastvibeLogo,
        description: " is a tool that leverages the Last.fm public API to display the songs you've listened to on this day each year going back in time.",
        techs: [{name: "React", logo: reactLogo, url: "https://reactjs.org"},
             {name: "Sass", logo: sassLogo, url: "https://sass-lang.com/"}]
    },
    {
        title: 'Wedig Studios',
        url: 'https://wedigstudios.netlify.com',
        cover: "wedigCover",
        logo: "wedigLogo",
        description: " is the premier tracking studio in West Nashville",
        techs: [{name: "Gatsby", logo: gatsbyLogo, url: "https://www.gatsbyjs.org/"}]
    },
    {
        title: 'Code for this Website',
        url: '/#',
        cover: "portfolioCover",
        logo: "portfolioLogo",
        description: "",
        techs: [{name: "React", logo: reactLogo, url: "https://reactjs.org/"}, {name: "CSS Modules", logo: cssModulesLogo, url: "https://github.com/css-modules/css-modules"}, {name: "Material UI", logo: materialUiLogo, url: "https://material-ui.com/"}]
    }]

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
                    
                    {this.projects.map(project => {
                       return <ProjectCard title={project.title} url={project.url} cover={project.cover} logo={project.logo} description={project.description} techs={project.techs} />
                    })} 
                </div>
            </div >
        );
    }

}

export default Portfolio;