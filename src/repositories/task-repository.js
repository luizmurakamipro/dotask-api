const Task = require('../app/models/task');

// GetAll
exports.get = async () => {
    const res = await Task.find();
    return res;
}

// GetById
exports.getById = async (id) => {
    const res = await Task.findById(id);
    return res;
}

// Post
exports.post = async (data) => {
    const task = new Task(data);
    await task.save();
}

// Put
exports.put = async (id, data) => {
    const res = await Task.findByIdAndUpdate(id, {
        $set:{
            date: data.date,
            description: data.description
        }
    });
    return res;
}

// Delete
exports.delete = async (id) => {
    await Task.findByIdAndRemove(id);
}