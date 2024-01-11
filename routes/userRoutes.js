const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const User = require('../models/user')

router.post('/', userController.createUser)
router.post('/login', userController.loginUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.auth, userController.deleteUser)

module.exports = router

// related to upcoming project

// get the req.body from the front-end
// {
//     userId, 
//     commentData,
//     postId
// }

// // comment model
// {
//     body: String, 
//     userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
// }

// // post model
// {
//     title: String, 
//     body: String, 
//     comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
// }

// const commentOnPost = async (req, res) => {
//     try {
//         const user = await User.findOne()
//         if(!user) throw new Error('No user found with the given id do you think they were deleted?')
//         const foundPost = await Post.findOne({'id': req.body.postId})
//         if(!foundPost) throw new Error('User was valid but there was not post found, was the post deleted?')
//         const comment = new Comment({ body = req.body.commentBody, userId: user._id })
//         foundPost.cooments.push(comment._id)
//         await comment.save()
//         await foundPost.save()
//         res.status('201').json(comment)
//     } catch (error) {{'_id': req.body.userId}
//         res.status('400').json({ msg: 'Could not add comment to database.', details: error.message})
//     }
// }