import { replaceMongoIdInObject } from "@/lib/convertData";
import { Module } from "@/model/module.model";
import { Lesson } from "@/model/lesson.model";

export async function create(moduleData) {
    try {
        const module_ = await Module.create(moduleData);
        return JSON.parse(JSON.stringify(module_));
    } catch (e) {
        throw new Error(e);
    }
}

export async function getModule(moduleId) {
    try {
        const module_ = await Module.findById(moduleId)
            .populate({
                path: "lessonIds",
                model: Lesson,
            })
            .lean();
        return replaceMongoIdInObject(module_);
    } catch (e) {
        throw new Error(e);
    }
}

export async function getModuleBySlug(moduleSlug) {
    try {
        const module_ = await Module.findOne({ slug: moduleSlug }).lean();
        return replaceMongoIdInObject(module_);
    } catch (err) {
        throw new Error(err);
    }
}
