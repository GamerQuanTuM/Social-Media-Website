import express from "express";
import { createPost, deletePost, getPost, getTimelinePosts, likeDislikePost, updatePost } from "../Controllers/PostController.js";

const router = express.Router();

//Create Post Route

router.post("/", createPost)

//Get Post Route
router.get("/:id", getPost)

//Update Post Route
router.put("/:id", updatePost)

//Update Delete Route
router.delete("/:id", deletePost)

//Like Dislike Post Route
router.put("/:id/likeDislike", likeDislikePost)

//LTimeline Post Route
router.get("/:id/timeline", getTimelinePosts)


export default router