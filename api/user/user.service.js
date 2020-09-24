const dbService = require('../../services/db.service');
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    query,
    getById,
    // getByFirebaseId,
    getByEmail,
    remove,
    update,
    add
}

async function query(filterBy = {}) {
    const criteria = _buildCriteria(filterBy)
    const collection = await dbService.getCollection('users')

    try {
        // if(filterBy.count === 'true'){
        //     return await collection.find().count()
        // }
        const users = await collection.find(criteria).toArray();
        users.forEach(user => delete user.password);
        return users
    } catch (err) {
        console.log('ERROR: cannot find users')
        throw err;
    }
}

async function getById(userId) {
    const collection = await dbService.getCollection('users')
    try {
        const user = await collection.findOne({ "_id": ObjectId(userId) })
        delete user.password
        return user
    } catch (err) {
        console.log(`ERROR: while finding user ${userId}`)
        throw err;
    }
}

// async function getByFirebaseId(userId) {
//     const collection = await dbService.getCollection('users')
//     try {
//         return user = await collection.findOne({ "uid": userId })
//     } catch (err) {
//         console.log(`ERROR: while finding user ${userId}`)
//         throw err;
//     }
// }


async function getByEmail(email) {
    const collection = await dbService.getCollection('users')
    try {
        const user = await collection.findOne({ email: {'$regex' : `^${email}$`, $options : 'i'} })
        return user
    } catch (err) {
        console.log(`ERROR: while finding user ${email}`)
        throw err;
    }
}

async function remove(userId) {
    const collection = await dbService.getCollection('users')
    try {
        await collection.deleteOne({ "_id": ObjectId(userId) })
    } catch (err) {
        console.log(`ERROR: cannot remove user ${userId}`)
        throw err;
    }
}

async function update(user) {
    const collection = await dbService.getCollection('users')
    user._id = ObjectId(user._id);
    try {
        await collection.replaceOne({ "_id": user._id }, { $set: user })
        return user
    } catch (err) {
        console.log(`ERROR: cannot update user ${user._id}`)
        throw err;
    }
}

async function add(user) {
    user._id = ObjectId(user._id);
    user.joinAt = Date.now()
    const collection = await dbService.getCollection('users')
    try {
        await collection.insertOne(user);
        return user;
    } catch (err) {
        console.log(`ERROR: cannot insert user`)
        throw err;
    }
}

function _buildCriteria(filterBy) {
    const criteria = {};
    // if (filterBy) {
    //     for (const property in filterBy) {
    //         if (filterBy[property]){
    //             criteria[filterBy[property]] = filterBy[property]
    //         }
    //     } 
    // }
    if (filterBy.name) {
        criteria.name = filterBy.name
    }
    return criteria;
}