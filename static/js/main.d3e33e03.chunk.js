(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,n,t){e.exports=t(35)},35:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(19),l=t.n(o),c=t(2),i=t(5),u=t(22),s=t.n(u),m=t(1),d=t.n(m),p=t(13),b=t.n(p),f=t(15),v=f.a.roundToDecimal;var g=Object(i.a)({playing:!1,index:-1,deviceCount:1,bpm:127,preAmp:new d.a.Volume}),h=t(7),E=t(8),y=t(10),j=t(9),O=t(11),k=t(3),x=t(14),w=t(6),T=t(23);function C(){var e=Object(k.a)(["\n  *,\n  *:before,\n  *:after {\n    font-family: monospace;\n  }\n\n  html {\n    height: 100%;\n    font-size: 10px;\n  }\n\n  body {\n    overflow: hidden;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    font-size: 14px;\n  }\n\n  #root {\n    overflow: hidden;\n    height: 100%;\n  }\n\n  a:link, a:visited, a:hover {\n    color: ",";\n  }\n\n  hr {\n    background-color: none;\n    border-bottom: 1px solid ",";\n  }\n"]);return C=function(){return e},e}var A={color:{primary:"dodgerblue",background:"#222",color:"#eee",inputBackground:"#555",panelBackground:"#333",colors:{red:"red",orange:"orange",yellow:"yellow",green:"green",blue:"blue",purple:"purple",pink:"pink"}}},B=Object(T.a)(A);function S(){var e=Object(k.a)(["\n  align-self: center;\n  min-width: 4rem;\n  padding: 0.5rem 1rem;\n  border: 1px solid ",";\n  border-radius: 2px;\n  color: ",";\n  background-color: ",";\n  font-family: monospace;\n  font-size: 1em;\n  font-weight: bold;\n  cursor: pointer;\n\n  &:hover {\n    background-color: ",";\n  }\n\n  &:not(:last-child) {\n    margin-right: 1rem;\n  }\n"]);return S=function(){return e},e}Object(c.c)(C(),A.color.inputBackground,A.color.panelBackground);var M=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:w.a;return function(t){return B.color(t.kind||e)(n)(t)}},P=c.b.button(S(),M("color"),B.color("color"),M("background",Object(x.a)(.1)),M("background",Object(x.a)(.2))),z=t(24);function D(){var e=Object(k.a)(["\n  width: 6rem;\n  padding: 0.5rem 1rem;\n  border: 2px solid ",";\n  border-radius: 2px;\n  color: ",";\n  background-color: ",";\n  font-family: monospace;\n  font-size: 1em;\n  text-align: center;\n  cursor: ns-resize;\n\n  &::selection {\n    background-color: transparent;\n  }\n\n  &:focus {\n    outline: 0;\n  }\n"]);return D=function(){return e},e}var I=Object(w.c)(A.color.colors);function R(e){return e.color?B.color(e.color)(e):Object(w.b)(e.colorIndex)?B.color("inputBackground")(e):I[e.colorIndex%I.length]}var V=Object(c.b)(function(e){e.color,e.colorIndex;var n=Object(z.a)(e,["color","colorIndex"]);return a.a.createElement(f.a,n)})(D(),R,B.color("color"),R);V.floatProps={min:0,max:1,step:.01,decimals:2};var F=V;function W(){var e=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n\n  label {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 0.5rem;\n    font-size: 0.8em;\n    text-align: center;\n  }\n\n  &:not(:last-child) {\n    margin-right: 0.5rem;\n  }\n"]);return W=function(){return e},e}var q=c.b.div(W());function G(){var e=Object(k.a)(["\n  display: inline-block;\n  width: 1rem;\n  height: 1rem;\n  margin-left: 0.5rem;\n  border-radius: 50%;\n  border: 1px solid ",";\n  background-color: ",";\n  transition: background-color ","ms;\n"]);return G=function(){return e},e}function J(){var e=Object(k.a)(["\n  display: flex;\n  margin-bottom: 1rem;\n"]);return J=function(){return e},e}var L=c.b.div(J()),U=c.b.div(G(),B.color("panelBackground"),function(e){return e.on?B.color("primary")(e):"transparent"},6e4/g.bpm/4),_=function(e){function n(){var e,t;Object(h.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(y.a)(this,(e=Object(j.a)(n)).call.apply(e,[this].concat(a)))).toggleTransport=function(){d.a.Transport.toggle(),g.playing=!g.playing,g.index=-1},t.setBpm=function(e){d.a.Transport.bpm.value=g.bpm=e},t}return Object(O.a)(n,e),Object(E.a)(n,[{key:"componentDidMount",value:function(){d.a.Transport.bpm.value=g.bpm,d.a.Transport.scheduleRepeat(function(e){g.index++,d.a.Transport.emit("bang",e,g.index)},"16n")}},{key:"render",value:function(){return a.a.createElement(L,null,a.a.createElement(P,{onClick:this.toggleTransport},g.playing?"stop":"start"),a.a.createElement(q,null,a.a.createElement("label",null,"BPM ",a.a.createElement(U,{on:g.index%4===0})),a.a.createElement(F,{min:"1",max:"999",step:"1",value:g.bpm,onChange:this.setBpm})))}}]),n}(r.Component),H=Object(i.b)(_),K=t(12);function N(){var e=Object(k.a)(["\n  margin: 1rem;\n  padding: 1rem 2rem 2rem;\n  border-radius: 2px;\n  background-color: ",";\n  transition: background-color 118ms;\n\n  > header {\n    padding-bottom: 1rem;\n    text-align: center;\n  }\n\n  > main {\n    display: flex;\n  }\n"]);return N=function(){return e},e}function Q(){var e=Object(k.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return Q=function(){return e},e}var X=c.b.div(Q()),Y=c.b.div(N(),B.color("panelBackground")),Z=function(e){function n(){var e,t;Object(h.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(y.a)(this,(e=Object(j.a)(n)).call.apply(e,[this].concat(a)))).store=Object(i.a)({reverb:new d.a.Freeverb,delay:new d.a.FeedbackDelay}),t}return Object(O.a)(n,e),Object(E.a)(n,[{key:"componentWillMount",value:function(){this.store.reverb.wet.value=.5,this.store.delay.wet.value=.5,d.a.connectSeries(g.preAmp,this.store.reverb,this.store.delay,d.a.Master)}},{key:"render",value:function(){var e=this;return a.a.createElement(X,null,a.a.createElement(Y,null,a.a.createElement("header",null,"Delay"),a.a.createElement("main",null,a.a.createElement(q,null,a.a.createElement("label",null,"Time"),a.a.createElement(F,Object.assign({},F.floatProps,{value:v(this.store.delay.delayTime.value,2),onChange:function(n){e.store.delay.delayTime.value=n}}))),a.a.createElement(q,null,a.a.createElement("label",null,"Feedback"),a.a.createElement(F,Object.assign({},F.floatProps,{value:v(this.store.delay.feedback.value,2),onChange:function(n){e.store.delay.feedback.value=n}}))),a.a.createElement(q,null,a.a.createElement("label",null,"Mix"),a.a.createElement(F,Object.assign({},F.floatProps,{value:v(this.store.delay.wet.value,2),onChange:function(n){e.store.delay.wet.value=n}}))))),a.a.createElement(Y,null,a.a.createElement("header",null,"Reverb"),a.a.createElement("main",null,a.a.createElement(q,null,a.a.createElement("label",null,"Dampening"),a.a.createElement(F,{value:Object(K.ftom)(this.store.reverb.dampening.value),onChange:function(n){e.store.reverb.dampening.value=Object(K.mtof)(n)}})),a.a.createElement(q,null,a.a.createElement("label",null,"Room Size"),a.a.createElement(F,Object.assign({},F.floatProps,{value:v(this.store.reverb.roomSize.value,2),onChange:function(n){e.store.reverb.roomSize.value=n}}))),a.a.createElement(q,null,a.a.createElement("label",null,"Mix"),a.a.createElement(F,Object.assign({},F.floatProps,{value:v(this.store.reverb.wet.value,2),onChange:function(n){e.store.reverb.wet.value=n}}))))))}}]),n}(r.Component),$=Object(i.b)(Z);function ee(){var e=Object(k.a)(["\n  display: flex;\n  margin: 1rem;\n  padding: 2rem;\n  border-radius: 2px;\n  background-color: ",";\n  transition: background-color 118ms;\n"]);return ee=function(){return e},e}var ne=Object(w.c)(A.color.colors);var te=c.b.div(ee(),function(e){if(e.active&&!Object(w.b)(e.colorIndex)){var n=e.colorIndex%ne.length;return Object(x.b)(ne[n],e.alpha)}return B.color("panelBackground")(e)}),re=function(e){function n(){var e,t;Object(h.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(y.a)(this,(e=Object(j.a)(n)).call.apply(e,[this].concat(a)))).store=Object(i.a)({hasError:!1,oscillator:new d.a.Oscillator,amplitudeEnvelope:new d.a.AmplitudeEnvelope({attack:.001,decay:.01,sustain:.5,release:.5}),volume:new d.a.Volume(-1/0),mod:b()(1,16),pitch:b()(0,127),colorIndex:n.instanceCount}),t.onTransportStart=function(){"stopped"===t.store.oscillator.state&&t.store.oscillator.start()},t.onTransportStop=function(){t.store.oscillator.stop()},t.onBang=function(e,n){t.isActive()&&t.store.amplitudeEnvelope.triggerAttackRelease("16n",e,1)},t}return Object(O.a)(n,e),Object(E.a)(n,[{key:"componentWillMount",value:function(){n.instanceCount++,this.store.oscillator.frequency.value=Object(K.mtof)(this.store.pitch),d.a.connectSeries(this.store.oscillator,this.store.amplitudeEnvelope,this.store.volume,g.preAmp),d.a.Transport.on("start",this.onTransportStart),d.a.Transport.on("stop",this.onTransportStop),d.a.Transport.on("bang",this.onBang)}},{key:"componentDidMount",value:function(){g.playing&&this.onTransportStart()}},{key:"componentWillUnmount",value:function(){this.store.loop&&this.store.loop.stop(),d.a.Transport.off("start",this.onTransportStart),d.a.Transport.off("stop",this.onTransportStop),Object(w.c)(function(e){e instanceof d.a&&e.dispose&&e.dispose()},this.store)}},{key:"isActive",value:function(){return g.index%this.store.mod===0}},{key:"render",value:function(){var e=this;return this.store.hasError?"Error...":a.a.createElement(te,null,a.a.createElement(q,null,a.a.createElement("label",null,"Pitch"),a.a.createElement(F,{value:this.store.pitch,onChange:function(n){e.store.pitch=n,e.store.oscillator.frequency.value=Object(K.mtof)(n)}})),a.a.createElement(q,null,a.a.createElement("label",null,"Mod ",a.a.createElement(U,{on:this.isActive()})),a.a.createElement(F,{min:1,max:16,value:this.store.mod,onChange:function(n){e.store.mod=n}})),this.store.volume&&a.a.createElement(q,null,a.a.createElement("label",null,"Volume"),a.a.createElement(F,Object.assign({},F.floatProps,{value:v(d.a.dbToGain(this.store.volume.volume.value),2),onChange:function(n){e.store.volume.volume.value=d.a.gainToDb(n)}}))))}}]),n}(a.a.Component);re.instanceCount=0;var ae=Object(i.b)(re);function oe(){var e=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n"]);return oe=function(){return e},e}function le(){var e=Object(k.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n\n  &:last-child {\n    margin-bottom: 2rem;\n  }\n"]);return le=function(){return e},e}function ce(){var e=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n\n  > div:not(:last-child) {\n    margin-right: 1rem;\n  }\n"]);return ce=function(){return e},e}function ie(){var e=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 2rem;\n  /* padding: 1rem; */\n\n  > section {\n    display: flex;\n  }\n"]);return ie=function(){return e},e}function ue(){var e=Object(k.a)(["\n  display: grid;\n  grid-template-rows: min-content auto 100px;\n  overflow: auto;\n  height: 100%;\n  padding: 1rem;\n  color: ",";\n  background-color: ",";\n"]);return ue=function(){return e},e}var se=c.b.div(ue(),B.color("color"),B.color("background")),me=c.b.header(ie()),de=c.b.main(ce()),pe=c.b.section(le()),be=c.b.footer(oe());s()(d.a.context);var fe=Object(i.b)(function(){return a.a.createElement(se,{onTouchMove:function(e){return e.preventDefault()}},a.a.createElement(me,null,a.a.createElement("section",null,a.a.createElement(H,null),a.a.createElement(q,null,a.a.createElement("label",null,"Volume"),a.a.createElement(F,Object.assign({},F.floatProps,{style:{marginLeft:"0.5rem"},value:v(d.a.dbToGain(g.preAmp.volume.value),2),onChange:function(e){g.preAmp.volume.value=d.a.gainToDb(e)}})))),a.a.createElement($,null)),a.a.createElement(de,null,a.a.createElement(pe,null,a.a.createElement(P,{onClick:function(){return g.deviceCount--}},"-"),a.a.createElement(P,{onClick:function(){return g.deviceCount++}},"+")),a.a.createElement(pe,null,function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e};return Array(e).fill(null).map(function(e,t){return n(t)})}(g.deviceCount,function(e){return a.a.createElement(ae,{key:e})}))),a.a.createElement(be,null,a.a.createElement("a",{href:"https://github.com/lokua/modulope.git",alt:"source code",target:"_blank",rel:"noopener noreferrer"},"https://github.com/lokua/modulope.git")))});l.a.render(a.a.createElement(c.a,{theme:A},a.a.createElement(fe,null)),document.getElementById("root"))}},[[25,2,1]]]);
//# sourceMappingURL=main.d3e33e03.chunk.js.map