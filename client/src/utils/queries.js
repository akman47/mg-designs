import { gql } from '@apollo/client';

export const GET_ALL_MESSAGES = gql`
    {
        messages {
            _id
            name
            email
            messageBody
            createdAt
        }
    }
`;

export const GET_ONE_MESSAGE = gql`
    message {
        message {
            _id
            name
            email
            messageBody
            createdAt
        }
    }
`;