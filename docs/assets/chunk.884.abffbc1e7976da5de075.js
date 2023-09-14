(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[884],{305:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>h,initialize:()=>u})
var n=r(292),i=r.n(n),o=r(206),a=r(193),s=r.n(a)
function u(){}r(574),r(353),r(219),r(652),r(872),r(398),r(67),s().reopen({buildRegistry(){let e=this._super(...arguments)
return this instanceof i()||e.register("service:router",o.default),e}})
var h={name:"ember-engines-router-service",initialize:u}},206:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>T})
var n=r(574),i=r.n(n),o=r(353),a=r(219),s=r(652),u=r(292),h=r(872),c=r.n(h)
function l(e,t){return"application"===t?e:`${e}.${t}`}var p,f,g,m,E,b,d=r(398)
function y(e){return"string"==typeof e&&(""===e||"/"===e[0])}function v(e,t,r,n){r&&Object.defineProperty(e,t,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})}function A(e,t,r,n,i){var o={}
return Object.keys(n).forEach((function(e){o[e]=n[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce((function(r,n){return n(e,t,r)||r}),o),i&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(i):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}r(67)
let T=(p=(0,s.reads)("externalRouter.rootURL"),f=(0,s.reads)("externalRouter.currentURL"),g=(0,a.computed)("_mountPoint.length","externalRouter.currentRouteName"),A((m=class extends(i().extend(c())){constructor(){super(...arguments),v(this,"rootURL",E,this),v(this,"currentURL",b,this),this._externalRoutes=(0,u.getOwner)(this)._externalRoutes,this._mountPoint=(0,u.getOwner)(this).mountPoint,this.rootApplication=(0,d.G)(this),this.externalRouter.on("routeWillChange",this.onRouteWillChange),this.externalRouter.on("routeDidChange",this.onRouteDidChange)}willDestroy(){this.externalRouter.off("routeWillChange",this.onRouteWillChange),this.externalRouter.off("routeDidChange",this.onRouteDidChange),super.willDestroy()}onRouteWillChange(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
this.trigger("routeWillChange",...t)}onRouteDidChange(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r]
this.trigger("routeDidChange",...t)}get currentRouteName(){return this.externalRouter.currentRouteName===this._mountPoint?"application":this.externalRouter.currentRouteName.slice(this._mountPoint.length+1)}get externalRouter(){return this.rootApplication.lookup("service:router")}getExternalRouteName(e){return(0,o.assert)(`External route '${e}' is unknown.`,e in this._externalRoutes),this._externalRoutes[e]}transitionTo(e){if(y(e))return this.externalRouter.transitionTo(e)
for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n]
return this.externalRouter.transitionTo(l(this._mountPoint,e),...r)}transitionToExternal(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n]
return this.externalRouter.transitionTo(this.getExternalRouteName(e),...r)}replaceWith(e){if(y(e))return this.externalRouter.replaceWith(e)
for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n]
return this.externalRouter.replaceWith(l(this._mountPoint,e),...r)}replaceWithExternal(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n]
return this.externalRouter.replaceWith(this.getExternalRouteName(e),...r)}urlFor(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n]
return this.externalRouter.urlFor(l(this._mountPoint,e),...r)}urlForExternal(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n]
return this.externalRouter.urlFor(this.getExternalRouteName(e),...r)}isActive(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n]
return this.externalRouter.isActive(l(this._mountPoint,e),...r)}isActiveExternal(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n]
return this.externalRouter.isActive(this.getExternalRouteName(e),...r)}}).prototype,"onRouteWillChange",[a.action],Object.getOwnPropertyDescriptor(m.prototype,"onRouteWillChange"),m.prototype),A(m.prototype,"onRouteDidChange",[a.action],Object.getOwnPropertyDescriptor(m.prototype,"onRouteDidChange"),m.prototype),E=A(m.prototype,"rootURL",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=A(m.prototype,"currentURL",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A(m.prototype,"currentRouteName",[g],Object.getOwnPropertyDescriptor(m.prototype,"currentRouteName"),m.prototype),m)},398:(e,t,r)=>{"use strict"
r.d(t,{G:()=>a})
var n=r(292),i=r(67),o=r.n(i)
const a=e=>{const t=(0,n.getOwner)(e)
if(t instanceof o())return t
const r=t.lookup("router:main")
return(0,n.getOwner)(r)}},721:e=>{function t(e,t,r,n){var i,o=null==(i=n)||"number"==typeof i||"boolean"==typeof i?n:r(n),a=t.get(o)
return void 0===a&&(a=e.call(this,n),t.set(o,a)),a}function r(e,t,r){var n=Array.prototype.slice.call(arguments,3),i=r(n),o=t.get(i)
return void 0===o&&(o=e.apply(this,n),t.set(i,o)),o}function n(e,t,r,n,i){return r.bind(t,e,n,i)}function i(e,i){return n(e,this,1===e.length?t:r,i.cache.create(),i.serializer)}function o(){return JSON.stringify(arguments)}function a(){this.cache=Object.create(null)}a.prototype.has=function(e){return e in this.cache},a.prototype.get=function(e){return this.cache[e]},a.prototype.set=function(e,t){this.cache[e]=t}
var s={create:function(){return new a}}
e.exports=function(e,t){var r=t&&t.cache?t.cache:s,n=t&&t.serializer?t.serializer:o
return(t&&t.strategy?t.strategy:i)(e,{cache:r,serializer:n})},e.exports.strategies={variadic:function(e,t){return n(e,this,r,t.cache.create(),t.serializer)},monadic:function(e,r){return n(e,this,t,r.cache.create(),r.serializer)}}},173:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{SKELETON_TYPE:()=>i,SyntaxError:()=>S,TYPE:()=>n,createLiteralElement:()=>b,createNumberElement:()=>d,isArgumentElement:()=>s,isDateElement:()=>h,isDateTimeSkeleton:()=>E,isLiteralElement:()=>a,isNumberElement:()=>u,isNumberSkeleton:()=>m,isPluralElement:()=>p,isPoundElement:()=>f,isSelectElement:()=>l,isTagElement:()=>g,isTimeElement:()=>c,parse:()=>I,pegParse:()=>L})
var n,i,o=r(582)
function a(e){return e.type===n.literal}function s(e){return e.type===n.argument}function u(e){return e.type===n.number}function h(e){return e.type===n.date}function c(e){return e.type===n.time}function l(e){return e.type===n.select}function p(e){return e.type===n.plural}function f(e){return e.type===n.pound}function g(e){return e.type===n.tag}function m(e){return!(!e||"object"!=typeof e||e.type!==i.number)}function E(e){return!(!e||"object"!=typeof e||e.type!==i.dateTime)}function b(e){return{type:n.literal,value:e}}function d(e,t){return{type:n.number,value:e,style:t}}!function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"}(n||(n={})),function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"}(i||(i={}))
var y=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,v=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,A=/^(@+)?(\+|#+)?$/g,T=/(\*)(0+)|(#+)(0+)|(0+)/g,H=/^(0+)$/
function B(e){var t={}
return e.replace(A,(function(e,r,n){return"string"!=typeof n?(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length):"+"===n?t.minimumSignificantDigits=r.length:"#"===r[0]?t.maximumSignificantDigits=r.length:(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length+("string"==typeof n?n.length:0)),""})),t}function _(e){switch(e){case"sign-auto":return{signDisplay:"auto"}
case"sign-accounting":case"()":return{currencySign:"accounting"}
case"sign-always":case"+!":return{signDisplay:"always"}
case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"}
case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"}
case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"}
case"sign-never":case"+_":return{signDisplay:"never"}}}function C(e){var t
if("E"===e[0]&&"E"===e[1]?(t={notation:"engineering"},e=e.slice(2)):"E"===e[0]&&(t={notation:"scientific"},e=e.slice(1)),t){var r=e.slice(0,2)
if("+!"===r?(t.signDisplay="always",e=e.slice(2)):"+?"===r&&(t.signDisplay="exceptZero",e=e.slice(2)),!H.test(e))throw new Error("Malformed concise eng/scientific notation")
t.minimumIntegerDigits=e.length}return t}function R(e){return _(e)||{}}function P(e){for(var t={},r=0,n=e;r<n.length;r++){var i=n[r]
switch(i.stem){case"percent":case"%":t.style="percent"
continue
case"%x100":t.style="percent",t.scale=100
continue
case"currency":t.style="currency",t.currency=i.options[0]
continue
case"group-off":case",_":t.useGrouping=!1
continue
case"precision-integer":case".":t.maximumFractionDigits=0
continue
case"measure-unit":case"unit":t.style="unit",t.unit=i.options[0].replace(/^(.*?)-/,"")
continue
case"compact-short":case"K":t.notation="compact",t.compactDisplay="short"
continue
case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long"
continue
case"scientific":t=(0,o.pi)((0,o.pi)((0,o.pi)({},t),{notation:"scientific"}),i.options.reduce((function(e,t){return(0,o.pi)((0,o.pi)({},e),R(t))}),{}))
continue
case"engineering":t=(0,o.pi)((0,o.pi)((0,o.pi)({},t),{notation:"engineering"}),i.options.reduce((function(e,t){return(0,o.pi)((0,o.pi)({},e),R(t))}),{}))
continue
case"notation-simple":t.notation="standard"
continue
case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow"
continue
case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short"
continue
case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long"
continue
case"unit-width-iso-code":t.currencyDisplay="symbol"
continue
case"scale":t.scale=parseFloat(i.options[0])
continue
case"integer-width":if(i.options.length>1)throw new RangeError("integer-width stems only accept a single optional option")
i.options[0].replace(T,(function(e,r,n,i,o,a){if(r)t.minimumIntegerDigits=n.length
else{if(i&&o)throw new Error("We currently do not support maximum integer digits")
if(a)throw new Error("We currently do not support exact integer digits")}return""}))
continue}if(H.test(i.stem))t.minimumIntegerDigits=i.stem.length
else if(v.test(i.stem)){if(i.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option")
i.stem.replace(v,(function(e,r,n,i,o,a){return"*"===n?t.minimumFractionDigits=r.length:i&&"#"===i[0]?t.maximumFractionDigits=i.length:o&&a?(t.minimumFractionDigits=o.length,t.maximumFractionDigits=o.length+a.length):(t.minimumFractionDigits=r.length,t.maximumFractionDigits=r.length),""})),i.options.length&&(t=(0,o.pi)((0,o.pi)({},t),B(i.options[0])))}else if(A.test(i.stem))t=(0,o.pi)((0,o.pi)({},t),B(i.stem))
else{var a=_(i.stem)
a&&(t=(0,o.pi)((0,o.pi)({},t),a))
var s=C(i.stem)
s&&(t=(0,o.pi)((0,o.pi)({},t),s))}}return t}var S=function(e){function t(r,n,i,o){var a=e.call(this)||this
return a.message=r,a.expected=n,a.found=i,a.location=o,a.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(a,t),a}return(0,o.ZT)(t,e),t.buildMessage=function(e,t){function r(e){return e.charCodeAt(0).toString(16).toUpperCase()}function n(e){return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+r(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+r(e)}))}function i(e){return e.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(e){return"\\x0"+r(e)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(e){return"\\x"+r(e)}))}function o(e){switch(e.type){case"literal":return'"'+n(e.text)+'"'
case"class":var t=e.parts.map((function(e){return Array.isArray(e)?i(e[0])+"-"+i(e[1]):i(e)}))
return"["+(e.inverted?"^":"")+t+"]"
case"any":return"any character"
case"end":return"end of input"
case"other":return e.description}}return"Expected "+function(e){var t,r,n=e.map(o)
if(n.sort(),n.length>0){for(t=1,r=1;t<n.length;t++)n[t-1]!==n[t]&&(n[r]=n[t],r++)
n.length=r}switch(n.length){case 1:return n[0]
case 2:return n[0]+" or "+n[1]
default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}(e)+" but "+((a=t)?'"'+n(a)+'"':"end of input")+" found."
var a},t}(Error),L=function(e,t){t=void 0!==t?t:{}
var r,a={},s={start:Lt},u=Lt,h=function(){return!ur},c=function(e){return e},l=function(){return ur},p="<",f=Bt("<",!1),g=function(e){return e.join("")},m=function(){return"<"},E=function(e){return(0,o.pi)({type:n.literal,value:e},ir())},b="#",d=Bt("#",!1),v=function(){return(0,o.pi)({type:n.pound},ir())},A=Ct("tagElement"),T=function(e,t,r){return e!==r&&Ht('Mismatch tag "'+e+'" !== "'+r+'"',Tt()),(0,o.pi)({type:n.tag,value:e,children:t},ir())},H="/>",B=Bt("/>",!1),_=function(e){return(0,o.pi)({type:n.literal,value:e.join("")},ir())},C=">",R=Bt(">",!1),L=function(e){return e},w="</",N=Bt("</",!1),I=Ct("argumentElement"),O="{",D=Bt("{",!1),M="}",U=Bt("}",!1),G=function(e){return(0,o.pi)({type:n.argument,value:e},ir())},F=Ct("numberSkeletonId"),x=/^['\/{}]/,k=_t(["'","/","{","}"],!1,!1),V={type:"any"},X=Ct("numberSkeletonTokenOption"),z="/",K=Bt("/",!1),j=function(e){return e},Z=Ct("numberSkeletonToken"),W=function(e,t){return{stem:e,options:t}},Y=function(e){return(0,o.pi)({type:i.number,tokens:e,parsedOptions:hr?P(e):{}},ir())},Q="::",q=Bt("::",!1),J=function(e){return e},$=function(){return rr.push("numberArgStyle"),!0},ee=function(e){return rr.pop(),e.replace(/\s*$/,"")},te=",",re=Bt(",",!1),ne="number",ie=Bt("number",!1),oe=function(e,t,r){return(0,o.pi)({type:"number"===t?n.number:"date"===t?n.date:n.time,style:r&&r[2],value:e},ir())},ae="'",se=Bt("'",!1),ue=/^[^']/,he=_t(["'"],!0,!1),ce=/^[^a-zA-Z'{}]/,le=_t([["a","z"],["A","Z"],"'","{","}"],!0,!1),pe=/^[a-zA-Z]/,fe=_t([["a","z"],["A","Z"]],!1,!1),ge=function(e){return(0,o.pi)({type:i.dateTime,pattern:e,parsedOptions:hr?(t=e,r={},t.replace(y,(function(e){var t=e.length
switch(e[0]){case"G":r.era=4===t?"long":5===t?"narrow":"short"
break
case"y":r.year=2===t?"2-digit":"numeric"
break
case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead")
case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported")
case"M":case"L":r.month=["numeric","2-digit","short","long","narrow"][t-1]
break
case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported")
case"d":r.day=["numeric","2-digit"][t-1]
break
case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead")
case"E":r.weekday=4===t?"short":5===t?"narrow":"short"
break
case"e":if(t<4)throw new RangeError("`e..eee` (weekday) patterns are not supported")
r.weekday=["short","long","narrow","short"][t-4]
break
case"c":if(t<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported")
r.weekday=["short","long","narrow","short"][t-4]
break
case"a":r.hour12=!0
break
case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead")
case"h":r.hourCycle="h12",r.hour=["numeric","2-digit"][t-1]
break
case"H":r.hourCycle="h23",r.hour=["numeric","2-digit"][t-1]
break
case"K":r.hourCycle="h11",r.hour=["numeric","2-digit"][t-1]
break
case"k":r.hourCycle="h24",r.hour=["numeric","2-digit"][t-1]
break
case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead")
case"m":r.minute=["numeric","2-digit"][t-1]
break
case"s":r.second=["numeric","2-digit"][t-1]
break
case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead")
case"z":r.timeZoneName=t<4?"short":"long"
break
case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""})),r):{}},ir())
var t,r},me=function(){return rr.push("dateOrTimeArgStyle"),!0},Ee="date",be=Bt("date",!1),de="time",ye=Bt("time",!1),ve="plural",Ae=Bt("plural",!1),Te="selectordinal",He=Bt("selectordinal",!1),Be="offset:",_e=Bt("offset:",!1),Ce=function(e,t,r,i){return(0,o.pi)({type:n.plural,pluralType:"plural"===t?"cardinal":"ordinal",value:e,offset:r?r[2]:0,options:i.reduce((function(e,t){var r=t.id,n=t.value,i=t.location
return r in e&&Ht('Duplicate option "'+r+'" in plural element: "'+At()+'"',Tt()),e[r]={value:n,location:i},e}),{})},ir())},Re="select",Pe=Bt("select",!1),Se=function(e,t){return(0,o.pi)({type:n.select,value:e,options:t.reduce((function(e,t){var r=t.id,n=t.value,i=t.location
return r in e&&Ht('Duplicate option "'+r+'" in select element: "'+At()+'"',Tt()),e[r]={value:n,location:i},e}),{})},ir())},Le="=",we=Bt("=",!1),Ne=function(e){return rr.push("select"),!0},Ie=function(e,t){return rr.pop(),(0,o.pi)({id:e,value:t},ir())},Oe=function(e){return rr.push("plural"),!0},De=function(e,t){return rr.pop(),(0,o.pi)({id:e,value:t},ir())},Me=Ct("whitespace"),Ue=/^[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,Ge=_t([["\t","\r"]," ",""," "," ",[" "," "],"\u2028","\u2029"," "," ","　"],!1,!1),Fe=Ct("syntax pattern"),xe=/^[!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/,ke=_t([["!","/"],[":","@"],["[","^"],"`",["{","~"],["¡","§"],"©","«","¬","®","°","±","¶","»","¿","×","÷",["‐","‧"],["‰","‾"],["⁁","⁓"],["⁕","⁞"],["←","⑟"],["─","❵"],["➔","⯿"],["⸀","⹿"],["、","〃"],["〈","〠"],"〰","﴾","﴿","﹅","﹆"],!1,!1),Ve=Ct("optional whitespace"),Xe=Ct("number"),ze="-",Ke=Bt("-",!1),je=function(e,t){return t?e?-t:t:0},Ze=(Ct("apostrophe"),Ct("double apostrophes")),We="''",Ye=Bt("''",!1),Qe=function(){return"'"},qe=function(e,t){return e+t.replace("''","'")},Je=function(e){return!("<"===e||"{"===e||nr()&&"#"===e||rr.length>1&&"}"===e)},$e="\n",et=Bt("\n",!1),tt=function(e){return"<"===e||">"===e||"{"===e||"}"===e||nr()&&"#"===e},rt=Ct("argNameOrNumber"),nt=Ct("validTag"),it=Ct("argNumber"),ot="0",at=Bt("0",!1),st=function(){return 0},ut=/^[1-9]/,ht=_t([["1","9"]],!1,!1),ct=/^[0-9]/,lt=_t([["0","9"]],!1,!1),pt=function(e){return parseInt(e.join(""),10)},ft=Ct("argName"),gt=Ct("tagName"),mt=0,Et=0,bt=[{line:1,column:1}],dt=0,yt=[],vt=0
if(void 0!==t.startRule){if(!(t.startRule in s))throw new Error("Can't start parsing from rule \""+t.startRule+'".')
u=s[t.startRule]}function At(){return e.substring(Et,mt)}function Tt(){return Pt(Et,mt)}function Ht(e,t){throw function(e,t){return new S(e,[],"",t)}(e,t=void 0!==t?t:Pt(Et,mt))}function Bt(e,t){return{type:"literal",text:e,ignoreCase:t}}function _t(e,t,r){return{type:"class",parts:e,inverted:t,ignoreCase:r}}function Ct(e){return{type:"other",description:e}}function Rt(t){var r,n=bt[t]
if(n)return n
for(r=t-1;!bt[r];)r--
for(n={line:(n=bt[r]).line,column:n.column};r<t;)10===e.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++
return bt[t]=n,n}function Pt(e,t){var r=Rt(e),n=Rt(t)
return{start:{offset:e,line:r.line,column:r.column},end:{offset:t,line:n.line,column:n.column}}}function St(e){mt<dt||(mt>dt&&(dt=mt,yt=[]),yt.push(e))}function Lt(){return wt()}function wt(){var e,t
for(e=[],t=Nt();t!==a;)e.push(t),t=Nt()
return e}function Nt(){var t,r
return t=mt,Et=mt,(h()?void 0:a)!==a?(r=function(){var e,t,r,n
return vt++,(e=Dt())===a&&(e=mt,(t=Mt())!==a&&(r=wt())!==a&&(n=Ut())!==a?(Et=e,e=t=T(t,r,n)):(mt=e,e=a)),vt--,e===a&&(t=a,0===vt&&St(A)),e}(),r!==a?(Et=t,t=c(r)):(mt=t,t=a)):(mt=t,t=a),t===a&&(t=function(){var e,t
return e=mt,(t=It())!==a&&(Et=e,t=E(t)),t}())===a&&(t=function(){var t,r,n,i
return vt++,t=mt,123===e.charCodeAt(mt)?(r=O,mt++):(r=a,0===vt&&St(D)),r!==a&&Zt()!==a&&(n=Jt())!==a&&Zt()!==a?(125===e.charCodeAt(mt)?(i=M,mt++):(i=a,0===vt&&St(U)),i!==a?(Et=t,t=r=G(n)):(mt=t,t=a)):(mt=t,t=a),vt--,t===a&&(r=a,0===vt&&St(I)),t}())===a&&(t=function(){var t
return t=function(){var t,r,n,i,o,s,u,h,c
return t=mt,123===e.charCodeAt(mt)?(r=O,mt++):(r=a,0===vt&&St(D)),r!==a&&Zt()!==a&&(n=Jt())!==a&&Zt()!==a?(44===e.charCodeAt(mt)?(i=te,mt++):(i=a,0===vt&&St(re)),i!==a&&Zt()!==a?(e.substr(mt,6)===ne?(o=ne,mt+=6):(o=a,0===vt&&St(ie)),o!==a&&Zt()!==a?(s=mt,44===e.charCodeAt(mt)?(u=te,mt++):(u=a,0===vt&&St(re)),u!==a&&(h=Zt())!==a?(c=function(){var t,r,n
return t=mt,e.substr(mt,2)===Q?(r=Q,mt+=2):(r=a,0===vt&&St(q)),r!==a?(n=function(){var e,t,r
if(e=mt,t=[],(r=xt())!==a)for(;r!==a;)t.push(r),r=xt()
else t=a
return t!==a&&(Et=e,t=Y(t)),t}(),n!==a?(Et=t,t=r=J(n)):(mt=t,t=a)):(mt=t,t=a),t===a&&(t=mt,Et=mt,(r=(r=$())?void 0:a)!==a&&(n=It())!==a?(Et=t,t=r=ee(n)):(mt=t,t=a)),t}(),c!==a?s=u=[u,h,c]:(mt=s,s=a)):(mt=s,s=a),s===a&&(s=null),s!==a&&(u=Zt())!==a?(125===e.charCodeAt(mt)?(h=M,mt++):(h=a,0===vt&&St(U)),h!==a?(Et=t,t=r=oe(n,o,s)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a),t}(),t===a&&(t=function(){var t,r,n,i,o,s,u,h,c
return t=mt,123===e.charCodeAt(mt)?(r=O,mt++):(r=a,0===vt&&St(D)),r!==a&&Zt()!==a&&(n=Jt())!==a&&Zt()!==a?(44===e.charCodeAt(mt)?(i=te,mt++):(i=a,0===vt&&St(re)),i!==a&&Zt()!==a?(e.substr(mt,4)===Ee?(o=Ee,mt+=4):(o=a,0===vt&&St(be)),o===a&&(e.substr(mt,4)===de?(o=de,mt+=4):(o=a,0===vt&&St(ye))),o!==a&&Zt()!==a?(s=mt,44===e.charCodeAt(mt)?(u=te,mt++):(u=a,0===vt&&St(re)),u!==a&&(h=Zt())!==a?(c=function(){var t,r,n
return t=mt,e.substr(mt,2)===Q?(r=Q,mt+=2):(r=a,0===vt&&St(q)),r!==a?(n=function(){var t,r,n,i
if(t=mt,r=mt,n=[],(i=kt())===a&&(i=Vt()),i!==a)for(;i!==a;)n.push(i),(i=kt())===a&&(i=Vt())
else n=a
return(r=n!==a?e.substring(r,mt):n)!==a&&(Et=t,r=ge(r)),r}(),n!==a?(Et=t,t=r=J(n)):(mt=t,t=a)):(mt=t,t=a),t===a&&(t=mt,Et=mt,(r=(r=me())?void 0:a)!==a&&(n=It())!==a?(Et=t,t=r=ee(n)):(mt=t,t=a)),t}(),c!==a?s=u=[u,h,c]:(mt=s,s=a)):(mt=s,s=a),s===a&&(s=null),s!==a&&(u=Zt())!==a?(125===e.charCodeAt(mt)?(h=M,mt++):(h=a,0===vt&&St(U)),h!==a?(Et=t,t=r=oe(n,o,s)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a),t}()),t}(),t===a&&(t=function(){var t,r,n,i,o,s,u,h,c,l,p
if(t=mt,123===e.charCodeAt(mt)?(r=O,mt++):(r=a,0===vt&&St(D)),r!==a)if(Zt()!==a)if((n=Jt())!==a)if(Zt()!==a)if(44===e.charCodeAt(mt)?(i=te,mt++):(i=a,0===vt&&St(re)),i!==a)if(Zt()!==a)if(e.substr(mt,6)===ve?(o=ve,mt+=6):(o=a,0===vt&&St(Ae)),o===a&&(e.substr(mt,13)===Te?(o=Te,mt+=13):(o=a,0===vt&&St(He))),o!==a)if(Zt()!==a)if(44===e.charCodeAt(mt)?(s=te,mt++):(s=a,0===vt&&St(re)),s!==a)if(Zt()!==a)if(u=mt,e.substr(mt,7)===Be?(h=Be,mt+=7):(h=a,0===vt&&St(_e)),h!==a&&(c=Zt())!==a&&(l=Wt())!==a?u=h=[h,c,l]:(mt=u,u=a),u===a&&(u=null),u!==a)if((h=Zt())!==a){if(c=[],(l=zt())!==a)for(;l!==a;)c.push(l),l=zt()
else c=a
c!==a&&(l=Zt())!==a?(125===e.charCodeAt(mt)?(p=M,mt++):(p=a,0===vt&&St(U)),p!==a?(Et=t,t=r=Ce(n,o,u,c)):(mt=t,t=a)):(mt=t,t=a)}else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
return t}())===a&&(t=function(){var t,r,n,i,o,s,u,h,c
if(t=mt,123===e.charCodeAt(mt)?(r=O,mt++):(r=a,0===vt&&St(D)),r!==a)if(Zt()!==a)if((n=Jt())!==a)if(Zt()!==a)if(44===e.charCodeAt(mt)?(i=te,mt++):(i=a,0===vt&&St(re)),i!==a)if(Zt()!==a)if(e.substr(mt,6)===Re?(o=Re,mt+=6):(o=a,0===vt&&St(Pe)),o!==a)if(Zt()!==a)if(44===e.charCodeAt(mt)?(s=te,mt++):(s=a,0===vt&&St(re)),s!==a)if(Zt()!==a){if(u=[],(h=Xt())!==a)for(;h!==a;)u.push(h),h=Xt()
else u=a
u!==a&&(h=Zt())!==a?(125===e.charCodeAt(mt)?(c=M,mt++):(c=a,0===vt&&St(U)),c!==a?(Et=t,t=r=Se(n,u)):(mt=t,t=a)):(mt=t,t=a)}else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
else mt=t,t=a
return t}())===a&&(t=function(){var t,r
return t=mt,35===e.charCodeAt(mt)?(r=b,mt++):(r=a,0===vt&&St(d)),r!==a&&(Et=t,r=v()),r}())),t}function It(){var t,r,n,i
if(t=mt,Et=mt,(r=(r=l())?void 0:a)!==a){if(n=[],(i=Yt())===a&&(i=Qt())===a&&(i=qt())===a&&(60===e.charCodeAt(mt)?(i=p,mt++):(i=a,0===vt&&St(f))),i!==a)for(;i!==a;)n.push(i),(i=Yt())===a&&(i=Qt())===a&&(i=qt())===a&&(60===e.charCodeAt(mt)?(i=p,mt++):(i=a,0===vt&&St(f)))
else n=a
n!==a?(Et=t,t=r=g(n)):(mt=t,t=a)}else mt=t,t=a
if(t===a){if(t=mt,r=[],(n=Yt())===a&&(n=Qt())===a&&(n=qt())===a&&(n=Ot()),n!==a)for(;n!==a;)r.push(n),(n=Yt())===a&&(n=Qt())===a&&(n=qt())===a&&(n=Ot())
else r=a
r!==a&&(Et=t,r=g(r)),t=r}return t}function Ot(){var t,r,n
return t=mt,r=mt,vt++,(n=Mt())===a&&(n=Ut())===a&&(n=Dt()),vt--,n===a?r=void 0:(mt=r,r=a),r!==a?(60===e.charCodeAt(mt)?(n=p,mt++):(n=a,0===vt&&St(f)),n!==a?(Et=t,t=r=m()):(mt=t,t=a)):(mt=t,t=a),t}function Dt(){var t,r,n,i,o,s
return t=mt,r=mt,60===e.charCodeAt(mt)?(n=p,mt++):(n=a,0===vt&&St(f)),n!==a&&(i=$t())!==a&&(o=Zt())!==a?(e.substr(mt,2)===H?(s=H,mt+=2):(s=a,0===vt&&St(B)),s!==a?r=n=[n,i,o,s]:(mt=r,r=a)):(mt=r,r=a),r!==a&&(Et=t,r=_(r)),r}function Mt(){var t,r,n,i
return t=mt,60===e.charCodeAt(mt)?(r=p,mt++):(r=a,0===vt&&St(f)),r!==a&&(n=$t())!==a?(62===e.charCodeAt(mt)?(i=C,mt++):(i=a,0===vt&&St(R)),i!==a?(Et=t,t=r=L(n)):(mt=t,t=a)):(mt=t,t=a),t}function Ut(){var t,r,n,i
return t=mt,e.substr(mt,2)===w?(r=w,mt+=2):(r=a,0===vt&&St(N)),r!==a&&(n=$t())!==a?(62===e.charCodeAt(mt)?(i=C,mt++):(i=a,0===vt&&St(R)),i!==a?(Et=t,t=r=L(n)):(mt=t,t=a)):(mt=t,t=a),t}function Gt(){var t,r,n,i,o
if(vt++,t=mt,r=[],n=mt,i=mt,vt++,(o=Kt())===a&&(x.test(e.charAt(mt))?(o=e.charAt(mt),mt++):(o=a,0===vt&&St(k))),vt--,o===a?i=void 0:(mt=i,i=a),i!==a?(e.length>mt?(o=e.charAt(mt),mt++):(o=a,0===vt&&St(V)),o!==a?n=i=[i,o]:(mt=n,n=a)):(mt=n,n=a),n!==a)for(;n!==a;)r.push(n),n=mt,i=mt,vt++,(o=Kt())===a&&(x.test(e.charAt(mt))?(o=e.charAt(mt),mt++):(o=a,0===vt&&St(k))),vt--,o===a?i=void 0:(mt=i,i=a),i!==a?(e.length>mt?(o=e.charAt(mt),mt++):(o=a,0===vt&&St(V)),o!==a?n=i=[i,o]:(mt=n,n=a)):(mt=n,n=a)
else r=a
return t=r!==a?e.substring(t,mt):r,vt--,t===a&&(r=a,0===vt&&St(F)),t}function Ft(){var t,r,n
return vt++,t=mt,47===e.charCodeAt(mt)?(r=z,mt++):(r=a,0===vt&&St(K)),r!==a&&(n=Gt())!==a?(Et=t,t=r=j(n)):(mt=t,t=a),vt--,t===a&&(r=a,0===vt&&St(X)),t}function xt(){var e,t,r,n
if(vt++,e=mt,Zt()!==a)if((t=Gt())!==a){for(r=[],n=Ft();n!==a;)r.push(n),n=Ft()
r!==a?(Et=e,e=W(t,r)):(mt=e,e=a)}else mt=e,e=a
else mt=e,e=a
return vt--,e===a&&0===vt&&St(Z),e}function kt(){var t,r,n,i
if(t=mt,39===e.charCodeAt(mt)?(r=ae,mt++):(r=a,0===vt&&St(se)),r!==a){if(n=[],(i=Yt())===a&&(ue.test(e.charAt(mt))?(i=e.charAt(mt),mt++):(i=a,0===vt&&St(he))),i!==a)for(;i!==a;)n.push(i),(i=Yt())===a&&(ue.test(e.charAt(mt))?(i=e.charAt(mt),mt++):(i=a,0===vt&&St(he)))
else n=a
n!==a?(39===e.charCodeAt(mt)?(i=ae,mt++):(i=a,0===vt&&St(se)),i!==a?t=r=[r,n,i]:(mt=t,t=a)):(mt=t,t=a)}else mt=t,t=a
if(t===a)if(t=[],(r=Yt())===a&&(ce.test(e.charAt(mt))?(r=e.charAt(mt),mt++):(r=a,0===vt&&St(le))),r!==a)for(;r!==a;)t.push(r),(r=Yt())===a&&(ce.test(e.charAt(mt))?(r=e.charAt(mt),mt++):(r=a,0===vt&&St(le)))
else t=a
return t}function Vt(){var t,r
if(t=[],pe.test(e.charAt(mt))?(r=e.charAt(mt),mt++):(r=a,0===vt&&St(fe)),r!==a)for(;r!==a;)t.push(r),pe.test(e.charAt(mt))?(r=e.charAt(mt),mt++):(r=a,0===vt&&St(fe))
else t=a
return t}function Xt(){var t,r,n,i,o
return t=mt,Zt()!==a&&(r=tr())!==a&&Zt()!==a?(123===e.charCodeAt(mt)?(n=O,mt++):(n=a,0===vt&&St(D)),n!==a?(Et=mt,(Ne(r)?void 0:a)!==a&&(i=wt())!==a?(125===e.charCodeAt(mt)?(o=M,mt++):(o=a,0===vt&&St(U)),o!==a?(Et=t,t=Ie(r,i)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a),t}function zt(){var t,r,n,i,o
return t=mt,Zt()!==a?(r=function(){var t,r,n,i
return t=mt,r=mt,61===e.charCodeAt(mt)?(n=Le,mt++):(n=a,0===vt&&St(we)),n!==a&&(i=Wt())!==a?r=n=[n,i]:(mt=r,r=a),(t=r!==a?e.substring(t,mt):r)===a&&(t=tr()),t}(),r!==a&&Zt()!==a?(123===e.charCodeAt(mt)?(n=O,mt++):(n=a,0===vt&&St(D)),n!==a?(Et=mt,(Oe(r)?void 0:a)!==a&&(i=wt())!==a?(125===e.charCodeAt(mt)?(o=M,mt++):(o=a,0===vt&&St(U)),o!==a?(Et=t,t=De(r,i)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a)):(mt=t,t=a),t}function Kt(){var t
return vt++,Ue.test(e.charAt(mt))?(t=e.charAt(mt),mt++):(t=a,0===vt&&St(Ge)),vt--,t===a&&0===vt&&St(Me),t}function jt(){var t
return vt++,xe.test(e.charAt(mt))?(t=e.charAt(mt),mt++):(t=a,0===vt&&St(ke)),vt--,t===a&&0===vt&&St(Fe),t}function Zt(){var t,r,n
for(vt++,t=mt,r=[],n=Kt();n!==a;)r.push(n),n=Kt()
return t=r!==a?e.substring(t,mt):r,vt--,t===a&&(r=a,0===vt&&St(Ve)),t}function Wt(){var t,r,n
return vt++,t=mt,45===e.charCodeAt(mt)?(r=ze,mt++):(r=a,0===vt&&St(Ke)),r===a&&(r=null),r!==a&&(n=er())!==a?(Et=t,t=r=je(r,n)):(mt=t,t=a),vt--,t===a&&(r=a,0===vt&&St(Xe)),t}function Yt(){var t,r
return vt++,t=mt,e.substr(mt,2)===We?(r=We,mt+=2):(r=a,0===vt&&St(Ye)),r!==a&&(Et=t,r=Qe()),vt--,(t=r)===a&&(r=a,0===vt&&St(Ze)),t}function Qt(){var t,r,n,i,o,s
if(t=mt,39===e.charCodeAt(mt)?(r=ae,mt++):(r=a,0===vt&&St(se)),r!==a)if(n=function(){var t,r,n,i
return t=mt,r=mt,e.length>mt?(n=e.charAt(mt),mt++):(n=a,0===vt&&St(V)),n!==a?(Et=mt,(i=(i=tt(n))?void 0:a)!==a?r=n=[n,i]:(mt=r,r=a)):(mt=r,r=a),r!==a?e.substring(t,mt):r}(),n!==a){for(i=mt,o=[],e.substr(mt,2)===We?(s=We,mt+=2):(s=a,0===vt&&St(Ye)),s===a&&(ue.test(e.charAt(mt))?(s=e.charAt(mt),mt++):(s=a,0===vt&&St(he)));s!==a;)o.push(s),e.substr(mt,2)===We?(s=We,mt+=2):(s=a,0===vt&&St(Ye)),s===a&&(ue.test(e.charAt(mt))?(s=e.charAt(mt),mt++):(s=a,0===vt&&St(he)));(i=o!==a?e.substring(i,mt):o)!==a?(39===e.charCodeAt(mt)?(o=ae,mt++):(o=a,0===vt&&St(se)),o===a&&(o=null),o!==a?(Et=t,t=r=qe(n,i)):(mt=t,t=a)):(mt=t,t=a)}else mt=t,t=a
else mt=t,t=a
return t}function qt(){var t,r,n,i
return t=mt,r=mt,e.length>mt?(n=e.charAt(mt),mt++):(n=a,0===vt&&St(V)),n!==a?(Et=mt,(i=(i=Je(n))?void 0:a)!==a?r=n=[n,i]:(mt=r,r=a)):(mt=r,r=a),r===a&&(10===e.charCodeAt(mt)?(r=$e,mt++):(r=a,0===vt&&St(et))),r!==a?e.substring(t,mt):r}function Jt(){var t,r
return vt++,t=mt,(r=er())===a&&(r=tr()),t=r!==a?e.substring(t,mt):r,vt--,t===a&&(r=a,0===vt&&St(rt)),t}function $t(){var t,r
return vt++,t=mt,(r=er())===a&&(r=function(){var t,r,n,i,o
if(vt++,t=mt,r=[],45===e.charCodeAt(mt)?(n=ze,mt++):(n=a,0===vt&&St(Ke)),n===a&&(n=mt,i=mt,vt++,(o=Kt())===a&&(o=jt()),vt--,o===a?i=void 0:(mt=i,i=a),i!==a?(e.length>mt?(o=e.charAt(mt),mt++):(o=a,0===vt&&St(V)),o!==a?n=i=[i,o]:(mt=n,n=a)):(mt=n,n=a)),n!==a)for(;n!==a;)r.push(n),45===e.charCodeAt(mt)?(n=ze,mt++):(n=a,0===vt&&St(Ke)),n===a&&(n=mt,i=mt,vt++,(o=Kt())===a&&(o=jt()),vt--,o===a?i=void 0:(mt=i,i=a),i!==a?(e.length>mt?(o=e.charAt(mt),mt++):(o=a,0===vt&&St(V)),o!==a?n=i=[i,o]:(mt=n,n=a)):(mt=n,n=a))
else r=a
return t=r!==a?e.substring(t,mt):r,vt--,t===a&&(r=a,0===vt&&St(gt)),t}()),t=r!==a?e.substring(t,mt):r,vt--,t===a&&(r=a,0===vt&&St(nt)),t}function er(){var t,r,n,i,o
if(vt++,t=mt,48===e.charCodeAt(mt)?(r=ot,mt++):(r=a,0===vt&&St(at)),r!==a&&(Et=t,r=st()),(t=r)===a){if(t=mt,r=mt,ut.test(e.charAt(mt))?(n=e.charAt(mt),mt++):(n=a,0===vt&&St(ht)),n!==a){for(i=[],ct.test(e.charAt(mt))?(o=e.charAt(mt),mt++):(o=a,0===vt&&St(lt));o!==a;)i.push(o),ct.test(e.charAt(mt))?(o=e.charAt(mt),mt++):(o=a,0===vt&&St(lt))
i!==a?r=n=[n,i]:(mt=r,r=a)}else mt=r,r=a
r!==a&&(Et=t,r=pt(r)),t=r}return vt--,t===a&&(r=a,0===vt&&St(it)),t}function tr(){var t,r,n,i,o
if(vt++,t=mt,r=[],n=mt,i=mt,vt++,(o=Kt())===a&&(o=jt()),vt--,o===a?i=void 0:(mt=i,i=a),i!==a?(e.length>mt?(o=e.charAt(mt),mt++):(o=a,0===vt&&St(V)),o!==a?n=i=[i,o]:(mt=n,n=a)):(mt=n,n=a),n!==a)for(;n!==a;)r.push(n),n=mt,i=mt,vt++,(o=Kt())===a&&(o=jt()),vt--,o===a?i=void 0:(mt=i,i=a),i!==a?(e.length>mt?(o=e.charAt(mt),mt++):(o=a,0===vt&&St(V)),o!==a?n=i=[i,o]:(mt=n,n=a)):(mt=n,n=a)
else r=a
return t=r!==a?e.substring(t,mt):r,vt--,t===a&&(r=a,0===vt&&St(ft)),t}var rr=["root"]
function nr(){return"plural"===rr[rr.length-1]}function ir(){return t&&t.captureLocation?{location:Tt()}:{}}var or,ar,sr,ur=t&&t.ignoreTag,hr=t&&t.shouldParseSkeleton
if((r=u())!==a&&mt===e.length)return r
throw r!==a&&mt<e.length&&St({type:"end"}),or=yt,ar=dt<e.length?e.charAt(dt):null,sr=dt<e.length?Pt(dt,dt+1):Pt(dt,dt),new S(S.buildMessage(or,ar),or,ar,sr)},w=/(^|[^\\])#/g
function N(e){e.forEach((function(e){(p(e)||l(e))&&Object.keys(e.options).forEach((function(t){for(var r,n=e.options[t],i=-1,s=void 0,u=0;u<n.value.length;u++){var h=n.value[u]
if(a(h)&&w.test(h.value)){i=u,s=h
break}}if(s){var c=s.value.replace(w,"$1{"+e.value+", number}"),l=L(c);(r=n.value).splice.apply(r,(0,o.ev)([i,1],l))}N(n.value)}))}))}function I(e,t){t=(0,o.pi)({normalizeHashtagInPlural:!0,shouldParseSkeleton:!0},t||{})
var r=L(e,t)
return t.normalizeHashtagInPlural&&N(r),r}},543:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{ErrorCode:()=>fe,FormatError:()=>be,IntlMessageFormat:()=>Be,InvalidValueError:()=>de,InvalidValueTypeError:()=>ye,MissingValueError:()=>ve,PART_TYPE:()=>Ee,default:()=>_e,formatToParts:()=>Te,isFormatXMLElementFn:()=>Ae})
var n,i,o,a=r(582)
function s(e){return e.type===i.literal}function u(e){return e.type===i.argument}function h(e){return e.type===i.number}function c(e){return e.type===i.date}function l(e){return e.type===i.time}function p(e){return e.type===i.select}function f(e){return e.type===i.plural}function g(e){return e.type===i.pound}function m(e){return e.type===i.tag}function E(e){return!(!e||"object"!=typeof e||e.type!==o.number)}function b(e){return!(!e||"object"!=typeof e||e.type!==o.dateTime)}!function(e){e[e.EXPECT_ARGUMENT_CLOSING_BRACE=1]="EXPECT_ARGUMENT_CLOSING_BRACE",e[e.EMPTY_ARGUMENT=2]="EMPTY_ARGUMENT",e[e.MALFORMED_ARGUMENT=3]="MALFORMED_ARGUMENT",e[e.EXPECT_ARGUMENT_TYPE=4]="EXPECT_ARGUMENT_TYPE",e[e.INVALID_ARGUMENT_TYPE=5]="INVALID_ARGUMENT_TYPE",e[e.EXPECT_ARGUMENT_STYLE=6]="EXPECT_ARGUMENT_STYLE",e[e.INVALID_NUMBER_SKELETON=7]="INVALID_NUMBER_SKELETON",e[e.INVALID_DATE_TIME_SKELETON=8]="INVALID_DATE_TIME_SKELETON",e[e.EXPECT_NUMBER_SKELETON=9]="EXPECT_NUMBER_SKELETON",e[e.EXPECT_DATE_TIME_SKELETON=10]="EXPECT_DATE_TIME_SKELETON",e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE=11]="UNCLOSED_QUOTE_IN_ARGUMENT_STYLE",e[e.EXPECT_SELECT_ARGUMENT_OPTIONS=12]="EXPECT_SELECT_ARGUMENT_OPTIONS",e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE=13]="EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE=14]="INVALID_PLURAL_ARGUMENT_OFFSET_VALUE",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR=15]="EXPECT_SELECT_ARGUMENT_SELECTOR",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR=16]="EXPECT_PLURAL_ARGUMENT_SELECTOR",e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT=17]="EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT",e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT=18]="EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT",e[e.INVALID_PLURAL_ARGUMENT_SELECTOR=19]="INVALID_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR=20]="DUPLICATE_PLURAL_ARGUMENT_SELECTOR",e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR=21]="DUPLICATE_SELECT_ARGUMENT_SELECTOR",e[e.MISSING_OTHER_CLAUSE=22]="MISSING_OTHER_CLAUSE",e[e.INVALID_TAG=23]="INVALID_TAG",e[e.INVALID_TAG_NAME=25]="INVALID_TAG_NAME",e[e.UNMATCHED_CLOSING_TAG=26]="UNMATCHED_CLOSING_TAG",e[e.UNCLOSED_TAG=27]="UNCLOSED_TAG"}(n||(n={})),function(e){e[e.literal=0]="literal",e[e.argument=1]="argument",e[e.number=2]="number",e[e.date=3]="date",e[e.time=4]="time",e[e.select=5]="select",e[e.plural=6]="plural",e[e.pound=7]="pound",e[e.tag=8]="tag"}(i||(i={})),function(e){e[e.number=0]="number",e[e.dateTime=1]="dateTime"}(o||(o={}))
var d=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,y=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g
function v(e){var t={}
return e.replace(y,(function(e){var r=e.length
switch(e[0]){case"G":t.era=4===r?"long":5===r?"narrow":"short"
break
case"y":t.year=2===r?"2-digit":"numeric"
break
case"Y":case"u":case"U":case"r":throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead")
case"q":case"Q":throw new RangeError("`q/Q` (quarter) patterns are not supported")
case"M":case"L":t.month=["numeric","2-digit","short","long","narrow"][r-1]
break
case"w":case"W":throw new RangeError("`w/W` (week) patterns are not supported")
case"d":t.day=["numeric","2-digit"][r-1]
break
case"D":case"F":case"g":throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead")
case"E":t.weekday=4===r?"short":5===r?"narrow":"short"
break
case"e":if(r<4)throw new RangeError("`e..eee` (weekday) patterns are not supported")
t.weekday=["short","long","narrow","short"][r-4]
break
case"c":if(r<4)throw new RangeError("`c..ccc` (weekday) patterns are not supported")
t.weekday=["short","long","narrow","short"][r-4]
break
case"a":t.hour12=!0
break
case"b":case"B":throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead")
case"h":t.hourCycle="h12",t.hour=["numeric","2-digit"][r-1]
break
case"H":t.hourCycle="h23",t.hour=["numeric","2-digit"][r-1]
break
case"K":t.hourCycle="h11",t.hour=["numeric","2-digit"][r-1]
break
case"k":t.hourCycle="h24",t.hour=["numeric","2-digit"][r-1]
break
case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead")
case"m":t.minute=["numeric","2-digit"][r-1]
break
case"s":t.second=["numeric","2-digit"][r-1]
break
case"S":case"A":throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead")
case"z":t.timeZoneName=r<4?"short":"long"
break
case"Z":case"O":case"v":case"V":case"X":case"x":throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")}return""})),t}var A=/[\t-\r \x85\u200E\u200F\u2028\u2029]/i,T=/^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,H=/^(@+)?(\+|#+)?[rs]?$/g,B=/(\*)(0+)|(#+)(0+)|(0+)/g,_=/^(0+)$/
function C(e){var t={}
return"r"===e[e.length-1]?t.roundingPriority="morePrecision":"s"===e[e.length-1]&&(t.roundingPriority="lessPrecision"),e.replace(H,(function(e,r,n){return"string"!=typeof n?(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length):"+"===n?t.minimumSignificantDigits=r.length:"#"===r[0]?t.maximumSignificantDigits=r.length:(t.minimumSignificantDigits=r.length,t.maximumSignificantDigits=r.length+("string"==typeof n?n.length:0)),""})),t}function R(e){switch(e){case"sign-auto":return{signDisplay:"auto"}
case"sign-accounting":case"()":return{currencySign:"accounting"}
case"sign-always":case"+!":return{signDisplay:"always"}
case"sign-accounting-always":case"()!":return{signDisplay:"always",currencySign:"accounting"}
case"sign-except-zero":case"+?":return{signDisplay:"exceptZero"}
case"sign-accounting-except-zero":case"()?":return{signDisplay:"exceptZero",currencySign:"accounting"}
case"sign-never":case"+_":return{signDisplay:"never"}}}function P(e){var t
if("E"===e[0]&&"E"===e[1]?(t={notation:"engineering"},e=e.slice(2)):"E"===e[0]&&(t={notation:"scientific"},e=e.slice(1)),t){var r=e.slice(0,2)
if("+!"===r?(t.signDisplay="always",e=e.slice(2)):"+?"===r&&(t.signDisplay="exceptZero",e=e.slice(2)),!_.test(e))throw new Error("Malformed concise eng/scientific notation")
t.minimumIntegerDigits=e.length}return t}function S(e){return R(e)||{}}function L(e){for(var t={},r=0,n=e;r<n.length;r++){var i=n[r]
switch(i.stem){case"percent":case"%":t.style="percent"
continue
case"%x100":t.style="percent",t.scale=100
continue
case"currency":t.style="currency",t.currency=i.options[0]
continue
case"group-off":case",_":t.useGrouping=!1
continue
case"precision-integer":case".":t.maximumFractionDigits=0
continue
case"measure-unit":case"unit":t.style="unit",t.unit=i.options[0].replace(/^(.*?)-/,"")
continue
case"compact-short":case"K":t.notation="compact",t.compactDisplay="short"
continue
case"compact-long":case"KK":t.notation="compact",t.compactDisplay="long"
continue
case"scientific":t=(0,a.pi)((0,a.pi)((0,a.pi)({},t),{notation:"scientific"}),i.options.reduce((function(e,t){return(0,a.pi)((0,a.pi)({},e),S(t))}),{}))
continue
case"engineering":t=(0,a.pi)((0,a.pi)((0,a.pi)({},t),{notation:"engineering"}),i.options.reduce((function(e,t){return(0,a.pi)((0,a.pi)({},e),S(t))}),{}))
continue
case"notation-simple":t.notation="standard"
continue
case"unit-width-narrow":t.currencyDisplay="narrowSymbol",t.unitDisplay="narrow"
continue
case"unit-width-short":t.currencyDisplay="code",t.unitDisplay="short"
continue
case"unit-width-full-name":t.currencyDisplay="name",t.unitDisplay="long"
continue
case"unit-width-iso-code":t.currencyDisplay="symbol"
continue
case"scale":t.scale=parseFloat(i.options[0])
continue
case"integer-width":if(i.options.length>1)throw new RangeError("integer-width stems only accept a single optional option")
i.options[0].replace(B,(function(e,r,n,i,o,a){if(r)t.minimumIntegerDigits=n.length
else{if(i&&o)throw new Error("We currently do not support maximum integer digits")
if(a)throw new Error("We currently do not support exact integer digits")}return""}))
continue}if(_.test(i.stem))t.minimumIntegerDigits=i.stem.length
else if(T.test(i.stem)){if(i.options.length>1)throw new RangeError("Fraction-precision stems only accept a single optional option")
i.stem.replace(T,(function(e,r,n,i,o,a){return"*"===n?t.minimumFractionDigits=r.length:i&&"#"===i[0]?t.maximumFractionDigits=i.length:o&&a?(t.minimumFractionDigits=o.length,t.maximumFractionDigits=o.length+a.length):(t.minimumFractionDigits=r.length,t.maximumFractionDigits=r.length),""}))
var o=i.options[0]
"w"===o?t=(0,a.pi)((0,a.pi)({},t),{trailingZeroDisplay:"stripIfInteger"}):o&&(t=(0,a.pi)((0,a.pi)({},t),C(o)))}else if(H.test(i.stem))t=(0,a.pi)((0,a.pi)({},t),C(i.stem))
else{var s=R(i.stem)
s&&(t=(0,a.pi)((0,a.pi)({},t),s))
var u=P(i.stem)
u&&(t=(0,a.pi)((0,a.pi)({},t),u))}}return t}var w,N={AX:["H"],BQ:["H"],CP:["H"],CZ:["H"],DK:["H"],FI:["H"],ID:["H"],IS:["H"],ML:["H"],NE:["H"],RU:["H"],SE:["H"],SJ:["H"],SK:["H"],AS:["h","H"],BT:["h","H"],DJ:["h","H"],ER:["h","H"],GH:["h","H"],IN:["h","H"],LS:["h","H"],PG:["h","H"],PW:["h","H"],SO:["h","H"],TO:["h","H"],VU:["h","H"],WS:["h","H"],"001":["H","h"],AL:["h","H","hB"],TD:["h","H","hB"],"ca-ES":["H","h","hB"],CF:["H","h","hB"],CM:["H","h","hB"],"fr-CA":["H","h","hB"],"gl-ES":["H","h","hB"],"it-CH":["H","h","hB"],"it-IT":["H","h","hB"],LU:["H","h","hB"],NP:["H","h","hB"],PF:["H","h","hB"],SC:["H","h","hB"],SM:["H","h","hB"],SN:["H","h","hB"],TF:["H","h","hB"],VA:["H","h","hB"],CY:["h","H","hb","hB"],GR:["h","H","hb","hB"],CO:["h","H","hB","hb"],DO:["h","H","hB","hb"],KP:["h","H","hB","hb"],KR:["h","H","hB","hb"],NA:["h","H","hB","hb"],PA:["h","H","hB","hb"],PR:["h","H","hB","hb"],VE:["h","H","hB","hb"],AC:["H","h","hb","hB"],AI:["H","h","hb","hB"],BW:["H","h","hb","hB"],BZ:["H","h","hb","hB"],CC:["H","h","hb","hB"],CK:["H","h","hb","hB"],CX:["H","h","hb","hB"],DG:["H","h","hb","hB"],FK:["H","h","hb","hB"],GB:["H","h","hb","hB"],GG:["H","h","hb","hB"],GI:["H","h","hb","hB"],IE:["H","h","hb","hB"],IM:["H","h","hb","hB"],IO:["H","h","hb","hB"],JE:["H","h","hb","hB"],LT:["H","h","hb","hB"],MK:["H","h","hb","hB"],MN:["H","h","hb","hB"],MS:["H","h","hb","hB"],NF:["H","h","hb","hB"],NG:["H","h","hb","hB"],NR:["H","h","hb","hB"],NU:["H","h","hb","hB"],PN:["H","h","hb","hB"],SH:["H","h","hb","hB"],SX:["H","h","hb","hB"],TA:["H","h","hb","hB"],ZA:["H","h","hb","hB"],"af-ZA":["H","h","hB","hb"],AR:["H","h","hB","hb"],CL:["H","h","hB","hb"],CR:["H","h","hB","hb"],CU:["H","h","hB","hb"],EA:["H","h","hB","hb"],"es-BO":["H","h","hB","hb"],"es-BR":["H","h","hB","hb"],"es-EC":["H","h","hB","hb"],"es-ES":["H","h","hB","hb"],"es-GQ":["H","h","hB","hb"],"es-PE":["H","h","hB","hb"],GT:["H","h","hB","hb"],HN:["H","h","hB","hb"],IC:["H","h","hB","hb"],KG:["H","h","hB","hb"],KM:["H","h","hB","hb"],LK:["H","h","hB","hb"],MA:["H","h","hB","hb"],MX:["H","h","hB","hb"],NI:["H","h","hB","hb"],PY:["H","h","hB","hb"],SV:["H","h","hB","hb"],UY:["H","h","hB","hb"],JP:["H","h","K"],AD:["H","hB"],AM:["H","hB"],AO:["H","hB"],AT:["H","hB"],AW:["H","hB"],BE:["H","hB"],BF:["H","hB"],BJ:["H","hB"],BL:["H","hB"],BR:["H","hB"],CG:["H","hB"],CI:["H","hB"],CV:["H","hB"],DE:["H","hB"],EE:["H","hB"],FR:["H","hB"],GA:["H","hB"],GF:["H","hB"],GN:["H","hB"],GP:["H","hB"],GW:["H","hB"],HR:["H","hB"],IL:["H","hB"],IT:["H","hB"],KZ:["H","hB"],MC:["H","hB"],MD:["H","hB"],MF:["H","hB"],MQ:["H","hB"],MZ:["H","hB"],NC:["H","hB"],NL:["H","hB"],PM:["H","hB"],PT:["H","hB"],RE:["H","hB"],RO:["H","hB"],SI:["H","hB"],SR:["H","hB"],ST:["H","hB"],TG:["H","hB"],TR:["H","hB"],WF:["H","hB"],YT:["H","hB"],BD:["h","hB","H"],PK:["h","hB","H"],AZ:["H","hB","h"],BA:["H","hB","h"],BG:["H","hB","h"],CH:["H","hB","h"],GE:["H","hB","h"],LI:["H","hB","h"],ME:["H","hB","h"],RS:["H","hB","h"],UA:["H","hB","h"],UZ:["H","hB","h"],XK:["H","hB","h"],AG:["h","hb","H","hB"],AU:["h","hb","H","hB"],BB:["h","hb","H","hB"],BM:["h","hb","H","hB"],BS:["h","hb","H","hB"],CA:["h","hb","H","hB"],DM:["h","hb","H","hB"],"en-001":["h","hb","H","hB"],FJ:["h","hb","H","hB"],FM:["h","hb","H","hB"],GD:["h","hb","H","hB"],GM:["h","hb","H","hB"],GU:["h","hb","H","hB"],GY:["h","hb","H","hB"],JM:["h","hb","H","hB"],KI:["h","hb","H","hB"],KN:["h","hb","H","hB"],KY:["h","hb","H","hB"],LC:["h","hb","H","hB"],LR:["h","hb","H","hB"],MH:["h","hb","H","hB"],MP:["h","hb","H","hB"],MW:["h","hb","H","hB"],NZ:["h","hb","H","hB"],SB:["h","hb","H","hB"],SG:["h","hb","H","hB"],SL:["h","hb","H","hB"],SS:["h","hb","H","hB"],SZ:["h","hb","H","hB"],TC:["h","hb","H","hB"],TT:["h","hb","H","hB"],UM:["h","hb","H","hB"],US:["h","hb","H","hB"],VC:["h","hb","H","hB"],VG:["h","hb","H","hB"],VI:["h","hb","H","hB"],ZM:["h","hb","H","hB"],BO:["H","hB","h","hb"],EC:["H","hB","h","hb"],ES:["H","hB","h","hb"],GQ:["H","hB","h","hb"],PE:["H","hB","h","hb"],AE:["h","hB","hb","H"],"ar-001":["h","hB","hb","H"],BH:["h","hB","hb","H"],DZ:["h","hB","hb","H"],EG:["h","hB","hb","H"],EH:["h","hB","hb","H"],HK:["h","hB","hb","H"],IQ:["h","hB","hb","H"],JO:["h","hB","hb","H"],KW:["h","hB","hb","H"],LB:["h","hB","hb","H"],LY:["h","hB","hb","H"],MO:["h","hB","hb","H"],MR:["h","hB","hb","H"],OM:["h","hB","hb","H"],PH:["h","hB","hb","H"],PS:["h","hB","hb","H"],QA:["h","hB","hb","H"],SA:["h","hB","hb","H"],SD:["h","hB","hb","H"],SY:["h","hB","hb","H"],TN:["h","hB","hb","H"],YE:["h","hB","hb","H"],AF:["H","hb","hB","h"],LA:["H","hb","hB","h"],CN:["H","hB","hb","h"],LV:["H","hB","hb","h"],TL:["H","hB","hb","h"],"zu-ZA":["H","hB","hb","h"],CD:["hB","H"],IR:["hB","H"],"hi-IN":["hB","h","H"],"kn-IN":["hB","h","H"],"ml-IN":["hB","h","H"],"te-IN":["hB","h","H"],KH:["hB","h","H","hb"],"ta-IN":["hB","h","hb","H"],BN:["hb","hB","h","H"],MY:["hb","hB","h","H"],ET:["hB","hb","h","H"],"gu-IN":["hB","hb","h","H"],"mr-IN":["hB","hb","h","H"],"pa-IN":["hB","hb","h","H"],TW:["hB","hb","h","H"],KE:["hB","hb","H","h"],MM:["hB","hb","H","h"],TZ:["hB","hb","H","h"],UG:["hB","hb","H","h"]}
function I(e){var t=e.hourCycle
if(void 0===t&&e.hourCycles&&e.hourCycles.length&&(t=e.hourCycles[0]),t)switch(t){case"h24":return"k"
case"h23":return"H"
case"h12":return"h"
case"h11":return"K"
default:throw new Error("Invalid hourCycle")}var r,n=e.language
return"root"!==n&&(r=e.maximize().region),(N[r||""]||N[n||""]||N["".concat(n,"-001")]||N["001"])[0]}var O=new RegExp("^".concat(d.source,"*")),D=new RegExp("".concat(d.source,"*$"))
function M(e,t){return{start:e,end:t}}var U=!!String.prototype.startsWith,G=!!String.fromCodePoint,F=!!Object.fromEntries,x=!!String.prototype.codePointAt,k=!!String.prototype.trimStart,V=!!String.prototype.trimEnd,X=Number.isSafeInteger?Number.isSafeInteger:function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e&&Math.abs(e)<=9007199254740991},z=!0
try{z="a"===(null===(w=J("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu").exec("a"))||void 0===w?void 0:w[0])}catch(e){z=!1}var K,j=U?function(e,t,r){return e.startsWith(t,r)}:function(e,t,r){return e.slice(r,r+t.length)===t},Z=G?String.fromCodePoint:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]
for(var r,n="",i=e.length,o=0;i>o;){if((r=e[o++])>1114111)throw RangeError(r+" is not a valid code point")
n+=r<65536?String.fromCharCode(r):String.fromCharCode(55296+((r-=65536)>>10),r%1024+56320)}return n},W=F?Object.fromEntries:function(e){for(var t={},r=0,n=e;r<n.length;r++){var i=n[r],o=i[0],a=i[1]
t[o]=a}return t},Y=x?function(e,t){return e.codePointAt(t)}:function(e,t){var r=e.length
if(!(t<0||t>=r)){var n,i=e.charCodeAt(t)
return i<55296||i>56319||t+1===r||(n=e.charCodeAt(t+1))<56320||n>57343?i:n-56320+(i-55296<<10)+65536}},Q=k?function(e){return e.trimStart()}:function(e){return e.replace(O,"")},q=V?function(e){return e.trimEnd()}:function(e){return e.replace(D,"")}
function J(e,t){return new RegExp(e,t)}if(z){var $=J("([^\\p{White_Space}\\p{Pattern_Syntax}]*)","yu")
K=function(e,t){var r
return $.lastIndex=t,null!==(r=$.exec(e)[1])&&void 0!==r?r:""}}else K=function(e,t){for(var r=[];;){var n=Y(e,t)
if(void 0===n||re(n)||ne(n))break
r.push(n),t+=n>=65536?2:1}return Z.apply(void 0,r)}
var ee=function(){function e(e,t){void 0===t&&(t={}),this.message=e,this.position={offset:0,line:1,column:1},this.ignoreTag=!!t.ignoreTag,this.locale=t.locale,this.requiresOtherClause=!!t.requiresOtherClause,this.shouldParseSkeletons=!!t.shouldParseSkeletons}return e.prototype.parse=function(){if(0!==this.offset())throw Error("parser can only be used once")
return this.parseMessage(0,"",!1)},e.prototype.parseMessage=function(e,t,r){for(var o=[];!this.isEOF();){var a=this.char()
if(123===a){if((s=this.parseArgument(e,r)).err)return s
o.push(s.val)}else{if(125===a&&e>0)break
if(35!==a||"plural"!==t&&"selectordinal"!==t){if(60===a&&!this.ignoreTag&&47===this.peek()){if(r)break
return this.error(n.UNMATCHED_CLOSING_TAG,M(this.clonePosition(),this.clonePosition()))}if(60===a&&!this.ignoreTag&&te(this.peek()||0)){if((s=this.parseTag(e,t)).err)return s
o.push(s.val)}else{var s
if((s=this.parseLiteral(e,t)).err)return s
o.push(s.val)}}else{var u=this.clonePosition()
this.bump(),o.push({type:i.pound,location:M(u,this.clonePosition())})}}}return{val:o,err:null}},e.prototype.parseTag=function(e,t){var r=this.clonePosition()
this.bump()
var o=this.parseTagName()
if(this.bumpSpace(),this.bumpIf("/>"))return{val:{type:i.literal,value:"<".concat(o,"/>"),location:M(r,this.clonePosition())},err:null}
if(this.bumpIf(">")){var a=this.parseMessage(e+1,t,!0)
if(a.err)return a
var s=a.val,u=this.clonePosition()
if(this.bumpIf("</")){if(this.isEOF()||!te(this.char()))return this.error(n.INVALID_TAG,M(u,this.clonePosition()))
var h=this.clonePosition()
return o!==this.parseTagName()?this.error(n.UNMATCHED_CLOSING_TAG,M(h,this.clonePosition())):(this.bumpSpace(),this.bumpIf(">")?{val:{type:i.tag,value:o,children:s,location:M(r,this.clonePosition())},err:null}:this.error(n.INVALID_TAG,M(u,this.clonePosition())))}return this.error(n.UNCLOSED_TAG,M(r,this.clonePosition()))}return this.error(n.INVALID_TAG,M(r,this.clonePosition()))},e.prototype.parseTagName=function(){var e,t=this.offset()
for(this.bump();!this.isEOF()&&(45===(e=this.char())||46===e||e>=48&&e<=57||95===e||e>=97&&e<=122||e>=65&&e<=90||183==e||e>=192&&e<=214||e>=216&&e<=246||e>=248&&e<=893||e>=895&&e<=8191||e>=8204&&e<=8205||e>=8255&&e<=8256||e>=8304&&e<=8591||e>=11264&&e<=12271||e>=12289&&e<=55295||e>=63744&&e<=64975||e>=65008&&e<=65533||e>=65536&&e<=983039);)this.bump()
return this.message.slice(t,this.offset())},e.prototype.parseLiteral=function(e,t){for(var r=this.clonePosition(),n="";;){var o=this.tryParseQuote(t)
if(o)n+=o
else{var a=this.tryParseUnquoted(e,t)
if(a)n+=a
else{var s=this.tryParseLeftAngleBracket()
if(!s)break
n+=s}}}var u=M(r,this.clonePosition())
return{val:{type:i.literal,value:n,location:u},err:null}},e.prototype.tryParseLeftAngleBracket=function(){return this.isEOF()||60!==this.char()||!this.ignoreTag&&(te(e=this.peek()||0)||47===e)?null:(this.bump(),"<")
var e},e.prototype.tryParseQuote=function(e){if(this.isEOF()||39!==this.char())return null
switch(this.peek()){case 39:return this.bump(),this.bump(),"'"
case 123:case 60:case 62:case 125:break
case 35:if("plural"===e||"selectordinal"===e)break
return null
default:return null}this.bump()
var t=[this.char()]
for(this.bump();!this.isEOF();){var r=this.char()
if(39===r){if(39!==this.peek()){this.bump()
break}t.push(39),this.bump()}else t.push(r)
this.bump()}return Z.apply(void 0,t)},e.prototype.tryParseUnquoted=function(e,t){if(this.isEOF())return null
var r=this.char()
return 60===r||123===r||35===r&&("plural"===t||"selectordinal"===t)||125===r&&e>0?null:(this.bump(),Z(r))},e.prototype.parseArgument=function(e,t){var r=this.clonePosition()
if(this.bump(),this.bumpSpace(),this.isEOF())return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE,M(r,this.clonePosition()))
if(125===this.char())return this.bump(),this.error(n.EMPTY_ARGUMENT,M(r,this.clonePosition()))
var o=this.parseIdentifierIfPossible().value
if(!o)return this.error(n.MALFORMED_ARGUMENT,M(r,this.clonePosition()))
if(this.bumpSpace(),this.isEOF())return this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE,M(r,this.clonePosition()))
switch(this.char()){case 125:return this.bump(),{val:{type:i.argument,value:o,location:M(r,this.clonePosition())},err:null}
case 44:return this.bump(),this.bumpSpace(),this.isEOF()?this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE,M(r,this.clonePosition())):this.parseArgumentOptions(e,t,o,r)
default:return this.error(n.MALFORMED_ARGUMENT,M(r,this.clonePosition()))}},e.prototype.parseIdentifierIfPossible=function(){var e=this.clonePosition(),t=this.offset(),r=K(this.message,t),n=t+r.length
return this.bumpTo(n),{value:r,location:M(e,this.clonePosition())}},e.prototype.parseArgumentOptions=function(e,t,r,s){var u,h=this.clonePosition(),c=this.parseIdentifierIfPossible().value,l=this.clonePosition()
switch(c){case"":return this.error(n.EXPECT_ARGUMENT_TYPE,M(h,l))
case"number":case"date":case"time":this.bumpSpace()
var p=null
if(this.bumpIf(",")){this.bumpSpace()
var f=this.clonePosition()
if((T=this.parseSimpleArgStyleIfPossible()).err)return T
if(0===(b=q(T.val)).length)return this.error(n.EXPECT_ARGUMENT_STYLE,M(this.clonePosition(),this.clonePosition()))
p={style:b,styleLocation:M(f,this.clonePosition())}}if((H=this.tryParseArgumentClose(s)).err)return H
var g=M(s,this.clonePosition())
if(p&&j(null==p?void 0:p.style,"::",0)){var m=Q(p.style.slice(2))
if("number"===c)return(T=this.parseNumberSkeletonFromString(m,p.styleLocation)).err?T:{val:{type:i.number,value:r,location:g,style:T.val},err:null}
if(0===m.length)return this.error(n.EXPECT_DATE_TIME_SKELETON,g)
var E=m
this.locale&&(E=function(e,t){for(var r="",n=0;n<e.length;n++){var i=e.charAt(n)
if("j"===i){for(var o=0;n+1<e.length&&e.charAt(n+1)===i;)o++,n++
var a=1+(1&o),s=o<2?1:3+(o>>1),u=I(t)
for("H"!=u&&"k"!=u||(s=0);s-- >0;)r+="a"
for(;a-- >0;)r=u+r}else r+="J"===i?"H":i}return r}(m,this.locale))
var b={type:o.dateTime,pattern:E,location:p.styleLocation,parsedOptions:this.shouldParseSkeletons?v(E):{}}
return{val:{type:"date"===c?i.date:i.time,value:r,location:g,style:b},err:null}}return{val:{type:"number"===c?i.number:"date"===c?i.date:i.time,value:r,location:g,style:null!==(u=null==p?void 0:p.style)&&void 0!==u?u:null},err:null}
case"plural":case"selectordinal":case"select":var d=this.clonePosition()
if(this.bumpSpace(),!this.bumpIf(","))return this.error(n.EXPECT_SELECT_ARGUMENT_OPTIONS,M(d,(0,a.pi)({},d)))
this.bumpSpace()
var y=this.parseIdentifierIfPossible(),A=0
if("select"!==c&&"offset"===y.value){if(!this.bumpIf(":"))return this.error(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,M(this.clonePosition(),this.clonePosition()))
var T
if(this.bumpSpace(),(T=this.tryParseDecimalInteger(n.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,n.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err)return T
this.bumpSpace(),y=this.parseIdentifierIfPossible(),A=T.val}var H,B=this.tryParsePluralOrSelectOptions(e,c,t,y)
if(B.err)return B
if((H=this.tryParseArgumentClose(s)).err)return H
var _=M(s,this.clonePosition())
return"select"===c?{val:{type:i.select,value:r,options:W(B.val),location:_},err:null}:{val:{type:i.plural,value:r,options:W(B.val),offset:A,pluralType:"plural"===c?"cardinal":"ordinal",location:_},err:null}
default:return this.error(n.INVALID_ARGUMENT_TYPE,M(h,l))}},e.prototype.tryParseArgumentClose=function(e){return this.isEOF()||125!==this.char()?this.error(n.EXPECT_ARGUMENT_CLOSING_BRACE,M(e,this.clonePosition())):(this.bump(),{val:!0,err:null})},e.prototype.parseSimpleArgStyleIfPossible=function(){for(var e=0,t=this.clonePosition();!this.isEOF();)switch(this.char()){case 39:this.bump()
var r=this.clonePosition()
if(!this.bumpUntil("'"))return this.error(n.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,M(r,this.clonePosition()))
this.bump()
break
case 123:e+=1,this.bump()
break
case 125:if(!(e>0))return{val:this.message.slice(t.offset,this.offset()),err:null}
e-=1
break
default:this.bump()}return{val:this.message.slice(t.offset,this.offset()),err:null}},e.prototype.parseNumberSkeletonFromString=function(e,t){var r=[]
try{r=function(e){if(0===e.length)throw new Error("Number skeleton cannot be empty")
for(var t=[],r=0,n=e.split(A).filter((function(e){return e.length>0}));r<n.length;r++){var i=n[r].split("/")
if(0===i.length)throw new Error("Invalid number skeleton")
for(var o=i[0],a=i.slice(1),s=0,u=a;s<u.length;s++)if(0===u[s].length)throw new Error("Invalid number skeleton")
t.push({stem:o,options:a})}return t}(e)}catch(e){return this.error(n.INVALID_NUMBER_SKELETON,t)}return{val:{type:o.number,tokens:r,location:t,parsedOptions:this.shouldParseSkeletons?L(r):{}},err:null}},e.prototype.tryParsePluralOrSelectOptions=function(e,t,r,i){for(var o,a=!1,s=[],u=new Set,h=i.value,c=i.location;;){if(0===h.length){var l=this.clonePosition()
if("select"===t||!this.bumpIf("="))break
var p=this.tryParseDecimalInteger(n.EXPECT_PLURAL_ARGUMENT_SELECTOR,n.INVALID_PLURAL_ARGUMENT_SELECTOR)
if(p.err)return p
c=M(l,this.clonePosition()),h=this.message.slice(l.offset,this.offset())}if(u.has(h))return this.error("select"===t?n.DUPLICATE_SELECT_ARGUMENT_SELECTOR:n.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,c)
"other"===h&&(a=!0),this.bumpSpace()
var f=this.clonePosition()
if(!this.bumpIf("{"))return this.error("select"===t?n.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT:n.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,M(this.clonePosition(),this.clonePosition()))
var g=this.parseMessage(e+1,t,r)
if(g.err)return g
var m=this.tryParseArgumentClose(f)
if(m.err)return m
s.push([h,{value:g.val,location:M(f,this.clonePosition())}]),u.add(h),this.bumpSpace(),h=(o=this.parseIdentifierIfPossible()).value,c=o.location}return 0===s.length?this.error("select"===t?n.EXPECT_SELECT_ARGUMENT_SELECTOR:n.EXPECT_PLURAL_ARGUMENT_SELECTOR,M(this.clonePosition(),this.clonePosition())):this.requiresOtherClause&&!a?this.error(n.MISSING_OTHER_CLAUSE,M(this.clonePosition(),this.clonePosition())):{val:s,err:null}},e.prototype.tryParseDecimalInteger=function(e,t){var r=1,n=this.clonePosition()
this.bumpIf("+")||this.bumpIf("-")&&(r=-1)
for(var i=!1,o=0;!this.isEOF();){var a=this.char()
if(!(a>=48&&a<=57))break
i=!0,o=10*o+(a-48),this.bump()}var s=M(n,this.clonePosition())
return i?X(o*=r)?{val:o,err:null}:this.error(t,s):this.error(e,s)},e.prototype.offset=function(){return this.position.offset},e.prototype.isEOF=function(){return this.offset()===this.message.length},e.prototype.clonePosition=function(){return{offset:this.position.offset,line:this.position.line,column:this.position.column}},e.prototype.char=function(){var e=this.position.offset
if(e>=this.message.length)throw Error("out of bound")
var t=Y(this.message,e)
if(void 0===t)throw Error("Offset ".concat(e," is at invalid UTF-16 code unit boundary"))
return t},e.prototype.error=function(e,t){return{val:null,err:{kind:e,message:this.message,location:t}}},e.prototype.bump=function(){if(!this.isEOF()){var e=this.char()
10===e?(this.position.line+=1,this.position.column=1,this.position.offset+=1):(this.position.column+=1,this.position.offset+=e<65536?1:2)}},e.prototype.bumpIf=function(e){if(j(this.message,e,this.offset())){for(var t=0;t<e.length;t++)this.bump()
return!0}return!1},e.prototype.bumpUntil=function(e){var t=this.offset(),r=this.message.indexOf(e,t)
return r>=0?(this.bumpTo(r),!0):(this.bumpTo(this.message.length),!1)},e.prototype.bumpTo=function(e){if(this.offset()>e)throw Error("targetOffset ".concat(e," must be greater than or equal to the current offset ").concat(this.offset()))
for(e=Math.min(e,this.message.length);;){var t=this.offset()
if(t===e)break
if(t>e)throw Error("targetOffset ".concat(e," is at invalid UTF-16 code unit boundary"))
if(this.bump(),this.isEOF())break}},e.prototype.bumpSpace=function(){for(;!this.isEOF()&&re(this.char());)this.bump()},e.prototype.peek=function(){if(this.isEOF())return null
var e=this.char(),t=this.offset(),r=this.message.charCodeAt(t+(e>=65536?2:1))
return null!=r?r:null},e}()
function te(e){return e>=97&&e<=122||e>=65&&e<=90}function re(e){return e>=9&&e<=13||32===e||133===e||e>=8206&&e<=8207||8232===e||8233===e}function ne(e){return e>=33&&e<=35||36===e||e>=37&&e<=39||40===e||41===e||42===e||43===e||44===e||45===e||e>=46&&e<=47||e>=58&&e<=59||e>=60&&e<=62||e>=63&&e<=64||91===e||92===e||93===e||94===e||96===e||123===e||124===e||125===e||126===e||161===e||e>=162&&e<=165||166===e||167===e||169===e||171===e||172===e||174===e||176===e||177===e||182===e||187===e||191===e||215===e||247===e||e>=8208&&e<=8213||e>=8214&&e<=8215||8216===e||8217===e||8218===e||e>=8219&&e<=8220||8221===e||8222===e||8223===e||e>=8224&&e<=8231||e>=8240&&e<=8248||8249===e||8250===e||e>=8251&&e<=8254||e>=8257&&e<=8259||8260===e||8261===e||8262===e||e>=8263&&e<=8273||8274===e||8275===e||e>=8277&&e<=8286||e>=8592&&e<=8596||e>=8597&&e<=8601||e>=8602&&e<=8603||e>=8604&&e<=8607||8608===e||e>=8609&&e<=8610||8611===e||e>=8612&&e<=8613||8614===e||e>=8615&&e<=8621||8622===e||e>=8623&&e<=8653||e>=8654&&e<=8655||e>=8656&&e<=8657||8658===e||8659===e||8660===e||e>=8661&&e<=8691||e>=8692&&e<=8959||e>=8960&&e<=8967||8968===e||8969===e||8970===e||8971===e||e>=8972&&e<=8991||e>=8992&&e<=8993||e>=8994&&e<=9e3||9001===e||9002===e||e>=9003&&e<=9083||9084===e||e>=9085&&e<=9114||e>=9115&&e<=9139||e>=9140&&e<=9179||e>=9180&&e<=9185||e>=9186&&e<=9254||e>=9255&&e<=9279||e>=9280&&e<=9290||e>=9291&&e<=9311||e>=9472&&e<=9654||9655===e||e>=9656&&e<=9664||9665===e||e>=9666&&e<=9719||e>=9720&&e<=9727||e>=9728&&e<=9838||9839===e||e>=9840&&e<=10087||10088===e||10089===e||10090===e||10091===e||10092===e||10093===e||10094===e||10095===e||10096===e||10097===e||10098===e||10099===e||10100===e||10101===e||e>=10132&&e<=10175||e>=10176&&e<=10180||10181===e||10182===e||e>=10183&&e<=10213||10214===e||10215===e||10216===e||10217===e||10218===e||10219===e||10220===e||10221===e||10222===e||10223===e||e>=10224&&e<=10239||e>=10240&&e<=10495||e>=10496&&e<=10626||10627===e||10628===e||10629===e||10630===e||10631===e||10632===e||10633===e||10634===e||10635===e||10636===e||10637===e||10638===e||10639===e||10640===e||10641===e||10642===e||10643===e||10644===e||10645===e||10646===e||10647===e||10648===e||e>=10649&&e<=10711||10712===e||10713===e||10714===e||10715===e||e>=10716&&e<=10747||10748===e||10749===e||e>=10750&&e<=11007||e>=11008&&e<=11055||e>=11056&&e<=11076||e>=11077&&e<=11078||e>=11079&&e<=11084||e>=11085&&e<=11123||e>=11124&&e<=11125||e>=11126&&e<=11157||11158===e||e>=11159&&e<=11263||e>=11776&&e<=11777||11778===e||11779===e||11780===e||11781===e||e>=11782&&e<=11784||11785===e||11786===e||11787===e||11788===e||11789===e||e>=11790&&e<=11798||11799===e||e>=11800&&e<=11801||11802===e||11803===e||11804===e||11805===e||e>=11806&&e<=11807||11808===e||11809===e||11810===e||11811===e||11812===e||11813===e||11814===e||11815===e||11816===e||11817===e||e>=11818&&e<=11822||11823===e||e>=11824&&e<=11833||e>=11834&&e<=11835||e>=11836&&e<=11839||11840===e||11841===e||11842===e||e>=11843&&e<=11855||e>=11856&&e<=11857||11858===e||e>=11859&&e<=11903||e>=12289&&e<=12291||12296===e||12297===e||12298===e||12299===e||12300===e||12301===e||12302===e||12303===e||12304===e||12305===e||e>=12306&&e<=12307||12308===e||12309===e||12310===e||12311===e||12312===e||12313===e||12314===e||12315===e||12316===e||12317===e||e>=12318&&e<=12319||12320===e||12336===e||64830===e||64831===e||e>=65093&&e<=65094}function ie(e){e.forEach((function(e){if(delete e.location,p(e)||f(e))for(var t in e.options)delete e.options[t].location,ie(e.options[t].value)
else h(e)&&E(e.style)||(c(e)||l(e))&&b(e.style)?delete e.style.location:m(e)&&ie(e.children)}))}function oe(e,t){void 0===t&&(t={}),t=(0,a.pi)({shouldParseSkeletons:!0,requiresOtherClause:!0},t)
var r=new ee(e,t).parse()
if(r.err){var i=SyntaxError(n[r.err.kind])
throw i.location=r.err.location,i.originalMessage=r.err.message,i}return(null==t?void 0:t.captureLocation)||ie(r.val),r.val}function ae(e,t){var r=t&&t.cache?t.cache:ge,n=t&&t.serializer?t.serializer:le
return(t&&t.strategy?t.strategy:ce)(e,{cache:r,serializer:n})}function se(e,t,r,n){var i,o=null==(i=n)||"number"==typeof i||"boolean"==typeof i?n:r(n),a=t.get(o)
return void 0===a&&(a=e.call(this,n),t.set(o,a)),a}function ue(e,t,r){var n=Array.prototype.slice.call(arguments,3),i=r(n),o=t.get(i)
return void 0===o&&(o=e.apply(this,n),t.set(i,o)),o}function he(e,t,r,n,i){return r.bind(t,e,n,i)}function ce(e,t){return he(e,this,1===e.length?se:ue,t.cache.create(),t.serializer)}var le=function(){return JSON.stringify(arguments)}
function pe(){this.cache=Object.create(null)}pe.prototype.get=function(e){return this.cache[e]},pe.prototype.set=function(e,t){this.cache[e]=t}
var fe,ge={create:function(){return new pe}},me={variadic:function(e,t){return he(e,this,ue,t.cache.create(),t.serializer)},monadic:function(e,t){return he(e,this,se,t.cache.create(),t.serializer)}}
!function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"}(fe||(fe={}))
var Ee,be=function(e){function t(t,r,n){var i=e.call(this,t)||this
return i.code=r,i.originalMessage=n,i}return(0,a.ZT)(t,e),t.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},t}(Error),de=function(e){function t(t,r,n,i){return e.call(this,'Invalid values for "'.concat(t,'": "').concat(r,'". Options are "').concat(Object.keys(n).join('", "'),'"'),fe.INVALID_VALUE,i)||this}return(0,a.ZT)(t,e),t}(be),ye=function(e){function t(t,r,n){return e.call(this,'Value for "'.concat(t,'" must be of type ').concat(r),fe.INVALID_VALUE,n)||this}return(0,a.ZT)(t,e),t}(be),ve=function(e){function t(t,r){return e.call(this,'The intl string context variable "'.concat(t,'" was not provided to the string "').concat(r,'"'),fe.MISSING_VALUE,r)||this}return(0,a.ZT)(t,e),t}(be)
function Ae(e){return"function"==typeof e}function Te(e,t,r,n,i,o,a){if(1===e.length&&s(e[0]))return[{type:Ee.literal,value:e[0].value}]
for(var d=[],y=0,v=e;y<v.length;y++){var A=v[y]
if(s(A))d.push({type:Ee.literal,value:A.value})
else if(g(A))"number"==typeof o&&d.push({type:Ee.literal,value:r.getNumberFormat(t).format(o)})
else{var T=A.value
if(!i||!(T in i))throw new ve(T,a)
var H=i[T]
if(u(A))H&&"string"!=typeof H&&"number"!=typeof H||(H="string"==typeof H||"number"==typeof H?String(H):""),d.push({type:"string"==typeof H?Ee.literal:Ee.object,value:H})
else if(c(A)){var B="string"==typeof A.style?n.date[A.style]:b(A.style)?A.style.parsedOptions:void 0
d.push({type:Ee.literal,value:r.getDateTimeFormat(t,B).format(H)})}else if(l(A))B="string"==typeof A.style?n.time[A.style]:b(A.style)?A.style.parsedOptions:n.time.medium,d.push({type:Ee.literal,value:r.getDateTimeFormat(t,B).format(H)})
else if(h(A))(B="string"==typeof A.style?n.number[A.style]:E(A.style)?A.style.parsedOptions:void 0)&&B.scale&&(H*=B.scale||1),d.push({type:Ee.literal,value:r.getNumberFormat(t,B).format(H)})
else{if(m(A)){var _=A.children,C=A.value,R=i[C]
if(!Ae(R))throw new ye(C,"function",a)
var P=R(Te(_,t,r,n,i,o).map((function(e){return e.value})))
Array.isArray(P)||(P=[P]),d.push.apply(d,P.map((function(e){return{type:"string"==typeof e?Ee.literal:Ee.object,value:e}})))}if(p(A)){if(!(S=A.options[H]||A.options.other))throw new de(A.value,H,Object.keys(A.options),a)
d.push.apply(d,Te(S.value,t,r,n,i))}else if(f(A)){var S
if(!(S=A.options["=".concat(H)])){if(!Intl.PluralRules)throw new be('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',fe.MISSING_INTL_API,a)
var L=r.getPluralRules(t,{type:A.pluralType}).select(H-(A.offset||0))
S=A.options[L]||A.options.other}if(!S)throw new de(A.value,H,Object.keys(A.options),a)
d.push.apply(d,Te(S.value,t,r,n,i,H-(A.offset||0)))}}}}return(w=d).length<2?w:w.reduce((function(e,t){var r=e[e.length-1]
return r&&r.type===Ee.literal&&t.type===Ee.literal?r.value+=t.value:e.push(t),e}),[])
var w}function He(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,r){e[t]=r}}}}}!function(e){e[e.literal=0]="literal",e[e.object=1]="object"}(Ee||(Ee={}))
var Be=function(){function e(t,r,n,i){var o,s,u,h=this
if(void 0===r&&(r=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(e){var t=h.formatToParts(e)
if(1===t.length)return t[0].value
var r=t.reduce((function(e,t){return e.length&&t.type===Ee.literal&&"string"==typeof e[e.length-1]?e[e.length-1]+=t.value:e.push(t.value),e}),[])
return r.length<=1?r[0]||"":r},this.formatToParts=function(e){return Te(h.ast,h.locales,h.formatters,h.formats,e,void 0,h.message)},this.resolvedOptions=function(){return{locale:h.resolvedLocale.toString()}},this.getAst=function(){return h.ast},this.locales=r,this.resolvedLocale=e.resolveLocale(r),"string"==typeof t){if(this.message=t,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`")
this.ast=e.__parse(t,{ignoreTag:null==i?void 0:i.ignoreTag,locale:this.resolvedLocale})}else this.ast=t
if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.")
this.formats=(s=e.formats,(u=n)?Object.keys(s).reduce((function(e,t){var r,n
return e[t]=(r=s[t],(n=u[t])?(0,a.pi)((0,a.pi)((0,a.pi)({},r||{}),n||{}),Object.keys(r).reduce((function(e,t){return e[t]=(0,a.pi)((0,a.pi)({},r[t]),n[t]||{}),e}),{})):r),e}),(0,a.pi)({},s)):s),this.formatters=i&&i.formatters||(void 0===(o=this.formatterCache)&&(o={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:ae((function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
return new((e=Intl.NumberFormat).bind.apply(e,(0,a.ev)([void 0],t,!1)))}),{cache:He(o.number),strategy:me.variadic}),getDateTimeFormat:ae((function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
return new((e=Intl.DateTimeFormat).bind.apply(e,(0,a.ev)([void 0],t,!1)))}),{cache:He(o.dateTime),strategy:me.variadic}),getPluralRules:ae((function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r]
return new((e=Intl.PluralRules).bind.apply(e,(0,a.ev)([void 0],t,!1)))}),{cache:He(o.pluralRules),strategy:me.variadic})})}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=(new Intl.NumberFormat).resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(e){var t=Intl.NumberFormat.supportedLocalesOf(e)
return t.length>0?new Intl.Locale(t[0]):new Intl.Locale("string"==typeof e?e:e[0])},e.__parse=oe,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}()
const _e=Be},582:(e,t,r)=>{"use strict"
r.d(t,{ZT:()=>i,ev:()=>a,pi:()=>o})
var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)}
function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null")
function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])
return e},o.apply(this,arguments)}
function a(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i])
return e.concat(n||Array.prototype.slice.call(t))}Object.create,Object.create}}])
