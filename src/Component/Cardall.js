import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 400,
    height: 400,
    fontFamily:"Microsoft YaHei",
    backgroundColor:"#CCFFFF"
  },
  title: {
    margin:-20,
    paddingBottom:5,
    fontSize: 50,
    textAlign:"center",
    fontFamily: ['Times New Roman','sans-serif'],
  },
  li:{
    fontSize:19,
    fontFamily:"Microsoft YaHei",
    color:"#666666",
    lineHeight: 1.9,
  },
  li2:{
    display:"block",
    fontSize:30,
    color:"#666666"
  },
  li3:{
    display:"block",
    fontSize:25,
    lineHeight: 1.8,
    color:"#666666"
  },
  button:{
    backgroundColor:"gray",
    position:"absolate",
    left:300,
    top:-24,
  },
  p:{
    textAlign:"center",
    color:"#00BBFF",
  } 
});

const Cardall =(props) =>{ 
  const classes = useStyles();
  const name = props.name
  const test = props.data.map((test) => {
    if(name === "1") {
      return (
        <>
        <Typography className={classes.title}>{test.title}</Typography>
        <p className={classes.p}>{test.second}</p>
          <p className={classes.li}>
            {test.content}
          </p>
          <CardActions>
        <Button size="small" className={classes.button}> More...</Button>
      </CardActions>
        </>
      )
    }
    else if(name==="2"){
      const content = test.content
      const card2li = content.map((name,index) => {
        return (
          <>
          <li style={{visibility:"hidden"}}>2</li>
          <li className={classes.li2}>{content[index].name}</li>
          </>
        );
      }); 
      return (
        <>
          <Typography className={classes.title}>{test.title}</Typography>
          <p className={classes.p}>{test.second}{content.name}</p>
          <ul>
            {card2li}
          </ul>
        </>
        )
    }
    else if(name==="3"){
      const content = test.content
      const card3li = content.map((name,index) => {
        return (
          <>
          <li className={classes.li3}>{content[index].name}</li>
          </>
        );
      }); 
      return (
        <>
          <Typography className={classes.title}>{test.title}</Typography>
          <p className={classes.p}>{test.second}</p>
          <ul>
            {card3li}
            <li style={{visibility:"hidden"}}>.</li>
            <li className={classes.li3} style={{textAlign:"right"}}>Still going on...</li>
          </ul>
        </>
      )
    }
    return null;
  });

  return (
    <Card className={classes.root}>
      <CardContent>
        {test}
      </CardContent>
    </Card>
  );
}

export default  Cardall