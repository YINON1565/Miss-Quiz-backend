module.exports = connectSockets
const userService = require('../user/user.service')
const videoService = require('../video/video.service')
const utilService = require('../../services/util.service')

function connectSockets(io) {
    io.on('connection', socket => {
        socket.on('applyToVideo', request => {
            userService.getById(request.to._id)
                .then(async user => {
                    user.notifications.push(request)
                    const updatedUser = await userService.update(user, true)
                    io.emit(`updatedUser ${user._id}`, updatedUser)
                })
        })
        socket.on('decline', notification => {
            userService.getById(notification.to._id)
                .then(async user => {
                    user.notifications.push(notification)
                    const updatedUser = await userService.update(user, true)
                    io.emit(`updatedUser ${user._id}`, updatedUser)
                })
            userService.getById(notification.from._id)
                .then(async user => {
                    const idx = user.notifications.findIndex(
                        currVideo => currVideo._id === notification._id
                      );
                    user.notifications.splice(idx, 1);
                    await userService.update(user, true)
                })
        })
        socket.on('approve', notification => {
            userService.getById(notification.to._id)
            .then(async user => {
                user.notifications.push(notification)
                const updatedUser = await userService.update(user, true)
                io.emit(`updatedUser ${user._id}`, updatedUser)
            })
            userService.getById(notification.from._id)
                .then(async user => {
                    const video = await videoService.getById(notification.video._id);
                    video.membersApplyed.push(notification.from);
                    
                    video.membersNeeded -= notification.memebersApllied;
                    await videoService.update(video);
                    const idx = user.notifications.findIndex(
                        currVideo => currVideo._id === notification._id
                    );
                    user.notifications.splice(idx, 1);
                    await userService.update(user, true)
                })
        })  
    })
}