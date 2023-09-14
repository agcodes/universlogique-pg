"use strict"
define("universlogique-pg/app",["exports","@ember/application","ember-resolver","ember-load-initializers","universlogique-pg/config/environment"],(function(e,t,i,n,a){function s(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e
var i=e[Symbol.toPrimitive]
if(void 0!==i){var n=i.call(e,t||"default")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class r extends t.default{constructor(){super(...arguments),s(this,"modulePrefix",a.default.modulePrefix),s(this,"podModulePrefix",a.default.podModulePrefix),s(this,"Resolver",i.default)}}e.default=r,(0,n.default)(r,a.default.modulePrefix)})),define("universlogique-pg/component-managers/glimmer",["exports","@glimmer/component/-private/ember-component-manager"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("universlogique-pg/components/drawing-component",["exports","universlogique-pg/services/canvas2d-service","@glimmer/component","universlogique-pg/services/animation-service","universlogique-pg/services/colors-service"],(function(e,t,i,n,a){function s(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e
var i=e[Symbol.toPrimitive]
if(void 0!==i){var n=i.call(e,t||"default")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class r extends i.default{constructor(e,t){super(e,t),s(this,"canvasService",null),s(this,"animationService",null),s(this,"colorsService",null),s(this,"fps",50)}initComponent(e){this.intervalID=setTimeout((()=>{this.initRender(e)}),200)}initRender(e){this.colorsService=new a.default,this.canvasService=new t.default,this.canvasService.setContext(e),this.canvasService.setCanvasData(500,500,0,0)}addMainAnimation(e,t){this.withAnimation=!0,this.setAnimationService(),this.animationService.functions.animation=e,"number"==typeof t&&(this.fps=t)}setAnimationService(){null===this.animationService&&(this.animationService=new n.default)}startComponentAnimation(){this.startMainAnimation(this.fps)}startMainAnimation(e,t,i){this.setAnimationService(),"number"!=typeof e&&(e=this.fps),"boolean"!=typeof t&&(t=!0),this.startAnimation(e,"animation",t,i)}startAnimation(e,t,i,n){return this.animationOn=!0,this.animationService.startAnimation(e,t,i,n),!0}}e.default=r})),define("universlogique-pg/components/head-content",["exports","@ember/service","@glimmer/component","universlogique-pg/templates/head","@ember/component"],(function(e,t,i,n,a){var s,r,o
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
let u=(s=(0,t.inject)("head-data"),r=class extends i.default{constructor(){var e,t,i,n
super(...arguments),e=this,t="model",n=this,(i=o)&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(n):void 0})}},h=r.prototype,l="model",c=[s],d={configurable:!0,enumerable:!0,writable:!0,initializer:null},m={},Object.keys(d).forEach((function(e){m[e]=d[e]})),m.enumerable=!!m.enumerable,m.configurable=!!m.configurable,("value"in m||m.initializer)&&(m.writable=!0),m=c.slice().reverse().reduce((function(e,t){return t(h,l,e)||e}),m),f&&void 0!==m.initializer&&(m.value=m.initializer?m.initializer.call(f):void 0,m.initializer=void 0),void 0===m.initializer&&(Object.defineProperty(h,l,m),m=null),o=m,r)
var h,l,c,d,f,m
e.default=u,(0,a.setComponentTemplate)(n.default,u)})),define("universlogique-pg/components/head-layout",["exports","ember-cli-head/components/head-layout"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("universlogique-pg/components/link-to-external",["exports","ember-engines/components/link-to-external"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("universlogique-pg/components/radio-button",["exports","ember-radio-buttons/components/radio-button"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("universlogique-pg/config/asset-manifest",["exports","require","universlogique-pg/config/environment"],(function(e,t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
const n=i.default.modulePrefix,a=`${n}/config/asset-manifest`,s=`${n}/config/node-asset-manifest`
let r={}
try{if(t.default.has(s))r=(0,t.default)(s).default
else{const e=document.querySelector('meta[name="'+a+'"]').getAttribute("content")
r=JSON.parse(unescape(e))}}catch(u){throw new Error('Failed to load asset manifest. For browser environments, verify the meta tag with name "'+a+'" is present. For non-browser environments, verify that you included the node-asset-manifest module.')}var o=r
e.default=o})),define("universlogique-pg/helpers/app-version",["exports","@ember/component/helper","universlogique-pg/config/environment","ember-cli-app-version/utils/regexp"],(function(e,t,i,n){function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const a=i.default.APP.version
let s=t.versionOnly||t.hideSha,r=t.shaOnly||t.hideVersion,o=null
return s&&(t.showExtended&&(o=a.match(n.versionExtendedRegExp)),o||(o=a.match(n.versionRegExp))),r&&(o=a.match(n.shaRegExp)),o?o[0]:a}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=a,e.default=void 0
var s=(0,t.helper)(a)
e.default=s})),define("universlogique-pg/helpers/format-date",["exports","ember-intl/helpers/format-date"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("universlogique-pg/helpers/format-message",["exports","ember-intl/helpers/format-message"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("universlogique-pg/helpers/format-number",["exports","ember-intl/helpers/format-number"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("universlogique-pg/helpers/format-relative",["exports","ember-intl/helpers/format-relative"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("universlogique-pg/helpers/format-time",["exports","ember-intl/helpers/format-time"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("universlogique-pg/helpers/t",["exports","ember-intl/helpers/t"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("universlogique-pg/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","universlogique-pg/config/environment"],(function(e,t,i){let n,a
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i.default.APP&&(n=i.default.APP.name,a=i.default.APP.version)
var s={name:"App Version",initialize:(0,t.default)(n,a)}
e.default=s})),define("universlogique-pg/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i={name:"container-debug-adapter",initialize(){(arguments[1]||arguments[0]).register("container-debug-adapter:main",t.default)}}
e.default=i})),define("universlogique-pg/initializers/ember-engines-router-service",["exports","ember-engines-router-service/initializers/ember-engines-router-service.js"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("universlogique-pg/initializers/engines",["exports","ember-engines/initializers/engines"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"initialize",{enumerable:!0,get:function(){return t.initialize}})})),define("universlogique-pg/initializers/export-application-global",["exports","ember","universlogique-pg/config/environment"],(function(e,t,i){function n(){var e=arguments[1]||arguments[0]
if(!1!==i.default.exportApplicationGlobal){var n
if("undefined"!=typeof window)n=window
else if("undefined"!=typeof global)n=global
else{if("undefined"==typeof self)return
n=self}var a,s=i.default.exportApplicationGlobal
a="string"==typeof s?s:t.default.String.classify(i.default.modulePrefix),n[a]||(n[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[a]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.initialize=n
var a={name:"export-application-global",initialize:n}
e.default=a})),define("universlogique-pg/instance-initializers/head-browser",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t={name:"head-browser",initialize(){}}
e.default=t})),define("universlogique-pg/instance-initializers/load-asset-manifest",["exports","universlogique-pg/config/asset-manifest"],(function(e,t){function i(e){e.lookup("service:asset-loader").pushManifest(t.default)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.initialize=i
var n={name:"load-asset-manifest",initialize:i}
e.default=n})),define("universlogique-pg/modifiers/did-insert",["exports","@ember/render-modifiers/modifiers/did-insert"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("universlogique-pg/modifiers/did-update",["exports","@ember/render-modifiers/modifiers/did-update"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("universlogique-pg/modifiers/will-destroy",["exports","@ember/render-modifiers/modifiers/will-destroy"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("universlogique-pg/object/canvas/canvas-data-32",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=class{constructor(){this.isLittleEndian=!1,this.buf8=null,this.data=null,this.w=0,this.h=0,this.offSet=0}getImageData(e){e.data.set(this.buf8)}initialize(e,t,i,n){this.w=t,this.h=i,this.offSet=n
const a=new ArrayBuffer(e.data.length)
this.buf8=new Uint8ClampedArray(a),this.data=new Uint32Array(a),this.data[1]=168496141,this.isLittleEndian=!0,10===a[4]&&11===a[5]&&12===a[6]&&13===a[7]&&(this.isLittleEndian=!1)}addBackgroundInImageData(e){if(null===e)return!1
"number"!=typeof e[3]&&(e[3]=255)
const t=this.isLittleEndian?e[3]<<24|e[2]<<16|e[1]<<8|e[0]:e[0]<<24|e[1]<<16|e[2]<<8|e[3]
for(let i=0;i<this.data.length;i++)this.data[i]=t
return!0}addPointsInData(e,t,i){if(null===e||"object"!=typeof e)return!1
for(let n=0;n<e.length;n++)e[n]&&(e[n][3]?this.addOnePointInData(e[n],e[n][3],i):this.addOnePointInData(e[n],t,i))
return!0}addBackgroundInDrawingArea(e,t,i,n,a){for(let s=a;s<i;s++)for(let i=n;i<t;i++)this.addOnePointInData([i,s],e,1)}addOnePointInData(e,t,i){if(null===t)return!1
let n=Math.floor(e[0]),a=Math.floor(e[1])
i>1&&(2===i?(n-=1,a-=1):i%2==0?(n-=i/2,a-=i/2):(n-=(i-1)/2,a-=(i-1)/2))
for(let s=0;s<i;s++){for(let e=0;e<i;e++){if(n<0)return!1
if(a<0)return!1
if(n+1>this.w)return!1
if(a+1>this.h)return!1
const e=a*this.w+n
e>=0&&e<=this.data.length&&(("number"!=typeof t[3]||t[3]===1/0||t[3]>255)&&(t[3]=255),!0===this.isLittleEndian?this.data[e]=Math.round(t[3])<<24|Math.round(t[2])<<16|Math.round(t[1])<<8|Math.round(t[0]):this.data[e]=Math.round(t[0])<<24|Math.round(t[1])<<16|Math.round(t[2])<<8|Math.round(t[3])),n++}a++}return!0}}})),define("universlogique-pg/object/math/CComplex",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class t{constructor(e,t,i){this.a=e,this.b=t,this.c="number"==typeof i?i:0,this.square=0}transform(e){return null===e||0===e.length?this:(this.a+=e[0],1==e.length?this:(this.b+=e[1],2==e.length?this:(this.c+=e[2],3==e.length||(e.length>3&&(this.a*=e[3]),e.length>4&&(this.b*=e[4]),e.length>5&&(this.c*=e[5])),this)))}setSquare(){return this.square=this.squaresSum(),this.square}getArgument(){return Math.atan2(this.b,this.a)}squaresSum(){return this.a*this.a+this.b*this.b}getMagnitude(){return Math.sqrt(this.squaresSum())}signR(){return this.a<0?-1:0===this.a?0:this.a>0?1:void 0}addReal(e){return new t(this.a+e,this.b,this.c)}addImg(e){return new t(this.a,this.b+e,this.c)}add(e){return new t(this.a+e.a,this.b+e.b,this.c+e.c)}sub(e){return new t(this.a-e.a,this.b-e.b,this.c-e.c)}mul(e){return new t(this.a*e.a-this.b*e.b,this.b*e.a+this.a*e.b,this.c)}mulReal(e){return new t(this.a*e,this.b*e,this.c*e)}div(e){const i=e.a*e.a+e.b*e.b+e.c*e.c
return new t((this.a*e.a+this.b*e.b)/i,(this.b*e.a-this.a*e.b)/i,this.c)}inverse(){this.setSquare()
const e=new t(1,0,0),i=this.square+this.c*this.c
return new t((e.a*this.a+e.b*this.b)/i,(e.b*this.a-e.a*this.b)/i)}iAbs(){return new t(this.a,Math.abs(this.b),this.c)}rAbs(){return new t(Math.abs(this.a),this.b,this.c)}abs(){return new t(Math.abs(this.a),Math.abs(this.b),Math.abs(this.c))}opposite(){return new t(-this.a,-this.b,-this.c)}conjugate(){return new t(this.a,-this.b,this.c)}pow(e){if("number"==typeof this.c&&0!==this.c&&e>1&&e%2==0)return this.pow3d(e)
switch(e){case 0:return new t(1,0,0)
case 1:return new t(this.a,this.b,this.c)
case 2:return new t(this.a*this.a-this.b*this.b,2*this.a*this.b)
case 3:return new t(Math.pow(this.a,3)-3*this.a*this.b*this.b,3*this.a*this.a*this.b-Math.pow(this.b,3))
case 4:return new t(Math.pow(this.a,4)-6*this.a*this.a*this.b*this.b+Math.pow(this.b,4),4*Math.pow(this.a,3)*this.b-4*this.a*Math.pow(this.b,3))}const i=this.getArgument(),n=this.getMagnitude()
return new t(Math.cos(e*i)*Math.pow(n,e),Math.sin(e*i)*Math.pow(n,e))}pow3d(e){let i=new t(this.a,this.b,this.c)
for(let t=0;t<e/2;t++)i=i.square3d()
return i}square3d(){return this.setSquare(),new t((this.square-this.c*this.c)*(this.a*this.a-this.b*this.b)/this.square,2*(this.square-this.c*this.c)*this.a*this.b/this.square,-2*this.c*Math.sqrt(this.square))}isZero(){return 0===this.b&&0===this.a}getC(e){switch(e){case"":case"0":default:return this
case"rAbs":case"iAbs":return this.rAbs()
case"abs":return this.abs()
case"inverse":return this.inverse()
case"conjugate":return this.conjugate()
case"opposite":return this.opposite()
case"sin":return this.sin()
case"cos":return this.cos()
case"cosh":return this.cosh()
case"sinh":return this.sinh()
case"tan":return this.tan()
case"tanh":return this.tanh()
case"cot":return this.cot()
case"coth":return this.coth()
case"sec":return this.sec()
case"sech":return this.sech()
case"csc":return this.csc()
case"csch":return this.csch()
case"atan":return this.atan()
case"acos":return this.acos()
case"acosh":return this.acosh()
case"acot":return this.acot()
case"acoth":return this.acoth()
case"asin":return this.asin()
case"asinh":return this.asinh()
case"asec":return this.asec()
case"asech":return this.asech()
case"acsc":return this.acsc()
case"log":return this.log()
case"ln":return this.ln()
case"sqrt":return this.sqrt()
case"cosCoshSinSinh":return this.cosCoshSinSinh()
case"cosCoshSinSinh2":return this.cosCoshSinSinh2()
case"squareDiv":return this.squareDiv()
case"squareTan":return this.squareTan()
case"squareAtan":return this.squareAtan()
case"expDiv":return this.expDiv()
case"expDivSinh":return this.expDivSinh()}}sqrt(){const e=Math.sqrt(this.squaresSum()),i=Math.sqrt((e+this.a)/2),n=e/Math.abs(e)*Math.sqrt((e-this.a)/2)
return new t(i,n)}log(){return new t(this.logHypot(this.a,this.b),Math.atan2(this.b,this.a))}logHypot(e,t){const i=Math.abs(e),n=Math.abs(t)
return 0===e?Math.log(n):0===t?Math.log(i):i<3e3&&n<3e3?.5*Math.log(e*e+t*t):Math.log(e/Math.cos(Math.atan2(t,e)))}sin(){return new t(Math.cosh(this.b)*Math.sin(this.a),Math.sinh(this.b)*Math.cos(this.a))}sinh(){return new t(Math.sinh(this.a)*Math.cos(this.b),Math.cosh(this.a)*Math.sin(this.b))}cos(){return new t(Math.cosh(this.b)*Math.cos(this.a),-Math.sinh(this.b)*Math.sin(this.a))}cosh(){return new t(Math.cosh(this.a)*Math.cos(this.b),Math.sinh(this.a)*Math.sin(this.b))}tan(){const e=Math.cos(2*this.a)+Math.cosh(2*this.b)
return new t(Math.sin(2*this.a)/e,Math.sinh(2*this.b)/e)}tanh(){const e=Math.cosh(2*this.a)+Math.cos(2*this.b)
return new t(Math.sinh(2*this.a)/e,Math.sin(2*this.b)/e)}cot(){const e=Math.cos(2*this.a)-Math.cosh(2*this.b)
return new t(-Math.sin(2*this.a)/e,Math.sinh(2*this.b)/e)}coth(){const e=Math.cosh(2*this.a)-Math.cos(2*this.b)
return new t(Math.sinh(2*this.a)/e,-Math.sin(2*this.b)/e)}sec(){const e=.5*Math.cosh(2*this.b)+.5*Math.cos(2*this.a)
return new t(Math.cos(this.a)*Math.cosh(this.b)/e,Math.sin(this.a)*Math.sinh(this.b)/e)}sech(){const e=Math.cos(2*this.b)+Math.cosh(2*this.a)
return new t(2*Math.cosh(this.a)*Math.cos(this.b)/e,-2*Math.sinh(this.a)*Math.sin(this.b)/e)}csc(){const e=.5*Math.cosh(2*this.b)-.5*Math.cos(2*this.a)
return new t(Math.sin(this.a)*Math.cosh(this.b)/e,-Math.cos(this.a)*Math.sinh(this.b)/e)}csch(){const e=Math.cos(2*this.b)-Math.cosh(2*this.a)
return new t(-2*Math.sinh(this.a)*Math.cos(this.b)/e,2*Math.cosh(this.a)*Math.sin(this.b)/e)}acos(){const e=new t(this.b*this.b-this.a*this.a+1,-2*this.a*this.b).pow(.5),i=new t(e.a-this.b,e.b+this.a).log()
return new t(Math.PI/2-i.b,i.a)}acosh(){let e=this.acos(),t=0
return e.b<=0?(t=e.a,e.a=-e.b,e.b=t):(t=e.b,e.b=-e.a,e.a=t),e}asinh(){let e=this.b
this.b=-this.a,this.a=e
let t=this.asin()
return this.a=-this.b,this.b=e,e=t.a,t.a=-t.b,t.b=e,t}acoth(){return 0===this.a&&0===this.b?new t(0,Math.PI/2):0===this.setSquare()?new t(1/0,1/0):new t(this.a/this.square,-this.b/this.square).atanh()}acsch(){return 0===this.b?new t(0!==this.a?Math.log(this.a+Math.sqrt(this.a*this.a+1)):1/0,0):0===this.setSquare()?new t(1/0,1/0):new t(this.a/this.square,-this.b/this.square).asinh()}asech(){return 0===this.setSquare()?new t(1/0,1/0):new t(this.a/this.square,-this.b/this.square).acosh()}asin(){let e=new t(this.b*this.b-this.a*this.a+1,-2*this.a*this.b).pow(.5),i=new t(e.a-this.b,e.b+this.a).log()
return new t(i.b,-i.a)}acot(){return 0===this.setSquare()?new t(Math.atan2(1,this.a),0):new t(this.a/this.square,-this.b/this.square).atan()}asec(){return 0===this.setSquare()?new t(0,1/0):new t(this.a/this.square,-this.b/this.square).acos()}acsc(){return 0===this.setSquare()?new t(Math.PI/2,1/0):new t(this.a/this.square,-this.b/this.square).asin()}atan(){if(0===this.a){if(1===this.b)return new t(0,1/0)
if(-1===this.b)return new t(0,-1/0)}const e=this.a*this.a+(1-this.b)*(1-this.b),i=new t((1-this.b*this.b-this.a*this.a)/e,-2*this.a/e).log()
return new t(-.5*i.b,.5*i.a)}ln(){return this.setSquare(),new t(.5*Math.log10(this.square),Math.atan(this.a/this.b))}cosCoshSinSinh2(){return new t(Math.cosh(this.b)*Math.sin(this.a),-Math.sinh(this.b)*Math.cos(this.a),0)}cosCoshSinSinh(){return new t(Math.cosh(-this.b)*Math.cos(this.a),Math.sinh(-this.b)*Math.sin(this.a),0)}expDiv(){return new t(.5*Math.exp(this.squaresSum()),this.a/this.b,0)}expDivSinh(){return new t(.5*Math.exp(this.squaresSum()),Math.sinh(this.a/this.b),0)}squareDiv(){return new t(this.squaresSum(),this.a/this.b,0)}squareAtan(){return new t(this.squaresSum(),Math.atan(this.a/this.b),0)}squareTan(){return new t(this.squaresSum(),Math.tan(this.a/this.b),0)}}e.default=t})),define("universlogique-pg/router",["exports","@ember/routing/router","universlogique-pg/config/environment"],(function(e,t,i){function n(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e
var i=e[Symbol.toPrimitive]
if(void 0!==i){var n=i.call(e,t||"default")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
class a extends t.default{constructor(){super(...arguments),n(this,"location",i.default.locationType),n(this,"rootURL",i.default.rootURL)}}e.default=a,a.map((function(){this.mount("blog"),this.mount("generative"),this.route("ember")}))})),define("universlogique-pg/services/ajax",["exports","ember-ajax/services/ajax"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("universlogique-pg/services/animation-service",["exports"],(function(e){function t(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e
var i=e[Symbol.toPrimitive]
if(void 0!==i){var n=i.call(e,t||"default")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=class{constructor(){t(this,"id",0),t(this,"fpsInterval",0),t(this,"startAnimationTime",null),t(this,"startFrameTime",null),t(this,"time2",null),t(this,"elapsedTime",0),t(this,"sumTime",0),t(this,"hits",0),t(this,"animationRunning",!1),t(this,"animationEnd",!0),t(this,"functions",null),this.initialize()}initialize(){this.id=0,this.fpsInterval=0,this.sumTime=0,this.hits=0,this.startAnimationTime=null,this.startFrameTime=null,this.animationRunning=!1,this.animationEnd=!0,this.functions=[],this.animationParams={}}stopAnimationRunning(){this.setAnimationRunning(!1)}getAnimationEnd(){return this.animationEnd}setAnimationEnd(e){!0===e&&(this.animationRunning=!1),this.animationEnd=e}setAnimationRunning(e){return!0===e&&(this.animationEnd=!1),this.animationRunning=e,e}getAnimationRunning(){return this.animationRunning}startAnimation(e,t,i,n){if(this.bRafSupport=this.testRafSupport(),"function"!=typeof this.functions[t])return this.setAnimationEnd(!0),!1
this.id=Date.now()+"_"+Math.floor(1e7*Math.random()),null!==n&&"object"==typeof n||(n={}),n.i=0,!0===i&&(this.functions[t](n),n.i++),this.fpsInterval=1e3/e,this.startFrameTime=Date.now(),this.setAnimationRunning(!0),this.animationEnd=!1,this.startAnimationTime=new Date,!0===this.bRafSupport?this.animateWithRaf(t,n,this.id,1):this.animateWithTimeOut(t,this,this.fpsInterval,n,this.id)}getFpsRate(){return Math.round(this.hits/(new Date-this.startAnimationTime)/1e3)}getAnimationTime(){return Math.round((new Date-this.startAnimationTime)/1e3)}ctrlFps(){const e=Date.now()
return this.elapsedTime=e-this.startFrameTime,this.elapsedTime>this.fpsInterval&&(this.startFrameTime=e-this.elapsedTime%this.fpsInterval,!0)}animateWithRaf(e,t,i,n){if(1!==n&&!0===this.animationEnd)return!1
if(this.id!==i)return!1
if(this.requestAnimationFrame_((()=>this.animateWithRaf(e,t,i)))<0)return!1
if(!0===this.animationEnd)return!1
if(!0===this.animationRunning&&!0===this.ctrlFps()){if(this.hits++,!1===this.functions[e](t))return this.setAnimationEnd(!0),!1
t.i++}return!0}requestAnimationFrame_(e){try{return window.requestAnimationFrame(e)||window.mozRequestAnimationFrame(e)||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame(e)||window.msRequestAnimationFrame(e)||null}catch(t){return-1}}animateWithTimeOut(e,t,i,n,a){return"function"==typeof e&&(t.animationParams.f=e,t.animationParams.t=i,t.animationParams.params=n,t.animationParams.id_=a,window.that=t),!0===window.that.getAnimationRunning()&&(!1===window.that.functions[window.that.animationParams.f](window.that.animationParams.params)?(window.that.stopAnimationRunning(!0),!1):(window.that.animationParams.params.i++,void setTimeout(window.that.animateWithTimeOut,window.that.animationParams.t)))}testRafSupport(){let e=null
try{e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||null}catch(t){return!1}return null!==e&&-1!==this.requestAnimationFrame_((function(){}))}}}))
define("universlogique-pg/services/asset-loader",["exports","ember-asset-loader/services/asset-loader"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("universlogique-pg/services/canvas2d-service",["exports","universlogique-pg/object/canvas/canvas-data-32"],(function(e,t){function i(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e
var i=e[Symbol.toPrimitive]
if(void 0!==i){var n=i.call(e,t||"default")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string")
return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=class{constructor(){i(this,"canvasData",null),i(this,"imageData",null)}setContext(e){if(this.canvasElement=document.getElementById(e),this.context=null,this.offSet=[0,0,0],this.canvasElement)return this.context=this.canvasElement.getContext("2d"),!this.context}initialize(){this.ptMax=[this.width,this.height,0],this.ptMin=[0,0,0],this.margin=[0,0,0],this.grad=[1,1,1],this.paramsDefined=!1,this.signedCoord=!1}setCanvasData(e,i,n,a){this.imagedata=this.context.createImageData(e,i),this.canvasData=new t.default,this.canvasData.initialize(this.imagedata,e,i,[n,a]),this.canvasData.getImageData(this.imagedata)}addBackgroundInImageData(e){return null!==e&&this.canvasData.addBackgroundInImageData(e)}addPointsInData(e,t,i){return null!==e&&0!==e.length&&(null!==this.canvasData&&(void 0===i&&(i=1),this.canvasData.addPointsInData(e,t,i)))}updateImageData(e,t,i){return null!==e&&(null!==this.canvasData&&(this.canvasData.addPointsInData(e,t,i),this.putImageData(0,0)))}putImageData(e,t,i,n){return this.canvasData.getImageData(this.imagedata),!(e>this.imagedata.width)&&(!(t>this.imagedata.height)&&("number"!=typeof i?this.context.putImageData(this.imagedata,e,t):(i-e>this.imagedata.width&&(i=this.imagedata.width-e),n-t>this.imagedata.height&&(n=this.imagedata.height-t),this.context.putImageData(this.imagedata,e,t,e,t,i,n)),!0))}defGrid(e,t,i,n){null!==n&&"object"==typeof n||(n=[0,0,0])
return this.initialize(),null!==e&&"object"==typeof e&&(0!==e.length&&(this.ptMax=this.getMaxOfPts(e,this.signedCoord),this.ptMin=this.getMinOfPts(e),this.margin[0]=Math.round(t*n[0]),this.ptMax[0]-this.ptMin[0]!=0&&(this.grad[0]=(t-2*this.margin[0])/(this.ptMax[0]-this.ptMin[0])),this.margin[1]=Math.round(i*n[1]),this.ptMax[1]-this.ptMin[1]!=0&&(this.grad[1]=(i-2*this.margin[1])/(this.ptMax[1]-this.ptMin[1])),this.margin[2]=Math.round(i*n[2]),this.paramsDefined=!0,!0))}getMinOfPts(e){let t=[0,0,0]
for(let i=0,n=e.length;i<n;i++)if(this.isSet(e[i]))for(let a=0;a<3;a++)this.isSet(e[i][a])&&(0===i||e[i][a]<t[a])&&isFinite(e[i][a])&&(t[a]=e[i][a])
return t}getMaxOfPts(e,t){let i=[0,0,0,null]
if(!1===t){for(let n=0,a=e.length;n<a;n++)if(this.isSet(e[n]))for(let t=0;t<3;t++)this.isSet(e[n][t])&&isFinite(e[n][t])&&(0===n||e[n][t]>i[t])&&(i[t]=e[n][t])}else for(let n=0,a=e.length;n<a;n++)if(this.isSet(e[n]))for(let t=0;t<3;t++)this.isSet(e[n][t])&&isFinite(e[n][t])&&(0===n||Math.abs(e[n][t])>i[t])&&(i[t]=Math.abs(e[n][t]))
return i}getPointOnPlan(e){let t=0,i=0,n=0,a=null
return!1===this.isSet(e)?e:("object"==typeof e[3]&&(a=e[3]),0===this.grad[0]&&0===this.grad[1]?e:(t=(e[0]-this.ptMin[0])*this.grad[0]+this.margin[0],i=(e[1]-this.ptMin[1])*this.grad[1]+this.margin[1],n=0,void 0!==e[4]?[Math.round(t+this.offSet[0]*this.grad[0]),Math.round(i+this.offSet[1]*this.grad[1]),0,a,e[4]]:[Math.round(t+this.offSet[0]*this.grad[0]),Math.round(i+this.offSet[1]*this.grad[1]),0,a]))}isSet(e){return null!=e}}})),define("universlogique-pg/services/colors-service",["exports"],(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
e.default=class{addColors(e){const t=[0,0,0]
for(let i=0;i<t.length;i++)for(let n=0;n<e.length;n++)t[i]+=e[n][i]
for(let i=0;i<t.length;i++)t[i]>255&&(t[i]=0)
return t}hslToRgbText(e){return this.rgbText(this.hslToRgb(e))}relativeRgb(e){return[e[0]/255,e[1]/255,e[2]/255]}rgbText(e){return 4===e.length?"rgba("+Math.round(e[0])+","+Math.round(e[1])+","+Math.round(e[2])+","+Math.round(e[3])+")":"rgb("+Math.round(e[0])+","+Math.round(e[1])+","+Math.round(e[2])+")"}rgbToHex(e){const t=function(e){const t=e.toString(16)
return 1===t.length?"0"+t:t}
return"#"+t(e[0])+t(e[1])+t(e[2])}rgbToHsl(e){if(null===e)return null
const t=e[0]/255,i=e[1]/255,n=e[2]/255,a=Math.max(t,i,n),s=Math.min(t,i,n)
let r=(a+s)/2,o=0
const u=(a+s)/2
if(a===s)r=0
else{const e=a-s
switch(o=u>.5?e/(2-a-s):e/(a+s),a){case t:r=(i-n)/e+(i<n?6:0)
break
case i:r=(n-t)/e+2
break
case n:r=(t-i)/e+4}r*=60}return[r,100*o,100*u]}hslToHex(e){return this.rgbToHex(this.hslToRgb(e))}getRandomHueColor(e,t){return this.hslToRgb([Math.floor(360*Math.random()),e,t])}hslToRgba(e){const t=e[3],i=this.hslToRgb(e)
return i[3]=t,i}hslToRgb(e){if(null===e)return null
let t,i,n,a,s,r,o=parseInt(e[0],10)
o<0&&(o*=-1),o>360&&(o=Math.floor(o%360)+1)
let u=parseInt(e[1],10),h=parseInt(e[2],10)
return isFinite(o)||(o=0),isFinite(u)||(u=0),isFinite(h)||(h=0),o/=60,o<0&&(o=6- -o%6),o%=6,u=Math.max(0,Math.min(1,u/100)),h=Math.max(0,Math.min(1,h/100)),s=(1-Math.abs(2*h-1))*u,r=s*(1-Math.abs(o%2-1)),o<1?(t=s,i=r,n=0):o<2?(t=r,i=s,n=0):o<3?(t=0,i=s,n=r):o<4?(t=0,i=r,n=s):o<5?(t=r,i=0,n=s):(t=s,i=0,n=r),a=h-s/2,t=Math.round(255*(t+a)),i=Math.round(255*(i+a)),n=Math.round(255*(n+a)),e.length>=4&&"number"==typeof e[3]&&e[3]!==1/0?(e[3]>100&&(e[3]=100),e[3]<0&&(e[3]=0),[t,i,n,255*e[3]/100]):[t,i,n]}hexToRgb(e){if(null==e)return null
e.length>7&&(e=e.substring(0,6))
for(let i=0;i<6&&e.length<6;i++)e="0"+e
const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e)
return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}numberToRgb(e){return this.hexToRgb(this.decimalToHexString(e))}decimalToHexString(e){return e<0&&(e=4294967295+e+1),"#"+e.toString(16).toUpperCase()}setPointsPerlinNoiseColor(e,t,i,n,a,s,r){for(let o=0;o<e.length;o++)e[o][3]=this.getPerlinNoiseColor(e[o],t,i,n,a,s,r)
return e}getPerlinNoiseColor(e,t,i,n,a,s,r){return null!==e?this.hslToRgb([t+a*this.noise2d(e[0],e[1]),i+s*this.noise2d(e[0],e[1]),n+r*this.noise2d(e[0],e[1])]):[0,0,0]}noise2d(e,t){return this.smoothNoise(85e4*this.smoothNoise(e)+t)}linear_interpolate(e,t,i){return(1-i)*e+i*t}smoothNoise(e){return this.linear_interpolate(this.randNoise(e),this.randNoise(e+1),0)}randNoise(e){return(1-(e*(e*e*15731+889221)+1376312589&2147483647)/1073741824+1)/2}lerpForPoint(e,t,i){const n=Math.PI
return-1*this.lerp((Math.cos(2*i*n)+1)/2,e*Math.sin(2*i*n),t)}lerp(e,t,i){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1e-4,s=t-e
return n>0&&(s=Math.min(s,n),s=Math.max(s,-n)),Math.abs(s)<a?t:e+s*i}}})),define("universlogique-pg/services/engine-router-service",["exports","ember-engines-router-service/services/engine-router-service.js"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("universlogique-pg/services/head-data",["exports","ember-cli-head/services/head-data"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("universlogique-pg/services/intl",["exports","ember-intl/services/intl"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("universlogique-pg/templates/application",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=(0,t.createTemplateFactory)({id:"KkpANpw6",block:'[[[10,0],[14,0,"card m-4"],[12],[1,"\\n  "],[10,0],[14,0,"card-body"],[12],[1,"\\n    "],[8,[39,0],null,[["@route"],["index"]],[["default"],[[[[1,"\\n      Index\\n    "]],[]]]]],[1,"\\n\\n    "],[46,[28,[37,2],null,null],null,null,null],[1,"\\n  "],[13],[1,"\\n"],[13]],[],false,["link-to","component","-outlet"]]',moduleName:"universlogique-pg/templates/application.hbs",isStrictMode:!1})
e.default=i})),define("universlogique-pg/templates/ember",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=(0,t.createTemplateFactory)({id:"1h5tafko",block:'[[[10,0],[14,0,"card m-4"],[12],[1,"\\n  "],[10,0],[14,0,"card-body"],[12],[1,"\\n    "],[10,2],[12],[1,"\\n      ember template\\n    "],[13],[1,"\\n    "],[8,[39,0],null,[["@route"],["index"]],[["default"],[[[[1,"\\n      Index\\n    "]],[]]]]],[1,"\\n    "],[46,[28,[37,2],null,null],null,null,null],[1,"\\n  "],[13],[1,"\\n"],[13]],[],false,["link-to","component","-outlet"]]',moduleName:"universlogique-pg/templates/ember.hbs",isStrictMode:!1})
e.default=i})),define("universlogique-pg/templates/head",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=(0,t.createTemplateFactory)({id:"lsxuTdBH",block:'[[[3," ember-cli-head/templates/head.hbs "],[1,"\\n"],[3," If you see this your application\'s `head.hbs` has gone missing. "],[1,"\\n"]],[],false,[]]',moduleName:"universlogique-pg/templates/head.hbs",isStrictMode:!1})
e.default=i})),define("universlogique-pg/templates/index",["exports","@ember/template-factory"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=(0,t.createTemplateFactory)({id:"oSoOLe+G",block:'[[[10,0],[14,0,"card m-4"],[12],[1,"\\n  "],[10,0],[14,0,"card-body"],[12],[1,"\\n    "],[10,2],[12],[1,"\\n      Index\\n    "],[13],[1,"\\n    "],[10,"ul"],[12],[1,"\\n      \\n      "],[10,"li"],[12],[1,"\\n        "],[8,[39,0],null,[["@route"],["generative"]],[["default"],[[[[1,"\\n          Fractals\\n        "]],[]]]]],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n\\n    "],[46,[28,[37,2],null,null],null,null,null],[1,"\\n  "],[13],[1,"\\n"],[13]],[],false,["link-to","component","-outlet"]]',moduleName:"universlogique-pg/templates/index.hbs",isStrictMode:!1})
e.default=i})),define("universlogique-pg/utils/intl/missing-message",["exports","ember-intl/-private/utils/missing-message"],(function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})})),define("universlogique-pg/config/environment",[],(function(){try{var e="universlogique-pg/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),i={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(i,"__esModule",{value:!0}),i}catch(n){throw new Error('Could not read config from meta tag with name "'+e+'".')}})),runningTests||require("universlogique-pg/app").default.create({name:"universlogique-pg",version:"5.0.0+5f5af713"})
