const routes=[{path:"/login",script:`${SERVER.assets}/js/pages/login.js`},{path:"/certify",script:`${SERVER.assets}/js/pages/certify.js`},{path:"/leaders",script:`${SERVER.assets}/js/pages/leaders.js`},{path:"/media",script:`${SERVER.assets}/js/pages/media.js`},{path:"/trend",script:`${SERVER.assets}/js/pages/trend.js`}],url=location.pathname.match(/(?<=\/\s*).*?(?=\s*\/)/gs),hasPath=routes.find((s=>s.path.replace(/\//g,"")===url[url.length-1]));hasPath&&window.loadScript({src:hasPath.script});