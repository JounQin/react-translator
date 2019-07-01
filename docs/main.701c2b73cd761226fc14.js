(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){var r={"./core.en.i18n.json":14,"./core.zh.i18n.json":15};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=13},14:function(e){e.exports={basic:"Basic",default:"Default",nestedKey:"Nested",obj_param:"Object Param",arr_param:"Array Param",arr_key:"Array Key",component_translator:"Component Translator",hello_world:"Hello World",default_message:"Default Message",nested:{a:"Nested A",b:"Nested B"},objParam:"{ a } plus { b } equals {sum }",arrParam:"I have three brothers, their names are {0}, {1} and {2}",zhang_san:"Peter",zhao_si:"Tom",wang_wu:"John",arr_keys:["Key1","Key2"]}},15:function(e){e.exports={basic:"基础",default:"缺省",nestedKey:"嵌套",obj_param:"对象参数",arr_param:"数组参数",arr_key:"数组键",component_translator:"组件翻译",hello_world:"你好世界",nested:{a:"嵌套 A",b:"嵌套 B"},objParam:"{ a } 与 { b } 的和是 { sum }",arrParam:"我有三个兄弟，他们叫{0}，{1}和{2}",zhang_san:"张三",zhao_si:"赵四",wang_wu:"王五"}},22:function(e,t,n){"use strict";var r,a;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),function(e){e.EN="en",e.ZH="zh"}(a||(a={}));var l,c=a,u=c.EN,i=c.ZH;o(r={},u,i),o(r,i,u);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=n(13),m=a.EN,p=a.ZH,b=(s(l={},m,[]),s(l,p,[]),f.keys().reduce(function(e,t){var n=f(t),r=t.match(/([\w-]*[\w]+)\.i18n\.json$/)[1],a=e[r]||(e[r]={});return Object.assign(a,n),e},{}));function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var y,h,g=function(e,t){t=t.replace(/\[(\d+)\]/g,".$1");var n=e;return t.split(".").some(function(e){if(!n||"object"!==d(n))return!0;n=n[e]}),"object"===d(n)?n.toString():n},v=function(e){h&&h(y,e)},E=n(0),_=n.n(E),w=_.a.createContext(null),O=n(8),j=n.n(O);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var D=0,M=[];function T(e){return function(t){var n=function(n){function r(t){var n,a,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),a=this,o=x(r).call(this,t),n=!o||"object"!==S(o)&&"function"!=typeof o?C(a):o,z(C(n),"state",{locale:n.props.translator.locale,defaultLocale:n.props.translator.defaultLocale}),z(C(n),"toggleLocale",function(e){var t=n.props,r=t.translator,a=t.toggleLocale;n.setState({locale:r.locale=e}),a&&a(e)}),z(C(n),"toggleDefaultLocale",function(e){var t=n.props,r=t.translator,a=t.toggleDefaultLocale;n.setState({defaultLocale:r.defaultLocale=e}),a&&a(e)});var l=r.cid;return e&&-1===M.indexOf(l)&&(v(e),M.push(l)),n}var a,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(r,_.a.PureComponent),a=r,(o=[{key:"render",value:function(){var e=this.props,n=e.translator,r=k(e,["translator"]),a=this.state,o=a.locale,l=a.defaultLocale;return _.a.createElement(t,P({},r,{t:n,locale:o,defaultLocale:l,toggleLocale:this.toggleLocale,toggleDefaultLocale:this.toggleDefaultLocale}))}}])&&L(a.prototype,o),l&&L(a,l),r}();return z(n,"cid",D++),j()(function(e){return _.a.createElement(w.Consumer,null,function(t){return _.a.createElement(n,P({},e,t))})},t)}}function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var K,H=T({zh:{xMan:"X 战警"},en:{xMan:"X Men"}})(function(e){var t=e.t;return _.a.createElement("div",null,t("xMan"))}),J=T({en:{defaultMsg:"Default Message"}})(function(e){function t(e,n){var r,a,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,r=!(o=I(t).call(this,e,n))||"object"!==A(o)&&"function"!=typeof o?R(a):o,$(R(r),"state",{a:1,b:1}),$(R(r),"changed",0),r.addA=r.addA.bind(R(r)),r.addB=r.addB.bind(R(r)),r.handleSelect=r.handleSelect.bind(R(r)),r}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(t,_.a.PureComponent),n=t,(r=[{key:"handleSelect",value:function(e){this.props.toggleLocale(e.target.value)}},{key:"addA",value:function(){this.setState({a:this.state.a+1})}},{key:"addB",value:function(){this.setState({b:this.state.b+1})}},{key:"render",value:function(){var e=this.props.t,t=this.state,n=t.a,r=t.b;return _.a.createElement("table",{className:"table table-bordered"},_.a.createElement("tbody",null,_.a.createElement("tr",null,_.a.createElement("td",null,e("basic")),_.a.createElement("td",null,_.a.createElement("div",{className:"form-group"},_.a.createElement("label",{className:"col-sm-2 control-label"},e("hello_world")),_.a.createElement("div",{className:"col-sm-10"},_.a.createElement("select",{className:"form-control",defaultValue:e.locale,onChange:this.handleSelect},_.a.createElement("option",{value:"zh"},"中文"),_.a.createElement("option",{value:"en"},"English")))))),_.a.createElement("tr",null,_.a.createElement("td",null,e("default")),_.a.createElement("td",null,_.a.createElement("div",null,e("default_message")))),_.a.createElement("tr",null,_.a.createElement("td",null,e("nestedKey")),_.a.createElement("td",null,e("nested.a"))),_.a.createElement("tr",null,_.a.createElement("td",null,e("obj_param")),_.a.createElement("td",null,_.a.createElement("div",null,e("objParam",{a:n,b:r,sum:n+r}),_.a.createElement("button",{className:"btn btn-default",onClick:this.addA},"a + 1"),_.a.createElement("button",{className:"btn btn-default",onClick:this.addB},"b + 1")))),_.a.createElement("tr",null,_.a.createElement("td",null,e("arr_param")),_.a.createElement("td",null,_.a.createElement("div",null,e("arrParam",[e("zhang_san"),e("zhao_si"),e("wang_wu")])))),_.a.createElement("tr",null,_.a.createElement("td",null,e("arr_key")),_.a.createElement("td",null,_.a.createElement("div",null,e("arr_keys[0]"),", ",e("arr_keys[1]")))),_.a.createElement("tr",null,_.a.createElement("td",null,e("component_translator")),_.a.createElement("td",null,_.a.createElement(H,null)))))}}])&&B(n.prototype,r),a&&B(n,a),t}()),Z=n(24),F=n(9),X=n.n(F),q=function(e){"string"==typeof e&&(e={locale:e});var t=e,n=t.locale,r=t.translations,a=t.defaultLocale,o=t.merge;r?y||(y=r):y||(y={}),o&&(h||(h=o));var l=function e(t,n,r){var a=e.locale,o=y[a],l=g(o,t);if(void 0===l){var c=e.defaultLocale;if(c&&c!==a){var u=y[c];l=g(u,t)}}return null==(l=l&&l.replace(/{([^{}]+)}/g,function(e,t){return g(n,t.trim())}))?t:l};return l.locale=n,l.defaultLocale=a,l}({defaultLocale:"en",locale:(K="locale",decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(K).replace(/[-.+*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null||"zh"),translations:b,merge:Z.a});X.a.render(_.a.createElement(w.Provider,{value:{translator:q,toggleLocale:function(e){!function(e,t,n,r,a,o){if(!e||/^(?:expires|max-age|path|domain|secure)$/i.test(e))return!1;var l="";if(n)switch(n.constructor){case Number:l=n===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:l="; expires="+n;break;case Date:l="; expires="+n.toUTCString()}document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+l+(a?"; domain="+a:"")+(r?"; path="+r:"")+(o?"; secure":"")}("locale",e)}}},_.a.createElement(J,null)),document.getElementById("app"))}},[[22,1,2]]]);