const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const nodemailer = require('nodemailer');
require('dotenv').config();

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

async function startServer() {
    await server.start();
    server.applyMiddleware({ app });
}
startServer();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/mail', async (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const messageBody = req.body.bodyMessage;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.email.USER,
            pass: process.env.email.PASSWORD
        }
    }); 
    
    var mailOptions = {
        from: 'message.notification.system@gmail.com',
        to: 'superangieman@gmail.com',
        subject: `New message from ${name}`,
        text: `Hi Melissa, 
            ${name} left you the following message: 
            ${messageBody}
            You can reply to them at ${email}`,
		
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.json({
              message: 'Email failed to send'
          });
        } else {
          console.log('Email sent: ' + info.response);
          res.json({
              message: 'Email sent'
          });
        }
      }); 
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });  
});