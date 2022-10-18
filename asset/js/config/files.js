/*  cache */
window.cache = "?v=" + new Date().getTime();

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/* HOST */
window.HOST = {
    localhost: /\d+\.\d+\.\d+\.\d/.test(location.hostname) || /^localhost/.test(location.hostname) || /^design.devel.com/.test(location.hostname),    
    publish: /^ux-mofa.realsn.com/.test(location.hostname) ,
    develop: null,
    product: null,
};

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/* resources path */
window.SERVER = new Object();

if (HOST.localhost || HOST.publish) { // UX팀
    SERVER.asset = "/asset";
    SERVER.view = "/view";
} else if (HOST.develop || HOST.product) { // 개발 및 운영서버
    SERVER.asset = null;
    SERVER.view = null;
}

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/
