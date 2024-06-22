export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'

export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

export interface SpecialDiaryEntry extends DiaryEntry {
  flightNumber: number
}

// export type NonSensitiveInfoDiaryEntry =
// Pick<DiaryEntry | 'id' | 'date' | 'weather'>

export type NonSensitiveInfoDiaryEntry =
Omit<DiaryEntry, 'comment'>

export type NoIdDiaryEntry =
Omit<DiaryEntry, 'id'>
