const mongodb = require("mongodb");
const mongoDatabase = require("../util/database");

const User = class UserModel {
  constructor(firstName, lastName, mobile, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.mobile = mobile;
    this._id = id;
  }

  save() {
    let db = mongoDatabase.getDb();
    return db.collection("user").insertOne(this);
  }

  static getAllUsers() {
    let db = mongoDatabase.getDb();
    return db.collection("user").find().toArray();
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  static getSingleUser(id) {
    let db = mongoDatabase.getDb();
    return db
      .collection("user")
      .find({ _id: new mongodb.ObjectId(id) })
      .next()
      .then((user) => {
        return user;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateUser() {
    let db = mongoDatabase.getDb();
    return db
      .collection("user")
      .updateOne(
        { _id: new mongodb.ObjectId(this._id) },
        { $set: { firstName: this.firstName, lastName: this.lastName } }
      )
      .then((result) => {
        console.log(result);
        console.log(this._id);
        console.log(new mongodb.ObjectId(this._id));
        console.log(this);
      })
      .catch((err) => {
        console.log(err);
      });
    
  }

  static deleteUser(sr, name) {
    let db = mongoDatabase.getDb();
    //   return db.collection('user').
  }
};

module.exports = User;
