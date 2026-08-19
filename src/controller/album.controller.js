const albumModel = require('../models/album.model')
const jwt = require('jsonwebtoken')

async function createAlbum(req, res) {
    // const token = req.cookies.token;
    // if(!token){
    //     return res.status(401).json({message: 'Unauthorized'})
    // }
    // try {
    //     const decoded = jwt.verify(token, process.env.JWT_SECRET)
    //     if(decoded.role !== 'artist'){
    //         return res.status(403).json({message: 'You dont have access to create album'})
    //     }

        const{title, musicIds} = req.body;

        const album = await albumModel.create({
            title, 
            musics: musicIds,
            // artist: decoded.id
            artist: req.user.id
        })

        res.status(201).json({
            message: 'Album created successfully',
            album:{
                id: album._id,
                title: album.title,
                artist: album.artist,
                musics: album.musics
            }
        })

    // } catch (err) {
    //     console.log(err)
    //     return res.status(401).json({message: 'Unauthorized'})
    // }
}

async function getAllAlbums(req, res) {
    
    const albums = await albumModel.find().select('title artist').populate('artist', 'username email')

    res.status(200).json({
        message:'Albums fetched successfully',
        albums: albums
    })
}

async function getAllAlbumById(req, res) {
    
    const albumId = req.params.albumId;

    const album = await albumModel.findById(albumId).populate('artist', 'username email').populate('musics')

    return res.status(200).json({
        message:'Album fetched successfully',
        album: album
    })
}

module.exports = {createAlbum, getAllAlbums, getAllAlbumById}