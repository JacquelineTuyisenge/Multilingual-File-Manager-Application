import mongoose from "mongoose";

const Schema = mongoose.Schema;

const fileSchema = new Schema(
    {
        fileName: {
            type: String,
            required: true
        },
        path: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            required: true
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
    },
    { timestamps: true }
);

export default mongoose.model("File", fileSchema);