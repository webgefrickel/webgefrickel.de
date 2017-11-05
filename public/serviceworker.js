!function(){"use strict";var e={scheme:"https",proxy:"wgf.localhost",port:3e3,src:"./src/",root:"./public/",dest:"./public/assets/",tasks:"./tasks/",pages:["/","/blog","/blog/styling-form-elements","/blog/photos-from-new-zealand","/blog/beyond-tellerrand-and-indiewebcamp-2016","/work","/contact","/legal-notice"]};const t=e.dest.replace(e.root,"/"),n=["/",`/${t}/js/main.min.js`,`/${t}/css/main.min.css`,`/${t}/img/sprite.svg`];self.addEventListener("install",e=>{e.waitUntil(caches.open("4.0.0").then(e=>e.addAll(n)))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(e=>Promise.all(e.filter(e=>0!==e.indexOf("4.0.0")).map(e=>caches.delete(e)))))}),self.addEventListener("fetch",e=>{let t=e.request;if("GET"===t.method)return-1!==t.headers.get("Accept").indexOf("text/html")?("navigate"!==t.mode&&(t=new Request(t.url,{method:"GET",headers:t.headers,mode:"navigate"===t.mode?"cors":t.mode,credentials:t.credentials,redirect:t.redirect})),void e.respondWith(fetch(t).then(e=>(caches.open("4.0.0").then(n=>{n.put(t,e.clone())}),e)).catch(()=>caches.match(t).then(e=>e||caches.match("/offline"))))):void e.respondWith(caches.match(t).then(e=>e||fetch(t).catch(()=>-1!==t.headers.get("Accept").indexOf("image")&&new Response('\n            <svg width="400" height="300" role="img" aria-labelledby="offline-title"\n              viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">\n              <title id="offline-title">Offline</title>\n              <g fill="none" fill-rule="evenodd">\n                <path fill="#D8D8D8" d="M0 0h400v300H0z"/>\n                <text fill="#9B9B9B" font-family="Arial, sans-serif" font-size="72" font-weight="bold">\n                  <tspan x="93" y="172">offline</tspan>\n                </text>\n              </g>\n            </svg>',{headers:{"Content-Type":"image/svg+xml"}}))));e.respondWith(fetch(t).catch(()=>caches.match("/offline")))})}();
