import React, { Component } from 'react';
import classes from './Portfolio.module.css';
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
import pastvibeLogo from './assets/pastvibe-logo.png';
import pastvibeCover from './assets/pastvibe-cover.png';
import wedigCover from './assets/wedig-cover.png';
import wedigLogo from './assets/wedig-logo.png';
import portfolioCover from './assets/portfolio-cover.png';
import portfolioLogo from './assets/portfolio-logo.png';
import { Typography } from '@material-ui/core';




class Portfolio extends Component {
    state = {
        drawer: false
    }

    projects = [{
        title: 'Pastvibe',
        url: 'https://pastvibe.netlify.com',
        codeLink: 'https://github.com/hmac2222/pastvibe',
        cover: pastvibeCover,
        logo: pastvibeLogo,
        description: " is a tool that leverages the Last.fm public API to display the songs you've listened to on this day each year going back in time.",
        techs: [{name: "React", logo: reactLogo, url: "https://reactjs.org"},
             {name: "Sass", logo: sassLogo, url: "https://sass-lang.com/"}]
    },
    {
        title: 'Wedig Studios',
        url: 'https://wedigstudios.netlify.com',
        codeLink: 'https://github.com/hmac2222/wedig-studios',
        cover: wedigCover,
        logo: wedigLogo,
        description: " is the premier tracking studio located in West Nashville",
        techs: [{name: "Gatsby", logo: gatsbyLogo, url: "https://www.gatsbyjs.org/"}]
    },
    {
        title: 'This Website',
        url: 'https://github.com/hmac2222/henry-macafee-portfolio',
        codeLink: 'https://github.com/hmac2222/henry-macafee-portfolio',
        cover: portfolioCover,
        logo: portfolioLogo,
        description: " was built with React, Material-UI, uses CSS Modules, and is deployed automatically by Netlify.",
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
                    {[{text: 'Home', action: this.props.homeButtonClicked, url: "#"}, {text: 'Portfolio', action: this.props.portButtonClicked, url: "#"}, {text: 'Resume', action: this.props.resButtonClicked, url: "#"}].map((item, index) => (
                        <ListItem button key={item.text} onClick={item.action} href={item.url}>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                    {[{text: 'Github', url:"https://github.com/hmac2222"}, {text: 'LinkedIn', url: "https://www.linkedin.com/in/henry-macafee-42887743/"}, {text: 'Contact Me', url: "mailto:henry.macafee@gmail.com"}].map((item, index) => (
                    <a href={item.url} style={{textDecoration: 'none', color: 'black'}}><ListItem button key={item.text}>
                    <ListItemText primary={item.text} />
                </ListItem></a>
                    ))}
                </List>
            </div>
        );

        return (
            <div style={{display: 'block' }}>
                <AppBar 
                drawerButtonClicked={this.drawerShow} 
                homeButtonClicked={this.props.homeButtonClicked}
                portButtonClicked={this.props.portButtonClicked}
                resButtonClicked={this.props.resButtonClicked} />
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
                
                <div className={classes['project-container']} style={{ textAlign: 'center'}}>
                    {this.projects.map(project => {
                       return <ProjectCard title={project.title} url={project.url} codeLink={project.codeLink} cover={project.cover} logo={project.logo} description={project.description} techs={project.techs} />
                    })} 
                </div>
            </div >
        );
    }

}

export default Portfolio;