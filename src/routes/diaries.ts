import { Router, Response, Request } from 'express'

// Diary Services
import * as diaryServices from '../services/diaryServices'

// DiaryEntry Type
import type { DiaryEntry, NoIdDiaryEntry } from '../types'

const router: Router = Router()

router.get('/', (_req: Request, res: Response) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInformation())
})

router.get('/:id', (req: Request, res: Response) => {
  const diary: DiaryEntry | undefined = diaryServices.findById(Number(req.params.id))
  return (diary !== null) ? res.send(diary) : res.sendStatus(404)
})

router.post('/', (req: Request, _res: Response) => {
  const newDiaryEntry: NoIdDiaryEntry = {
    date: req.body.date,
    weather: req.body.weather,
    visibility: req.body.visibility,
    comment: req.body.comment
  }
  diaryServices.addDiary(newDiaryEntry)
})

export default router
