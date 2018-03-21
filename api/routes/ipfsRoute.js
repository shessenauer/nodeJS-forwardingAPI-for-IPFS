/*
IPFS API routing for all IPFS REST calls

authors (Github username) - shessenauer
*/

const express = require('express')
const router = express.Router()

const ipfsController = require('../controllers/ipfsController')

router.get('/', (req, res, next) => {
  let response = ipfsController.uploadFile('Data Data Data')
  res.status(200).json({
    message: response
  })
})

module.exports = router
