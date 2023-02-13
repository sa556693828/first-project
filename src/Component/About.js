import React from "react";
import Fade from "react-reveal";
import Cardall from "./Cardall"
import Grid from '@material-ui/core/Grid'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  about: {
    height:427,
    paddingTop: 60,
  },
  row:{
  }
})
)

const About =()=>{
  const classes = useStyles();
  const card = useSelector(state =>state.card)
  const {card1,card2,card3}= card
    return (
      <section id="about" className={classes.about}>
        <Fade duration={1000}>
        <Container>
          <div className={classes.row}>
          <Grid container spacing={0}>
            <Grid item xs={0}/>
            <Grid item xs={4}>
              <Cardall data={card1} name="1"/>
            </Grid>
            <Grid item xs={4}>
              <Cardall data={card2} name="2"/>
            </Grid>
            <Grid item xs={3}>
              <Cardall data={card3} name="3"/>
            </Grid>
          </Grid>
          </div>
          </Container>
        </Fade>
      </section>
    );
}
export default About;