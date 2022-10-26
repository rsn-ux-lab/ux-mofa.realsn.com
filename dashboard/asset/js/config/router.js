/* JS loader */

const routes = [
  {
    path: "/login",
    script: `${SERVER.asset}/js/pages/member.js`,
  },
  {
    path: "/pw_set",
    script: `${SERVER.asset}/js/pages/member.js`,
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

if (hasPath) window.loadScript({ url: hasPath.script + window.cache });
