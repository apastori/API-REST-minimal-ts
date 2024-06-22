import { NoIdDiaryEntry, Weather, Visibility } from './types'

import { WeatherEnum, VisibilityEnum } from './enums'

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) throw new Error('Incorrect or missing weather')
  return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing Visibility')
  }
  return visibilityFromRequest
}

const isString = (stringp: any): boolean => {
  return (typeof stringp === 'string' || stringp instanceof String)
}

const isDate = (datep: string): boolean => {
  return Boolean(Date.parse(datep))
}

const isWeather = (weatherp: any): boolean => {
  // return ['sunny','rainy','cloudy','windy','stormy'].includes(stringWeather)
  return Object.values(WeatherEnum).includes(weatherp)
}

const isVisibility = (visibilityp: any): boolean => {
  return Object.values(VisibilityEnum).includes(visibilityp)
}

const toNewDiaryEntry = (object: any): NoIdDiaryEntry => {
  const newEntry: NoIdDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newEntry
}

export default toNewDiaryEntry
