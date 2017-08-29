import db from '../models';

const userController = {};

userController.post = (req, res) => {
    const {username, password} = req.body;

    const user = new db.User({
        username,
        password
    });

    user.save().then(newUser => {
        res.status(200).json({
            success: true,
            data: newUser
        })
    }).catch(err => {
        res.status(500).json({
            message: err
        })
    });
}

userController.getAll = (req, res) => {
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

export default userController;