import React, { Component } from 'react'
import ReactSVG from 'react-svg'
import henryResume1 from './assets/henryresume1.svg'
import henryResumePdf from './assets/henryresume.pdf'
import downloadIcon from './assets/download.svg'
import classes from './Resume.module.css';


class Resume extends Component {
  render() {

    return (
      <div className={classes.container}>
        <a href={henryResumePdf}><ReactSVG src={henryResume1}
          beforeInjection={svg => {
            svg.classList.add(classes['henry-resume'])
            svg.setAttribute('style', 'font-family: Oswald')
          }} /><div className={classes.overlay}><img alt="download" className={classes['download-icon']} src={downloadIcon}></img></div></a>
      </div>
    )
  }
}

export default Resume;