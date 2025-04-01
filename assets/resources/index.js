System.register("chunks:///_virtual/resources",["./TickPusher.mjs_cjs=&original=.js"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/TickPusher.js",["./cjs-loader.mjs"],(function(e,t){var a;return{setters:[function(e){a=e.default}],execute:function(){e("default",void 0);var s=e("__cjsMetaURL",t.meta.url);a.define(s,(function(t,a,s,c,n){var u=0,r=0;onmessage=function(e){var t,a=e.data.cmd;"check"===a?(t=e.data.args[0],u=t,r=0,function e(){u>0&&(postMessage("checkFrame"),setTimeout(e,u))}()):"tick"===a&&function(e){r=e,u=0,function e(){r>0&&(postMessage("tickFrame"),setTimeout(e,r))}()}(e.data.args[0])},e("default",s.exports)}),{})}}}));

System.register("chunks:///_virtual/TickPusher.mjs_cjs=&original=.js",["./TickPusher.js","./cjs-loader.mjs"],(function(e,r){var t,s;return{setters:[function(r){t=r.__cjsMetaURL;var s={};s.__cjsMetaURL=r.__cjsMetaURL,s.default=r.default,e(s)},function(e){s=e.default}],execute:function(){t||s.throwInvalidWrapper("./TickPusher.js",r.meta.url),s.require(t)}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});