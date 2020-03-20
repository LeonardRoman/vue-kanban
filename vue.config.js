module.exports = {
  publicPath: '/vue-kanban/',
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/styles/_vars.scss";
          @import "@/assets/styles/_mixins.scss";`
      },
    }
  }
}
