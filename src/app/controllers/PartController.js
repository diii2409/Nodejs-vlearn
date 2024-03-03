const parts = require('../models/part');
const { mongooseToObject } = require('../../util/mongoose');

class PartController {
  //[GET] /parts/:slug
  async show(req, res) {
    try {
      let part = await parts.findOne({ slug: req.params.slug }).exec();
      res.render('parts/show', {
        part: mongooseToObject(part),
      });
    } catch (error) {
      console.error(error); // In ra lỗi để kiểm tra
      res.status(400).json(error);
    }
  }
  //[GET] /parts/create
  create(req, res) {
    res.render('parts/create');
  }
  //[GET] /parts/:slug/edit
  async edit(req, res) {
    try {
      let part = await parts.findOne({ slug: req.params.slug }).exec();
      res.render('parts/edit', {
        part: mongooseToObject(part),
      });
    } catch (error) {
      console.error(error); // In ra lỗi để kiểm tra
      res.status(400).json(error);
    }
  }

  //[POST] /parts/store
  async store(req, res) {
    try {
      await parts.create(req.body);
      res.redirect('/');
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  //[PUT] /parts/:slug
  async update(req, res) {
    try {
      let updatedPart = await parts.findOneAndUpdate(
        { slug: req.params.slug },
        req.body,
        { new: true },
      );
      res.redirect('/');
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  //[DELETE] /parts/:slug
  async delete(req, res) {
    try {
      let updatedPart = await parts.findOneAndDelete(
        { _id: req.params.id },
        req.body,
        { new: true },
      );
      res.redirect('back');
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

module.exports = new PartController();
