(this.webpackJsonpnashcode=this.webpackJsonpnashcode||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(25),i=a.n(r),c=(a(81),a(26)),l=a(27),s=a(30),m=a(29),d=a(125),p=a(126),u=a(17),g=a(40),h=a.n(g),f=a(110),E=a(127),v=a(128);var b=function(e){return o.a.createElement("svg",Object.assign({viewBox:"0 0 13 16.27"},e),o.a.createElement("title",null,"NIcon"),o.a.createElement("g",{"data-name":"Layer 2"},o.a.createElement("path",{fill:"#000000",d:"M13 0h-3v9.64L0 .1l.06 4.12L13 16.27V0z","data-name":"Layer 1"})))},x=a(6),N=a.n(x),w=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.container},o.a.createElement("div",{className:e.sectionOne},o.a.createElement(d.a,{maxWidth:"lg",className:e.containerOne},o.a.createElement(p.a,{disableGutters:!0,className:e.toolbar},o.a.createElement("img",{className:e.logo,src:h.a,alt:"logo"}),o.a.createElement("div",{className:e.links},o.a.createElement(u.b,{className:e.link,to:"/our-work"},"OUR WORK"),o.a.createElement(u.b,{className:e.link,to:"/blog"},"BLOG"),o.a.createElement(u.b,{className:e.link,to:"/contact-us"},"CONTACT US"))),o.a.createElement(E.a,{container:!0,direction:"row",spacing:1,className:e.gridOne},o.a.createElement(E.a,{item:!0,xs:7},o.a.createElement(N.a,{left:!0},o.a.createElement(v.a,{component:"h1",variant:"h3",className:e.homeTitle},"We build products to satisfy",o.a.createElement("br",null),"both ",o.a.createElement("span",{className:e.colorPrimary},"you")," and ",o.a.createElement("span",{className:e.colorPrimary},"our")," team!")),o.a.createElement(N.a,{bottom:!0},o.a.createElement("button",{className:e.button},"SEE OUR WORK"))),o.a.createElement(E.a,{item:!0,xs:5,className:e.subGridTwo},o.a.createElement(b,{className:e.nIcon}))))))}}]),a}(o.a.Component),k=Object(f.a)((function(e){return{logo:{height:18,cursor:"pointer"},link:{marginLeft:50,color:"#f9f9f9",fontWeight:500,textDecoration:"none","&:hover":{color:"#009F9D",textDecoration:"none"}},links:{marginLeft:"auto"},sectionOne:{backgroundColor:"#0F0A3C"},containerOne:{height:"100vh",paddingTop:30},homeTitle:{color:"#f9f9f9",fontWeight:500},colorPrimary:{color:"#009F9D"},gridOne:{height:"90%",alignItems:"center"},button:{marginTop:100,padding:"7px 20px",fontSize:"18px",fontWeight:600,color:"#0F0A3C",backgroundColor:"#f9f9f9",cursor:"pointer",border:"none"},nIcon:{width:"80%"},nLineOne:{position:"absolute",right:"30%",top:"15%",width:"250px"},nLineTwo:{position:"absolute",right:"5%",top:"13%",width:"250px"},subGridTwo:{textAlign:"right"}}}))(w),y=a(129);var A=function(e){return n.createElement("svg",Object.assign({viewBox:"0 0 60.76 66.8"},e),n.createElement("title",null,"Asset 13"),n.createElement("g",{"data-name":"Layer 2"},n.createElement("path",{d:"M59.67.26c-.14-.5-1.56-.12-1.67-.09-11.21 2.26-17.14 12.61-22 21.89a127.54 127.54 0 00-5.48 12 101.06 101.06 0 00-4.09-18.34c-1.6-4.86-3.74-10.57-8.92-12.52C13 1.51 8 3.86 4.43 6.61c-10.17 7.87-.28 20 4.34 28.23l9.75 17.27 5.06 9c1.07 1.9 1.71 3.77 4.18 3.62l.48-.06c.07.59.16 1.18.28 1.78.37 1.85 7.69-3.27 8.24-4a143.84 143.84 0 0017.29-29.17C58.6 23 62.82 11.54 59.67.26z",fill:"#d65a4a","data-name":"Layer 1"})))},j=a(43),O=a.n(j),C=a(69),W=a(58),S=a.n(W),T=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={clientHeight:0,scrollTop:0,topPercentage:0,scrollOnce:!1,getOnce:!1},n.handleFunc=null,n}return Object(l.a)(a,[{key:"getStartValues",value:function(){if(this.props.target);else{var e=window.innerHeight,t=window.scrollY,a=t/(document.documentElement.offsetHeight-e)*100;this.setState({clientHeight:e,scrollTop:t,topPercentage:a})}this.setState({getOnce:!0})}},{key:"updateValues",value:function(e){var t=this.props.target,a=t?e.srcElement:e.srcElement.scrollingElement,n=a.clientHeight,o=a.scrollTop,r=o/((t?a.scrollHeight:a.offsetHeight)-n)*100;this.setState({clientHeight:n,scrollTop:o,topPercentage:r,scrollOnce:!0})}},{key:"setScrollHandle",value:function(){var e=this,t=S()((function(t){e.updateValues(t)}),this.props.throttle?1e3*this.props.throttle:0,{leading:!1}),a=this.props.target,n=this.props.throttle?t:function(t){e.updateValues(t)},o=a?document.getElementById(a):window;return null!==o?(o.addEventListener("scroll",n),function(){o.removeEventListener("scroll",n)}):function(){}}},{key:"getAnimationStyles",value:function(){var e=this.state.scrollOnce,t=this.props.animationDuration,a="";switch(this.props.animationStyle){case"rotate":a={transform:"rotate(".concat(this.getDeg(),"deg)"),transition:e?"transform ".concat(t||0===t?t:"0.1","s"):""};break;case"slide":a={transform:"translateY(".concat(-this.state.scrollTop/20,"%)"),transition:e?"transform ".concat(t||0===t?t:"0.1","s"):""}}return a}},{key:"getDeg",value:function(){var e=this.props.method,t=this.props.from||0,a=this.props.to||360;if("perc"===e){var n=this.state.topPercentage,o=this.props.loops||1,r=parseInt(o*n/100)+(100!==n?1:Number.isInteger(o)?0:1);return(n/100-1/o*(r-1))*(a-t)*o+t+360*(r-1)*(t>a?-1:1)}var i=this.state.scrollTop,c=parseInt(i/(a-t));return(i-c*(a-t))*(t>a?-1:1)+(t+360*c)}},{key:"componentDidMount",value:function(){this.getStartValues(),this.removeHandleFunc=this.setScrollHandle()}},{key:"componentDidUpdate",value:function(e){e.throttle!==this.props.throttle&&(this.removeHandleFunc(),this.removeHandleFunc=this.setScrollHandle())}},{key:"componentWillUnmount",value:function(){this.removeHandleFunc()}},{key:"render",value:function(){var e=this.state.getOnce,t=this.getAnimationStyles();return o.a.createElement("div",null,e&&o.a.createElement("div",{style:Object(C.a)({},t)},this.props.children))}}]),a}(o.a.Component);T.defaultProps={target:null,throttle:null,from:0,to:360,method:"px",loops:1,animationDuration:.1};var D=Object(y.a)((function(e){return{container:{background:"linear-gradient(180deg, #0F0A3C 50%, #F9F9F9 50%)"},rectangle:{backgroundColor:"#07456F",textAlign:"center",borderRadius:10,padding:70,position:"relative"},lineCircle:{position:"absolute",left:-100,top:-70},titles:{color:"#f9f9f9"},animatePos:{left:-300,position:"absolute"}}})),F=function(e){var t=D();return o.a.createElement("div",{className:t.container},o.a.createElement(N.a,{bottom:!0},o.a.createElement(T,{animationDuration:.3,animationStyle:"slide",loops:2,method:"perc",from:90},o.a.createElement(d.a,{maxWidth:"md",className:t.rectangle},o.a.createElement("div",{className:t.lineCircle},o.a.createElement(T,{animationDuration:.2,animationStyle:"rotate",loops:5,method:"perc",from:90},o.a.createElement("img",{src:O.a,width:"200",alt:"line circle icon"}))),o.a.createElement(v.a,{variant:"h3",component:"h2",className:t.titles},"We'd ",o.a.createElement(A,{width:"50"})," to present ourselves"),o.a.createElement(v.a,{variant:"h4",component:"h2",className:t.titles},"Don't forget to reach out too!")))))},B=a(67),I=a(68),P=a(132),L=a(130),H=a(131),M=a(59),R=a.n(M),_=a(60),U=a.n(_),G=a(61),K=a.n(G),V=a(62),z=a.n(V),J=a(63),Y=a.n(J);function q(e){var t=e.children,a=e.value,n=e.index,r=Object(I.a)(e,["children","value","index"]);return o.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"scrollable-auto-tabpanel-".concat(n),"aria-labelledby":"scrollable-auto-tab-".concat(n)},r),a===n&&o.a.createElement(H.a,{p:3},o.a.createElement(v.a,null,t)))}var X=[{id:0,icon:K.a,title:"Data Science",description:"We'll help you get the best out of your data and make new business decisions faster. Not that? Well, propose your future idea and we'll make it your present."},{id:1,icon:R.a,title:"Front End",description:"none"},{id:2,icon:U.a,title:"Back End",description:"none"},{id:3,icon:z.a,title:"Project Management",description:"none"}];var Z=Object(y.a)((function(e){return{container:{textAlign:"center",padding:"0px 0",backgroundColor:"#f9f9f9"},title:{fontWeight:600,color:"#0F0A3C",marginBottom:45},description:{color:"#404040",marginBottom:70},tabs:{width:"100%"},tab:{minWidth:"25%"},tabIcon:{padding:20},tabInfo:{textAlign:"left"},tabPanel:{padding:"50px 0",boxShadow:"0 0 20px #eeeeee",position:"relative"},infoTitle:{fontWeight:600,color:"#0F0A3C",marginBottom:20},infoDesc:{color:"#404040"},lineCircle:{color:"#0F0A3C",position:"absolute",right:-30,bottom:-60}}})),$=function(e){var t=Z(),a=o.a.useState(0),n=Object(B.a)(a,2),r=n[0],i=n[1];return o.a.createElement("div",{className:t.container},o.a.createElement(d.a,{maxWidth:"lg"},o.a.createElement(N.a,{bottom:!0},o.a.createElement(v.a,{variant:"h3",component:"h2",className:t.title},"OUR EXPERTISES")),o.a.createElement(N.a,{bottom:!0},o.a.createElement(v.a,{variant:"h5",component:"p",className:t.description},"We use the latest technologies to provide the best software engineering",o.a.createElement("br",null),"solutions that respond to the modern market needs.")),o.a.createElement(N.a,{bottom:!0},o.a.createElement(P.a,{className:t.tabs,value:r,onChange:function(e,t){i(t)},indicatorColor:"primary",textColor:"primary",centered:!0},X.map((function(e){return o.a.createElement(L.a,Object.assign({key:e.id,className:t.tab,icon:o.a.createElement("img",{className:t.tabIcon,width:"100",src:e.icon,alt:e.title})},{id:"scrollable-auto-tab-".concat(a),"aria-controls":"scrollable-auto-tabpanel-".concat(a)}));var a}))),X.map((function(e){return o.a.createElement(q,{className:t.tabPanel,key:e.id,index:e.id,value:r},o.a.createElement("div",{className:t.lineCircle},o.a.createElement(T,{animationStyle:"rotate",loops:2,method:"perc",from:180},o.a.createElement("img",{src:Y.a,width:"200",alt:"line circle icon"}))),o.a.createElement(E.a,{container:!0},o.a.createElement(E.a,{item:!0,xs:4},o.a.createElement("img",{src:e.icon,height:"150",alt:"AI icon"})),o.a.createElement(E.a,{item:!0,xs:8,className:t.tabInfo},o.a.createElement(v.a,{variant:"h3",component:"h4",className:t.infoTitle},e.title),o.a.createElement(v.a,{variant:"h5",component:"p"},e.description))))})))))},Q=a(36),ee=a.n(Q),te=a(23),ae=a.n(te);var ne=Object(y.a)((function(e){return{container:{backgroundColor:"#0F0A3C",textAlign:"center",padding:"100px 0 40px 0"},title:{color:"#f9f9f9",fontWeight:600,marginBottom:60},description:{color:"#f9f9f9",marginBottom:100},presentations:{color:"#f9f9f9",textAlign:"left",padding:20,paddingBottom:60},bold:{fontWeight:600}}})),oe=function(e){var t=ne();return o.a.createElement("div",{className:t.container},o.a.createElement(d.a,{maxWidth:"lg"},o.a.createElement(ae.a,{bottom:!0},o.a.createElement(v.a,{variant:"h3",component:"h2",className:t.title},"WHO WE ARE?")),o.a.createElement(ae.a,{bottom:!0},o.a.createElement(v.a,{variant:"h5",component:"p",className:t.description},"We are a team of dreamers pushed by our curiosity",o.a.createElement("br",null),"to experiment and create meaningful solutions using what we learned.")),o.a.createElement(E.a,{container:!0},o.a.createElement(E.a,{item:!0,xs:1}),o.a.createElement(E.a,{item:!0,xs:4},o.a.createElement(ae.a,{bottom:!0},o.a.createElement("img",{src:ee.a,width:"100%",alt:"Nada"}),o.a.createElement(v.a,{variant:"h5",component:"p",className:t.presentations},o.a.createElement("span",{className:t.bold},"NADA DABACH")," is a Big Data student, lorem ipsum."))),o.a.createElement(E.a,{item:!0,xs:2}),o.a.createElement(E.a,{item:!0,xs:4},o.a.createElement(ae.a,{bottom:!0},o.a.createElement("img",{src:ee.a,width:"100%",alt:"Karim"}),o.a.createElement(v.a,{variant:"h5",component:"p",className:t.presentations},o.a.createElement("span",{className:t.bold},"ABDELKARIM HABOUCH")," is a Big Data student, lorem ipsum."))),o.a.createElement(E.a,{item:!0,xs:1})),o.a.createElement(E.a,{container:!0},o.a.createElement(E.a,{item:!0,xs:1}),o.a.createElement(E.a,{item:!0,xs:4},o.a.createElement(ae.a,{bottom:!0},o.a.createElement("img",{src:ee.a,width:"100%",alt:"Safoin"}),o.a.createElement(v.a,{variant:"h5",component:"p",className:t.presentations},o.a.createElement("span",{className:t.bold},"SAFOINE ELKHABICH")," is a Big Data student, lorem ipsum."))),o.a.createElement(E.a,{item:!0,xs:2}),o.a.createElement(E.a,{item:!0,xs:4},o.a.createElement(ae.a,{bottom:!0},o.a.createElement("img",{src:ee.a,width:"100%",alt:"Hamza"}),o.a.createElement(v.a,{variant:"h5",component:"p",className:t.presentations},o.a.createElement("span",{className:t.bold},"HAMZA MOGNI")," is a Big Data student, lorem ipsum."))),o.a.createElement(E.a,{item:!0,xs:1}))))},re=a(24),ie=a.n(re),ce=a(64),le=a.n(ce),se=a(65),me=a.n(se),de=[[{id:0,icon:ie.a,title:"Data Science"},{id:1,icon:le.a,title:"Front End"},{id:2,icon:me.a,title:"Back End"},{id:3,icon:ie.a,title:"Project Management"}],[{id:4,icon:ie.a,title:"Data Science"},{id:5,icon:ie.a,title:"Front End"},{id:6,icon:ie.a,title:"Back End"},{id:7,icon:ie.a,title:"Project Management"}]];var pe=Object(y.a)((function(e){return{container:{backgroundColor:"#f9f9f9",textAlign:"center",padding:"100px 0 100px 0",position:"relative"},title:{color:"#0F0A3C",fontWeight:600,marginBottom:60},description:{color:"#404040",marginBottom:100},presentations:{color:"#f9f9f9",textAlign:"left",padding:20,paddingBottom:60},bold:{fontWeight:600},valueTitle:{fontWeight:600,marginTop:20,color:"#0F0A3C"},valueContainer:{padding:"30px 0"},lineCircle:{color:"#000000",position:"absolute",left:0,top:-70}}})),ue=function(e){var t=pe();return o.a.createElement("div",{className:t.container},o.a.createElement("div",{className:t.lineCircle}),o.a.createElement(d.a,{maxWidth:"lg"},o.a.createElement(N.a,{bottom:!0},o.a.createElement(v.a,{variant:"h3",component:"h2",className:t.title},"WHAT MOTIVATES US?")),o.a.createElement(N.a,{bottom:!0},o.a.createElement(v.a,{variant:"h5",component:"p",className:t.description},"We are a team of dreamers pushed by our curiosity",o.a.createElement("br",null),"to experiment and create meaningful solutions using what we learned.")),de.map((function(e){return o.a.createElement(E.a,{container:!0,spacing:5,className:t.valueContainer},e.map((function(e){return o.a.createElement(E.a,{item:!0,xs:3,key:e.id},o.a.createElement(N.a,{bottom:!0},o.a.createElement("img",{height:"40",src:e.icon,alt:e.title}),o.a.createElement(v.a,{variant:"h5",component:"p",className:t.valueTitle},e.title)))})))}))))},ge=a(34),he=a.n(ge),fe=a(35),Ee=a.n(fe);var ve=Object(y.a)((function(e){return{container:{backgroundColor:"#f9f9f9",textAlign:"center",padding:"100px 0 100px 0",position:"relative"},title:{color:"#0F0A3C",fontWeight:600,marginBottom:60},projectTitle:{color:"#404040",textAlign:"left",fontWeight:600,paddingLeft:5,paddingTop:10},projectDesc:{color:"#606060",textAlign:"left",paddingBottom:60,paddingLeft:5},addPadding:{},projectImage:{cursor:"pointer",maxWidth:"100%",transition:"all 4s ",width:"100%",height:"auto",transform:"scale(1)",display:"inline-block","&:hover":{transform:"scale(1.1)"}},imagebox:{position:"relative",margin:"auto",overflow:"hidden",width:"100%"}}})),be=function(e){var t=ve();return o.a.createElement("div",{className:t.container},o.a.createElement(d.a,{maxWidth:"lg"},o.a.createElement(N.a,{bottom:!0},o.a.createElement(v.a,{variant:"h3",component:"h2",className:t.title},"OUR WORK")),o.a.createElement(E.a,{container:!0,spacing:10},o.a.createElement(E.a,{item:!0,xs:6},o.a.createElement(N.a,{bottom:!0},o.a.createElement("div",{className:t.imagebox},o.a.createElement("img",{src:he.a,className:t.projectImage,alt:"Project four"})),o.a.createElement(v.a,{variant:"h5",component:"p",className:t.projectTitle},"Mama Moualimati"),o.a.createElement(v.a,{variant:"p",component:"p",className:t.projectDesc},"Study from home :)")),o.a.createElement(N.a,{bottom:!0},o.a.createElement("div",{className:t.imagebox},o.a.createElement("img",{src:Ee.a,className:t.projectImage,alt:"Project four"})),o.a.createElement(v.a,{variant:"h5",component:"p",className:t.projectTitle},"Mama Moualimati"),o.a.createElement(v.a,{variant:"p",component:"p",className:t.projectDesc},"Study from home :)"))),o.a.createElement(E.a,{item:!0,xs:6,className:t.addPadding},o.a.createElement(N.a,{bottom:!0},o.a.createElement("div",{className:t.imagebox},o.a.createElement("img",{src:Ee.a,className:t.projectImage,alt:"Project four"})),o.a.createElement(v.a,{variant:"h5",component:"p",className:t.projectTitle},"Mama Moualimati"),o.a.createElement(v.a,{variant:"p",component:"p",className:t.projectDesc},"Study from home :)")),o.a.createElement(N.a,{bottom:!0},o.a.createElement("div",{className:t.imagebox},o.a.createElement("img",{src:he.a,className:t.projectImage,alt:"Project four"})),o.a.createElement(v.a,{variant:"h5",component:"p",className:t.projectTitle},"Mama Moualimati"),o.a.createElement(v.a,{variant:"p",component:"p",className:t.projectDesc},"Study from home :)"))))))};var xe=Object(y.a)((function(e){return{container:{backgroundColor:"#0F0A3C",textAlign:"center",padding:"100px 0 40px 0",position:"relative"},title:{color:"#f9f9f9",fontWeight:600,marginBottom:30},highlight:{color:"#009F9D"},emailus:{color:"#f9f9f9",marginBottom:80},alignLeft:{textAlign:"left"},alignRight:{textAlign:"right",color:"#f9f9f9"},lineCircle:{position:"absolute",transform:"rotate(200deg)",left:-100,top:-70}}})),Ne=function(e){var t=xe();return o.a.createElement("div",{className:t.container},o.a.createElement("img",{src:O.a,alt:"Line circle",width:"400",className:t.lineCircle}),o.a.createElement(d.a,null,o.a.createElement(v.a,{variant:"h3",component:"h2",className:t.title},"Let's start something great!"),o.a.createElement(v.a,{className:t.emailus,variant:"h5",componenet:"p"},"Email us at ",o.a.createElement("span",{className:t.highlight},"hello@nash-code.com")),o.a.createElement(E.a,{container:!0},o.a.createElement(E.a,{item:!0,xs:6,className:t.alignLeft},o.a.createElement("img",{width:"120",src:h.a,alt:"Logo dark"})),o.a.createElement(E.a,{item:!0,xs:6,className:t.alignRight},o.a.createElement(v.a,{variant:"h6",component:"p"},"Copyright by NASH-CODE. All rights reserved. 2020")))))};var we=function(e){return o.a.createElement("div",null,o.a.createElement(k,null),o.a.createElement(F,null),o.a.createElement($,null),o.a.createElement(be,null),o.a.createElement(oe,null),o.a.createElement(ue,null),o.a.createElement(Ne,null))},ke=a(7),ye=a(66),Ae=a.n(ye),je=["Featured","AI","Websites","Apps","e-Commerce"],Oe=[{id:1,category:["Featured","Websites"],title:"Mama Moualimati",desc:"Self-education is always best.",image:he.a},{id:2,category:["Featured","AI"],title:"MTSA",desc:"Moroccan sentiments in one query.",image:Ee.a}],Ce=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).setActive=function(t){e.setState({active:t})},e.state={active:"Featured"},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return o.a.createElement("div",{className:t.container},o.a.createElement(d.a,{maxWidth:"lg"},o.a.createElement(p.a,{disableGutters:!0,className:t.toolbar},o.a.createElement("img",{className:t.logo,src:Ae.a,alt:"logo"}),o.a.createElement("div",{className:t.links},o.a.createElement(u.b,{className:t.link,to:"/our-work"},"OUR WORK"),o.a.createElement(u.b,{className:t.link,to:"/blog"},"BLOG"),o.a.createElement(u.b,{className:t.link,to:"/contact-us"},"CONTACT US"))),o.a.createElement("div",null,o.a.createElement(N.a,null,o.a.createElement(v.a,{variant:"h4",className:t.addPadding},"Projects we built with ",o.a.createElement(A,{width:"25"}),"!")),o.a.createElement(p.a,{disableGutters:!0,className:t.addPadding},je.map((function(a){return o.a.createElement(N.a,null,o.a.createElement(v.a,{onClick:function(){e.setActive(a)},style:e.state.active===a?{fontWeight:600}:{},variant:"h5",className:t.plink},a))}))),o.a.createElement(E.a,{container:!0,spacing:10,className:t.addPadding},Oe.map((function(a){return a.category.includes(e.state.active)?o.a.createElement(E.a,{key:a.id,item:!0,xs:6},o.a.createElement(N.a,null,o.a.createElement("div",{className:t.imagebox},o.a.createElement("img",{src:a.image,className:t.projectImage,alt:"Project four"})),o.a.createElement(v.a,{variant:"h5"},a.desc),o.a.createElement(v.a,{className:t.projectTitle,variant:"h6"},a.title))):null}))))))}}]),a}(o.a.Component),We=Object(ke.a)((function(){return{container:{backgroundColor:"#f9f9f9",padding:"30px 0"},logo:{height:18,cursor:"pointer"},link:{marginLeft:50,color:"#0F0A3C",fontWeight:500,textDecoration:"none","&:hover":{color:"#009F9D",textDecoration:"none"}},plink:{marginRight:50,color:"#0F0A3C",fontWeight:500,textDecoration:"none",cursor:"pointer"},links:{marginLeft:"auto"},addPadding:{padding:"60px 40px 0 40px"},projectTitle:{color:"#606060",fontSize:"1em"},projectImage:{cursor:"pointer",maxWidth:"100%",transition:"all 4s ",width:"100%",height:"auto",transform:"scale(1)",display:"inline-block","&:hover":{transform:"scale(1.1)"}},imagebox:{position:"relative",margin:"auto",overflow:"hidden",width:"100%"}}}))(Ce);var Se=function(e){return o.a.createElement("div",null,o.a.createElement(We,null),o.a.createElement(Ne,null))},Te=a(8);a(104);var De=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(u.a,{basename:"/nashcode"},o.a.createElement(Te.a,{exact:!0,path:"/",component:we}),o.a.createElement(Te.a,{exact:!0,path:"/our-work",component:Se})))},Fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Be(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(De,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/nashcode",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/nashcode","/service-worker.js");Fe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Be(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Be(t,e)}))}}()},24:function(e,t,a){e.exports=a.p+"static/media/value_star.19ef5a9f.svg"},34:function(e,t,a){e.exports=a.p+"static/media/website_bg.f258cada.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/word_embedding_bg.ff78576b.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/DSCN3403.a6f9103b.jpg"},40:function(e,t,a){e.exports=a.p+"static/media/logo_light.011552e9.svg"},43:function(e,t,a){e.exports=a.p+"static/media/line_circle.969ae42e.svg"},59:function(e,t,a){e.exports=a.p+"static/media/frontend_icon.956782ed.svg"},60:function(e,t,a){e.exports=a.p+"static/media/backend_icon.6e51da20.svg"},61:function(e,t,a){e.exports=a.p+"static/media/ai_icon.40e9fe55.svg"},62:function(e,t,a){e.exports=a.p+"static/media/management_icon.4b86e80a.svg"},63:function(e,t,a){e.exports=a.p+"static/media/line_circle_dark.996b752e.svg"},64:function(e,t,a){e.exports=a.p+"static/media/value_gift.b4155a28.svg"},65:function(e,t,a){e.exports=a.p+"static/media/value_diamond.7815f0f2.svg"},66:function(e,t,a){e.exports=a.p+"static/media/logo_dark.41e72abd.svg"},76:function(e,t,a){e.exports=a(105)},81:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.eeeef4ad.chunk.js.map