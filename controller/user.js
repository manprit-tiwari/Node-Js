const User = require('../models/user');
const mongodb = require('mongodb');

const addUser = (req, res, next) => {
    res.render('add-user', { pageTitle: 'add-user' });
}
const addNewUser = (req, res, next) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let mobile = req.body.mobile;
    // let image = req.body.image;
    const user = new User(firstName,lastName,mobile);
    user.save().then((result) => {
        // console.log(raws);
        // console.log(fieldData)
        console.log(result);
        res.redirect('/');
    }).catch(err => {
        console.log(err);
    })
}

const getAllUsers = (req, res, next) => {
    User.getAllUsers().then((userData) => {
        console.log(userData);
        res.render('index', { pageTitle: 'Home', users: userData });
    }).catch(err => {
        console.log(err);
    })
    
}

const getSingleUser = (req, res, next) => {
    let id = req.params.id;
    User.getSingleUser(id).then(user => {
        res.render('singleUser', { pageTitle: 'User Detais', user: user, editUser: false });
    }).catch((err) => {
        console.log(err);
    })
}

const getEditUser = (req, res, next) => {
    let id = req.params.id;
    User.getSingleUser(new mongodb.ObjectId(id)).then(user => {
        res.render('singleUser',{pageTitle: 'Edit User',user: user, editUser: true})
    }).catch(err => {
        console.log(err);
    })
}

const postEditUser = (req, res, next) => {
    let id = req.body.id;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let mobile = req.body.mobile;
    const user = new User(firstName, lastName, mobile,id);
    user.updateUser().then(() => {
        console.log('User Data Updated!!!');
        res.redirect('/');
    }).catch(err => {
        console.log(err);
    })
}

const deleteUser = (req, res, next) => {
    let id = req.params.id;
    User.deleteUser(id).then((result) => {
        console.log(result);
        res.redirect('/');
    }).catch(err => {
        console.log(err);
    })
}


module.exports = {
    addUser: addUser,
    addNewUser: addNewUser,
    getAllUsers: getAllUsers,
    deleteUser: deleteUser,
    getSingleUser: getSingleUser,
    getEditUser: getEditUser,
    postEditUser: postEditUser
}