/*  cache */
window.cache = "?v=" + new Date().getTime();

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/* HOST */
window.HOST = {
    localhost: /\d+\.\d+\.\d+\.\d/.test(location.hostname) || /^localhost/.test(location.hostname) || /^design.devel.com/.test(location.hostname),    
    publish: /^ux-mofa.realsn.com/.test(location.hostname) ,
    develop: /^mofa.devel.com/.test(location.hostname),
    product: /^mofa.realsn.com/.test(location.hostname),
};

/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/

/* resources path */
window.SERVER = new Object();

if (HOST.localhost || HOST.publish) { // 로컬 환경
    SERVER.assets = "/dashboard/assets";    
} else if (HOST.develop || HOST.product) { // 개발 및 운영서버
    SERVER.assets = "/dashboard/assets";    
}
/*
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
*/