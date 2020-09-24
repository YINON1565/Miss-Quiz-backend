const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const app = express()
const http = require('http').createServer(app);
// const io = require('socket.io')(http);

const authRoutes = require('./api/auth/auth.routes')
const userRoutes = require('./api/user/user.routes')
// const connectSockets = require('./api/socket/socket.routes')

app.use(cookieParser())
app.use(bodyParser.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('miss-quiz'));

} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:4200', 'http://localhost:4200', 'http://127.0.0.1:3030', 'http://localhost:3030'],
        credentials: true
    };
    app.use(cors(corsOptions));
}
// routes
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
// connectSockets(io)
// auth/signup


const logger = require('./services/logger.service')
const { Console } = require('console')
// const port = process.env.PORT || 5000;
const port = process.env.PORT || 3030;
http.listen(port, () => {
    logger.info('Server is running on port: ' + port)
});