import React from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

/*ParticlesBg是首頁的動畫背景
  Fade是漸入式的動畫
*/

const useStyles = makeStyles((theme) => ({
  header: {
    height:379
  },
  title:{
    color:"#333366",
    fontSize: 100,
    textAlign:"center",
    fontFamily:`Times New Roman`,
    letterSpacing:10
  },
  context :{
    margin:100,
    color:"#333366",
    fontSize: 20,
    textAlign:"center",
    fontFamily:`Bitter`,
    letterSpacing:5
  }
})
);

const Header =()=>{
  const classes = useStyles();
  const header = useSelector(state =>state.header)
      return (
        <header id="home" className={classes.header}>
          <div>
          <ParticlesBg type="circle" bg={true}/>
            <div>
              <Fade bottom>
                <h1  className={classes.title}>{header.title}</h1>
              </Fade>
              <Fade bottom>
                <h3 className={classes.context}>"{header.content}"</h3>
              </Fade>
            </div>
          </div>
        </header>
      );
}

export default (Header)