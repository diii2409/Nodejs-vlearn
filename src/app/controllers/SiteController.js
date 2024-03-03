const part = require('../models/part');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
  //[GET] /
  async home(req, res) {
    try {
      let parts = await part.find({}).exec();
      // console.log(parts);
      res.render('home', {
        parts: mutipleMongooseToObject(parts),
      });
    } catch (error) {
      console.error(error); // In ra lỗi để kiểm tra
      res.status(400).json(error);
    }
  }
  //[GET] /search
  search(req, res) {
    // console.log(req.query);

    res.render('search');
  }

  // //[POST] /search
  // searchs(req, res) {
  //   console.log(req.body);
  //   // console.log(req.body);

  //   res.send('hello');
  // }
}
module.exports = new SiteController();
