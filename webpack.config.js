const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV == 'development';

module.exports = {
	mode: 'none', // development  production
  	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
		},
		// 生产环境下默认已经开启压缩
		optimization: {
			usedExports: true, // 只会标记，只在压缩的时候
			sideEffects: true,
			// minimize: true,
		}
};
