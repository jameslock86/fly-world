
import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({


    name: {
        type: String,
        required: [true, ' please enter room mname'],
        trim: true,
        maxLength: [100, ' can not exceed 100 char'],
    },
    price: {
        type: Number,
        required: [true, ' please enter room number'],
        maxLength: [5, ' can not exceed 5 char'],
        defualt: 0.0
    },
    description: {
        type: String,
        required: [true, ' please enter room description'],
    },
    Address: {
        type: String,
        required: [true, ' please enter room address'],
    },
    guestCapacity: {
        type: Number,
        required: [true, ' please enter room guestCapacity'],
    },
    numberOfBeds: {

        type: Number,
        required: [true, ' please enter room numberOfBeds'],

    },
    internet: {
        type: Boolean,
        default:false
    },
    breakfast: {
        type: Boolean,
        default:false
    },
    airConditioned: {
        type: Boolean,
        default:false
    },
    petsAllowed: {
        type: Boolean,
        default:false
    },
    roomCleanning: {
        type: Boolean,
        default:false
    },
    ratings: {
        type: Number,
        default:0
    },
    numberOfReviews: {
        type: Number,
        default:0
    },
    images:[ {
        public_id:{
            type:String,
            required: true
        },
        url:{
            type:String,
            required: true
        },

    }],
    category:{
        type:String,
        required: [true, 'please put room category'],
        enum:{
            values:[
                'king',
                'single',
                'twin',
            ],
            message:'PLease seclect correct category for room'
        }
    },
    reviews:[
        {
            user:{
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true
            },
            name:{
                type:String,
                required: true,

            },
            rating:{
                type: String,
                required: true
            },
            comments: {
                type: String,
                required: true
            }
        }
    ],
    user:{
        type: mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    },
    createdAt:{
        type:Date,
        defualt: Date.now
    }

})

export default mongoose.model.Room || mongoose.model('Room', roomSchema)