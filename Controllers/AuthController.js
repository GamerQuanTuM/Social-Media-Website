import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt"

//Registering a new user
export const registerUser = async (req, res) => {
    const { username, password, firstname, lastname } = req.body

    //Hashing Password for security
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //creating a new User for which we have to map the data of req.body in our model 
    const newUser = new UserModel({
        username,
        password: hashedPassword,
        firstname,
        lastname
    })

    //Interacting with the server and save the new User in db
    try {
        await newUser.save()
        res.status(200).json(newUser)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

//Login User

export const loginUser = async (req, res) => {
    const { username, password } = req.body

    //Finding  Users with the given name and password from req.body
    try {
        const user = await UserModel.findOne({
            username
        })

        //Comparing hashed Password from db with the password user typed
        if (user) {
            const validation = await bcrypt.compare(password, user.password)

            validation ? res.status(200).json(user) : res.status(400).json("Wrong Password")
        } else {
            res.status(404).json("User doesnt exists")
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}