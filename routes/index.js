const router = require('express').Router()

// link api routes
router.use('/api', require('./workoutRoutes.js'))

// link html routes
router.use('/', require('./viewRoutes.js'))

module.exports = router