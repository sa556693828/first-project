// import { combineReducers } from 'redux'
import {ADD_TODO} from "./actions"
// import * as actions from "./actions"

const initialState = {
    header: {
      title:"Hello",
      content:"The first step is as good as half over."
    },
    card:{
      card1:[{
        title:"Intro",
        second:"自介",
        content:"目前是資工系大三的學生。總是希望自己 可以透過Coding實現自己理想中的網頁。因此對於前後端環境的開發很嚮往。　　　也開始自學了很多自己覺得不足的領域，　例如:Python、React、Js，在自己摸索的階段也意識到實作的重要性。希望未來能透過每次專案吸取各種養分。",
      }],
      card2:[{
        title:"Education",
        second:"學歷",
        content:[
          {
            name:"中正國中",
            type:"0"
          },
          {
            name:"和平高中二類組",
            type:"1"
          },
          {
            name:"淡江大學資訊工程系",
            type:"2"
          },
        ]
      }],
      card3:[{
        title:"Experience",
        second:"經歷",
        content:[
          {
            name:"股市分析網頁前端製作",
            type:"0"
          },
          {
            name:"全校系學幹部訓練負責人",
            type:"1"
          },
          {
            name:"19~20年淡江電競代表隊",
            type:"2"
          },
          {
            name:"資工系學會公關長",
            type:"3"
          },
          {
            name:"吉他、熱音社主唱兼負責人",
            type:"4"
          },
        ]
      }]
    },
    skills:{
      title:"skills",
      second:"技能列表",
      bar:[
        {
          name:"React",
          level:"70%"
        },
        {
          name:"CSS",
          level:"60%"
        },
        {
          name:"HTML",
          level:"50%"
        },
        {
          name:"Js",
          level:"30%"
        },
        {
          name:"JQuery",
          level:"10%"
        },
        {
          name:"JAVA",
          level:"50%"
        },
        {
          name:"C++",
          level:"70%"
        }
      ]
    },
    contact:{
      title:"Get In Touch.",
      second:"Here is where to contact me.",
      social: [
        {
          icon:"locate.png",
          name:"Taiwan , Taipei",
          className:"lo"
        },
        {
          icon:"phone.png",
          name:"0988847892",
          className:"ph"
        },
        {
          icon:"mail.png",
          name:"sa556693828@mail.com",
          className:"ma"
        },
      ],
    },
    footer:{
      title:"我是title",
      social:[
        {
          icon:"fb.png",
          name:"facebook",
          href:"https://www.facebook.com/profile.php?id=100000443619577"
        },
        {
          icon:"ins.png",
          name:"instagram",
          href:"https://www.instagram.com/hphm_0907/"
        },
        {
          icon:"git.png",
          name:"github",
          href:"https://github.com/sa556693828/"
        },
      ],
    },
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          number: "dd"
        };
      default:
        return state;
    }
  };

export default rootReducer;