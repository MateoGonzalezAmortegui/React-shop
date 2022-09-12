const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "React-shop/bundle.js",
		publicPath: "/React-shop/",
	},
	mode: 'development',
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@components': path.resolve(__dirname, 'src/components/'),
			'@containers': path.resolve(__dirname, 'src/containers/'),
			'@pages': path.resolve(__dirname, 'src/pages/'),
      		'@styles': path.resolve(__dirname, 'src/styles/'),
			'@icons': path.resolve(__dirname, 'src/assets/icons/'),
			'@logos': path.resolve(__dirname, 'src/assets/logos/'),
			'@routes': path.resolve(__dirname, 'src/routes/'),
			'@hooks': path.resolve(__dirname, 'src/hooks/'),
			'@context': path.resolve(__dirname, 'src/context/'),
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},

            //FOR SASS
			{
				test: /\.(css|scss)$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},

			//FOR IMAGES
			{
				test: /\.(png|jpg|svg|jpeg|gif|webp)$/,
	    /*aquí en test agregas la expresión regular para procesar los diferentes tipos de imagenes que tengas.*/
            type: 'asset/resource',
            generator: {
               filename: 'assets/pictures/[hash][ext]',
		/*aquí en filename pones la carpeta en donde quieres que se guarden tus imagenes (le agrego el [hash] para evitar problemas con el cache, además [ext] hace referencia a la extensión del archivo que se haya procesado).*/
            }
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
	],
	devServer:{
		historyApiFallback: true,
	}
}
