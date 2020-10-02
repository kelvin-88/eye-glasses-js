module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/eye-glasses-js/" : "/",

  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "大大眼鏡";
      return args;
    });
  }
};
