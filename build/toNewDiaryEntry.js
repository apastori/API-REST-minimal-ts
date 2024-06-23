"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment');
    }
    return commentFromRequest;
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date');
    }
    return dateFromRequest;
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest))
        throw new Error('Incorrect or missing weather');
    return weatherFromRequest;
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect or missing Visibility');
    }
    return visibilityFromRequest;
};
const isString = (stringp) => {
    return (typeof stringp === 'string' || stringp instanceof String);
};
const isDate = (datep) => {
    return Boolean(Date.parse(datep));
};
const isWeather = (weatherp) => {
    // return ['sunny','rainy','cloudy','windy','stormy'].includes(stringWeather)
    return Object.values(enums_1.WeatherEnum).includes(weatherp);
};
const isVisibility = (visibilityp) => {
    return Object.values(enums_1.VisibilityEnum).includes(visibilityp);
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
