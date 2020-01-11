import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    fullName: {
        type: String,
        required: 'Enter a first name.'
    },
    email: {
        type: String          
    },
    dateOfBirth: {
        type: Date            
    },
    password: {
        type: String
    }
}, {
    timestamps: true
});