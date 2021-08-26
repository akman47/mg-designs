const Message = require('../models');

console.log('message', Message);

const resolvers = {
    Query: {
        messages: async () => {
            return Message.find().sort({ createdAt: -1 });
        },
        message: async(parent, { _id }) => {
            return Message.findOne({ _id });
        }
    },
    
    Mutation: {
        addMessage: async (parent, args) => {
            console.log('addmessage', args);
            const message = await Message.create(args);

            return message;
        }
    }
}