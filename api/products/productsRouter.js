const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('hello from the router')
})

module.exports = router