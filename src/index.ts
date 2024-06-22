import express, { Application, Request, Response } from 'express'

// Diaries Router
import diaryRouter from './routes/diaries'

const app: Application = express()

app.use(express.json())

const PORT: number | undefined = 3000

app.get('/ping', (req: Request, res: Response) => {
  console.log('Request')
  console.log(req)
  console.log('Someone pinged here!!')
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT | 2000, () => {
  console.log(`Server running on port: ${PORT}`)
})
