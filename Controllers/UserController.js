import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";

//Get User from db
export const getUser = async (req, res) => {
    const id = req.params.id;

    //Checking if the user exists in our db
    try {
        const user = await UserModel.findById(id);

        if (user) {
            const { password, ...otherDetails } = user._doc//user_.doc contains all the details and we are removing password from it
            res.status(200).json(otherDetails)
        } else {
            res.status(404).json("No Such User Exists")
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


//Update a user 

export const updateUser = async (req, res) => {
    const id = req.params.id;

    const { currentUserId, currentUserAdminStatus, password } = req.body;

    //If the person who is updating with id belongs to same account and if the admin of the social media user wants to update the user
    if (id === currentUserId || currentUserAdminStatus) {
        try {

            //If User wants to change the password hash the password and store in db
            if (password) {
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(password, salt)
            }
            //Checking in db with id and updating req.body and returning the new content
            const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }
    } else {
        res.status(403).json("Access Denied! You can only update your own profile")
    }

}

// Delete user

export const deleteUser = async (req, res) => {
    const id = req.params.id;

    const { currentUserId, currentUserAdminStatus } = req.body

    //If the person who is deleting with id belongs to same account and if the admin of the social media user wants to delete the user
    if (currentUserId === id || currentUserAdminStatus) {
        try {
            await UserModel.findByIdAndDelete(id);
            res.status(200).json("User deleted successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("Access Denied! You can only delete your own profile");
    }
};

//Follow A User
export const followUser = async (req, res) => {
    const id = req.params.id;

    const { currentUserId } = req.body;

    //If someone wants to follow himself or herself we should restrict it
    if (currentUserId === id) {
        res.status(403).json("Action Forbidden");
    } else {
        try {
            //The User whom we want to follow
            const followUser = await UserModel.findById(id)

            //The user who wants to follow the above user
            const followingUser = await UserModel.findById(currentUserId)

            // if user we want to follow has some followers(id),the current User is following a given user i.e. the curremt user is already present in the followers array of user  we should not increase the follow... if not increase the follow 
            if (!followUser.followers.includes(currentUserId)) {
                await followUser.updateOne({ $push: { followers: currentUserId } })

                //Increase following of the current user i.e. as he is following a user
                await followingUser.updateOne({ $push: { following: id } })

                res.status(200).json("User Followed")
            }else{
                res.status(403).json("User is already followed by you");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

}  

//Unfollow A User
export const unFollowUser = async (req, res) => {
    const id = req.params.id;

    const { currentUserId } = req.body;

    //If someone wants to unfollow himself or herself we should restrict it
    if (currentUserId === id) {
        res.status(403).json("Action Forbidden");
    } else {
        try {
            //The User whom we want to unfollow
            const followUser = await UserModel.findById(id)

            //The user who wants to unfollow the above user
            const followingUser = await UserModel.findById(currentUserId)

            // if user we want to unfollow is already following the current User i.e. it is present in the followers array then unfollow 
            if (followUser.followers.includes(currentUserId)) {
                await followUser.updateOne({ $pull: { followers: currentUserId } })

                //Decrease following of the current user i.e. as he has unfollowed a user
                await followingUser.updateOne({ $pull: { following: id } })

                res.status(200).json("User unfollowed")
            }else{
                res.status(403).json("User is not already followed by you");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

}  