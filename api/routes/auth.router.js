const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post('/login',
  passport.authenticate('local', {session: false}),
  async (req, res, next) => {
    try {
      res.json({ message: 'Login successful', usuario: req.usuario });
    } catch (error) {
      next(error);
    }
  }
);


module.exports = router;
