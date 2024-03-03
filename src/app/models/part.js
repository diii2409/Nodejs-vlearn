const slug = require('mongoose-slug-updater');
const mongoose = require('mongoose');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const part = new Schema(
  {
    name: { type: String, default: 'cu den' },
    tuoi: { type: String, default: '1' },
    slug: { type: String, slug: 'name', unique: true },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('part', part);
