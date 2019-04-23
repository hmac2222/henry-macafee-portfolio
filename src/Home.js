import React from 'react';
import Typography from '@material-ui/core/Typography';



const home = (props) => {
    const { classes } = props;
    return (
        <div style={{
            height: '100vh',
            display: 'block',
            backgroundColor: 'black'
        }}>
            <Typography variant="h2" style={{ color: 'white', textAlign: 'center', paddingTop: '40vh' }}>Hi, my name is <strong>Henry MacAfee</strong>.</Typography>
            <Typography variant="h4" style={{ color: 'white', textAlign: 'center', paddingTop: '10vh' }}>I like to make stuff.</Typography>
        </div>
    )
}

export default home