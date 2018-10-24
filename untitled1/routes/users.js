var express = require('express');
var router = express.Router();

var account = [
    {username: 'bai', password: 'hello'},
    {username: 'Username', password: 'Password'}
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('get ok');
  res.json([{id: 1, username: "bai", password: "hello"}, {id: 2, username: "dong", password: "hello"}]);
});

router.post('/', function(req, res) {
  //console.log('post ok');
  console.log(req.body);
  var ok = false;
  for (var acc in account) {
      if (account[acc].username == req.body.json.username && account[acc].password == req.body.json.password) {
          ok = true;
          break;
      }
  }
  if (ok) {
      res.json([{result: 'YES'}]);
  } else {
      res.json([{result: 'NO'}]);
  }
});

module.exports = router;
