(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/logo.eb16ecf4.png"},101:function(e,t,a){e.exports=a.p+"static/media/profilePicPlaceholder.1d88924d.png"},111:function(e,t,a){e.exports=a(254)},116:function(e,t,a){},119:function(e,t,a){},254:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),i=a.n(o),c=(a(116),a(64)),l=a(3),s=a.n(l),u=a(10),p=a(27),h=a(28),m=a(31),d=a(29),f=a(32),g=(a(119),function(){var e=Object(u.a)(s.a.mark(function e(t,a){var n,r,o=arguments;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>2&&void 0!==o[2]?o[2]:"",o.length>3&&void 0!==o[3]?o[3]:"",e.prev=2,e.next=5,fetch("http://157.230.66.35/php/signup.php",{mode:"cors",method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:t,password:a,display_name:n})});case 5:return r=e.sent,e.abrupt("return",r.text().then(function(e){return console.log(e),e?JSON.parse(e):{}}));case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[2,9]])}));return function(t,a){return e.apply(this,arguments)}}()),b=function(){var e=Object(u.a)(s.a.mark(function e(t,a){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://157.230.66.35/php/login.php",{mode:"cors",method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:t,password:a})});case 3:return n=e.sent,e.abrupt("return",n.text().then(function(e){return console.log(e),e?JSON.parse(e):{}}));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t,a){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(s.a.mark(function e(t){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://157.230.66.35/php/grabAllFriends.php",{mode:"cors",method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({token:t})});case 3:return a=e.sent,e.next=6,a.text().then(function(e){return console.log(e),e?JSON.parse(e):{}});case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}(),v=function(e){return r.a.createElement("button",{onClick:function(){return e.history.push(e.path)}},e.children)},w=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={loggedIn:"False",username:"",password:""},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.password,o=function(){var t=Object(u.a)(s.a.mark(function t(){var r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(a,n);case 2:r=t.sent,console.log("Result",r),""===r.error?(console.log("Login was successful"),localStorage.setItem("token",r.token),e.props.history.push("/home")):alert(r.error);case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("header",{id:"sign_in_header",className:"App-header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{id:"logo_header"},r.a.createElement("p",null,"LOGO")),r.a.createElement("div",{id:"login"},r.a.createElement("div",{id:"username_login"},"Username:",r.a.createElement("input",{placeholder:"Username",value:a,onChange:function(t){return e.setState(Object(c.a)({},e.state,{username:t.target.value}))}})),r.a.createElement("div",{id:"password_login"},"Password:",r.a.createElement("input",{placeholder:"Password",type:"password",value:n,onChange:function(t){return e.setState(Object(c.a)({},e.state,{password:t.target.value}))}})),r.a.createElement("button",{onClick:function(){return o()}}," LOGIN "),r.a.createElement(v,Object.assign({path:"/signUp"},this.props),"SIGN UP")))))}}]),t}(n.Component),O=a(108),y=a(35),j=a(33),k=function(e){console.log("props: ",e);var t=Object(n.useState)(""),a=Object(j.a)(t,2),o=a[0],i=a[1],c=Object(n.useState)(""),l=Object(j.a)(c,2),p=l[0],h=l[1],m=Object(n.useState)(""),d=Object(j.a)(m,2),f=d[0],b=d[1],E=Object(n.useState)(""),w=Object(j.a)(E,2),O=w[0],y=w[1],k=Object(n.useState)(""),C=Object(j.a)(k,2),x=C[0],M=(C[1],function(){var t=Object(u.a)(s.a.mark(function t(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(p===f){t.next=4;break}alert("Your passwords don't match, please try again."),t.next=9;break;case 4:return t.next=6,g(o,p,O,x);case 6:a=t.sent,console.log("Result",a),""===a.error?(console.log("Sign up was successful"),e.history.push("/")):alert(a.error);case 9:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}());return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null," SignUp "),r.a.createElement("div",{id:"signUp"},r.a.createElement("div",{id:"display_name_signUp"},"Display Name:",r.a.createElement("input",{onBlur:function(e){return t=e.target.value,void y(t);var t}})),r.a.createElement("div",{id:"username_signUp"},"Username:",r.a.createElement("input",{onBlur:function(e){return t=e.target.value,void i(t);var t}})),r.a.createElement("div",{id:"password_signUp"},"Password:",r.a.createElement("input",{type:"password",onBlur:function(e){return t=e.target.value,void h(t);var t}})),r.a.createElement("div",{id:"confirm_password_signUp"},"Retype Password:",r.a.createElement("input",{type:"password",onBlur:function(e){return t=e.target.value,void b(t);var t}})),r.a.createElement("button",{onClick:function(){return M()}}," SIGN UP "),r.a.createElement(v,Object.assign({path:"/"},e),"BACK")))},C=a(255),x=a(256),M=a(257),N=a(258),S=a(259),I=a(260),P=a(261),A=function(e){return r.a.createElement("div",{key:e.id,id:e.id},r.a.createElement(C.a,{style:{width:"18rem"}},r.a.createElement(x.a,{top:!0,width:"100%",src:"holder.js/100px180",alt:"Card image cap"}),r.a.createElement(M.a,null,r.a.createElement(N.a,{tag:"h1"}," ",e.name),r.a.createElement(S.a,{tag:"h5"},e.username),r.a.createElement(I.a,{tag:"p"},"Place Holder for latest post"),r.a.createElement(P.a,{variant:"primary"},"Profile"))))},B=function(e){return r.a.createElement("div",{id:e.id},r.a.createElement(C.a,{style:{width:"30rem"}},r.a.createElement(M.a,null,r.a.createElement(N.a,{tag:"h1"},e.username),r.a.createElement(I.a,{tag:"p"},"Place Holder for post content: As I unzipped my tent flap I did hear a few howls, but they were distant and not worrying. What stunned me into stillness was a very loud howl from the direction of the lake, about a yard from my tent at most.This howl was different though. It had the feel of a Coyote howl, but it was deeper\u2026 and it lasted longer. I simply sat there petrified at what I heard. I wouldn\u2019t be able to guess at how long I sat there breathing hard with my fingers still grasping the zipper. But however long it may have been was just long enough for the\u2026 thing\u2026 that made that howl to come up the trail next to my tent. Suddenly I heard the crunching of claws on dirt and after that, claws on the rocks that made our camping plots. Then I saw the largest shadow made by a living creature that little kid me had ever seen. It lumbered heavily in the direction of the sparse tree line where I assume the other howling had come from. But before it got past the tree I urinated on it stopped."),r.a.createElement(P.a,{variant:"primary"},"Comment"))))},L=a(106),T=a.n(L),R=a(45),z=a.n(R),U=a(67),_=a.n(U),J=a(25),W=a.n(J),D=a(53),G=a.n(D),F=a(41),H=a(52),q=a.n(H),Y=a(68),K=a.n(Y),$=a(65),Q=a.n($),V=a(66),X=a.n(V),Z=a(107),ee=a.n(Z),te=a(24),ae=a(30),ne=a(100),re=a.n(ne),oe=a(101),ie=a.n(oe),ce=function(e){var t;return{mainBar:{backgroundColor:"#b20949",width:"100%",color:e.palette.common.white},buttonWrap:{display:"inline-box",width:"20%",margin:0,padding:0},searchButton:{marginLeft:0,color:"white",backgroundColor:"#69052b",height:34.4,borderBottomLeftRadius:0,borderTopLeftRadius:0},searchForm:{width:"50%",maxWidth:"400px"},inputWrap:{width:"80%",float:"left"},searchInput:{backgroundColor:Object(ae.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(ae.fade)(e.palette.common.white,.25)}},grow:{flexGrow:1},logoButton:{width:"50px",height:"50px",margin:"10px",padding:0},logo:{backgroundImage:"url(".concat(re.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center",height:"50px",width:"50px"},search:(t={position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(ae.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(ae.fade)(e.palette.common.white,.25)},marginRight:0,marginLeft:0,width:"100%"},Object(te.a)(t,e.breakpoints.up("sm"),{marginLeft:3*e.spacing.unit,width:"100%"}),Object(te.a)(t,"borderBottomRightRadius",0),Object(te.a)(t,"borderTopRightRadius",0),t),searchIcon:{width:9*e.spacing.unit,marginLeft:.5*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(te.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),profileButton:{width:"40px",height:"40px",padding:0,margin:"10px"},profileAvatar:{backgroundImage:"url(".concat(ie.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center",height:"40px",width:"40px",borderRadius:"80px"},sectionDesktop:Object(te.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(te.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),desktopMenu:{position:"fixed",marginTop:"55px",marginLeft:"30px"},mobileMenu:{position:"fixed",marginTop:"55px",marginLeft:"20px"},notificationsModal:{marginTop:"55px"},popMenuIcons:{marginRight:"10px"},notificationsModalText:{margin:"10px",textAllign:"center"}}},le=a(34),se=a(104),ue=a.n(se),pe=a(102),he=a.n(pe),me=a(105),de=a.n(me),fe=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).handleSubmit=e.handleSubmit.bind(Object(le.a)(Object(le.a)(e))),e}return Object(f.a)(t,e),Object(h.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=e.target;new FormData(t);console.log(e.target.elements.search.value)}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("form",{className:e.searchForm,onSubmit:this.handleSubmit},r.a.createElement("div",{className:e.inputWrap},r.a.createElement(he.a,{className:e.searchInput,name:"search",placeholder:"Add a friend...",classes:{root:e.inputRoot,input:e.inputInput}})),r.a.createElement("div",{className:e.buttonWrap},r.a.createElement(ue.a,{type:"submit",className:e.searchButton},r.a.createElement(de.a,null))))}}]),t}(r.a.Component),ge=Object(F.withStyles)(ce)(fe),be=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.classes;if(""!=this.props.profileImageLink){return r.a.createElement("a",{className:e.profileAvatar})}return r.a.createElement("a",{className:e.profileAvatar})}}]),t}(r.a.Component),Ee=Object(F.withStyles)(ce)(be),ve=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={anchorEl:null,mobileMoreAnchorEl:null,notificationsModalAnchorEl:null},e.handleProfileMenuOpen=function(t){e.setState({anchorEl:t.currentTarget})},e.handleMenuClose=function(){e.setState({anchorEl:null}),e.handleMobileMenuClose()},e.handleMobileMenuOpen=function(t){e.setState({mobileMoreAnchorEl:t.currentTarget})},e.handleMobileMenuClose=function(){e.setState({mobileMoreAnchorEl:null})},e.handleNotificationsModalOpen=function(t){e.setState({notificationsModalAnchorEl:t.currentTarget})},e.handleNotifcationsModalClose=function(){e.setState({notificationsModalAnchorEl:null})},e.handleLogout=Object(u.a)(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.clear(),e.props.props.history.push("/");case 2:case"end":return t.stop()}},t)})),e.handleProfile=Object(u.a)(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.props.props.history.push("/profile");case 1:case"end":return t.stop()}},t)})),e}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;console.log(this.props.data);var t=this.state,a=t.anchorEl,n=t.mobileMoreAnchorEl,o=this.state.notificationsModalAnchorEl,i=this.props.classes,c=Boolean(a),l=Boolean(n),s=Boolean(o),u=this.props.data.length,p=this.props.data.map(function(t,a){return r.a.createElement(W.a,{onClick:e.handleNotifcationsModalClose},r.a.createElement(Ee,null),r.a.createElement("p",{className:i.notificationsModalText}," ",t.user,"  ",t.message))}),h=r.a.createElement(G.a,{className:i.notificationsModal,anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:s,onClose:this.handleNotifcationsModalClose},p),m=r.a.createElement(G.a,{className:i.desktopMenu,anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:c,onClose:this.handleMenuClose},r.a.createElement(W.a,{onClick:this.handleMenuClose},r.a.createElement(q.a,{onClick:this.handleProfile,className:i.popMenuIcons}),r.a.createElement("p",null,"Profile")),r.a.createElement(W.a,{onClick:this.handleMenuClose},r.a.createElement(Q.a,{className:i.popMenuIcons}),r.a.createElement("p",null,"Settings")),r.a.createElement(W.a,{onClick:this.handleMenuClose},r.a.createElement(X.a,{onClick:this.handleLogout,className:i.popMenuIcons}),r.a.createElement("p",null,"Logout"))),d=r.a.createElement(G.a,{className:i.mobileMenu,anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:this.handleMenuClose},r.a.createElement(W.a,{onClick:function(){e.handleMobileMenuClose()}},r.a.createElement(_.a,{className:i.popMenuIcons,badgeContent:u,color:"secondary"},r.a.createElement(K.a,null)),r.a.createElement("p",null,"Notifications")),r.a.createElement(W.a,{onClick:this.handleMenuClose},r.a.createElement(q.a,{className:i.popMenuIcons}),r.a.createElement("p",null,"Profile")),r.a.createElement(W.a,{onClick:this.handleMenuClose},r.a.createElement(Q.a,{className:i.popMenuIcons}),r.a.createElement("p",null,"Settings")),r.a.createElement(W.a,{onClick:this.handleMenuClose},r.a.createElement(X.a,{className:i.popMenuIcons}),r.a.createElement("p",null,"Logout")));return r.a.createElement("div",{className:i.root},r.a.createElement("div",{className:i.mainBar,position:"static"},r.a.createElement(T.a,null,r.a.createElement(z.a,{className:i.logoButton},r.a.createElement("a",{className:i.logo,onClick:this.handleLogout},this.props.props.children,">")),r.a.createElement(ge,null),r.a.createElement("div",{className:i.grow}),r.a.createElement("div",{className:i.sectionDesktop},r.a.createElement(z.a,{color:"inherit",onClick:this.handleNotificationsModalOpen},r.a.createElement(_.a,{badgeContent:u,color:"secondary"},r.a.createElement(K.a,null))),r.a.createElement(z.a,{className:i.profileButton,"aria-owns":c?"material-appbar":void 0,"aria-haspopup":"true",onClick:this.handleProfileMenuOpen,color:"inherit"},r.a.createElement(Ee,{profileImageLink:""}))),r.a.createElement("div",{className:i.sectionMobile},r.a.createElement(z.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},r.a.createElement(ee.a,null))))),m,d,h)}}]),t}(r.a.Component);ve.defaultProps={data:[{user:"justiscezager1234",message:"Liked your post"},{user:"justiscezager1234",message:"Commented on your post"},{user:"justiscezager1234",message:"Send you a friend request"},{user:"justiscezager1234",message:"Accepted your friend request"}]};var we=Object(F.withStyles)(ce)(ve),Oe=function(e){var t=localStorage.getItem("token"),a=Object(n.useState)([]),o=Object(j.a)(a,2),i=o[0],c=o[1],l=function(){var e=Object(u.a)(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t).then(function(e){return e});case 2:a=e.sent,console.log("fetching friends",a),c(a);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){null===t&&(alert("Please Login to verify your identity\nYou will now be redirected to the Login page."),p())},[t]),Object(n.useEffect)(function(){l()},[]),Object(n.useEffect)(function(){return function(){console.log("Component did unMount")}},[]);var p=function(){var t=Object(u.a)(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.clear(),e.history.push("/");case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement(we,{props:e}),r.a.createElement("h1",null," Home Page "),i.map(function(e){return r.a.createElement(A,{id:e.username,name:e.display_name,username:e.username})}),[{name:"Jon",username:"DogMan"},{name:"Doe",username:"DogWoman"}].map(function(e,t){return r.a.createElement(B,{id:t,username:e.username})}),r.a.createElement("button",{onClick:function(){return p()}}," LOG OUT "))},ye=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement(we,{props:e}),r.a.createElement("h1",null," Profile "),r.a.createElement(v,Object.assign({path:"/home"},e),"Home"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(253);i.a.render(r.a.createElement(function(){return r.a.createElement(O.a,null,r.a.createElement(y.a,{exact:!0,path:"/",component:w}),r.a.createElement(y.a,{path:"/signUp",component:k}),r.a.createElement(y.a,{path:"/home",component:Oe}),r.a.createElement(y.a,{path:"/profile",component:ye}))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[111,1,2]]]);
//# sourceMappingURL=main.94194cb8.chunk.js.map