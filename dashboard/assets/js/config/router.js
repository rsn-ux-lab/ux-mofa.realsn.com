/* JS loader */
const routes = [
  {
    path: '/login',
    script: `${SERVER.assets}/js/pages/login.js`,
  },
  {
    path: '/layout',
    script: `${SERVER.assets}/js/pages/layout.js`,
  },
  {
    path: '/certify',
    script: `${SERVER.assets}/js/pages/certify.js`,
  },
  {
    path: '/leaders',
    script: `${SERVER.assets}/js/pages/leaders.js`,
  },
  {
    path: '/media',
    script: `${SERVER.assets}/js/pages/media.js`,
  },
  {
    path: '/trend',
    script: `${SERVER.assets}/js/pages/trend.js`,
  },
];

const url = location.pathname.match(/(?<=\/\s*).*?(?=\s*\/)/gs);
const hasPath = routes.find((_route) => _route.path.replace(/\//g, '') === url[url.length - 1]);

if (hasPath) window.loadScript({ src: hasPath.script });
