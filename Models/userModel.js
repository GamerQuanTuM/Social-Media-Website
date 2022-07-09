import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        profilePicture: String,
        coverPicture: String,
        about: String,
        livesIn: String,
        worksAt: String,
        relationship: String,
        followers:[],
        following:[]
    },
    {timestamps:true}//Against each entry in database it will automatically create 2 fields: Created At and Updated At ...So that we dont have to manually track these two things
)

const UserModel = mongoose.model("Users",UserSchema)

export default UserModel