(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"23aj":function(e,t,r){"use strict";r.r(t);var n=r("YIwv"),i=r.n(n),s=r("mXGw"),o=r.n(s),u=r("9fEB"),c=r.n(u),a=o.a.createElement;t.default=function(){return a(o.a.Fragment,null,a(c.a,null,a("title",{key:"title",className:"jsx-2601783913"},"fabricjs-psbrush | A lightweight pressure-sensitive brush implementation for Fabric.js")),a(i.a,{id:"2601783913"},["div.jsx-2601783913 canvas{border:1px solid #ccc;}"]),a("p",{className:"jsx-2601783913"},"We're working on documentations -- stay tuned!"),a("div",{dangerouslySetInnerHTML:{__html:'<canvas id="c" width="720" height="480" />'},className:"jsx-2601783913"}),a("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/fabric.js/3.6.2/fabric.min.js",className:"jsx-2601783913"}),a("script",{src:"https://cdn.jsdelivr.net/npm/@arch-inc/fabricjs-psbrush@0.0.12/dist/index.js",className:"jsx-2601783913"}),a("script",{src:"".concat("/fabricjs-psbrush","/index.js"),className:"jsx-2601783913"}))}},"2agv":function(e,t,r){"use strict";var n=r("8Xl/"),i=r("/6KZ"),s=r("dCrc"),o=r("oICS"),u=r("Ng5M"),c=r("gou2"),a=r("ErhN"),l=r("VJcA");i(i.S+i.F*!r("Clx3")((function(e){Array.from(e)})),"Array",{from:function(e){var t,r,i,h,d=s(e),f="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,m=void 0!==v,_=0,y=l(d);if(m&&(v=n(v,p>2?arguments[2]:void 0,2)),void 0==y||f==Array&&u(y))for(r=new f(t=c(d.length));t>_;_++)a(r,_,m?v(d[_],_):d[_]);else for(h=y.call(d),r=new f;!(i=h.next()).done;_++)a(r,_,m?o(h,v,[i.value,_],!0):i.value);return r.length=_,r}})},"4hjl":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"5IsQ":function(e,t){var r,n,i=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function u(e){if(r===setTimeout)return setTimeout(e,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:s}catch(e){r=s}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var c,a=[],l=!1,h=-1;function d(){l&&c&&(l=!1,c.length?a=c.concat(a):h=-1,a.length&&f())}function f(){if(!l){var e=u(d);l=!0;for(var t=a.length;t;){for(c=a,a=[];++h<t;)c&&c[h].run();h=-1,t=a.length}c=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];a.push(new p(e,t)),1!==a.length||l||u(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"8ET1":function(e,t,r){e.exports=r("Vlwe")},"8qpp":function(e,t,r){var n=r("s20r");e.exports=function(e){if(n(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},"9fEB":function(e,t,r){"use strict";var n=r("OAWj"),i=r("hHgk"),s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};i(t,"__esModule",{value:!0});var o=s(r("mXGw")),u=s(r("GlZI")),c=r("9rrO"),a=r("bxxT"),l=r("vI6Y");function h(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=h;var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var r=o.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(d,[]).reverse().concat(h(t.inAmpMode)).filter(function(){var e=new n,t=new n,r=new n,i={};return function(s){var o=!0;if(s.key&&"number"!==typeof s.key&&s.key.indexOf("$")>0){var u=s.key.slice(s.key.indexOf("$")+1);e.has(u)?o=!1:e.add(u)}switch(s.type){case"title":case"base":t.has(s.type)?o=!1:t.add(s.type);break;case"meta":for(var c=0,a=f.length;c<a;c++){var l=f[c];if(s.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?o=!1:r.add(l);else{var h=s.props[l],d=i[l]||new n;d.has(h)?o=!1:(d.add(h),i[l]=d)}}}return o}}()).reverse().map((function(e,t){var r=e.key||t;return o.default.cloneElement(e,{key:r})}))}var v=u.default();function m(e){var t=e.children;return o.default.createElement(c.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(a.HeadManagerContext.Consumer,null,(function(r){return o.default.createElement(v,{reduceComponentsToState:p,handleStateChange:r,inAmpMode:l.isInAmpMode(e)},t)}))}))}m.rewind=v.rewind,t.default=m},"9rrO":function(e,t,r){"use strict";var n=r("hHgk"),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};n(t,"__esModule",{value:!0});var s=i(r("mXGw"));t.AmpStateContext=s.createContext({})},BGbK:function(e,t,r){var n=r("/1nD"),i=r("lyqB");e.exports=function(e){return function(){if(n(this)!=e)throw TypeError(e+"#toJSON isn't generic");return i(this)}}},ErhN:function(e,t,r){"use strict";var n=r("eOWL"),i=r("zJT+");e.exports=function(e,t,r){t in e?n.f(e,t,i(0,r)):e[t]=r}},GlZI:function(e,t,r){"use strict";var n=r("KBEF"),i=r("3esu"),s=r("8m4E"),o=r("oS/Z"),u=r("J/q3"),c=r("Od8a"),a=r("fvvH"),l=r("OAWj");r("hHgk")(t,"__esModule",{value:!0});var h=r("mXGw"),d=!1;t.default=function(){var e,t=new l;function r(r){e=r.props.reduceComponentsToState(a(t),r.props),r.props.handleStateChange&&r.props.handleStateChange(e)}return function(a){function l(e){var u;return n(this,l),u=i(this,s(l).call(this,e)),d&&(t.add(o(u)),r(o(u))),u}return c(l,a),u(l,null,[{key:"rewind",value:function(){var r=e;return e=void 0,t.clear(),r}}]),u(l,[{key:"componentDidMount",value:function(){t.add(this),r(this)}},{key:"componentDidUpdate",value:function(){r(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),r(this)}},{key:"render",value:function(){return null}}]),l}(h.Component)}},HrG8:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,r=t.name,s=void 0===r?"stylesheet":r,u=t.optimizeForSpeed,c=void 0===u?n:u,a=t.isBrowser,l=void 0===a?"undefined"!==typeof window:a;o(i(s),"`name` must be a string"),this._name=s,this._deletedRulePlaceholder="#"+s+"-deleted-rule____{}",o("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var h=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=h?h.getAttribute("content"):null}var t,s,u,c=e.prototype;return c.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"===typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(o(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!==typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(u){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var s=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,s))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(s){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];o(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,r){t&&o(i(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return r?s.insertBefore(n,r):s.appendChild(n),n},t=e,(s=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,s),u&&r(t,u),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=s}).call(this,r("5IsQ"))},"IXD+":function(e,t,r){"use strict";var n=r("Yvct"),i=r("O/tV");e.exports=r("VX2v")("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return n.def(i(this,"Set"),e=0===e?0:e,e)}},n)},OAWj:function(e,t,r){e.exports=r("bdJ0")},Vlwe:function(e,t,r){r("WwSA"),r("2agv"),e.exports=r("TaGV").Array.from},WjHl:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("23aj")}])},XZM3:function(e,t,r){r("pFlO")("Set")},YIwv:function(e,t,r){e.exports=r("s1G/")},Yvct:function(e,t,r){"use strict";var n=r("eOWL").f,i=r("G+Zn"),s=r("IUx0"),o=r("8Xl/"),u=r("LuVv"),c=r("s9UB"),a=r("gMWQ"),l=r("TTxG"),h=r("hXZv"),d=r("lBnu"),f=r("hYpR").fastKey,p=r("O/tV"),v=d?"_s":"size",m=function(e,t){var r,n=f(t);if("F"!==n)return e._i[n];for(r=e._f;r;r=r.n)if(r.k==t)return r};e.exports={getConstructor:function(e,t,r,a){var l=e((function(e,n){u(e,l,t,"_i"),e._t=t,e._i=i(null),e._f=void 0,e._l=void 0,e[v]=0,void 0!=n&&c(n,r,e[a],e)}));return s(l.prototype,{clear:function(){for(var e=p(this,t),r=e._i,n=e._f;n;n=n.n)n.r=!0,n.p&&(n.p=n.p.n=void 0),delete r[n.i];e._f=e._l=void 0,e[v]=0},delete:function(e){var r=p(this,t),n=m(r,e);if(n){var i=n.n,s=n.p;delete r._i[n.i],n.r=!0,s&&(s.n=i),i&&(i.p=s),r._f==n&&(r._f=i),r._l==n&&(r._l=s),r[v]--}return!!n},forEach:function(e){p(this,t);for(var r,n=o(e,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(n(r.v,r.k,this);r&&r.r;)r=r.p},has:function(e){return!!m(p(this,t),e)}}),d&&n(l.prototype,"size",{get:function(){return p(this,t)[v]}}),l},def:function(e,t,r){var n,i,s=m(e,t);return s?s.v=r:(e._l=s={i:i=f(t,!0),k:t,v:r,p:n=e._l,n:void 0,r:!1},e._f||(e._f=s),n&&(n.n=s),e[v]++,"F"!==i&&(e._i[i]=s)),e},getEntry:m,setStrong:function(e,t,r){a(e,t,(function(e,r){this._t=p(e,t),this._k=r,this._l=void 0}),(function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?l(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,l(1))}),r?"entries":"values",!r,!0),h(t)}}},bdJ0:function(e,t,r){r("iKhv"),r("WwSA"),r("k/kI"),r("IXD+"),r("mVXz"),r("XZM3"),r("mPQl"),e.exports=r("TaGV").Set},fvvH:function(e,t,r){var n=r("8qpp"),i=r("itsi"),s=r("4hjl");e.exports=function(e){return n(e)||i(e)||s()}},itsi:function(e,t,r){var n=r("8ET1"),i=r("7X5e");e.exports=function(e){if(i(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return n(e)}},lyqB:function(e,t,r){var n=r("s9UB");e.exports=function(e,t){var r=[];return n(e,!1,r.push,r,t),r}},mPQl:function(e,t,r){r("+9rI")("Set")},mVXz:function(e,t,r){var n=r("/6KZ");n(n.P+n.R,"Set",{toJSON:r("BGbK")("Set")})},"s1G/":function(e,t,r){"use strict";t.__esModule=!0,t.flush=function(){var e=s.cssRules();return s.flush(),e},t.default=void 0;var n,i=r("mXGw");var s=new(((n=r("uVoP"))&&n.__esModule?n:{default:n}).default),o=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return s.computeId(t,r)})).join(" ")};var i=n.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){s.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&s.remove(this.prevProps),s.add(this.props),this.prevProps=this.props),null},n}(i.Component);t.default=o},uVoP:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=s(r("zcKR")),i=s(r("HrG8"));function s(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,s=t.optimizeForSpeed,o=void 0!==s&&s,u=t.isBrowser,c=void 0===u?"undefined"!==typeof window:u;this._sheet=n||new i.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),n&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,i=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var s=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=s,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var i=String(r),s=t+i;return e[s]||(e[s]="jsx-"+(0,n.default)(t+"-"+i)),e[s]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var i=r+n;return t[i]||(t[i]=n.replace(e,r)),t[i]}},t.getIdAndRules=function(e){var t=this,r=e.children,n=e.dynamic,i=e.id;if(n){var s=this.computeId(i,n);return{styleId:s,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(s,e)})):[this.computeSelector(s,r)]}}return{styleId:this.computeId(i),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},vI6Y:function(e,t,r){"use strict";var n=r("hHgk"),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};n(t,"__esModule",{value:!0});var s=i(r("mXGw")),o=r("9rrO");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,i=void 0!==n&&n,s=e.hasQuery;return r||i&&(void 0!==s&&s)}t.isInAmpMode=u,t.useAmp=function(){return u(s.default.useContext(o.AmpStateContext))}},zcKR:function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}}},[["WjHl",1,2,0]]]);