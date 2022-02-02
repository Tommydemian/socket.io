 const express = require('express');
 const app = express();
 // We want do the app.listen()

// El server que creas con express y el listener de socket.io => Son algo # de lo que harías normalmente con express
 const server = require('http').createServer(app) // Init socket.io server
 const io = require('socket.io')(server, {
     cors:{
         origin:'*'
     }
 });

 io.on('connection', (socket)=>{  //Event => 'connection'
    console.log('what is socket:', socket)
    console.log('socket is active to be connected')

    // After the connection is being made

    socket.on('chat', (payload)=>{
        console.log('what is payload', payload)
        io.emit('chat', payload)
    })
 })

// * app.listen('5000', ()=>(console.log('server is active...')) 
// ! => THIS IS NOT HOW WE CREATE A LISTENING SERVER ON THIS  

server.listen('5000', ()=>(console.log('server is active at port 5000')))


 // Mongo Adapter => Comunica el server A con el server B 
