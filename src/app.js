const express = require('express');
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/auth.routes')
const musicRoutes = require('./routes/music.routes')
const albumRoutes = require('./routes/album.routes')
const homeRoutes = require('./routes/home.routes')

const app = express()
app.use(express.json())
app.use(cookieParser())


app.use('/api/auth', authRoutes);
app.use('/api/music', musicRoutes);
app.use('/api/home', homeRoutes);
app.use('/api/album', albumRoutes);

module.exports = app;