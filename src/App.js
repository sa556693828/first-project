import './App.css';
import React from "react";
import ButtonAppBar from "./Component/Bar";
import Header from "./Component/Header";
import About from "./Component/About";
import Footer from "./Component/footer";
import Skills from "./Component/skills";
import Contact from "./Component/Contact";
import { Provider } from "react-redux";
import store from "./model/store";

const App =()=>{
    return(
      <Provider store={store}>
      <div className="App">
        <ButtonAppBar/>
        <Header/>
        <About/>
        <Skills/>
        <Contact/>
        <Footer/>
      </div>
      </Provider>
    );
  }

export default App;
