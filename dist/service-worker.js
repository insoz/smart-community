"use strict";var precacheConfig=[["/static/.gitkeep","d41d8cd98f00b204e9800998ecf8427e"],["/static/1.caae1655.async.js","f4db9b0da75447a71c8be16eec53b45e"],["/static/2.8ab3d9c4.async.js","8c75e9a1a44ad3753c2db214126b090e"],["/static/3.5110ee34.async.js","0ba7029af45f61574c17e0521d134436"],["/static/4.a4ea5710.async.js","6e8a4754e1c018a05e7c67cb70592a7a"],["/static/5.19647fe4.async.js","305c0df758f90673996a742cab25e69a"],["/static/6.2a61ac69.async.js","cb12a09ae4f91bdf9ffeeace1b80195a"],["/static/7.e994dfc4.async.js","52b6e5888ffd96eb7b5ea93b8c16d201"],["/static/8.54fe396d.async.js","228b909045819fb22464db694cdaecbf"],["/static/common-umi.792ed30c.async.js","a8d013dafd8c6d05aea4ad3659eb324c"],["/static/static/icon_sbss_dzxg.c37540bb.png","c37540bbdb44a5519d713bb1bd2db29a"],["/static/static/icon_sbss_jdsb.c612e232.png","c612e232b65d6ebdaaa7872bba3bbfc9"],["/static/static/icon_sbss_jk.42cb377d.png","42cb377d331ddf0a7ba66312068c7879"],["/static/static/icon_sbss_mj.e495ebfa.png","e495ebfab6e417fa4cff7b47629bedaf"],["/static/static/icon_sbss_rlsb.aa4d4169.png","aa4d4169ef3032eef83be5a369ce2979"],["/static/static/icon_sbss_xfs.0307e18e.png","0307e18e4d8b500b02d0c3a7d2a96c17"],["/static/static/logo.3a2bf903.png","3a2bf9038c3638f3a692c5a16854d982"],["/static/umi.2a0931b1.js","6458d8bc87722b704f6a41958972b278"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,!1);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});