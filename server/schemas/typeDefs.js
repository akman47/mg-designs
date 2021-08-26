const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Message {
        _id: ID
        name: String
        email: String
        messageBody: String
        createdAt: String
    }

    type Query {
        getMessage(_id: ID!): Message
        getMessages: [Message]
    }

    type Mutation {
        addMessage(name: String!, email: String!, messageBody: String!): Message
    }
`;

module.exports = typeDefs;