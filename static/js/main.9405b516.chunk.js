(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(2),r=n(3),i=n(5),l=n(4),s=n(1),u=n.n(s),m=(n(12),n(0)),d=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={currentTime:new Date},e.dateTimerId=null,e.startDateTimer=function(){return window.setInterval((function(){return e.setState({currentTime:new Date})}),1e3)},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.dateTimerId=this.startDateTimer()}},{key:"componentDidUpdate",value:function(e,t){e.clockName!==this.props.clockName&&console.debug("Renamed from ".concat(e.clockName," to ").concat(this.props.clockName)),t.currentTime!==this.state.currentTime&&console.info(this.getUtcDate())}},{key:"componentWillUnmount",value:function(){this.dateTimerId&&window.clearInterval(this.dateTimerId)}},{key:"getUtcDate",value:function(){return this.state.currentTime.toUTCString().slice(-12,-4)}},{key:"render",value:function(){var e=this.props.clockName;return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:e})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:this.getUtcDate()})]})}}]),n}(u.a.Component);function h(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var k=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={clockName:"Clock-0",hasClock:!0},e.clockTimerId=null,e.handleClick=function(){e.setState({hasClock:!0})},e.handleContextMenu=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.startClockTimer=function(){return window.setInterval((function(){e.setState({clockName:h()})}),3300)},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.clockTimerId=this.startClockTimer(),document.addEventListener("contextmenu",this.handleContextMenu),document.addEventListener("click",this.handleClick)}},{key:"componentWillUnmount",value:function(){this.clockTimerId&&window.clearInterval(this.clockTimerId)}},{key:"render",value:function(){var e=this.state,t=e.clockName,n=e.hasClock;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),n&&Object(m.jsx)(d,{clockName:t})]})}}]),n}(u.a.Component);a.a.render(Object(m.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9405b516.chunk.js.map