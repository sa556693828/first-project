import React from "react";
import { Fade, Slide } from "react-reveal";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  contact: {  
    fontFamily:`opensans-bold`,
    paddingBottom: 100,
    paddingTop: 60,
    backgroundColor: "#7B7B7B",
    color:"black"
  },
  title:{
    textAlign:"center",
    fontSize:30
  },
  paper:{
    weight:10,
    backgroundColor: "#7B7B7B",
    display: "inline-block",
  },
  paperr:{
    backgroundColor: "#7B7B7B",
    display: "inline-block",
  },
  contactform: {
     marginBottom: 30,
  },
  contactlabel: {
    margin: 10,
    color: "#EBEEEE",
    display: "inline-block",
    float:"center",
  },
 contactinput:{
  color: "#eee",
  backgroundColor: " #4F4F4F",
  marginBottom: 10,
  border: 0,
  outline: "none",
  fontSize: 17,
  lineHeight: 3,
  width: 500,
  },
  social:{
    margin: 50,
    padding: 0,
    fontSize: 40,
  },
  footerli: {
     display: "inline-block",
     marginLeft: 42,
     color: "#000000",
  },
  icon:{
    marginTop:50,
    width:60,
  }
})
);
  const Contact =()=>{
    const classes = useStyles();
    const contact = useSelector(state =>state.contact)
    const networks = contact.social.map(function (social,index) {
      let Image = "image/" + social.icon;
      return (
        <li className={classes.footerli}>
          <img alt={Image} src={Image} className={classes.icon}/>
            <i>{social.name}</i>
        </li>
      );
    })
    return (
      <section id="contact" className={classes.contact}>
        <Fade bottom duration={1000}>
          <div className={classes.title}>
              <h1>
                {contact.title}
              </h1>
              <p>{contact.second}</p>
          </div>
        </Fade>
        <Grid container spacing={0}>
        <Grid item xs={6}>
          <Paper elevation={0} variant="outlined" className={classes.paper}>
            <Slide left duration={1000}>
              <div>
              <form action="" method="post" id="contactForm" name="contactForm" className={classes.contactform}>
                <fieldset>
                  <div>
                    <label htmlFor="contactName" className={classes.contactlabel} style={{paddingRight:19}}>
                      Name<span>*</span>
                    </label>
                    <input
                      className={classes.contactinput}
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactName"
                      name="contactName"
                      // onChange={this.handleChange}
                    />
                  </div>
                  <div>
                  <label htmlFor="contactName" className={classes.contactlabel} style={{paddingRight:19}}>
                    Email<span>*</span>
                    </label>
                    <input
                      className={classes.contactinput}
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactEmail"
                      name="contactEmail"
                      // onChange={this.handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="contactName" className={classes.contactlabel}>
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      className={classes.contactinput}
                      cols="50"
                      rows="5"
                      id="contactMessage"
                      name="contactMessage"
                    ></textarea>
                  </div>
                  <div>
                    <button>Submit</button>
                  </div>
                </fieldset>
              </form>
              </div>
            </Slide>
          </Paper>
          </Grid>
        <Grid item xs={6}>
          <Paper elevation={0} variant="outlined" className={classes.paperr}>
            <Slide left duration={1000}>
            <div>
              <ul className={classes.social}>{networks}</ul>
            </div>
            </Slide>
          </Paper>
        </Grid>
        </Grid>
    </section>    
    );
}

export default (Contact);
