import React from "react";
import { useSelector } from 'react-redux'
import Slide from "react-reveal";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  skills: {
    height:800,
    fontFamily:`opensans-bold`,
    backgroundColor:"#CCFF99",
    paddingTop: 60,
  },
  title:{
    textAlign:"center",
    fontSize:60 ,
  },
  p:{
    textAlign:"center",
    fontSize:25,
    fontFamily:"Microsoft YaHei",
    
  },
  bar: {
    position:"absolute",
    left: 0,
    top: 0,
    margin: 0,
    paddingRight:"24px",
    backgroundColor:"#313131",
    height: "42px",
    display:"inline-block",
    borderRadius: 2,
    lineHeight: "42px",
  },
  bars: {
	width: "90%" ,
  textAlign: "left",
  float:"left",
  marginLeft:125,
  },
  barskills: {
  	margin: 18,
    listStyle:"none",
  },
  barsli: {
    position:"relative",
  	height: "42px",
    marginBottom: "40px",
    borderRadius: "0px",
  },
  barslip: {
    fontSize: "20px",
    color: "#313131",
    letterSpacing: "2px",
    position: "relative",
    fontWeight: "normal",
	  top: "-36px",
  },
})
)
const getRandomColor=()=> {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const Resume =()=>{
  const classes = useStyles();
  const skills = useSelector(state =>state.skills)
  const bars = skills.bar.map((bar,index) => {
    const backgroundColor = getRandomColor();
    const width = bar.level;
    return (
      <li className={classes.barsli}>
        <span style={{width, backgroundColor}} className={classes.bar}></span>
        <p className={classes.barslip}>{bar.name}:{bar.level}</p>
      </li>
    );
  });
    return (    
      <section id="skills" className={classes.skills}>
        <Slide left duration={1300}>
            <div>
              <h1 className={classes.title}>
                {skills.title}
              </h1>
            </div>
            <div className="columns">
              <p className={classes.p}>技能列表</p>
              <div className={classes.bars}>
                <ul className={classes.barskills}>{bars}</ul>
              </div>
            </div>   
        </Slide>
      </section>
    );
};

export default (Resume);