const path = require('path')

function getMessages(req, res){
    res.sendFile(path.join(__dirname, '..', 'public', "skimountain.jpg"))
}

function postMessage(req, res){
    console.log('Uploading messages...')
}

module.exports = {
    getMessages,
    postMessage,
}
