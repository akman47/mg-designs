const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Message {
        _id: ID
        name: String
        email: String
        message: String
        createdAt: String
    }

    type Query {
        message(_id: ID!): Message
        messages: [Message]
    }

    type Mutation {
        addMessage(name: String!, email: String!, message: String!): Message
    }
`;

module.exports = typeDefs;