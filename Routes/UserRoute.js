import express from "express";
import { deleteUser, followUser, getUser, unFollowUser, updateUser } from "../Controllers/UserController.js";


const router = express.Router();

//Get User Route
router.get('/:id',getUser)

//Update User Route
router.put('/:id',updateUser)

//Delete User Route
router.delete('/:id',deleteUser)

//Follow User Route
router.put('/:id/follow',followUser)

//unFollow User Route
router.put('/:id/unfollow',unFollowUser)


export default router