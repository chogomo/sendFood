module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',"@babel/preset-env",
  ],
  "plugins":["transform-vue-jsx","@babel/plugin-transform-runtime",["component",
    {
      "libraryName":"mint-ui",
      "style":true

    }
  ]]
}
