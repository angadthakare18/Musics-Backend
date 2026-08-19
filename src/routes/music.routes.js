const express = require('express')
const musicController = require('../controller/music.controller')
const router = express.Router()
const multer = require('multer')

const authMiddleware = require('../middlewares/auth.middleware')

const upload = multer({
    storage: multer.memoryStorage()
})

// Prefix /api/music
router.post('/upload', authMiddleware.authArtist, upload.single("music"), musicController.createMusic)


module.exports = router;