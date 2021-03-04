module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    port: 3000,
    disableHostCheck: true,
    proxy: {
      '^/api': {
        target: 'http://backend:8080',
      },
      '^/test-bucket': {
        target: 'http://localstack:4566',
      },
    },
  },
};
