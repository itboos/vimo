"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function setupConfig(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(window.VM&&window.VM.config)return window.VM.config;var i=new Config;return i.init(t,e),window.VM=window.VM||{},window.VM.config=i,i}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};exports.setupConfig=setupConfig;var isFunction=function(t){return"function"==typeof t},isDefined=function(t){return void 0!==t},isObject=function(t){return"object"===(void 0===t?"undefined":_typeof(t))},isArray=Array.isArray,URL_CONFIG_PREFIX="vm",Config=function(){function t(){_classCallCheck(this,t),this._c={},this._s={},this.plt=null}return _createClass(t,[{key:"init",value:function(t,e){this._s=t&&isObject(t)&&!isArray(t)?t:{},this.plt=e}},{key:"get",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this.plt;if(!isDefined(this._c[t])){if(!isDefined(t))throw"config key is not defined";var n=void 0,s=this._s[t],o=void 0,r=null;if(i){var f=i.getQueryParam(URL_CONFIG_PREFIX+t);if(isDefined(f))return this._c[t]="true"===f||"false"!==f&&f,this._c[t];for(var l=i.platforms(),a=0,u=l.length;a<u;a++)this._s.platforms&&(r=this._s.platforms[l[a]])&&isDefined(r[t])&&(n=r[t]),(r=i.getPlatformConfig(l[a]))&&r.settings&&isDefined(r.settings[t])&&(o=r.settings[t])}this._c[t]=isDefined(n)?n:isDefined(s)?s:isDefined(o)?o:null}var c=this._c[t];return isFunction(c)&&(c=c(i)),null!==c?c:e}},{key:"getBoolean",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.get(t);return null===i?e:"string"==typeof i?"true"===i:!!i}},{key:"getNumber",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:NaN,i=parseFloat(this.get(t));return isNaN(i)?e:i}},{key:"set",value:function(){var t=arguments.length<=0?void 0:arguments[0],e=arguments.length<=1?void 0:arguments[1];switch(arguments.length){case 2:this._s[t]=e,delete this._c[t];break;case 3:this._s.platforms=this._s.platforms||{},this._s.platforms[t]=this._s.platforms[t]||{},this._s.platforms[t][e]=arguments.length<=2?void 0:arguments[2],delete this._c[e]}return this}},{key:"settings",value:function(t,e){switch(arguments.length){case 0:return this._s;case 1:this._s=t,this._c={};break;case 2:this._s.platforms=this._s.platforms||{},this._s.platforms[t]=e,this._c={}}return this}}]),t}();