(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,t,n){e.exports=n(71)},28:function(e,t,n){},29:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(20),o=n.n(r),c=(n(28),n(3)),i=n(4),l=n(7),u=n(6),h=(n(29),n(21)),m=n.n(h),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).newSearcher=function(e){a.setState({searchInput:e.target.value})},a.state={searchInput:""},a}return Object(i.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement("input",{className:"input",onChange:this.newSearcher,type:"text",placeholder:"Search",name:"searchInput",id:"searchInput"}),s.a.createElement("button",{className:"button",onClick:this.props.getVenues.bind(null,this.state.searchInput)},"Search"))}}]),n}(a.Component),p=n(5),d=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getLocation=function(){navigator.geolocation.getCurrentPosition((function(e){a.setState({latlong:e.coords.latitude+","+e.coords.longitude})}))},a.getVenues=function(e){var t={client_id:"CS1DCR3PAJITL25EF3FJHAZB5LE1OD5PADOGFYUF5IQM0XO0",client_secret:"VRLSN051WJVNKM1K1RR0T5RKZQO52MFLLRCXPLMFLKHYTLU5",ll:a.state.latlong,query:e,v:"20190411",limit:"10",sortByDistance:"1"};Object(p.trackPromise)(m.a.get("https://api.foursquare.com/v2/venues/explore?"+new URLSearchParams(t)).then((function(e){a.setState({showInitialMessage:!1,venues:e.data.response.groups[0].items})})))},a.state={showInitialMessage:!1,latlong:"",venues:[]},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.setState({showInitialMessage:!0}),this.getLocation()}},{key:"render",value:function(){var e=this.state.showInitialMessage?s.a.createElement("h2",{className:"beforeResultsText"},"You can find results here..."):this.getVenues;return s.a.createElement("div",null,s.a.createElement(v,{getVenues:this.getVenues}),s.a.createElement("h1",null,e),s.a.createElement("ul",{className:"list"},this.state.venues.map((function(e){return s.a.createElement("li",{key:e.venue.name},e.venue.name," Address: ",e.venue.location.address," ","Distance: ",e.venue.location.distance," meter Category:"," ",e.venue.categories[0].name)}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=n(22),f=n.n(g),E=function(e){return Object(p.usePromiseTracker)().promiseInProgress&&s.a.createElement("div",{className:"threeDots"},s.a.createElement(f.a,{type:"ThreeDots",color:"#2BAD60"}))};o.a.render(s.a.createElement("div",null,s.a.createElement("h1",{className:"title"},"Find Your Service Place"),s.a.createElement(d,null),s.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.7acccb02.chunk.js.map