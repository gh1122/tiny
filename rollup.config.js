import { terser } from 'rollup-plugin-terser';
module.exports = {
    input: './src/index.js',
    output: {
        file: './dist/gh-utils.js', // 打包后的存储目录
        format: 'umd', // 使用哪种模块化模范
        name: 'ghUtils   ', // 如果使用的是iife或者amd，需要指定一个全局变量
    },
    plugins: [terser({ compress: { drop_console: true } })],
};
