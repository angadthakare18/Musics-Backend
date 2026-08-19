const express = require('express');
const router = express.Router();
const albumController = require('../controller/album.controller')
const multer = require('multer')

const authMiddleware = require('../middlewares/auth.middleware')
const accessMiddleware = require('../middlewares/access.middleware')

const upload = multer({
    storage: multer.memoryStorage()
})

router.post('/albums', authMiddleware.authArtist, albumController.createAlbum)

router.get('/albums', accessMiddleware.authUser, albumController.getAllAlbums)

router.get('/albums/:albumId', accessMiddleware.authUser, albumController.getAllAlbumById)

module.exports = router;
