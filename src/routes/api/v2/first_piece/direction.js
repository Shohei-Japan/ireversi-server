const router = require('express').Router();

router.route('/position')
  .post((req, res) => {
    res.sendStatus(204);
  });
module.exports = router;
