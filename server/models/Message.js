const { Schema, model } = require('mongoose');

const messageSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            match: [/.+@.+\..+/, 'Must enter a valid email']
        },
        messageBody: {
            type: String,
            required: true,
            minLength: 1
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
)

const Message = model('Message', messageSchema);

module.exports = Message;