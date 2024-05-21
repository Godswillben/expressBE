const express = require('express')
const friendsRouter = require('./routes/friends.router')

const app = express()

messagesController = require('./controllers/messages.controllers')

const PORT = 3000


app.use((req, res, next)=>{
    const start = Date.now();
    next();
    const delta = Date.now()-start;
    console.log(`${req.method} ${req.url} ${delta}ms`)
});

app.use(express.json());
app.use("/friends", friendsRouter)

app.get('/', (req, res) => {
    res.send('Heeello');
})

app.listen(PORT, ()=> {
    console.log(`Listening on ${PORT}...`)
})
