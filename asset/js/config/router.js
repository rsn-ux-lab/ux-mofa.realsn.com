/* JS loader */

const routes = [
  {
    path: "/login",
    script: "/asset/js/pages/member.js",
  },
  {
    path: "/pw_set",
    script: "/asset/js/pages/member.js",
  },
  {
    path: "/member",
    script: "/asset/js/pages/member.js",
  },
  {
    path: "/leaders",
    script: "/asset/js/pages/leaders.js",
  },
  {
    path: "/media",
    script: "/asset/js/pages/media.js",
  },
  {
    path: "/trend",
    script: "/asset/js/pages/trend.js",
  },
];

const url = location.pathname.match(/(?<=\/\s*).*?(?=\s*\/)/gs);
const hasPath = routes.find((_route) => _route.path.replace(/\//g, "") === url[url.length - 1])

if (hasPath) window.loadScript({ url: hasPath.script + window.cache });
