// 3 - Modelo de datos para cursos
import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, default: ''},
    level: {type:String, enum: ['basico', 'intermedio','avanzado'], default: 'basico'},
    published: { type: Boolean, default: true}
}, { timestamps: true });

export default mongoose.model('Course', courseSchema);
