const User = require('../app/models/user');
const Task = require('../app/models/task');

// GetAll
exports.get = async () => {
    const res = await User.find();
    return res;
}

// GetById
exports.getById = async (id) => {
    const res = await User.findById(id);
    return res;
}

// Put
exports.put = async (id, data) => {
    const res = await User.findByIdAndUpdate(id, {
        $set:{
            name: data.name,
            email: data.email,
            password: data.password
        }
    });
    return res;
}

// Delete
exports.delete = async (id) => {
    await User.findByIdAndRemove(id);
}

exports.insertTask = async (uId, tId) => {
    const task = await Task.findById(tId);
    const user = await User.findById(uId);

    user.taskList.push(task);
    await user.save();

    return [ user, task ];
}