(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),i=a.n(c),o=(a(87),a(18)),l=a(33),s=a(15),u=a(16),m=a(24),p=a(22),h=a(25),d=a(6),g=a(124),b=a(126),f=a(127),E=a(128),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={bankID:""},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.bank_id;this.setState({bankID:e})}},{key:"render",value:function(){var e=this,t=JSON.parse(localStorage.getItem("bankLocalData")).filter(function(t){return t.bank_id===Number(e.state.bankID)}).slice(0,1),a=this.props.classes,n=t.map(function(e){return r.a.createElement("div",{className:a.cardContainer,key:e.bank_id+"p"},r.a.createElement(g.a,{className:a.card},r.a.createElement(b.a,{className:a.media,image:"/Images/bank2.jpeg",title:e.bank_name}),r.a.createElement(f.a,null,r.a.createElement(E.a,{variant:"h5",component:"h2",className:a.bottomDetails},"Bank Name : ",e.bank_name),r.a.createElement(E.a,{variant:"h5",component:"h2",className:a.bottomDetails},"Location : ",e.city+" ,"+e.state),r.a.createElement("hr",null),r.a.createElement(E.a,{variant:"h5",component:"h2",className:a.bottomDetails},"IFSC : ",e.ifsc),r.a.createElement(E.a,{variant:"h5",component:"h2",className:a.bottomDetails},"Branch : ",e.branch),r.a.createElement(E.a,{variant:"h5",component:"h2",className:a.bottomDetails},"Address : ",e.address))))});return r.a.createElement(r.a.Fragment,null,n)}}]),t}(n.Component),k=Object(d.a)(function(e){return{card:{boxShadow:"12px 15px 20px rgba(0, 0, 0, 0.1)","&:hover":{boxShadow:"12px 15px 20px rgba(0, 0, 0, 0.1)",transition:"0.2s box-shadow ease-in-out, 0.2s background-color ease-in-out, 0.2s border-color ease-in-out"}},media:{height:0,paddingTop:"56.25%"},cardContainer:{marginLeft:"auto",marginRight:"auto",width:"70%",marginBottom:50,marginTop:50},bottomDetails:{margin:"5px 0 5px 0"},title:{fontSize:"5em"}}})(v),y=a(13),j=a(49),O=a(38),x=a.n(O),C=a(45),w="home.LOADING",P="home.LOADED",S=new(function(){function e(){Object(s.a)(this,e)}return Object(u.a)(e,[{key:"getBankDetails",value:function(){var e=Object(C.a)(x.a.mark(function e(t){var a,n,r;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.toUpperCase(),e.prev=1,e.next=4,fetch("".concat("https://vast-shore-74260.herokuapp.com","/banks?city=").concat(a));case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,e.abrupt("return",r);case 11:return e.prev=11,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",[]);case 15:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t){return e.apply(this,arguments)}}()}]),e}());function N(e){return function(){var t=Object(C.a)(x.a.mark(function t(a,n){var r;return x.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:w}),t.prev=1,t.next=4,S.getBankDetails(e);case 4:r=t.sent,a({type:P,bank:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}},t,null,[[1,8]])}));return function(e,a){return t.apply(this,arguments)}}()}var I=a(58),z=a(67),D=a.n(z)()({loading:!0,bank:[]});var _=a(72),T=a.n(_),B=a(52),H=a(75),L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handlePageSizeChange=function(e){a.setState({pageSize:e.target.value})},a.state={pager:{}},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.props.items&&this.props.items.length&&this.setPage(this.props.initialPage)}},{key:"componentDidUpdate",value:function(e,t){this.props.items!==e.items&&this.setPage(this.props.initialPage)}},{key:"setPage",value:function(e){var t=this.props,a=t.items,n=t.pageSize,r=this.state.pager;if(!(e<1||e>r.totalPages)){r=this.getPager(a.length,e,n);var c=a.slice(r.startIndex,r.endIndex+1);this.setState({pager:r}),this.props.onChangePage(c)}}},{key:"getPager",value:function(e,t,a){t=t||1,a=a||10;var n,r,c=Math.ceil(e/a);c<=10?(n=1,r=c):t<=6?(n=1,r=10):t+4>=c?(n=c-9,r=c):(n=t-5,r=t+4);var i=(t-1)*a,o=Math.min(i+a-1,e-1),l=Object(H.a)(Array(r+1-n).keys()).map(function(e){return n+e});return{totalItems:e,currentPage:t,pageSize:a,totalPages:c,startPage:n,endPage:r,startIndex:i,endIndex:o,pages:l}}},{key:"render",value:function(){var e=this,t=this.props.pageSize;console.log(t);var a=this.state.pager;return!a.pages||a.pages.length<=1?null:r.a.createElement("div",null,r.a.createElement("ul",{className:"pagination"},r.a.createElement("li",{className:1===a.currentPage?"disabled":""},r.a.createElement("a",{onClick:function(){return e.setPage(1)}},"First")),r.a.createElement("li",{className:1===a.currentPage?"disabled":""},r.a.createElement("a",{onClick:function(){return e.setPage(a.currentPage-1)}},"Previous")),a.pages.map(function(t,n){return r.a.createElement("li",{key:n,className:a.currentPage===t?"active":""},r.a.createElement("a",{onClick:function(){return e.setPage(t)}},t))}),r.a.createElement("li",{className:a.currentPage===a.totalPages?"disabled":""},r.a.createElement("a",{onClick:function(){return e.setPage(a.currentPage+1)}},"Next")),r.a.createElement("li",{className:a.currentPage===a.totalPages?"disabled":""},r.a.createElement("a",{onClick:function(){return e.setPage(a.totalPages)}},"Last"))))}}]),t}(r.a.Component);L.defaultProps={initialPage:1,pageSize:10};var W=L,F=function(){return"/"},A=function(e){return"bank/".concat(e)},q=function(){function e(t,a){Object(s.a)(this,e),this.searchFunction=t,this.resultsHandler=a,this.query="",this.queryCount=0,this.cache={},this.cacheHits=0,this.cacheHitsHistory=[]}return Object(u.a)(e,[{key:"changeQuery",value:function(e){var t=this;e.length<3?this.resultsHandler([]):this.cache[e]?(this.cacheHits=this.cacheHits+1,this.queryCount=this.queryCount+1,this.cacheHitsHistory.concat(e),console.log("retrieved query from cache:",e),this.resultsHandler(this.cache[e])):this.searchFunction(e).then(function(a){t.cache[e]=a,t.queryCount=t.queryCount+1,console.log("query added to cache:",e),t.resultsHandler(a)})}}]),e}(),R=a(129),G=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.props.loadText?this.props.loadText:"Please Wait Its Loading....";return r.a.createElement("div",{className:e.loadingContainer},r.a.createElement("div",{className:e.centered},r.a.createElement(R.a,{color:"secondary"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"h5",component:"h4"},t)))}}]),t}(r.a.Component),M=Object(d.a)(function(e){var t;return{loadingContainer:(t={position:"fixed",width:"100%",top:"50px",paddingTop:"50%",height:"100%",backgroundColor:"#fff",zIndex:"1000"},Object(y.a)(t,e.breakpoints.down("sm"),{paddingTop:"50%"}),Object(y.a)(t,e.breakpoints.up("lg"),{paddingTop:"20%"}),Object(y.a)(t,e.breakpoints.only("lg"),{position:"fixed",width:"100%",top:"50px",paddingTop:"50%",height:"100%",backgroundColor:"#fff",zIndex:"1000",left:"0px"}),Object(y.a)(t,e.breakpoints.between("sm","md"),{paddingTop:"40%",zIndex:"1000"}),Object(y.a)(t,e.breakpoints.up("md"),{paddingTop:"25%"}),t),centered:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",textAlign:"center"}}})(G),J=a(130),Q=a(131),U=a(135),K=a(134),$=a(137),V=a(136),X=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).onChangePage=function(t){e.setState({pageOfItems:t})},e.handleChange=function(t){e.props.dispatch(N(t.target.value)),e.setState({cityName:t.target.value,loadText:"Please wait loading Bank's details from "+t.target.value})},e.handleQueryChange=function(t){e.setState({query:t}),e.CachedSearch.changeQuery(t)},e.handleResults=function(t){e.setState({pageOfItems:t})},e.handlePageSizeChange=function(t){e.setState({pageSize:t.target.value})},e.state={pageOfItems:[],cityName:"Bangalore",query:"",results:[],pageSize:10,labelWidth:0,loadText:"Please Wait Its Loading...."},e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(N("bangalore"))}},{key:"render",value:function(){var e=this,t=this.props,a=t.bank,n=t.classes,c=t.loading;return this.CachedSearch=new q(function(e){return new Promise(function(t,n){var r=new RegExp("^".concat(e),"i");console.log(a),t(a.filter(function(e){return r.test(e.ifsc)||r.test(e.bank_name)||r.test(e.bank_id)||r.test(e.branch)||r.test(e.address)||r.test(e.city)||r.test(e.state)}))})},this.handleResults),localStorage.setItem("bankLocalData",JSON.stringify(a)),c?r.a.createElement(M,{loadText:this.state.loadText}):r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("div",{className:["container"].join(" ")},r.a.createElement(J.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(J.a,{item:!0},r.a.createElement(Q.a,{variant:"outlined",className:n.formControl},r.a.createElement(U.a,{ref:function(t){e.InputLabelRef=t},htmlFor:"explore-city"}),r.a.createElement(K.a,{native:!0,value:this.state.cityName,onChange:this.handleChange,style:{height:"30px",fontSize:"14px"},input:r.a.createElement($.a,{name:"city",labelWidth:this.state.labelWidth,id:"explore-city"})},["Bangalore","Mysore","Mumbai","Delhi","Patna"].map(function(e){return r.a.createElement("option",{key:e+"i",value:e,className:n.selectPaddingOpt},e)})))),r.a.createElement(J.a,{item:!0},r.a.createElement("div",{className:n.search},r.a.createElement("div",{className:n.searchIcon},r.a.createElement(T.a,null)),r.a.createElement(V.a,{placeholder:"Search\u2026",onChange:function(t){var a=t.target.value;return e.handleQueryChange(a)},classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"Search"}}))))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:["container"].join(" ")},r.a.createElement("div",{className:["text-left"].join(" ")},r.a.createElement("table",{className:["table table-dark table-responsive"].join(" ")},r.a.createElement("thead",{className:["thead-dark",n.tbleHeader].join(" ")},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"IFSC"),r.a.createElement("th",{scope:"col"},"Branch Name"),r.a.createElement("th",{scope:"col"},"ID"),r.a.createElement("th",{scope:"col"},"Branch"),r.a.createElement("th",{scope:"col"},"Address"),r.a.createElement("th",{scope:"col"},"District"),r.a.createElement("th",{scope:"col"},"State"))),this.state.pageOfItems.map(function(e){return r.a.createElement("tbody",{key:"i"+e.ifsc},r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(o.b,{to:A(e.bank_id)},e.ifsc)),r.a.createElement("td",null,r.a.createElement(o.b,{to:A(e.bank_id)},e.bank_name)),r.a.createElement("td",null,r.a.createElement(o.b,{to:A(e.bank_id)},e.bank_id)),r.a.createElement("td",null,r.a.createElement(o.b,{to:A(e.bank_id)},e.branch)),r.a.createElement("td",null,r.a.createElement(o.b,{to:A(e.bank_id)},e.address)),r.a.createElement("td",null,r.a.createElement(o.b,{to:A(e.bank_id)},e.district)),r.a.createElement("td",null,r.a.createElement(o.b,{to:A(e.bank_id)},e.state))))})),r.a.createElement(J.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(J.a,{item:!0},r.a.createElement(W,{items:a,onChangePage:this.onChangePage,pageSize:Number(this.state.pageSize)})),r.a.createElement(J.a,{item:!0},r.a.createElement(Q.a,{variant:"outlined",className:n.formControl},r.a.createElement(U.a,{ref:function(t){e.InputPageSizeRef=t},htmlFor:"pageDataSize"}),r.a.createElement(K.a,{native:!0,value:this.state.pageSize,onChange:this.handlePageSizeChange,style:{height:"30px"},input:r.a.createElement($.a,{name:"pageSize",labelWidth:this.state.labelWidth,id:"pageDataSize"})},[10,50,100,200,500].map(function(e){return r.a.createElement("option",{key:e+"i",value:e,className:n.selectPaddingOpt},e)}))))))),r.a.createElement("br",null),r.a.createElement("br",null))}}]),t}(n.Component);var Y=Object(j.b)(function(e){return function(e,t){return e.home}(e)})(Object(d.a)(function(e){return{root:{flexGrow:1},title:Object(y.a)({flexGrow:1,display:"none",marginLeft:35},e.breakpoints.up("sm"),{display:"block"}),search:Object(y.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(B.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(B.fade)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),fontSize:"14px",height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(y.a)({padding:e.spacing(7),transition:e.transitions.create("width"),width:"100%",fontSize:"14px"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200,"&::placeholder":{color:"#ec407a",opacity:1,fontSize:"14px"}}}),paginationContainer:{margin:"50px 20px 10px 25px"},formControl:{margin:e.spacing(3),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},selectPaddingOpt:{margin:"10px",fontSize:"14px",color:"#ec407a"},tbleHeader:{backgroundColor:Object(B.fade)("#ec407a",.75),color:"white"}}})(X)),Z=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.match;return r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"".concat(e.path,"home"),component:Y}),r.a.createElement(l.a,{path:"".concat(e.path,"bank/:bank_id"),component:k}))}}]),t}(r.a.Component),ee=a(132),te=a(133),ae=Object(d.a)(function(e){return{root:{flexGrow:1},title:Object(y.a)({flexGrow:1,fontSize:"1.2em",display:"none",color:"white"},e.breakpoints.up("sm"),{display:"block"}),AppContainer:{background:"#3379b7"}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(ee.a,{position:"static",className:t.AppContainer},r.a.createElement(te.a,null,r.a.createElement(o.b,{to:F(),style:{textDecoration:"none"}},r.a.createElement(E.a,{className:t.title,variant:"h6",noWrap:!0},"Front End Coding Challenge")))))}),ne=Object(d.a)(function(e){return{root:{flexGrow:1},title:Object(y.a)({flexGrow:1,textAlign:"center",color:"white",fontSize:"1.2em",display:"none"},e.breakpoints.up("sm"),{display:"block"}),FootContainer:{background:"#3379b7"}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(ee.a,{position:"static",className:t.FootContainer},r.a.createElement(te.a,null,r.a.createElement(E.a,{className:t.title,variant:"h6",noWrap:!0},"Developed By Anit Kumar ",r.a.createElement("span",{role:"img","aria-label":"happy mode"},"\ud83d\ude04")))))}),re=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{component:ae}),r.a.createElement(l.c,null,r.a.createElement(l.a,{component:Z})),r.a.createElement(l.a,{component:ne}))},ce=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{component:re}))},ie=a(32),oe=a(74),le=Object(ie.c)({home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case w:return Object(I.a)({},e,{loading:!0});case P:return Object(I.a)({},e,{loading:!1,bank:t.bank});default:return e}}}),se=[oe.a];var ue=Object(ie.d)(ie.a.apply(void 0,se))(ie.e)(le);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(j.a,{store:ue},r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},82:function(e,t,a){e.exports=a(103)},87:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.e5678eb7.chunk.js.map