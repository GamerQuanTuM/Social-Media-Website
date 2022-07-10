import PostModel from "../Models/postModel.js"
import UserModel from "../Models/userModel.js"
import mongoose from "mongoose"

//Create new Post 

export const createPost = async (req, res) => {

    //We are sending all the details of the post which is present in req.body
    const newPost = new PostModel(req.body)

    try {
        await newPost.save()//Saving new Post
        res.status(200).json("Post Created")
    } catch (error) {
        res.status(500).json(error)
    }
}

//Get new Post

export const getPost = async (req, res) => {
    const id = req.params.id

    try {
        //It will return the post if it is present in the db(Post Model)
        const post = await PostModel.findById(id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
}

//Update a post

export const updatePost = async (req, res) => {
    const postId = req.params.id
    const { userId } = req.body//Fetch user id from body of request

    try {
        //Find the post from the db(Post Model)
        const post = await PostModel.findById(postId)
        if (post.userId === userId) {//If the post to be updated by a user had created the post only he can update the post else can't update
            await post.updateOne({ $set: req.body })//Updating the post
            res.status(200).json("Post Updated")
        } else {
            res.status(403).json("Action Forbidden")
        }
    } catch (error) {
        res.status(500).json(error)
    }

}


// Delete a post
export const deletePost = async (req, res) => {
    const id = req.params.id;
    const { userId } = req.body;//Fetch user id from body of request

    try {
        const post = await PostModel.findById(id);
        //If the post to be deleted by a user had created the post only he can delete the post else can't delete
        if (post.userId === userId) {
            await post.deleteOne();
            res.status(200).json("Post deleted successfully");
        } else {
            res.status(403).json("Action forbidden");
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

//Like/Dislike Post

export const likeDislikePost = async (req, res) => {
    const id = req.params.id;
    const { userId } = req.body;//Fetch user id from body of request


    try {
        const post = await PostModel.findById(id);//Getting the post by id from db(Post Model)
        if (!post.likes.includes(userId)) {//If user is liking a post for 1st time he or she id should not be in the likes array hence he or she can like the post else he or she can dislike
            await post.updateOne({ $push: { likes: userId } });
            res.status(200).json("Post liked");
        } else {
            await post.updateOne({ $pull: { likes: userId } });
            res.status(200).json("Post Disliked");
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

// Get Timeline Posts
export const getTimelinePosts = async (req, res) => {
    const userId = req.params.id;//Fetch user id from body of request

    //Timeline Posts includes posts from him or her plus posts from the users he or she is following
    try {
        const currentUserPosts = await PostModel.find({ userId: userId });//posts of the current user from db
        const followingPosts = await UserModel.aggregate([//Posts of the users he or she is following 
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(userId),
                },
            },
            {
                $lookup: {
                    from: "posts",
                    localField: "following",
                    foreignField: "userId",
                    as: "followingPosts",
                },
            },
            {
                $project: {
                    followingPosts: 1,
                    _id: 0,
                },
            },
        ]);

        res
            .status(200)
            .json(currentUserPosts.concat(...followingPosts[0].followingPosts)
                .sort((a, b) => {
                    return b.createdAt - a.createdAt;
                })
            );
    } catch (error) {
        res.status(500).json(error);
    }
};