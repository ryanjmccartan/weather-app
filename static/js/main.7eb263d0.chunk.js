(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{52:function(e,t,a){e.exports=a(82)},57:function(e,t,a){},58:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),i=(a(57),a(16)),l=a(12),s=a(22),u=a(23),h=a(24),m=(a(58),a(11)),d=a(31),f=a.n(d),p=a(32),g=a.n(p),E=(a(77),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"forecast-container"},this.props.forecast.map((function(e){return r.a.createElement("div",{key:e.date},r.a.createElement("div",{className:"weather-forecast"},g()(e.date).format("ddd"),r.a.createElement("br",null),g()(e.date).format("MM/DD"),r.a.createElement("img",{src:e.day.condition.icon,alt:"weather icon"}),r.a.createElement("br",null),r.a.createElement("div",{className:"temp"},"High:",r.a.createElement("br",null),e.day.maxtemp_f,r.a.createElement("br",null),"Low:",r.a.createElement("br",null),e.day.mintemp_f)))})))}}]),t}(n.Component)),y=a(112),b=a(113),w=(a(78),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={input:"",weather:{location:{name:"",region:""},current:{temp_f:0,feelslike_f:0,gust_mph:0},condition_current:{condition_icon:""}},forecast:{day_array:[]}},a.getCurrentWeather=function(e){var t=a.state.input;f.a.get("/weather/current/".concat(t)).then((function(e){console.log("getting current weather",e.data),a.setState({input:"",weather:{location:{name:e.data.location.name,region:e.data.location.region},current:{temp_f:e.data.current.temp_f,feelslike_f:e.data.current.feelslike_f,gust_mph:e.data.current.gust_mph},condition_current:{condition_icon:e.data.current.condition.icon}}})})).catch((function(e){console.log("error getting current weather",e)}))},a.getWeatherForecast=function(){if(""===a.state.input)alert("Please enter the name of a city");else{var e=a.state.input;f.a.get("/weather/forecast/".concat(e)).then((function(e){console.log("getting weather forecast",e.data),a.setState({forecast:{day_array:[],astro_array:[]}}),e.data.forEach((function(e){a.setState({forecast:{day_array:[].concat(Object(m.a)(a.state.forecast.day_array),[e])}})})),a.getCurrentWeather(),console.log("in forecast state day",a.state.forecast.day_array)})).catch((function(e){console.log("error getting weather forecast",e)}))}},a.handleChange=function(e){a.setState({input:e.target.value})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=0;return this.state.forecast.day_array.map((function(e){return t+=e.day.totalprecip_in})),r.a.createElement("div",null,r.a.createElement("div",{className:"location-input"},r.a.createElement(y.a,{margin:"dense",label:"Enter location",type:"text",value:this.state.input,placeholder:"city name or zip code",onChange:function(t){return e.handleChange(t)}}),r.a.createElement(b.a,{id:"srch-btn",color:"default",variant:"contained",onClick:this.getWeatherForecast},"Search")),0!==this.state.forecast.day_array.length?r.a.createElement("div",{className:"showing-weather"},r.a.createElement("div",{className:"current-weather-container"},r.a.createElement("h3",null,this.state.weather.location.name,", ",this.state.weather.location.region),r.a.createElement("img",{src:this.state.weather.condition_current.condition_icon,alt:"weather icon"}),r.a.createElement("p",null,"Current Temperature:",r.a.createElement("br",null),this.state.weather.current.temp_f),"Feels like: ",this.state.weather.current.feelslike_f),r.a.createElement(E,{forecast:this.state.forecast.day_array}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)):r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",null,"Enter a city to check the weather!"),r.a.createElement("br",null),r.a.createElement("br",null)))}}]),t}(n.Component)),_=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.7eb263d0.chunk.js.map