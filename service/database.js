const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

//if (!userName) {
//  throw Error('Database not configured. Set environment variables');
//}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const userCollection = client.db('boppagames').collection('user');
const roomCollection = client.db('boppagames').collection('room');


function getUser(username) {
  return userCollection.findOne({ username: username });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(username, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    username: username,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

function getRoom(roomName) {
  return roomCollection.findOne({ roomName: roomName });
}

function getAllRooms() {
  const rooms = roomCollection.find({},{});
  return rooms.toArray();
}

async function createRoom(roomName, password, numPlayers, currentPlayers) {
  const room = {
    roomName: roomName,
    password: password,
    numPlayers: numPlayers,
    currentPlayers, currentPlayers,
    roomID: uuid.v4(),
  };
  await roomCollection.insertOne(room);

  return room;
}





module.exports = {
  getUser,
  getUserByToken,
  createUser,
  getRoom,
  getAllRooms,
  createRoom
};
