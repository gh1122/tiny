const sleep = (time) => {
    return new Promise((reslove) => {
        setTimeout(() => {
            reslove(true);
        }, time);
    });
};
export { sleep };
