//??
var Building = require('../models/building');

//Home paged
/*
exports.index = function(req, res) {
    res.render('index', { title: 'Bouldings catalog'});
)};
*/
exports.index = function(req, res, next) {
  Building.find({}, 'name seller')
    .populate('seller')
    .exec(function (err, list_buildings) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('index', { name: 'Buildings List', building_list: list_buildings });
    }); 
};