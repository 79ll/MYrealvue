module.exports = {
  assetsDir: 'mydir',
  runtimeCompiler: true,
   devServer: {
          open: true
      },
	devServer: {
	    proxy: {
	      '/api': {
	        target: 'http://localhost:8090',
	        changeOrigin: true,
	        ws: true,
	        pathRewrite: {
	          '^/api': ''
	        }
	      }
	    }
	  }
}