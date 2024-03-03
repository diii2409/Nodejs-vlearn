class NewsController {
  //[GET] /News
  index(req, res) {
    res.render("news");
  }
  //[GET] /news/:slug
  show(req, res) {
    res.send("NEW DETAILL");
  }
}

module.exports = new NewsController();
