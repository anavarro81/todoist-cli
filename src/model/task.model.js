import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({

    taskName: { type: String, required: true, maxlength: 100 },
    description: { type: String,  maxlength: 500 },
    dueDate: { type: Date, },
    priority: { type: String, enum: ['alta', 'media', 'baja'],  },
    project: { type: String,  maxlength: 100 },
    label: { type: String, maxlength: 50 },

})


const TaskModel = mongoose.model('Task', taskSchema);

export default TaskModel;