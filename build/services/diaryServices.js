"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDiary = exports.findByIdNonSensitive = exports.findById = exports.getEntriesWithoutSensitiveInformation = exports.getEntries = void 0;
const diaries_json_1 = __importDefault(require("./diaries.json"));
const diaries = diaries_json_1.default;
const getEntries = () => diaries;
exports.getEntries = getEntries;
const getEntriesWithoutSensitiveInformation = () => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return {
            id,
            date,
            weather,
            visibility
        };
    });
};
exports.getEntriesWithoutSensitiveInformation = getEntriesWithoutSensitiveInformation;
const findById = (id) => {
    const entry = diaries.find(d => d.id === id);
    return entry;
};
exports.findById = findById;
const findByIdNonSensitive = (id) => {
    const entry = diaries.find(d => d.id === id);
    if (entry !== null && entry !== undefined) {
        const diaryEntryNonSensitive = {
            id: entry.id,
            date: entry.date,
            weather: entry.weather,
            visibility: entry.visibility
        };
        return diaryEntryNonSensitive;
    }
    return undefined;
};
exports.findByIdNonSensitive = findByIdNonSensitive;
const addDiary = (diaryEntryNoId) => {
    const newDiaryEntry = {
        id: Math.max(...diaries.map((d) => d.id)) + 1,
        date: diaryEntryNoId.date,
        weather: diaryEntryNoId.weather,
        visibility: diaryEntryNoId.visibility,
        comment: diaryEntryNoId.comment
    };
    diaries.push(newDiaryEntry);
    return newDiaryEntry;
};
exports.addDiary = addDiary;
