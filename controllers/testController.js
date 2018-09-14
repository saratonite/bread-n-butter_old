const User = require('../models/User')

exports.getIndex = (req, res) => {
  User.find({}, (err, data) => {
    if (err) res.send('Error')

    res.json(data)
  })
}
