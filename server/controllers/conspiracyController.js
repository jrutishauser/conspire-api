import db from './../models';

export const conspiracyController = {}

conspiracyController.post = (req, res) => {
    const { title, tldr, link, userId } = req.body;

    const conspiracy = new db.Conspiracy({
        title,
        tldr,
        link,
        _creator: userId
    });

    conspiracy.save().then( newPost => {
        return res.status(200).json({
            success: true,
            data: newPost
        })
    }).catch( err => {
        return res.status(500).json({
            message: err
        })
    })
}

conspiracyController.getAll = (req, res) => {
    db.Conspiracy.find({})
    .populate({
        path: '_comments'
    })
    .then( conspiracy => {
        return res.status(200).json({
            success: true,
            data: conspiracy
        });
    }).catch( err => {
        return res.status(500).json({
            message: err
        });
    });
}

export default conspiracyController;