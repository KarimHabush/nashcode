(this.webpackJsonpnashcode=this.webpackJsonpnashcode||[]).push([[0],{121:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(20),o=a.n(r),l=(a(92),a(38)),c=a(39),s=a(47),m=a(46),d=a(142),u=a(143),p=a(17),g=a(40),h=a.n(g),f=a(127),E=a(144),v=a(145);var b=function(e){return i.a.createElement("svg",Object.assign({viewBox:"0 0 13 16.27"},e),i.a.createElement("title",null,"NIcon"),i.a.createElement("g",{"data-name":"Layer 2"},i.a.createElement("path",{fill:"#000000",d:"M13 0h-3v9.64L0 .1l.06 4.12L13 16.27V0z","data-name":"Layer 1"})))},N=a(6),x=a.n(N),w=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement("div",{className:e.container,id:"hero"},i.a.createElement("div",{className:e.sectionOne},i.a.createElement(d.a,{maxWidth:"lg",className:e.containerOne},i.a.createElement(u.a,{disableGutters:!0,className:e.toolbar},i.a.createElement("img",{className:e.logo,src:h.a,alt:"logo"}),i.a.createElement("div",{className:e.links},i.a.createElement(p.b,{className:e.link,to:"/our-work"},"OUR WORK"),i.a.createElement(p.b,{className:e.link,to:"/blog"},"BLOG"),i.a.createElement(p.b,{className:e.link,to:"/contact-us"},"CONTACT US"))),i.a.createElement(E.a,{container:!0,direction:"row",spacing:1,className:e.gridOne},i.a.createElement(E.a,{item:!0,xs:7},i.a.createElement(x.a,{duration:3e3},i.a.createElement(v.a,{component:"h1",variant:"h3",className:e.homeTitle},"We build products to satisfy",i.a.createElement("br",null),"both ",i.a.createElement("span",{className:e.colorPrimary},"you")," and ",i.a.createElement("span",{className:e.colorPrimary},"our")," team!")),i.a.createElement(x.a,{delay:500,duration:3e3},i.a.createElement("button",{className:e.button},"SEE OUR WORK"))),i.a.createElement(E.a,{item:!0,xs:5,className:e.subGridTwo},i.a.createElement(b,{className:e.nIcon}))))))}}]),a}(i.a.Component),y=Object(f.a)((function(e){return{logo:{height:18,cursor:"pointer"},link:{marginLeft:50,color:"#f9f9f9",fontWeight:500,textDecoration:"none","&:hover":{color:"#009F9D",textDecoration:"none"}},links:{marginLeft:"auto"},sectionOne:{backgroundColor:"#0F0A3C"},containerOne:{height:"100vh",paddingTop:30},homeTitle:{color:"#f9f9f9",fontWeight:500},colorPrimary:{color:"#009F9D"},gridOne:{height:"90%",alignItems:"center"},button:{marginTop:100,padding:"7px 20px",fontSize:"18px",fontWeight:600,color:"#0F0A3C",backgroundColor:"#f9f9f9",cursor:"pointer",border:"none"},nIcon:{width:"80%"},nLineOne:{position:"absolute",right:"30%",top:"15%",width:"250px"},nLineTwo:{position:"absolute",right:"5%",top:"13%",width:"250px"},subGridTwo:{textAlign:"right"}}}))(w),C=a(146);var L=function(e){return n.createElement("svg",Object.assign({viewBox:"0 0 60.76 66.8"},e),n.createElement("title",null,"Asset 13"),n.createElement("g",{"data-name":"Layer 2"},n.createElement("path",{d:"M59.67.26c-.14-.5-1.56-.12-1.67-.09-11.21 2.26-17.14 12.61-22 21.89a127.54 127.54 0 00-5.48 12 101.06 101.06 0 00-4.09-18.34c-1.6-4.86-3.74-10.57-8.92-12.52C13 1.51 8 3.86 4.43 6.61c-10.17 7.87-.28 20 4.34 28.23l9.75 17.27 5.06 9c1.07 1.9 1.71 3.77 4.18 3.62l.48-.06c.07.59.16 1.18.28 1.78.37 1.85 7.69-3.27 8.24-4a143.84 143.84 0 0017.29-29.17C58.6 23 62.82 11.54 59.67.26z",fill:"#d65a4a","data-name":"Layer 1"})))},k=a(43),O=a.n(k),A=a(80),j=a(70),W=a.n(j),D=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={clientHeight:0,scrollTop:0,topPercentage:0,scrollOnce:!1,getOnce:!1},n.handleFunc=null,n}return Object(c.a)(a,[{key:"getStartValues",value:function(){if(this.props.target);else{var e=window.innerHeight,t=window.scrollY,a=t/(document.documentElement.offsetHeight-e)*100;this.setState({clientHeight:e,scrollTop:t,topPercentage:a})}this.setState({getOnce:!0})}},{key:"updateValues",value:function(e){var t=this.props.target,a=t?e.srcElement:e.srcElement.scrollingElement,n=a.clientHeight,i=a.scrollTop,r=i/((t?a.scrollHeight:a.offsetHeight)-n)*100;this.setState({clientHeight:n,scrollTop:i,topPercentage:r,scrollOnce:!0})}},{key:"setScrollHandle",value:function(){var e=this,t=W()((function(t){e.updateValues(t)}),this.props.throttle?1e3*this.props.throttle:0,{leading:!1}),a=this.props.target,n=this.props.throttle?t:function(t){e.updateValues(t)},i=a?document.getElementById(a):window;return null!==i?(i.addEventListener("scroll",n),function(){i.removeEventListener("scroll",n)}):function(){}}},{key:"getAnimationStyles",value:function(){var e=this.state.scrollOnce,t=this.props.animationDuration,a="";switch(this.props.animationStyle){case"rotate":a={transform:"rotate(".concat(this.getDeg(),"deg)"),transition:e?"transform ".concat(t||0===t?t:"0.1","s"):""};break;case"slide":a={transform:"translateY(".concat(-this.state.scrollTop/20,"%)"),transition:e?"transform ".concat(t||0===t?t:"0.1","s"):""}}return a}},{key:"getDeg",value:function(){var e=this.props.method,t=this.props.from||0,a=this.props.to||360;if("perc"===e){var n=this.state.topPercentage,i=this.props.loops||1,r=parseInt(i*n/100)+(100!==n?1:Number.isInteger(i)?0:1);return(n/100-1/i*(r-1))*(a-t)*i+t+360*(r-1)*(t>a?-1:1)}var o=this.state.scrollTop,l=parseInt(o/(a-t));return(o-l*(a-t))*(t>a?-1:1)+(t+360*l)}},{key:"componentDidMount",value:function(){this.getStartValues(),this.removeHandleFunc=this.setScrollHandle()}},{key:"componentDidUpdate",value:function(e){e.throttle!==this.props.throttle&&(this.removeHandleFunc(),this.removeHandleFunc=this.setScrollHandle())}},{key:"componentWillUnmount",value:function(){this.removeHandleFunc()}},{key:"render",value:function(){var e=this.state.getOnce,t=this.getAnimationStyles();return i.a.createElement("div",null,e&&i.a.createElement("div",{style:Object(A.a)({},t)},this.props.children))}}]),a}(i.a.Component);D.defaultProps={target:null,throttle:null,from:0,to:360,method:"px",loops:1,animationDuration:.1};var B=Object(C.a)((function(e){return{container:{background:"linear-gradient(180deg, #0F0A3C 50%, #F9F9F9 50%)"},rectangle:{backgroundColor:"#07456F",textAlign:"center",borderRadius:10,padding:70,position:"relative"},lineCircle:{position:"absolute",left:-100,top:-70},titles:{color:"#f9f9f9"},animatePos:{left:-300,position:"absolute"}}})),S=function(e){var t=B();return i.a.createElement("div",{className:t.container,id:"wepresent"},i.a.createElement(x.a,{bottom:!0},i.a.createElement(D,{animationDuration:.3,animationStyle:"slide",loops:2,method:"perc",from:90},i.a.createElement(d.a,{maxWidth:"md",className:t.rectangle},i.a.createElement("div",{className:t.lineCircle},i.a.createElement(D,{animationDuration:.2,animationStyle:"rotate",loops:5,method:"perc",from:90},i.a.createElement("img",{src:O.a,width:"200",alt:"line circle icon"}))),i.a.createElement(v.a,{variant:"h3",component:"h2",className:t.titles},"We'd ",i.a.createElement(L,{width:"50"})," to present ourselves"),i.a.createElement(v.a,{variant:"h4",component:"h2",className:t.titles},"Don't forget to reach out too!")))))},T=a(78),H=a(79),_=a(149),F=a(147),M=a(148),z=a(71),R=a.n(z),I=a(72),P=a.n(I),U=a(73),q=a.n(U),V=a(74),G=a.n(V),K=a(24),Y=a.n(K);function J(e){var t=e.children,a=e.value,n=e.index,r=Object(H.a)(e,["children","value","index"]);return i.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"scrollable-auto-tabpanel-".concat(n),"aria-labelledby":"scrollable-auto-tab-".concat(n)},r),a===n&&i.a.createElement(M.a,{p:3},i.a.createElement(v.a,null,t)))}var X=[{id:0,icon:q.a,title:"Data Science",description:"We'll help you get the best out of your data and make new business decisions faster. Not that? Well, propose your future idea and we'll make it your present."},{id:1,icon:R.a,title:"Front End",description:"none"},{id:2,icon:P.a,title:"Back End",description:"none"},{id:3,icon:G.a,title:"Project Management",description:"none"}];var Z=Object(C.a)((function(e){return{container:{textAlign:"center",padding:"0px 0",backgroundColor:"#f9f9f9"},title:{fontWeight:600,color:"#0F0A3C",marginBottom:45},description:{color:"#404040",marginBottom:70},tabs:{width:"100%"},tab:{minWidth:"25%"},tabIcon:{padding:20},tabInfo:{textAlign:"left"},tabPanel:{padding:"50px 0",boxShadow:"0 0 20px #eeeeee",position:"relative"},infoTitle:{fontWeight:600,color:"#0F0A3C",marginBottom:20},infoDesc:{color:"#404040"},lineCircle:{color:"#0F0A3C",position:"absolute",right:-30,bottom:-60}}})),$=function(e){var t=Z(),a=i.a.useState(0),n=Object(T.a)(a,2),r=n[0],o=n[1];return i.a.createElement("div",{className:t.container,id:"ourexpertises"},i.a.createElement(d.a,{maxWidth:"lg"},i.a.createElement(v.a,{variant:"h3",component:"h2",className:t.title},"OUR EXPERTISES"),i.a.createElement(v.a,{variant:"h5",component:"p",className:t.description},"We use the latest technologies to provide the best software engineering",i.a.createElement("br",null),"solutions that respond to the modern market needs."),i.a.createElement(x.a,null,i.a.createElement(_.a,{className:t.tabs,value:r,onChange:function(e,t){o(t)},indicatorColor:"primary",textColor:"primary",centered:!0},X.map((function(e){return i.a.createElement(F.a,Object.assign({key:e.id,className:t.tab,icon:i.a.createElement("img",{className:t.tabIcon,width:"100",src:e.icon,alt:e.title})},{id:"scrollable-auto-tab-".concat(a),"aria-controls":"scrollable-auto-tabpanel-".concat(a)}));var a}))),X.map((function(e){return i.a.createElement(J,{className:t.tabPanel,key:e.id,index:e.id,value:r},i.a.createElement("div",{className:t.lineCircle},i.a.createElement(D,{animationStyle:"rotate",loops:2,method:"perc",from:180},i.a.createElement("img",{src:Y.a,width:"200",alt:"line circle icon"}))),i.a.createElement(E.a,{container:!0},i.a.createElement(E.a,{item:!0,xs:4},i.a.createElement(x.a,{left:!0},i.a.createElement("img",{src:e.icon,height:"150",alt:"AI icon"}))),i.a.createElement(E.a,{item:!0,xs:8,className:t.tabInfo},i.a.createElement(v.a,{variant:"h3",component:"h4",className:t.infoTitle},i.a.createElement(x.a,null,e.title)),i.a.createElement(v.a,{variant:"h5",component:"p"},i.a.createElement(x.a,{delay:500,cascade:!0},e.description)))))})))))},Q=a(31),ee=a.n(Q),te=a(48),ae=a.n(te);var ne=function(e){return n.createElement("svg",Object.assign({viewBox:"0 0 190.21 243.42"},e),n.createElement("title",null,"Asset 24"),n.createElement("g",{"data-name":"Layer 2"},n.createElement("path",{d:"M185.21 5v226.75L5.85 60.94l-.68-47.33 136.45 134.2 8.51 8.37V5h35.08m5-5h-45.08v144.25L0 1.51l.88 61.6 189.33 180.31V0z",fill:"#f7f7f7","data-name":"Layer 1"})))};var ie=function(e){return n.createElement("svg",Object.assign({viewBox:"0 0 233.28 222.92"},e),n.createElement("title",null,"Asset 25"),n.createElement("g",{"data-name":"Layer 2"},n.createElement("g",{"data-name":"Layer 1"},n.createElement("path",{d:"M114.66 10.76l71 134.13H153l-33.91-67.77-4.47-9-4.47 9L41 215.42H8.24L114.66 10.76m0-10.76L0 220.42h44.08l70.54-141.07 35.27 70.54H194L114.62 0z",fill:"#f7f7f7"}),n.createElement("path",{fill:"none",stroke:"#f7f7f7",strokeMiterlimit:10,strokeWidth:5,d:"M167.52 185.15h44.08l17.64 35.27h-44.09l-17.63-35.27"}))))};var re=function(e){return n.createElement("svg",Object.assign({viewBox:"0 0 127.8 189"},e),n.createElement("defs",null,n.createElement("style",null,".prefix__cls-1{fill:#f7f7f7}")),n.createElement("title",null,"Asset 27"),n.createElement("g",{id:"prefix__Layer_2","data-name":"Layer 2"},n.createElement("g",{id:"prefix__Layer_1-2","data-name":"Layer 1"},n.createElement("path",{className:"prefix__cls-1",d:"M27.66 5.24v178.41H5V5.24h22.66m5-5H0v188.41h32.66V.24zM122.8 5v179H97.69V5h25.11m5-5H92.69v189h35.11V0zM73.68 83.6v21.92H51.76V83.6h21.92m5-5H46.76v31.92h31.92V78.6z"}))))};var oe=function(e){return n.createElement("svg",Object.assign({viewBox:"0 0 216.47 188.42"},e),n.createElement("defs",null,n.createElement("style",null,".prefix__cls-1{fill:#f7f7f7}")),n.createElement("title",null,"Asset 26"),n.createElement("g",{id:"prefix__Layer_2","data-name":"Layer 2"},n.createElement("g",{id:"prefix__Layer_1-2","data-name":"Layer 1"},n.createElement("path",{className:"prefix__cls-1",d:"M75.55 5L36.42 90.07l-.94 2.05.9 2.06L60.26 151l-16 32.42L5.45 92.21 44.21 5h31.34m7.8-5H41L0 92.16l41 96.26L65.26 148 41 92.16 83.35 0z"}),n.createElement("path",{className:"prefix__cls-1",d:"M153.26 34l-73 149H49.12L136.19 5l17.07 30m-2-6L133.07 0l-92 188h42.3l71.89-145z"}),n.createElement("path",{className:"prefix__cls-1",d:"M172.26 5L211 92.21l-38.81 91.21h-31.4l39.3-89.24.91-2.06-.94-2.05L140.93 5h31.33m3.25-5h-42.39l42.39 92.16-42.39 96.26h42.39l41-96.26-41-92.16z"}))))};var le=Object(C.a)((function(e){return{container:{backgroundColor:"#0F0A3C",textAlign:"center",padding:"100px 0 100px 0"},title:{color:"#f9f9f9",fontWeight:600,marginBottom:60},description:{color:"#f9f9f9",marginBottom:100},presentations:{color:"#f9f9f9",textAlign:"left",paddingLeft:100,paddingRight:100,paddingTop:20},bold:{fontWeight:600},overlayLetter:{position:"absolute",height:"43%",top:0,right:0,left:0,marginLeft:"auto",marginRight:"auto",marginTop:"18%"},profileGrid:{position:"relative"}}})),ce=function(e){var t=le(),a=[{id:1,name:"NADA DABACH",desc:"is a Big Data student, lorem ipsum.",icon:i.a.createElement(ne,{className:t.overlayLetter}),image:ee.a},{id:2,name:"ABDELKARIM HABOUCH",desc:"is a Big Data student, lorem ipsum.",icon:i.a.createElement(ie,{className:t.overlayLetter}),image:ee.a},{id:3,name:"SAFOINE ELKHABICHE",desc:"is a Big Data student, lorem ipsum.",icon:i.a.createElement(oe,{className:t.overlayLetter}),image:ee.a},{id:4,name:"HAMZA MOGNI",desc:"is a Big Data student, lorem ipsum.",icon:i.a.createElement(re,{className:t.overlayLetter}),image:ee.a}];return i.a.createElement("div",{className:t.container,id:"whoweare"},i.a.createElement(d.a,{maxWidth:"lg"},i.a.createElement(ae.a,{bottom:!0},i.a.createElement(v.a,{variant:"h3",component:"h2",className:t.title},"WHO WE ARE?")),i.a.createElement(ae.a,{bottom:!0},i.a.createElement(v.a,{variant:"h5",component:"p",className:t.description},"We are a team of dreamers pushed by our curiosity",i.a.createElement("br",null),"to experiment and create meaningful solutions using what we learned.")),i.a.createElement(E.a,{container:!0,spacing:10},a.map((function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(E.a,{item:!0,xs:6,className:t.profileGrid,key:e.id},i.a.createElement(ae.a,null,i.a.createElement("img",{src:e.image,width:"70%",alt:e.name}),i.a.createElement(v.a,{variant:"h5",component:"p",className:t.presentations},i.a.createElement("span",{className:t.bold},e.name)," ",e.desc)),e.icon))})))))},se=a(25),me=a.n(se),de=a(75),ue=a.n(de),pe=a(76),ge=a.n(pe),he=[[{id:0,icon:me.a,title:"Data Science"},{id:1,icon:ue.a,title:"Front End"},{id:2,icon:ge.a,title:"Back End"},{id:3,icon:me.a,title:"Project Management"}],[{id:4,icon:me.a,title:"Data Science"},{id:5,icon:me.a,title:"Front End"},{id:6,icon:me.a,title:"Back End"},{id:7,icon:me.a,title:"Project Management"}]];var fe=Object(C.a)((function(e){return{container:{backgroundColor:"#f9f9f9",textAlign:"center",padding:"100px 0 100px 0",position:"relative"},title:{color:"#0F0A3C",fontWeight:600,marginBottom:60},description:{color:"#404040",marginBottom:100},presentations:{color:"#f9f9f9",textAlign:"left",padding:20,paddingBottom:60},bold:{fontWeight:600},valueTitle:{fontWeight:600,marginTop:20,color:"#0F0A3C"},valueContainer:{padding:"30px 0"},lineCircle:{color:"#000000",position:"absolute",left:0,top:-70}}})),Ee=function(e){var t=fe();return i.a.createElement("div",{className:t.container,id:"motivation"},i.a.createElement("div",{className:t.lineCircle}),i.a.createElement(d.a,{maxWidth:"lg"},i.a.createElement(x.a,{bottom:!0},i.a.createElement(v.a,{variant:"h3",component:"h2",className:t.title},"WHAT MOTIVATES US?")),i.a.createElement(x.a,{bottom:!0},i.a.createElement(v.a,{variant:"h5",component:"p",className:t.description},"We are a team of dreamers pushed by our curiosity",i.a.createElement("br",null),"to experiment and create meaningful solutions using what we learned.")),he.map((function(e){return i.a.createElement(E.a,{container:!0,spacing:5,className:t.valueContainer},e.map((function(e){return i.a.createElement(E.a,{item:!0,xs:3,key:e.id},i.a.createElement(x.a,{bottom:!0},i.a.createElement("img",{height:"40",src:e.icon,alt:e.title}),i.a.createElement(v.a,{variant:"h5",component:"p",className:t.valueTitle},e.title)))})))}))))},ve=a(44),be=a.n(ve),Ne=a(45),xe=a.n(Ne),we=a(57),ye=a.n(we);var Ce=function(e){return n.createElement("svg",Object.assign({viewBox:"0 0 145.38 125.9"},e),n.createElement("title",null,"Asset 24"),n.createElement("g",{"data-name":"Layer 2"},n.createElement("g",{"data-name":"Layer 1"},n.createElement("path",{d:"M72.69 58c9.62 20.06 23.36 4.9 39.27 10L97.07 42.23a25.71 25.71 0 01-19.48-6.4 22.9 22.9 0 00-23.15-4.22L50 39.32c4.22.14 14.8 2.23 22.69 18.68z",fill:"#d54cc0"}),n.createElement("path",{d:"M77.59 35.83a25.71 25.71 0 0019.48 6.4L72.69 0 54.44 31.61a22.9 22.9 0 0123.15 4.22z",fill:"#fe56c7"}),n.createElement("path",{d:"M61.45 75.14c22.7 21.42 36.85-5.81 55.77 2L112 68c-15.91-5.11-29.65 10-39.27-10C64.8 41.55 54.22 39.46 50 39.32L34.59 66c4.5-.65 16.09-1 26.86 9.14z",fill:"#a948b4"}),n.createElement("path",{d:"M128.88 97.33c-4.83-2-17.06-5.28-28.44 7.14-17.19 18.74-41.77 12.21-50.87-7.34-6.69-14.38-19.9-14.08-25.29-13.28l-8.87 15.36c2.94-.54 17.2-2.29 27.7 12.28 6.69 9.28 12.86 13 16.61 14.41h85.66z",fill:"#49429f"}),n.createElement("path",{d:"M43.11 111.49c-10.5-14.57-24.76-12.82-27.7-12.28L0 125.9h59.72c-3.72-1.46-9.92-5.13-16.61-14.41z",fill:"#00488d"}),n.createElement("path",{d:"M49.57 97.13c9.1 19.55 33.68 26.08 50.87 7.34 11.38-12.42 23.61-9.17 28.44-7.14l-11.66-20.2c-18.92-7.8-33.07 19.43-55.77-2C50.68 65 39.09 65.35 34.59 66L24.28 83.85c5.39-.8 18.6-1.1 25.29 13.28z",fill:"#7b43a6"}))))};var Le=function(e){return n.createElement("svg",Object.assign({viewBox:"0 0 145.38 125.9"},e),n.createElement("title",null,"Asset 25"),n.createElement("g",{"data-name":"Layer 2"},n.createElement("g",{"data-name":"Layer 1"},n.createElement("path",{d:"M72.69 58c9.62 20.06 23.36 4.9 39.27 10L97.07 42.23a25.71 25.71 0 01-19.48-6.4 22.9 22.9 0 00-23.15-4.22L50 39.32c4.22.14 14.8 2.23 22.69 18.68z",fill:"#3c9"}),n.createElement("path",{d:"M77.59 35.83a25.71 25.71 0 0019.48 6.4L72.69 0 54.44 31.61a22.9 22.9 0 0123.15 4.22z",fill:"#5ebd77"}),n.createElement("path",{d:"M61.45 75.14c22.7 21.42 36.85-5.81 55.77 2L112 68c-15.91-5.11-29.65 10-39.27-10C64.8 41.55 54.22 39.46 50 39.32L34.59 66c4.5-.65 16.09-1 26.86 9.14z",fill:"#27bdb5"}),n.createElement("path",{d:"M128.88 97.33c-4.83-2-17.06-5.28-28.44 7.14-17.19 18.74-41.77 12.21-50.87-7.34-6.69-14.38-19.9-14.08-25.29-13.28l-8.87 15.36c2.94-.54 17.2-2.29 27.7 12.28 6.69 9.28 12.86 13 16.61 14.41h85.66z",fill:"#2789b5"}),n.createElement("path",{d:"M43.11 111.49c-10.5-14.57-24.76-12.82-27.7-12.28L0 125.9h59.72c-3.72-1.46-9.92-5.13-16.61-14.41z",fill:"#275eb5"}),n.createElement("path",{d:"M49.57 97.13c9.1 19.55 33.68 26.08 50.87 7.34 11.38-12.42 23.61-9.17 28.44-7.14l-11.66-20.2c-18.92-7.8-33.07 19.43-55.77-2C50.68 65 39.09 65.35 34.59 66L24.28 83.85c5.39-.8 18.6-1.1 25.29 13.28z",fill:"#27bdc7"}))))};var ke=Object(C.a)((function(e){return{container:{backgroundColor:"#f9f9f9",textAlign:"center",padding:"100px 0 100px 0",position:"relative"},title:{color:"#0F0A3C",fontWeight:600,marginBottom:60},description:{color:"#404040",marginBottom:100},projectContainer:{textAlign:"left",alignSelf:"center"},projectTitle:{color:"#0F0A3C",fontWeight:600,marginBottom:30},pictureBackground:{backgroundColor:"purple",width:"100%",height:"100%",position:"relative",boxShadow:"0 0 40px grey"},imageOne:{transform:"rotate(-10deg)"},imageTwo:{transform:"rotate(10deg)"},logoContainer:{backgroundColor:"#eeeeee",height:"80%",width:"70%",position:"absolute",right:0,left:0,marginLeft:"auto",marginRight:"auto",top:"10%",boxShadow:"0 0 40px grey"},logo:{width:"50%",transform:"translateY(120%)"},lineCircle:{position:"absolute",width:"130%",transform:"rotate(180deg)",left:"-20%",top:100},pictureContainer:{position:"relative"}}})),Oe=function(e){var t=ke();return i.a.createElement("div",{className:t.container,id:"ourwork"},i.a.createElement(d.a,{maxWidth:"lg"},i.a.createElement(v.a,{variant:"h3",component:"h2",className:t.title},"OUR WORK"),i.a.createElement(v.a,{variant:"h5",component:"p",className:t.description},"We are a team of dreamers pushed by our curiosity",i.a.createElement("br",null),"to experiment and create meaningful solutions using what we learned."),i.a.createElement(E.a,{container:!0,spacing:10},i.a.createElement(E.a,{item:!0,xs:8,className:t.projectContainer},i.a.createElement(v.a,{className:t.projectTitle,variant:"h4"},"Study from home."),i.a.createElement(v.a,{className:t.projectDesc,variant:"h6"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),i.a.createElement(E.a,{item:!0,xs:4,className:t.pictureContainer},i.a.createElement("img",{className:t.lineCircle,src:Y.a,width:"200",alt:"line circle icon"}),i.a.createElement("div",{className:t.pictureBackground},i.a.createElement(ye.a,{delay:1e3,top:!0,right:!0},i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{className:t.imageOne,width:"100%",src:be.a,alt:"Background"}))),i.a.createElement(x.a,null,i.a.createElement("div",{className:t.logoContainer},i.a.createElement(x.a,{delay:800},i.a.createElement(Ce,{className:t.logo}))))))),i.a.createElement(E.a,{container:!0,spacing:10},i.a.createElement(E.a,{item:!0,xs:4,className:t.pictureContainer},i.a.createElement("img",{className:t.lineCircle,src:Y.a,width:"200",alt:"line circle icon"}),i.a.createElement("div",{className:t.pictureBackground},i.a.createElement("img",{className:t.imageTwo,width:"100%",src:xe.a,alt:"One"}),i.a.createElement("div",{className:t.logoContainer},i.a.createElement(x.a,{bottom:!0},i.a.createElement(Le,{className:t.logo}))))),i.a.createElement(E.a,{item:!0,xs:8,className:t.projectContainer},i.a.createElement(v.a,{className:t.projectTitle,variant:"h4"},"Study from home."),i.a.createElement(v.a,{className:t.projectDesc,variant:"h6"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))))};var Ae=Object(C.a)((function(e){return{container:{backgroundColor:"#0F0A3C",textAlign:"center",padding:"100px 0 40px 0",position:"relative"},title:{color:"#f9f9f9",fontWeight:600,marginBottom:30},highlight:{color:"#009F9D"},emailus:{color:"#f9f9f9",marginBottom:80},alignLeft:{textAlign:"left"},alignRight:{textAlign:"right",color:"#f9f9f9"},lineCircle:{position:"absolute",transform:"rotate(200deg)",left:-100,top:-70}}})),je=function(e){var t=Ae();return i.a.createElement("div",{className:t.container},i.a.createElement("img",{src:O.a,alt:"Line circle",width:"400",className:t.lineCircle}),i.a.createElement(d.a,null,i.a.createElement(v.a,{variant:"h3",component:"h2",className:t.title},"Let's start something great!"),i.a.createElement(v.a,{className:t.emailus,variant:"h5",componenet:"p"},"Email us at ",i.a.createElement("span",{className:t.highlight},"hello@nash-code.com")),i.a.createElement(E.a,{container:!0},i.a.createElement(E.a,{item:!0,xs:6,className:t.alignLeft},i.a.createElement("img",{width:"120",src:h.a,alt:"Logo dark"})),i.a.createElement(E.a,{item:!0,xs:6,className:t.alignRight},i.a.createElement(v.a,{variant:"h6",component:"p"},"Copyright by NASH-CODE. All rights reserved. 2020")))))},We=a(26);var De=Object(C.a)((function(e){return{container:{position:"fixed",top:"30%",left:"50px"},list:{listStyleType:"none",textAlign:"center"},unactiveDot:{display:"inline-block",width:7,height:7,borderRadius:"50%",border:"1px solid grey",cursor:"pointer"},activeDot:{display:"inline-block",width:10,height:10,borderRadius:"50%",backgroundColor:"grey",cursor:"pointer"},element:{paddingTop:20}}})),Be=function(e){var t=De();return i.a.createElement("div",{className:t.container},i.a.createElement("ul",{className:t.list},i.a.createElement("li",{className:t.element},i.a.createElement(We.Link,{className:t.unactiveDot,activeClass:t.activeDot,to:"hero",spy:!0,smooth:!0,duration:500})),i.a.createElement("li",{className:t.element},i.a.createElement(We.Link,{className:t.unactiveDot,activeClass:t.activeDot,to:"wepresent",spy:!0,smooth:!0,duration:500})),i.a.createElement("li",{className:t.element},i.a.createElement(We.Link,{className:t.unactiveDot,activeClass:t.activeDot,to:"ourexpertises",spy:!0,smooth:!0,duration:500})),i.a.createElement("li",{className:t.element},i.a.createElement(We.Link,{className:t.unactiveDot,activeClass:t.activeDot,to:"ourwork",spy:!0,smooth:!0,duration:500})),i.a.createElement("li",{className:t.element},i.a.createElement(We.Link,{className:t.unactiveDot,activeClass:t.activeDot,to:"whoweare",spy:!0,smooth:!0,duration:500})),i.a.createElement("li",{className:t.element},i.a.createElement(We.Link,{className:t.unactiveDot,activeClass:t.activeDot,to:"motivation",spy:!0,smooth:!0,duration:500}))))};var Se=function(e){return i.a.createElement("div",null,i.a.createElement(y,null),i.a.createElement(S,null),i.a.createElement($,null),i.a.createElement(Oe,null),i.a.createElement(ce,null),i.a.createElement(Ee,null),i.a.createElement(je,null),i.a.createElement(Be,null))},Te=a(77),He=a.n(Te);var _e=Object(C.a)((function(e){return{container:{backgroundColor:"#f9f9f9",padding:"30px 0"},logo:{height:18,cursor:"pointer"},link:{marginLeft:50,color:"#0F0A3C",fontWeight:500,textDecoration:"none","&:hover":{color:"#009F9D",textDecoration:"none"}},links:{marginLeft:"auto"},title:{fontWeight:"600",fontSize:"120pt",color:"#0F0A3C"},heroGrid:{alignItems:"flex-end",paddingTop:100,paddingBottom:150},projectContainer:{textAlign:"left",alignSelf:"center"},projectTitle:{color:"#0F0A3C",fontWeight:600,marginBottom:30},pictureBackground:{backgroundColor:"purple",width:"100%",height:"100%",position:"relative",boxShadow:"0 0 40px grey"},imageOne:{transform:"rotate(-10deg)"},imageTwo:{transform:"rotate(10deg)"},logoContainer:{backgroundColor:"#f9f9f9",height:"80%",width:"70%",position:"absolute",right:0,left:0,marginLeft:"auto",marginRight:"auto",top:"10%",boxShadow:"0 0 40px grey",textAlign:"center"},imageLogo:{width:"50%",transform:"translateY(120%)"},lineCircle:{position:"absolute",width:"130%",transform:"rotate(180deg)",left:"-20%",top:100},pictureContainer:{position:"relative"},addPadding:{paddingBottom:100}}})),Fe=function(e){var t=_e();return i.a.createElement("div",{className:t.container,id:"projects"},i.a.createElement(d.a,{maxWidth:"lg"},i.a.createElement(u.a,{disableGutters:!0,className:t.toolbar},i.a.createElement("img",{className:t.logo,src:He.a,alt:"logo"}),i.a.createElement("div",{className:t.links},i.a.createElement(p.b,{className:t.link,to:"/our-work"},"OUR WORK"),i.a.createElement(p.b,{className:t.link,to:"/blog"},"BLOG"),i.a.createElement(p.b,{className:t.link,to:"/contact-us"},"CONTACT US"))),i.a.createElement(E.a,{container:!0,className:t.heroGrid},i.a.createElement(E.a,{item:!0,xs:7},i.a.createElement(x.a,null,i.a.createElement(v.a,{variant:"h1",component:"h1",className:t.title},"Built with Deduction and Love"))),i.a.createElement(E.a,{item:!0,xs:5},i.a.createElement(x.a,{delay:500},i.a.createElement(v.a,{variant:"h5"},"We love what we do and we are always ready to use what we learn to go above and beyond for our clients. Here are some of our works:")))),i.a.createElement(E.a,{container:!0,spacing:10},i.a.createElement(E.a,{item:!0,xs:8,className:t.projectContainer},i.a.createElement(v.a,{className:t.projectTitle,variant:"h4"},"Study from home."),i.a.createElement(v.a,{className:t.projectDesc,variant:"h6"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),i.a.createElement(E.a,{item:!0,xs:4,className:t.pictureContainer},i.a.createElement("img",{className:t.lineCircle,src:Y.a,width:"200",alt:"line circle icon"}),i.a.createElement("div",{className:t.pictureBackground},i.a.createElement("img",{className:t.imageOne,width:"100%",src:be.a,alt:" one"}),i.a.createElement("div",{className:t.logoContainer},i.a.createElement(Ce,{className:t.imageLogo}))))),i.a.createElement(E.a,{container:!0,spacing:10,className:t.addPadding},i.a.createElement(E.a,{item:!0,xs:4,className:t.pictureContainer},i.a.createElement("img",{className:t.lineCircle,src:Y.a,width:"200",alt:"line circle icon"}),i.a.createElement("div",{className:t.pictureBackground},i.a.createElement("img",{className:t.imageTwo,width:"100%",src:xe.a,alt:" two"}),i.a.createElement("div",{className:t.logoContainer},i.a.createElement(Le,{className:t.imageLogo})))),i.a.createElement(E.a,{item:!0,xs:8,className:t.projectContainer},i.a.createElement(v.a,{className:t.projectTitle,variant:"h4"},"Study from home."),i.a.createElement(v.a,{className:t.projectDesc,variant:"h6"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")))))};var Me=function(e){return i.a.createElement("div",null,i.a.createElement(Fe,null),i.a.createElement(je,null))},ze=a(8);a(121);var Re=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p.a,{basename:"/nashcode"},i.a.createElement(ze.a,{exact:!0,path:"/",component:Se}),i.a.createElement(ze.a,{exact:!0,path:"/our-work",component:Me})))},Ie=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Pe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(i.a.createElement(Re,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/nashcode",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/nashcode","/service-worker.js");Ie?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Pe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Pe(t,e)}))}}()},24:function(e,t,a){e.exports=a.p+"static/media/line_circle_dark.996b752e.svg"},25:function(e,t,a){e.exports=a.p+"static/media/value_star.19ef5a9f.svg"},31:function(e,t,a){e.exports=a.p+"static/media/DSCN3403.a6f9103b.jpg"},40:function(e,t,a){e.exports=a.p+"static/media/logo_light.011552e9.svg"},43:function(e,t,a){e.exports=a.p+"static/media/line_circle.969ae42e.svg"},44:function(e,t,a){e.exports=a.p+"static/media/4249454.0695d313.jpg"},45:function(e,t,a){e.exports=a.p+"static/media/2754227.f6183693.jpg"},71:function(e,t,a){e.exports=a.p+"static/media/frontend_icon.956782ed.svg"},72:function(e,t,a){e.exports=a.p+"static/media/backend_icon.6e51da20.svg"},73:function(e,t,a){e.exports=a.p+"static/media/ai_icon.40e9fe55.svg"},74:function(e,t,a){e.exports=a.p+"static/media/management_icon.4b86e80a.svg"},75:function(e,t,a){e.exports=a.p+"static/media/value_gift.b4155a28.svg"},76:function(e,t,a){e.exports=a.p+"static/media/value_diamond.7815f0f2.svg"},77:function(e,t,a){e.exports=a.p+"static/media/logo_dark.41e72abd.svg"},87:function(e,t,a){e.exports=a(122)},92:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.02462f4f.chunk.js.map