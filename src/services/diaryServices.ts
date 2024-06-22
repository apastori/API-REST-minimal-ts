import { DiaryEntry, NoIdDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diariesData from './diaries.json'

const diaries: DiaryEntry[] = diariesData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const getEntriesWithoutSensitiveInformation = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const findById = (id: number): DiaryEntry | undefined => {
  const entry: DiaryEntry | undefined = diaries.find(d => d.id === id)
  return entry
}

export const findByIdNonSensitive = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry: DiaryEntry | undefined = diaries.find(d => d.id === id)
  if (entry !== null && entry !== undefined) {
    const diaryEntryNonSensitive: NonSensitiveInfoDiaryEntry = {
      id: entry.id,
      date: entry.date,
      weather: entry.weather,
      visibility: entry.visibility
    }
    return diaryEntryNonSensitive
  }
  return undefined
}

export const addDiary = (diaryEntryNoId: NoIdDiaryEntry): DiaryEntry => {
  const newDiaryEntry: DiaryEntry = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    date: diaryEntryNoId.date,
    weather: diaryEntryNoId.weather,
    visibility: diaryEntryNoId.visibility,
    comment: diaryEntryNoId.comment
  }
  diaries.push(newDiaryEntry)
  return newDiaryEntry
}
