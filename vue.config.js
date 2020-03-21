module.exports = {
  publicPath: '/vue-kanban/',
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
