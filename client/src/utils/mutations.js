import { gql } from '@apollo/client';

export const ADD_MESSAGE = gql`
    mutation addMessage($name: String!, $email: String!, $messageBody: String!) {
        addMessage(name: $name, email: $email, messageBody: $messageBody) {
            _id
            name
            email
            messageBody
            createdAt
        }
    }
`;