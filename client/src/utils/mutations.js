import { gql } from '@apollo/client';

export const ADD_MESSAGE = gql`
    mutation addMessage($name: String!, $email: String!, $message: String) {
        addMessage(name: $name, email: $email, message: $messagey) {
            _id
            name
            email
            messageBody
            createdAt
        }
    }
`;