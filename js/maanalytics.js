var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(d,k,g){if(g.get||g.set)throw new TypeError("ES3 does not support getters and setters.");d!=Array.prototype&&d!=Object.prototype&&(d[k]=g.value)};$jscomp.getGlobal=function(d){return"undefined"!=typeof window&&window===d?d:"undefined"!=typeof global&&null!=global?global:d};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.polyfill=function(d,k,g,p){if(k){g=$jscomp.global;d=d.split(".");for(p=0;p<d.length-1;p++){var u=d[p];u in g||(g[u]={});g=g[u]}d=d[d.length-1];p=g[d];k=k(p);k!=p&&null!=k&&$jscomp.defineProperty(g,d,{configurable:!0,writable:!0,value:k})}};$jscomp.polyfill("Number.EPSILON",function(d){return Math.pow(2,-52)},"es6-impl","es3");$jscomp.polyfill("Number.isFinite",function(d){return d?d:function(d){return"number"!==typeof d?!1:!isNaN(d)&&Infinity!==d&&-Infinity!==d}},"es6-impl","es3");
$jscomp.polyfill("Number.isInteger",function(d){return d?d:function(d){return Number.isFinite(d)?d===Math.floor(d):!1}},"es6-impl","es3");
(function(){function d(){var a=h.host;"undefined"!==typeof h.port&&(a+=":"+h.port);"undefined"!==typeof h.path&&(a+=h.path);return a}function k(a,b,c){a.z=Math.floor(2147483647*Math.random());g(a,!0,b,c)}function g(a,b,c,e,m){if(1!=D||null==n||n[a.tid]){1==D&&null==n&&c.logDebug("Warning (TODO) - event being reported/cached before we know if it should be reported or fully cached");a.qt=0;var d=JSON.stringify(a);c.logDebug("Sending obj: "+d);var f=new XMLHttpRequest;f.open(h.method,A,"undefined"===
typeof b?!0:b);f.setRequestHeader("Content-Type","application/json");f.onreadystatechange=function(){4===f.readyState&&(200>f.status||299<f.status?0===f.status?"undefined"===typeof m?e.enqueue(a):c.logDebug("Item '"+m+"' already in cache, will retry later"):(c.logErr(f.statusText+"; "+f.responseText),500<=f.status&&599>=f.status?"undefined"===typeof m?e.enqueue(a):c.logDebug("Item "+m+" already in cache, will retry later"):400<=f.status&&499>=f.status&&c.logWarn("HTTP 4xx client error: ensure you have latest version of library.")):
c.logDebug("Success ("+f.status+"): "+f.responseText))};f.send(d)}}function p(){function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}function u(){return"".concat(Math.max(document.documentElement.clientWidth,window.innerWidth||0).toString(),"x",Math.max(document.documentElement.clientHeight,window.innerHeight||0).toString())}function v(){var a,b,c={};for(a=0;a<arguments.length;a++)for(b in arguments[a])arguments[a].hasOwnProperty(b)&&
(c[b]=arguments[a][b]);return c}function K(a,b,c){var e;return function(){var m=this,d=arguments,f=c&&!e;clearTimeout(e);e=setTimeout(function(){e=null;c||a.apply(m,d)},b);f&&a.apply(m,d)}}function L(a){w("ma-analytics-registered-tids",function(b){if(null===b)B("ma-analytics-registered-tids",JSON.stringify([{tid:a,userEnabled:!0}]),3650);else{b=JSON.parse(b);var c;a:{for(c=0;c<b.length;c++)if(b[c].tid==a){c=!0;break a}c=!1}c||(b.push({tid:a,userEnabled:!0}),b=JSON.stringify(b),B("ma-analytics-registered-tids",
b,3650))}})}function w(a,b){void 0!==window.cordova?document.addEventListener("deviceready",function(c){b(localStorage.getItem(a))},!1):b(M(a))}function B(a,b,c){if(void 0!==window.cordova)document.addEventListener("deviceready",function(c){localStorage.setItem(a,b)},!1);else{if("undefined"===typeof c||null===c)c=730;N(a,b,c)}}function N(a,b,c){if("file:"==window.location.protocol)console.warn("Cookies can't be written from a file://"),D=!1;else{var e="";c&&(e=new Date,e.setTime(e.getTime()+864E5*
c),e="; expires="+e.toUTCString());document.cookie=a+"="+b+e+"; path=/"}}function M(a){a+="=";for(var b=document.cookie.split(";"),c=0;c<b.length;c++){for(var e=b[c];" "==e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(a))return e.substring(a.length,e.length)}return null}function G(a,b){void 0===b&&(b=E.town);return Math.round((a+Number.EPSILON)*b)/b}var h={host:"https://analytics.scc-mobileage.lancs.ac.uk",port:443,path:"/api/",tidInfoPath:"tid-info/?",method:"POST"},A=d(),H=A+h.tidInfoPath,
t={v:1.3,qt:null,z:null,ts:null},I={dr:null,cn:null,cs:null,cm:null,ck:null,cc:null,ci:null},q={sr:null,vp:null,de:"utf-8",sd:null,ul:null,je:null},l={t:1,dl:null,dh:null,dp:null,dt:null,cd:null,linkid:null,plt:null,dit:null,clt:null,md5:null,sha1:null},x={t:0,ec:null,ea:null,ev:null,el:null},y={v_uuid:null,ug:null,ua:null,um:null},r={t:2,pd:null,pm:null,pi:null,dv:null,px:null,py:null,pt:null},C={t:5,it:null,ix:null,iy:null},F={t:6,lat:null,lon:null,ec:null,el:null},O={t:7,callnumber:null,calldate:null,
callduration:null,calltype:null},n=null,D=!0,E={country:1,lCity:10,town:100,neighborhood:1E3,street:1E4};(function(){this.MaAnalyticsCache=function(a){if(!(this instanceof MaAnalyticsCache))return new MaAnalyticsCache(a);var b=this;this._queue=[];var c=0;this.incIdCount=function(){return++c};this.getIdCount=function(){return c};var e=0;this.flushInterval=null;this.flushIntervalFunc=function(){try{for(var c=0;c<b.size();c++){var d=b.peek(c);null!==d&&g(d[1],!0,a,d[0])}b.stopFlushIntervalIfEmpty();
if(5<=++e)for(console.log("DEBUG: remove an item from cache (arbitraily), to demo flushInterval termination"),c=0;c<b.size();c++)b.dequeue()}catch(f){console.error(f),b.stopFlushIntervalIfEmpty(!0)}}};this.MaAnalyticsCache.prototype._queue=null;this.MaAnalyticsCache.prototype.enqueue=function(a){console.log("DEBUG cache++");this._queue.push([this.incIdCount(),a]);this.startFlushInterval()};this.MaAnalyticsCache.prototype.dequeue=function(a){if(0>=this.size())return console.log("DEBUG: cache empty, no removal"),
null;if("undefined"===typeof a||this.peek(0)[0]==a)return console.log("Cache: Dequeue 0 (front), ID: "+a),a=this._queue.shift()[1],this.stopFlushIntervalIfEmpty(),a;for(var b=1;b<this.size();b++)if(this.peek(b)[0]==a)return console.log("Cache: Dequeue/remove (middle), ID: "+a),a=this._queue.splice(b,1)[0][1],this.stopFlushIntervalIfEmpty(),a;console.error("MaAnalyticsCache - No cached item to remove with ID: "+a)};this.MaAnalyticsCache.prototype.peek=function(a){"undefined"===typeof a&&(a=0);return this._queue[a]};
this.MaAnalyticsCache.prototype.size=function(){return this._queue.length};this.MaAnalyticsCache.prototype.startFlushInterval=function(){this.flushInterval||(console.log("DEBUG: starting flush interval"),this.flushInterval=window.setInterval(this.flushIntervalFunc,2E3))};this.MaAnalyticsCache.prototype.stopFlushIntervalIfEmpty=function(a){if(0>=this.size()||!0===a)console.log("DEBUG: stopping flush interval"),clearInterval(this.flushInterval),this.flushInterval=!1}}).call(window);this.MaAnalytics=
function(a){if(!(this instanceof MaAnalytics))return new MaAnalytics(a);"undefined"===typeof a&&(a={});var b=this;"undefined"!=typeof a.localhost&&1==a.localhost&&(h.host="http://localhost",h.port=8E3,A=d(),H=A+h.tidInfoPath);this.logDebug=function(a){this.debug&&console.log("MaAnalytics (debug): "+a)};window.cordova?(this.logWarn=function(a){console.warn("MaAnalytics (warn): "+a)},this.logErr=function(a){console.error("MaAnalytics (err): "+a)}):(this.logWarn=function(a){console.warn("MaAnalytics: "+
a)},this.logErr=function(a){console.error("MaAnalytics: "+a)});"undefined"!==typeof a.debug&&"boolean"===typeof a.debug&&(this.debug=a.debug,this.logDebug("Debug logging enabled"));this.UMPinstance_general={tid:null,cid:null};"undefined"!==typeof a.tid&&this.setTrackingId(a.tid);"undefined"===typeof a.cid||"string"!==typeof a.cid||""===a.cid?this._loadOrGenerateClientUuid(a.tid):this.setClientUuid(a.tid,a.cid);"undefined"!==typeof a.aip&&(t.aip=!0);q.sr="".concat(window.screen.width.toString(),"x",
window.screen.height.toString());q.vp=u();q.de=document.characterSet;q.sd=screen.colorDepth;q.ul=navigator.language;q.je=navigator.javaEnabled();window.addEventListener("resize",K(function(){q.vp=u()},250),!0);this.cache=new MaAnalyticsCache(this);null===n&&MaAnalytics.loadRegisteredTIDs(function(a){var b={};if(null!==a)for(var c=0;c<a.length;c++)b[a[c].tid]=a[c].userEnabled;n=b});if("undefined"==typeof a.autoTrack_AllPageViews||1==a.autoTrack_AllPageViews)window.jQuery&&$(function(){setTimeout(function(){b.trackPageview()},
250);$(":mobile-pagecontainer").on("pagecontainershow",function(a,e){b.trackPageview()})}),document.addEventListener("DOMContentLoaded",function(){b.trackPageview()}),document.addEventListener("beforeunload",function(){b.trackEvent("navigation","exit-beforeunload")}),document.addEventListener("unload",function(){b.trackEvent("navigation","exit-unload")});document.addEventListener("deviceready",function(){if("undefined"==typeof a.track_AppBackgrounding||1==a.track_AppBackgrounding)document.addEventListener("resume",
function(){b.trackEvent("navigation","app-resume")}),document.addEventListener("pause",function(){b.trackEvent("navigation","app-pause")})},!1);"undefined"!=typeof a.autoTrack_AllButtons&&1==a.autoTrack_AllButtons&&document.addEventListener("click",function(a){var c=a.target||a.srcElement;if(c instanceof HTMLAnchorElement||c instanceof HTMLButtonElement||c instanceof HTMLInputElement&&("button"==c.type||"submit"==c.type)){var d=c.dataset.maanalyticsCategory||"ma-analytics-autotracked-button";a=c.dataset.maanalyticsAction||
(void 0!==a.target.id&&""!=a.target.id?"id="+a.target.id:void 0);if(void 0===a)return 1!=b.warnOnceAutoTrackButtons&&(b.warnOnceAutoTrackButtons=!0,b.logWarn('Cannot auto-track DOM button with no DOM ID, or no attribute data-maanalytics-action="<some identifier>". This is a one-time warning.')),!0;var z=c.dataset.maanalyticsValue,c=c.dataset.maanalyticsLabel;b.logDebug("Logging auto-tracked button");b.trackEvent(d,a,z,c)}},!0);"undefined"!=typeof a.track_init_location&&1==a.track_init_location&&b.trackLocationPoint("init_location",
window.location.pathname);"undefined"!=typeof a.trackSpecificPhoneNumbers&&Array.isArray(a.trackSpecificPhoneNumbers)&&0<a.trackSpecificPhoneNumbers.length&&(window.plugins&&window.plugins.callLog?window.plugins.callLog.hasReadPermission(function(c){var e=function(a){for(var c=0;c<a.length;c++){var e=O;e.callnumber=a[c].number;e.calldate=a[c].date;e.callduration=a[c].duration;e.calltype=a[c].type;e=v(b.UMPinstance_general,t,q,e);k(e,b,b.cache)}},d=function(a){b.logErr("window.plugins.callLog.getCallLog: "+
a)},z=function(a){b.logDebug("Tracking "+a.length+" numbers");var c=new Date;c.setMonth(c.getMonth()-1);a=[{name:"number",value:a,operator:"=="},{name:"date",value:c.getTime(),operator:">="},{name:"type",value:2,operator:"=="}];window.plugins.callLog.getCallLog(a,e,d)};c?z(a.trackSpecificPhoneNumbers):window.plugins.callLog.requestReadPermission(function(){b.logDebug("User granted permission to call log");z(a.trackSpecificPhoneNumbers)},function(){b.logWarn("User refused permission to access the call log")})},
function(){b.logWarn("window.plugins.callLog.hasReadPermission Error - something went wrong")}):b.logWarn("Call log plugin unavailable"))};this.MaAnalytics.prototype.cache=null;this.MaAnalytics.prototype.setTrackingId=function(a){this.logDebug("Setting Tracking ID: "+a);this.UMPinstance_general.tid=a;L(a)};this.MaAnalytics.prototype._loadOrGenerateClientUuid=function(a){if(null===this.UMPinstance_general.cid){var b=this;w("maa_"+a,function(c){null!==c?b.UMPinstance_general.cid=c:(b.logDebug("Generating a new CID"),
b.setClientUuid(a))})}};this.MaAnalytics.getClientUuid=function(a,b){w("maa_"+a,function(c){b(a,c)})};this.MaAnalytics.prototype.setClientUuid=function(a,b){this.logDebug("Setting CID");if("undefined"===typeof a&&"undefined"===typeof this.UMPinstance_general.tid)throw Error("MaAnalytics: Can't set a ClientID, without knowing a TrackingID to associate with");"undefined"===typeof this.UMPinstance_general.tid&&(this.UMPinstance_general.tid=a);this.UMPinstance_general.cid="undefined"===typeof b?p():b;
B("maa_"+this.UMPinstance_general.tid,this.UMPinstance_general.cid);return this.UMPinstance_general.cid};this.MaAnalytics.loadRegisteredTIDs=function(a){if("function"!==typeof a)throw Error("Failed to load registered TIDs: invalid callback function callbackAjaxMetaData");w("ma-analytics-registered-tids",function(b){if(null!==b){b=JSON.parse(b);var c=H;0<b.length&&(c+="tids[]="+b[0].tid);for(var e=1;e<b.length;e++)c+="&tids[]="+b[e].tid;var d=new XMLHttpRequest;d.open("GET",c,!0);d.onreadystatechange=
function(){if(4===d.readyState)if(200<=d.status&&299>=d.status){for(var c=JSON.parse(d.responseText),e=0;e<c.length&&0!==b.length;e++)for(var m=0;m<b.length;m++)if(c[e].tid==b[m].tid){c[e].onServer=!0;c[e].userEnabled=b[m].userEnabled;b.splice(m,1);break}for(e=0;e<b.length;e++)b[e].onServer=!1,c.push(b[e]);a(c)}else a(b)};d.send()}else a(null)})};this.MaAnalytics.setTidEnabled=function(a,b){var c=!1;null===n&&(n={},c=!0);n[a]=b;w("ma-analytics-registered-tids",function(e){if(null!==e){e=JSON.parse(e);
var d;if(c)for(d=0;d<e.length;d++)"undefined"!==typeof n[e[d].tid]&&(n[e[d].tid]=e[d].userEnabled);for(d=0;d<e.length;d++)if(e[d].tid==a){e[d].userEnabled=b;B("ma-analytics-registered-tids",JSON.stringify(e),3650);return}console.warn("Analytics: Unable to disable unknown TID: "+a)}else console.warn("Analytics: Unable to to read local storage, and therefore unable to disable unknown TID: "+a)})};this.MaAnalytics.prototype.trackPageview=function(a,b,c,e,d,g,f,J,h){l.dl="undefined"===typeof a?window.location.href:
a;a="undefined"===typeof b?window.location.hostname:b;l.dh=""===a?null:a;l.dp="undefined"===typeof c?window.location.pathname:c;l.dt="undefined"===typeof e?document.title:e;l.cd="undefined"===typeof d?null:d;l.linkid="undefined"===typeof g?null:g;l.plt=0<window.performance.timing.domComplete?window.performance.timing.domComplete-window.performance.timing.navigationStart:null;l.dit=0<window.performance.timing.domInteractive?window.performance.timing.domInteractive-window.performance.timing.navigationStart:
null;l.clt=0<window.performance.timing.domContentLoadedEventEnd?window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart:null;l.md5="undefined"===typeof f?null:f;l.sha1="undefined"===typeof J?null:J;I.dr="undefined"===typeof h?""===document.referrer?null:document.referrer:h;c=v(this.UMPinstance_general,t,q,l,I);k(c,this,this.cache)};this.MaAnalytics.prototype.trackEvent=function(a,b,c,e){if("undefined"===typeof a||"undefined"===typeof b)console.error('MaAnalytics::trackEvent: "category" and "action" parameters must not be undefined, and must be typeof "string".');
else if("string"!==typeof a||"string"!==typeof b)console.error('MaAnalytics::trackEvent: "category" and "action" parameters must be typeof "string".');else{if("undefined"===typeof c)c=null;else if(null!=c&&(!Number.isInteger(c)||0>c)){console.error('MaAnalytics::trackEvent: "value" parameter must be a Positive Integer.');return}if("undefined"===typeof e)e=null;else if("string"!==typeof e){console.error('MaAnalytics::trackEvent: "label" parameter must be typeof "string".');return}x.ec=a;x.ea=b;x.ev=
c;x.el=e;a=v(this.UMPinstance_general,t,x);k(a,this,this.cache)}};this.MaAnalytics.prototype.trackDInteraction=function(a,b,c){C.it=a;C.ix="undefined"===typeof b?null:b;C.iy="undefined"===typeof c?null:c;a=v(this.UMPinstance_general,t,q,C);k(a,this,this.cache)};this.MaAnalytics.prototype.trackDProximity=function(a,b,c,e,d,g,f,h,l,n,p){r.pd="undefined"===typeof a?null:a;r.pm="undefined"===typeof b?null:b;r.pi="undefined"===typeof c?null:c;r.dv="undefined"===typeof e?null:e;r.px="undefined"===typeof d?
null:d;r.py="undefined"===typeof g?null:g;r.pt="undefined"===typeof f?null:f;y.v_uuid="undefined"===typeof h?null:h;y.ug="undefined"===typeof l?null:l;y.ua="undefined"===typeof n?null:n;y.um="undefined"===typeof p?null:p;a=v(this.UMPinstance_general,t,q,r,y);k(a,this,this.cache)};this.MaAnalytics.prototype.trackLocationPoint=function(a,b){var c=this;if(void 0===a||"string"!==typeof a)throw Error('MaAnalytics Err: param "category" in trackLocationPoint() must be a String');void 0===b&&(b=null);if("string"!==
typeof b)throw Error('MaAnalytics Err: optional param "label" in trackLocationPoint() must be a String');var d=function(a,b){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(d){var e=G(parseFloat(d.coords.latitude),E.town);d=G(parseFloat(d.coords.longitude),E.town);F.lat=e;F.lon=d;e=v(c.UMPinstance_general,t,q,F);e.ec=a;e.el=b;k(e,c,c.cache)},function(a){console.error(a)},{enableHighAccuracy:void 0!==window.device?device.isVirtual:!1,timeout:12E4,maximumAge:12E4}):(console.warn("MaAnalytics: Geolocation is not supported/enabled by this browser/device."),
c.trackEvent("ma-analytics-status","Geolocation is not supported/enabled by this browser/device."))};window.cordova?document.addEventListener("deviceready",function(){d(a,b)},!1):d(a,b)};this.MaAnalytics.prototype.trackLocationGeofence=function(){window.cordova?(console.log("MaAnalytics - TODO - geofences"),document.addEventListener("deviceready",function(){},!1)):console.warn("Geofence tracking is not supported outside of a Cordova app")}}).call(window);