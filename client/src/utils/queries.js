import { gql } from '@apollo/client';

export const GET_ALL_MESSAGES = gql`
    {
        getMessages {
            _id
            name
            email
            messageBody
            createdAt
        }
    }
`;

export const GET_ONE_MESSAGE = gql`
    {
        getMessage {
            _id
            name
            email
            messageBody
            createdAt
        }
    }
`;