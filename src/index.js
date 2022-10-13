const sleep = (time) => {
    return new Promise((reslove) => {
        setTimeout(() => {
            reslove(true);
        }, time);
    });
};

const getENVIR = () => {
    const ua = navigator.userAgent.toLowerCase();
    const isWeixin = ua.indexOf('micromessenger') !== -1;

    const isInApp = ua.indexOf('manniuhealthapp') > -1;
    if (isWeixin)
        return window.__wxjs_environment === 'miniprogram' ? 'wxapp' : 'wxh5';
    return isInApp ? 'app' : 'browser';
};
export { sleep, getENVIR };
