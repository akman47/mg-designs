const Message = require('../models');

console.log('message', Message);

const resolvers = {
    Query: {
        getMessages: async () => {
            return Message.find().sort({ createdAt: -1 });
        },
        getMessage: async(parent, { _id }) => {
            return Message.findOne({ _id });
        }
    },
    
    Mutation: {
        addMessage: async (parent, args) => {
            const message = await Message.create(args);

            return message;
        }
    }
}

module.exports = resolvers;