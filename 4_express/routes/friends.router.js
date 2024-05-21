const express = require('express')

friendsController = require('../controllers/friends.controllers')

const friendsRouter = express.Router();

friendsRouter.use((req, res, next)=>{
    console.log('ip address:', req.ip);
    next();
});

friendsRouter.post('/', friendsController.postFriend);
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/friends/:friendId', friendsController.getFriend);

module.exports = friendsRouter;
