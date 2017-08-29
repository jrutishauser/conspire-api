import db from '../models';

export const commentController = {};

commentController.post = (req, res) => {
    const {
        userId,
        password,
        text,
        link,
        tldr,
        conspiracyId
    } = req.body;

    const comment = new db.Comment({
        text,
        _creator: userId,
        _conspiracy: conspiracyId
    });

    comment.save().then(newComment => {
        db.Conspiracy.findByIdAndUpdate(
            conspiracyId,
            { $push: { '_comments': newComment._id } }
        ).then(existingPost => {
            res.status(200).json({
                success: true,
                data: newComment,
                existingPost
            });
        }).catch(err => {
            res.status(500).json({
                message: err
            });
        });
    }).catch(err => {
        res.status(500).json({
            message: err
        });
    });
}

commentController.getAll = (req, res) => {
    db.User.find({}, ['username']).then( users => {
        return res.status(200).json({
            success: true,
            data: users
        });
    }).catch( err => {
        return res.status(500).json({
            message: err
        });
    });
}

export default commentController;