(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,t,n){e.exports=n(315)},150:function(e,t,n){},153:function(e,t,n){},154:function(e,t,n){},233:function(e,t,n){e.exports=n.p+"static/media/profilePicPlaceholder.1d88924d.png"},30:function(e,t,n){e.exports=n.p+"static/media/0_GuildSword_Icon.ad1f5489.png"},301:function(e,t,n){e.exports=n.p+"static/media/profilePicPlaceholder.1d88924d.png"},308:function(e,t,n){},31:function(e,t,n){e.exports=n.p+"static/media/3_Staff_Icon.b3bde274.png"},315:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(22),c=n.n(o),i=(n(150),n(56)),s=n(3),l=n.n(s),u=n(7),p=n(36),m=n(37),d=n(41),h=n(38),f=n(42),g=(n(153),function(){var e=Object(u.a)(l.a.mark(function e(t,n){var a,r,o,c=arguments;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>2&&void 0!==c[2]?c[2]:"",r=c.length>3&&void 0!==c[3]?c[3]:"",e.prev=2,e.next=5,fetch("https://guild-app.com/php/signup.php",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:t,password:n,display_name:a,profile_pic_url:r})});case 5:return o=e.sent,e.abrupt("return",o.text().then(function(e){return console.log("SignUp response",e),e?JSON.parse(e):{}}));case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[2,9]])}));return function(t,n){return e.apply(this,arguments)}}()),b=function(){var e=Object(u.a)(l.a.mark(function e(t,n){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://guild-app.com/php/login.php",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:t,password:n})});case 3:return a=e.sent,e.abrupt("return",a.text().then(function(e){return console.log("login response",e),e?JSON.parse(e):{}}));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t,n){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(l.a.mark(function e(t,n){var a,r,o=arguments;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>2&&void 0!==o[2]?o[2]:"",e.prev=1,e.next=4,fetch("https://guild-app.com/php/addPost.php",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({token:t,content:n,image_url:a})});case 4:return r=e.sent,e.abrupt("return",r.text().then(function(e){return console.log("addPost response",e),e?JSON.parse(e):{}}));case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(l.a.mark(function e(t,n,a){var r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://guild-app.com/php/addComment.php",{mode:"cors",method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({token:t,post_id:n,content:a})});case 3:return r=e.sent,e.next=6,r.text().then(function(e){return console.log("addComment response",e),e?JSON.parse(e):{}});case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t,n,a){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://guild-app.com/php/grabAllFriends.php",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({token:t})});case 3:return n=e.sent,e.next=6,n.text().then(function(e){return console.log("grabAllFriends response",e),e?JSON.parse(e):{}});case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(l.a.mark(function e(t,n){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://guild-app.com/php/grabAllPosts.php",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({token:t,username:n})});case 3:return a=e.sent,e.next=6,a.text().then(function(e){return console.log("grabAllPosts response from ",n+e),e?JSON.parse(e):{}});case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(l.a.mark(function e(t,n){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://guild-app.com/php/grabAllComments.php",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({token:t,post_id:n})});case 3:return a=e.sent,e.next=6,a.text().then(function(e){return console.log("grabAllComments response",e),e?JSON.parse(e):{}});case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t,n){return e.apply(this,arguments)}}(),j=function(){var e=Object(u.a)(l.a.mark(function e(t,n){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://guild-app.com/php/addFriend.php",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({token:t,username:n})});case 3:return a=e.sent,e.next=6,a.text().then(function(e){return console.log("addFriend response",e),e?JSON.parse(e):{}});case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(l.a.mark(function e(t,n){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://guild-app.com/php/deletePost.php",{mode:"cors",method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({token:t,post_id:n})});case 3:return a=e.sent,e.next=6,a.text().then(function(e){return console.log("deletePost response",e),e?JSON.parse(e):{}});case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(l.a.mark(function e(t,n){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://guild-app.com/php/blockUser.php",{mode:"cors",method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({token:t,username:n})});case 3:return a=e.sent,e.next=6,a.text().then(function(e){return console.log("blockUser response",e),e?JSON.parse(e):{}});case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t,n){return e.apply(this,arguments)}}(),_=function(){var e=Object(u.a)(l.a.mark(function e(t,n){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://guild-app.com/php/deleteComment.php",{mode:"cors",method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({token:t,comment_id:n})});case 3:return a=e.sent,e.next=6,a.text().then(function(e){return console.log("deleteComment response",e),e?JSON.parse(e):{}});case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t,n){return e.apply(this,arguments)}}(),S=function(e){return r.a.createElement("button",{className:e.className,onClick:function(){return e.history.push(e.path)}},e.children)},N=n(64),C=n.n(N),M=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={loggedIn:"False",username:"",password:""},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.username,a=t.password,o=function(){var t=Object(u.a)(l.a.mark(function t(){var r;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(n,a);case 2:r=t.sent,console.log("Result",r),""===r.error?(console.log("Login was successful"),localStorage.setItem("token",r.token),localStorage.setItem("username",e.state.username),localStorage.setItem("usernameFriend",""),e.props.history.push("/home")):alert(r.error);case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("header",{id:"sign_in_header",className:"App-header"},r.a.createElement("div",{className:"container-left"},r.a.createElement("p",null),r.a.createElement("img",{src:C.a,width:"80%",height:"auto"})),r.a.createElement("div",{className:"container-right"},r.a.createElement("div",{id:"logo_header"},r.a.createElement("p",{className:"guild"},"Guild")),r.a.createElement("div",{id:"login"},r.a.createElement("div",{id:"username_login"},"Username:",r.a.createElement("input",{className:"username",placeholder:"Username",value:n,onChange:function(t){return e.setState(Object(i.a)({},e.state,{username:t.target.value}))}})),r.a.createElement("div",{id:"password_login"},"Password:",r.a.createElement("input",{className:"password",placeholder:"Password",type:"password",value:a,onChange:function(t){return e.setState(Object(i.a)({},e.state,{password:t.target.value}))}})),r.a.createElement("button",{className:"login",onClick:function(){return o()}}," LOGIN "),r.a.createElement(S,Object.assign({className:"signUp",path:"/signUp"},this.props),"SIGN UP")))))}}]),t}(a.Component),I=n(141),A=n(46),P=n(19),R=(n(154),n(130)),T=n.n(R),B=n(33),L=n.n(B),F=n(45),U=n.n(F),J=n(66),z=n.n(J),W=n(320),D=n(65),H=n(131),G=n.n(H),q=n(86),Y=n.n(q),K=n(134),$=n.n(K),Q=n(132),V=n.n(Q),X=n(30),Z=n.n(X),ee=n(39),te=n.n(ee),ne=n(40),ae=n.n(ne),re=n(31),oe=n.n(re),ce=n(32),ie=n.n(ce),se=function(e){console.log("props: ",e);var t=Object(a.useState)(""),o=Object(P.a)(t,2),c=o[0],i=o[1],s=Object(a.useState)(""),p=Object(P.a)(s,2),m=p[0],d=p[1],h=Object(a.useState)(""),f=Object(P.a)(h,2),b=f[0],v=f[1],x=Object(a.useState)(""),E=Object(P.a)(x,2),w=E[0],O=E[1],j=Object(a.useState)(""),k=Object(P.a)(j,2),y=k[0],_=(k[1],[{img:Z.a,title:"Guild Sword"},{img:te.a,title:"Sword"},{img:ae.a,title:"Bow Arrow"},{img:oe.a,title:"Staff"},{img:ie.a,title:"Shield"}]),N=function(){var t=Object(u.a)(l.a.mark(function t(){var n;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(m===b){t.next=4;break}alert("Your passwords don't match, please try again."),t.next=9;break;case 4:return t.next=6,g(c,m,w,y);case 6:n=t.sent,console.log("Result",n),""===n.error?(console.log("Sign up was successful"),e.history.push("/")):alert(n.error);case 9:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"AppSignUp"},r.a.createElement("div",{id:"signUp"},r.a.createElement("h1",null," SignUp "),r.a.createElement("div",{id:"profile_pic"},r.a.createElement(D.a,{trigger:r.a.createElement(L.a,null,r.a.createElement(U.a,{badgeContent:r.a.createElement(z.a,null),color:"secondary"},r.a.createElement(T.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement("img",{alt:"",src:n(233),style:{height:"130px",width:"140px"}})))),position:"bottom center",modal:!0},function(e){return r.a.createElement("div",{id:"cancel"},r.a.createElement(G.a,{cellHeight:150},r.a.createElement(Y.a,{key:"Subheader",cols:2,style:{height:"auto"}},r.a.createElement(V.a,{component:"div"},"Choose Profile Picture ",r.a.createElement(W.a,{id:"closeButtonn",close:!0,onClick:e})," ")),_.map(function(t){return r.a.createElement("a",{href:"#",onClick:e},r.a.createElement(Y.a,{key:t.img,style:{maxWidth:"100%",height:"auto"},cols:t.cols||1},r.a.createElement("img",{src:t.img,alt:t.title}),r.a.createElement($.a,{title:t.title})))})))})),r.a.createElement("div",{id:"display_name_signUp"},"Display Name:",r.a.createElement("input",{onBlur:function(e){return t=e.target.value,void O(t);var t}})),r.a.createElement("div",{id:"username_signUp"},"Username:",r.a.createElement("input",{onBlur:function(e){return t=e.target.value,void i(t);var t}})),r.a.createElement("div",{id:"password_signUp"},"Password:",r.a.createElement("input",{type:"password",onBlur:function(e){return t=e.target.value,void d(t);var t}})),r.a.createElement("div",{id:"confirm_password_signUp"},"Retype Password:",r.a.createElement("input",{type:"password",onBlur:function(e){return t=e.target.value,void v(t);var t}})),r.a.createElement("button",{className:"signUp",onClick:function(){return N()}}," SIGN UP "),r.a.createElement(S,Object.assign({className:"signUp",path:"/"},e),"BACK")))},le=n(321),ue=n(322),pe=n(323),me=n(324),de=n(325),he=n(23),fe=function(e){return{friend_card:{width:"18rem",margin:"20px"},friend_block_button:{height:"34.4px",width:"60px",color:"white",backgroundColor:"#cc0000",margin:"5px",padding:"5px",marginTop:"0",textAlign:"center",border:"0px",float:"right"},friend_img:{cursor:"pointer",width:"40px",height:"40px",margin:"5px",borderRadius:"5px"},friend_title:{fontSize:"25px"},friend_subtitle:{fontSize:"16px"},friend_post:{fontSize:"14px"}}},ge=Object(he.withStyles)(fe)(function(e){var t=localStorage.getItem("token"),n=[Z.a,te.a,ae.a,oe.a,ie.a],a=e.classes,o=function(){var t=Object(u.a)(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.setItem("usernameFriend",e.username),e.history.push("/profile");case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),c=function(){var n=Object(u.a)(l.a.mark(function n(){var a;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!window.confirm("Are you sure you wish to block "+e.username+" ?")){n.next=7;break}return n.next=3,y(t,e.id).then(function(e){return e});case 3:a=n.sent,console.log("Delete post response: ",a),alert(e.username+" has been blocked"),window.location.reload();case 7:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}();return r.a.createElement("div",{key:e.id,id:e.id},r.a.createElement(le.a,{className:a.friend_card},r.a.createElement(ue.a,null,r.a.createElement(W.a,{className:a.friend_block_button,onClick:c},"Block"),r.a.createElement("img",{className:a.friend_img,alt:"/static/images/avatar/2.jpg",src:function(e){return e[Math.floor(Math.random()*e.length)]}(n),onClick:function(){return o()}}),r.a.createElement(pe.a,{className:a.friend_title,tag:"h2"},e.name),r.a.createElement(me.a,{className:a.friend_subtitle,tag:"h5"},e.username),r.a.createElement(de.a,{className:a.friend_post,tag:"p"},e.preview))))}),be=function(e){var t=localStorage.getItem("token"),n=[Z.a,te.a,ae.a,oe.a,ie.a],a=function(){var n=Object(u.a)(l.a.mark(function n(){var a;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!window.confirm("Are you sure you wish to delete this comment?")){n.next=7;break}return console.log("Delete confirmed"),n.next=4,_(t,e.id).then(function(e){return e});case 4:a=n.sent,console.log("Delete comment response: ",a),window.location.reload();case 7:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}();return r.a.createElement("div",{key:e.id,id:e.id,className:"media mb-3"},r.a.createElement("img",{className:"m-2 rounded",width:"48",height:"48",src:function(e){return e[Math.floor(Math.random()*e.length)]}(n),alt:"/static/images/avatar/2.jpg"}),r.a.createElement("div",{className:"media-body p-2 shadow-sm rounded bg-light border"},r.a.createElement(W.a,{close:!0,onClick:a}),r.a.createElement("small",{className:"m-1 float-right text-muted"},e.time_created),r.a.createElement("h6",{className:"mt-0 mb-1 text-muted"},e.username+" says:"),e.content))},ve=n(136),xe=n.n(ve),Ee=n(14),we=n(24),Oe=function(e){var t;return{post:{marginLeft:"100px"},post_card:{marginLeft:"17%",marginRight:"17%",width:"66%",maxWidth:"900px",marginBottom:"50px"},post_card_body:{},post_card_title:{fontSize:"30px"},post_text:{fontSize:"16px"},comment_button:{color:"white",backgroundColor:"#b20949",height:"38px",borderRadius:"4px",textAlign:"center",marginRight:"5px",marginLeft:"5px",marginBottom:"9px",border:"0px"},comment_input:(t={backgroundColor:Object(we.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(we.fade)(e.palette.common.white,.25)},position:"relative",borderRadius:e.shape.borderRadius},Object(Ee.a)(t,"backgroundColor",Object(we.fade)(e.palette.common.white,.15)),Object(Ee.a)(t,"&:hover",{backgroundColor:Object(we.fade)(e.palette.common.white,.25)}),Object(Ee.a)(t,"marginRight","5px"),Object(Ee.a)(t,"marginLeft","5px"),Object(Ee.a)(t,"width","60%"),Object(Ee.a)(t,"maxHeight","200px"),Object(Ee.a)(t,"minHeight","38px"),Object(Ee.a)(t,"resize","vertical"),Object(Ee.a)(t,e.breakpoints.up("sm"),{marginLeft:3*e.spacing.unit,width:"60%"}),Object(Ee.a)(t,"marginBottom","9px"),t)}},je=n(57),ke=n.n(je),ye=n(135),_e=n.n(ye),Se=Object(he.withStyles)(Oe)(function(e){var t=localStorage.getItem("token"),n=(Z.a,te.a,ae.a,oe.a,ie.a,Object(a.useState)("")),o=Object(P.a)(n,2),c=o[0],i=o[1],s=Object(a.useState)([]),p=Object(P.a)(s,2),m=p[0],d=p[1],h=Object(a.useState)(e.num_likes),f=Object(P.a)(h,2),g=f[0],b=f[1],v=Object(a.useState)(!1),E=Object(P.a)(v,2),w=E[0],j=E[1],y=e.classes,_=""===e.username?localStorage.getItem("username"):localStorage.getItem("usernameFriend"),S=function(){var n=Object(u.a)(l.a.mark(function n(){var a;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("calling comments "+e.id),n.next=3,O(t,e.id).then(function(e){return e});case 3:a=n.sent,console.log("fetching posts",a),null!==a&&d(a);case 6:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(u.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:j(!w),b(w?g-1:g+1);case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),M=function(){var n=Object(u.a)(l.a.mark(function n(){var a;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==c){n.next=4;break}alert("Can't add an empty comment"),n.next=9;break;case 4:return n.next=6,x(t,e.id,c);case 6:a=n.sent,console.log("addComment Result",a),""===a.error?(console.log("Comment added"),window.location.reload()):alert(a.error);case 9:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}(),I=function(){var n=Object(u.a)(l.a.mark(function n(){var a;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!window.confirm("Are you sure you wish to delete this post?")){n.next=7;break}return console.log("Delete confirmed"),n.next=4,k(t,e.id).then(function(e){return e});case 4:a=n.sent,console.log("Delete post response: ",a),window.location.reload();case 7:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}();return Object(a.useEffect)(function(){S(),N()},[]),r.a.createElement("div",{className:y.post_div,id:e.id},r.a.createElement(le.a,{className:y.post_card,elevation:4},r.a.createElement(ue.a,{className:y.post_card_body},r.a.createElement(pe.a,{className:y.post_card_title,tag:"h1"},_,r.a.createElement(W.a,{close:!0,onClick:I})),r.a.createElement(de.a,{className:y.post_card_text,tag:"p"},e.content),r.a.createElement("small",{className:"float-right text-muted"},e.time_created),r.a.createElement(L.a,{color:"inherit"},r.a.createElement(U.a,{badgeContent:g,onClick:C,color:"secondary"},r.a.createElement(_e.a,null))),r.a.createElement(function(e){var t=e.toggle,n=e.content,o=Object(a.useState)(!1),c=Object(P.a)(o,2),i=c[0],s=c[1];return r.a.createElement(r.a.Fragment,null,t(function(){return s(!0)}),i&&n(function(){return s(!1)}))},{toggle:function(e){return r.a.createElement(L.a,{onClick:e},r.a.createElement(xe.a,null))},content:function(e){return r.a.createElement("div",null,m.map(function(e){return r.a.createElement(be,{key:e.comment_id,id:e.comment_id,image_url:e.profile_pic_url,name:e.display_name,time_created:e.time_created,username:e.username,content:e.content})}))}}),r.a.createElement("div",{className:y.coment_input__button_wrap},r.a.createElement(ke.a,{className:y.comment_input,id:"textPopUp",fullWidth:!0,multiline:!0,placeholder:"Make a comment...",onBlur:function(e){return t=e.target.value,i(t),void console.log(t);var t}}),r.a.createElement(W.a,{className:y.comment_button,variant:"primary",size:"small",onClick:M},"Comment")))))}),Ne=n(87),Ce=n.n(Ne),Me=n(85),Ie=n.n(Me),Ae=n(143),Pe=function(e){return{add_post:{width:"80%",marginLeft:"10%",marginRight:"10%",marginTop:" 20px",marginBottom:" 20px",border:" 0px",borderRadius:" 20px"},add_post_button:{backgroundColor:" white",border:" 0px",borderRadius:" 20px"},add_post_input:{width:"95%",backgroundColor:" white",border:" 0px",borderRadius:" 40px"},add_post_popup:{width:"600px",minHeight:" 300px",borderRadius:" 40px"},add_post_title:{textAlign:"center",fontSize:"20px"},post_popup_camera:{cursor:"pointer",margin:"10px",width:"30px",height:"30px"},post_button:{height:"34.4px",width:"60px",color:"white",backgroundColor:"#b20949",margin:"5px",padding:"5px",marginTop:"0",textAlign:"center",border:"0px "},post_cancel_button:{height:"34.4px",width:"60px",color:"white",backgroundColor:"grey",margin:"5px",padding:"1px",marginTop:"0",textAlign:"center",border:"0px "}}},Re={display:"flex",flexDirection:"row",flexWrap:"wrap",marginTop:16},Te={display:"inline-flex",borderRadius:2,border:"1px solid #eaeaea",marginBottom:8,marginRight:8,width:100,height:100,padding:4,boxSizing:"border-box"},Be={display:"flex",minWidth:0,overflow:"hidden"},Le={display:"block",width:"auto",height:"100%"},Fe=Object(he.withStyles)(Pe)(function(e){var t=localStorage.getItem("token"),n=localStorage.getItem("username"),o=Object(a.useState)(""),c=Object(P.a)(o,2),i=c[0],s=c[1],p=Object(a.useState)([]),m=Object(P.a)(p,2),d=m[0],h=m[1],f=e.classes,g=Object(Ae.a)({accept:"image/*",onDrop:function(e){h(e.map(function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}))}}),b=g.getRootProps,x=g.getInputProps,E=d.map(function(e){return r.a.createElement("div",{style:Te,key:e.name},r.a.createElement("div",{style:Be},r.a.createElement("img",{src:e.preview,style:Le})),r.a.createElement(W.a,{close:!0,size:"sm",position:"absolute"}))});Object(a.useEffect)(function(){return function(){d.forEach(function(e){return URL.revokeObjectURL(e.preview)})}},[d]);var w=function(){var e=Object(u.a)(l.a.mark(function e(){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==i){e.next=4;break}alert("Can't add an empty post"),e.next=9;break;case 4:return e.next=6,v(t,i,"");case 6:n=e.sent,console.log("Result",n),""===n.error?console.log("Add post was successful"):alert(n.error);case 9:window.location.reload();case 10:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:e.id},r.a.createElement(le.a,{className:f.add_post},r.a.createElement(D.a,{className:f.add_post_popup,trigger:r.a.createElement("button",{className:f.add_post_button},r.a.createElement(ke.a,{className:f.add_post_input,id:"textPopUp",fullWidth:!0,placeholder:"Add a post...",InputProps:{endAdornment:r.a.createElement(Ie.a,{position:"end"}," ",r.a.createElement(Ce.a,null))}})),position:"bottom center",modal:!0},function(e){var t;return r.a.createElement("div",{id:"cancel"},r.a.createElement(pe.a,{className:f.add_post_title,tag:"h1"}," ",n),r.a.createElement(ue.a,null,r.a.createElement("div",{id:"postContent"},r.a.createElement("form",{autoComplete:"off"},r.a.createElement(ke.a,{id:"textArea",placeholder:"Add a post...",fullWidth:!0,margin:"none",multiline:!0,rows:"5",onBlur:function(e){return t=e.target.value,s(t),void console.log(t);var t}}))),r.a.createElement("div",{id:"postImage"},r.a.createElement("section",{className:"container"},r.a.createElement("div",b({className:"dropzone"}),r.a.createElement("input",x()),r.a.createElement(Ce.a,{className:f.post_popup_camera})),r.a.createElement("aside",{style:Re},E))),r.a.createElement("div",{id:"buttons",onClick:e},r.a.createElement(W.a,{className:f.post_button,type:"submit",class:"btn btn-primary",onClick:w},"POST"),r.a.createElement(W.a,(t={className:"cancel"},Object(Ee.a)(t,"className",f.post_cancel_button),Object(Ee.a)(t,"onClick",e),t),"Cancel"))))})))}),Ue=n(139),Je=n.n(Ue),ze=n(34),We=n.n(ze),De=n(68),He=n.n(De),Ge=n(67),qe=n.n(Ge),Ye=n(91),Ke=n.n(Ye),$e=n(89),Qe=n.n($e),Ve=n(90),Xe=n.n(Ve),Ze=n(140),et=n.n(Ze),tt=(n(301),function(e){var t;return{mainBar:{backgroundColor:"#b20949",width:"100%",height:"70px",color:e.palette.common.white},formButtonWrap:{width:"30%",float:"left",display:"inline-box",height:"34.4px"},searchButtonWrap:{float:"left",height:"34.4px",margin:0,padding:0,marginRight:"5px"},addButtonWrap:{height:"34.4px",margin:0,padding:0,marginLeft:"2px"},searchButton:{height:"34.4px",marginLeft:0,marginRight:0,color:"white",backgroundColor:"#69052b",borderBottomLeftRadius:0,borderTopLeftRadius:0,marginTop:"0"},addButton:{height:"34.4px",color:"white",backgroundColor:"#69052b",marginTop:"0"},searchForm:{width:"50%",maxWidth:"500px"},inputWrap:{width:"70%",float:"left"},searchInput:{height:"34.4px",backgroundColor:Object(we.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(we.fade)(e.palette.common.white,.25)}},grow:{flexGrow:1},logoButton:{width:"80px",height:"80px",marginTop:"0px",padding:0},logo:{cursor:"pointer",backgroundImage:"url(".concat(C.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center",height:"80px",width:"80px"},search:(t={position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(we.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(we.fade)(e.palette.common.white,.25)},marginRight:0,marginLeft:0,width:"100%"},Object(Ee.a)(t,e.breakpoints.up("sm"),{marginLeft:3*e.spacing.unit,width:"100%"}),Object(Ee.a)(t,"borderBottomRightRadius",0),Object(Ee.a)(t,"borderTopRightRadius",0),t),searchIcon:{width:9*e.spacing.unit,marginLeft:.5*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(Ee.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200}),profileButton:{width:"40px",height:"40px",padding:0,margin:"10px"},profileAvatar:{backgroundImage:"url(".concat(Z.a,")"),backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center",height:"40px",width:"40px",borderRadius:"80px"},sectionDesktop:Object(Ee.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(Ee.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),desktopMenu:{position:"fixed",marginTop:"55px",marginLeft:"30px"},mobileMenu:{position:"fixed",marginTop:"55px",marginLeft:"20px"},notificationsModal:{marginTop:"55px"},popMenuIcons:{marginRight:"10px"},notificationsModalText:{margin:"10px",textAllign:"center"}}}),nt=n(44),at=n(88),rt=n.n(at),ot=n(55),ct=n.n(ot),it=n(138),st=n.n(it),lt=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).searchFriend=Object(u.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Searching");case 1:case"end":return e.stop()}},e)})),e.addFriendHandler=Object(u.a)(l.a.mark(function t(){var n;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Adding",e.state.username),t.next=3,j(localStorage.getItem("token"),e.state.username);case 3:n=t.sent,console.log("addFriend response:",n),""===n.error?(console.log("addFriend was successful"),alert("Friend request successfully sent to "+e.state.username)):alert(n.error);case 6:case"end":return t.stop()}},t)})),e.handleSubmit=e.handleSubmit.bind(Object(nt.a)(Object(nt.a)(e))),e.state={username:""},e}return Object(f.a)(t,e),Object(m.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=e.target;new FormData(t);console.log(e.target.elements.search.value)}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("form",{autoComplete:"off",className:t.searchForm,onSubmit:this.handleSubmit},r.a.createElement("div",{className:t.inputWrap},r.a.createElement(ct.a,{className:t.searchInput,name:"search",placeholder:"Search or Add a friend...",classes:{root:t.inputRoot,input:t.inputInput},value:this.state.username,onChange:function(t){return e.setState(Object(i.a)({},e.state,{username:t.target.value}))}})),r.a.createElement("div",{className:t.formButtonWrap},r.a.createElement("div",{className:t.searchButtonWrap},r.a.createElement(rt.a,{type:"submit",onClick:this.searchFriend,className:t.searchButton},r.a.createElement(st.a,null))),r.a.createElement("div",{className:t.addButtonWrap},r.a.createElement(rt.a,{type:"submit",onClick:this.addFriendHandler,className:t.addButton},r.a.createElement(z.a,null)))))}}]),t}(r.a.Component),ut=Object(he.withStyles)(tt)(lt),pt=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.classes;if(""!=this.props.profileImageLink){return r.a.createElement("a",{className:e.profileAvatar})}this.props.profileImageLink;return r.a.createElement("a",{className:e.profileAvatar})}}]),t}(r.a.Component),mt=Object(he.withStyles)(tt)(pt),dt=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).state={anchorEl:null,mobileMoreAnchorEl:null,notificationsModalAnchorEl:null},e.handleProfileMenuOpen=function(t){e.setState({anchorEl:t.currentTarget})},e.handleMenuClose=function(){e.setState({anchorEl:null}),e.handleMobileMenuClose()},e.handleMobileMenuOpen=function(t){e.setState({mobileMoreAnchorEl:t.currentTarget})},e.handleMobileMenuClose=function(){e.setState({mobileMoreAnchorEl:null})},e.handleNotificationsModalOpen=function(t){e.setState({notificationsModalAnchorEl:t.currentTarget})},e.handleNotifcationsModalClose=function(){e.setState({notificationsModalAnchorEl:null})},e.handleLogout=Object(u.a)(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.clear(),e.props.props.history.push("/");case 2:case"end":return t.stop()}},t)})),e.goProfile=Object(u.a)(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.setItem("usernameFriend",""),e.props.props.history.push("/profile");case 2:case"end":return t.stop()}},t)})),e.goHome=Object(u.a)(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.props.props.history.push("/home");case 1:case"end":return t.stop()}},t)})),e}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;console.log(this.props.data);var t=this.state,n=t.anchorEl,a=t.mobileMoreAnchorEl,o=this.state.notificationsModalAnchorEl,c=this.props.classes,i=Boolean(n),s=Boolean(a),l=Boolean(o),u=this.props.data.length,p=this.props.data.map(function(t,n){return r.a.createElement(We.a,{onClick:e.handleNotifcationsModalClose},r.a.createElement(mt,null),r.a.createElement("p",{className:c.notificationsModalText}," ",t.user,"  ",t.message))}),m=r.a.createElement(He.a,{className:c.notificationsModal,anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:this.handleNotifcationsModalClose},p),d=r.a.createElement(He.a,{className:c.desktopMenu,anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:this.handleMenuClose},r.a.createElement(We.a,{onClick:function(){e.handleMenuClose(),e.goProfile()}},r.a.createElement(qe.a,{className:c.popMenuIcons}),r.a.createElement("p",null,"Profile")),r.a.createElement(We.a,{onClick:this.handleMenuClose},r.a.createElement(Qe.a,{className:c.popMenuIcons}),r.a.createElement("p",null,"Settings")),r.a.createElement(We.a,{onClick:function(){e.handleMenuClose(),e.handleLogout()}},r.a.createElement(Xe.a,{className:c.popMenuIcons}),r.a.createElement("p",null,"Logout"))),h=r.a.createElement(He.a,{className:c.mobileMenu,anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:s,onClose:this.handleMenuClose},r.a.createElement(We.a,{onClick:function(){e.handleMobileMenuClose()}},r.a.createElement(U.a,{className:c.popMenuIcons,badgeContent:u,color:"secondary"},r.a.createElement(Ke.a,null)),r.a.createElement("p",null,"Notifications")),r.a.createElement(We.a,{onClick:function(){e.handleMenuClose(),e.goProfile()}},r.a.createElement(qe.a,{className:c.popMenuIcons}),r.a.createElement("p",null,"Profile")),r.a.createElement(We.a,{onClick:this.handleMenuClose},r.a.createElement(Qe.a,{className:c.popMenuIcons}),r.a.createElement("p",null,"Settings")),r.a.createElement(We.a,{onClick:function(){e.handleMenuClose(),e.handleLogout()}},r.a.createElement(Xe.a,{className:c.popMenuIcons}),r.a.createElement("p",null,"Logout")));return r.a.createElement("div",{className:c.root},r.a.createElement("div",{className:c.mainBar,position:"static"},r.a.createElement(Je.a,null,r.a.createElement("a",{className:c.logo,onClick:this.goHome},this.props.props.children),r.a.createElement(ut,null),r.a.createElement("div",{className:c.grow}),r.a.createElement("div",{className:c.sectionDesktop},r.a.createElement(L.a,{color:"inherit",onClick:this.handleNotificationsModalOpen},r.a.createElement(U.a,{badgeContent:u,color:"secondary"},r.a.createElement(Ke.a,null))),r.a.createElement(L.a,{className:c.profileButton,"aria-owns":i?"material-appbar":void 0,"aria-haspopup":"true",onClick:this.handleProfileMenuOpen,color:"inherit"},r.a.createElement(mt,{profileImageLink:"../../imgs/0_GuildSword_Icon.png"}))),r.a.createElement("div",{className:c.sectionMobile},r.a.createElement(L.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},r.a.createElement(et.a,null))))),d,h,m)}}]),t}(r.a.Component);dt.defaultProps={data:[{user:"justiscezager1234",message:"Liked your post"},{user:"justiscezager1234",message:"Commented on your post"},{user:"justiscezager1234",message:"Send you a friend request"},{user:"justiscezager1234",message:"Accepted your friend request"}]};var ht=Object(he.withStyles)(tt)(dt),ft=(n(308),function(e){console.log("props: ",e);var t=localStorage.getItem("token"),n=Object(a.useState)(""),o=Object(P.a)(n,2),c=(o[0],o[1],Object(a.useState)([])),i=Object(P.a)(c,2),s=i[0],p=i[1],m=Object(a.useState)([]),d=Object(P.a)(m,2),h=d[0],f=d[1],g=function(){var e=Object(u.a)(l.a.mark(function e(){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t).then(function(e){return e});case 2:n=e.sent,console.log("fetching friends",n),p(n);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(l.a.mark(function e(){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t,localStorage.getItem("usernameFriend")).then(function(e){return e});case 2:n=e.sent,console.log("fetching posts",n),f(n);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)(function(){null===t&&(alert("Please Login to verify your identity\nYou will now be redirected to the Login page."),v())},[t]),Object(a.useEffect)(function(){console.log("Username: ",localStorage.getItem("usernameFriend")),g(),b()},[]),Object(a.useEffect)(function(){return function(){console.log("Component did unMount")}},[]);var v=function(){var t=Object(u.a)(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.clear(),e.history.push("/");case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"AppHome"},r.a.createElement(ht,{props:e}),r.a.createElement("div",{className:"home_collum1"},s.map(function(t){return r.a.createElement(ge,{id:t.username,name:t.display_name,username:t.username,preview:t.preview,history:e.history})})),r.a.createElement("div",{className:"home_collum2"},r.a.createElement(Fe,{id:"add_post"}),h.map(function(e){return r.a.createElement(Se,{key:e.post_id,id:e.post_id,image_url:e.image_url,time_created:e.time_created,num_likes:e.num_likes,num_comments:e.num_comments,username:localStorage.getItem("usernameFriend"),content:e.content})})))}),gt=function(e){var t=localStorage.getItem("token"),n=Object(a.useState)([]),o=Object(P.a)(n,2),c=o[0],i=o[1],s=function(){var e=Object(u.a)(l.a.mark(function e(){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t,localStorage.getItem("usernameFriend")).then(function(e){return e});case 2:n=e.sent,console.log("fetching posts",n),i(n);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)(function(){null===t&&(alert("Please Login to verify your identity\nYou will now be redirected to the Login page."),p()),s()},[t]);var p=function(){var t=Object(u.a)(l.a.mark(function t(){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.clear(),e.history.push("/");case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement(ht,{props:e}),r.a.createElement("h1",{className:"m-3 text-center"},""===localStorage.getItem("usernameFriend")?localStorage.getItem("username"):localStorage.getItem("usernameFriend"),"'s Profile"),r.a.createElement(Fe,{id:"add_post"}),c.map(function(e){return r.a.createElement(Se,{key:e.post_id,id:e.post_id,image_url:e.image_url,time_created:e.time_created,num_likes:e.num_likes,num_comments:e.num_comments,username:localStorage.getItem("usernameFriend"),content:e.content})}),r.a.createElement(S,Object.assign({path:"/home"},e),"Home"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(314);c.a.render(r.a.createElement(function(){return r.a.createElement(I.a,null,r.a.createElement(A.a,{exact:!0,path:"/",component:M}),r.a.createElement(A.a,{path:"/signUp",component:se}),r.a.createElement(A.a,{path:"/home",component:ft}),r.a.createElement(A.a,{path:"/profile",component:gt}))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},32:function(e,t,n){e.exports=n.p+"static/media/4_Shield_Icon.d12d4b5a.png"},39:function(e,t,n){e.exports=n.p+"static/media/1_Sword_Icon.b2724692.png"},40:function(e,t,n){e.exports=n.p+"static/media/2_BowArrow_Icon.e41b5764.png"},64:function(e,t,n){e.exports=n.p+"static/media/Guild_Logo.c9ac72bc.png"}},[[145,1,2]]]);
//# sourceMappingURL=main.228e35c7.chunk.js.map