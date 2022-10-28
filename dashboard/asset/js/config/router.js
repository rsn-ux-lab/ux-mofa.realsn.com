/* JS loader */

const routes = [
  {
    path: "/login",
    script: `${SERVER.asset}/js/pages/login.js`,
  },
  {
    path: "/certify",
    script: `${SERVER.asset}/js/pages/certify.js`,
  },
  {
    path: "/leaders",
    script: `${SERVER.asset}/js/pages/leaders.js`,
  },
  {
    path: "/media",
    script: `${SERVER.asset}/js/pages/media.js`,
  },
  {
    path: "/trend",
    script: `${SERVER.asset}/js/pages/trend.js`,
  },
];

const url = location.pathname.match(/(?<=\/\s*).*?(?=\s*\/)/gs);
const hasPath = routes.find((_route) => _route.path.replace(/\//g, "") === url[url.length - 1]);

if (hasPath) window.loadScript({ src: hasPath.script });
