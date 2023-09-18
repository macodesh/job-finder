import express, { json, static as _static } from 'express'
import db from './db/connection'
import jobRoutes from './routes/jobs'
import { engine } from 'express-handlebars'
import path from 'node:path'
import Job from './models/Job'
import { Op } from 'sequelize'

const app = express()

app.use(json())

app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))
app.use(_static(path.join(__dirname, '../', 'public')))

app.get('/ok', (_req, res) => {
  res.status(200).json({ message: 'OK' })
})

app.get('/', async (req, res) => {
  const { jobSearch } = req.query

  if (!jobSearch) {
    const jobs = await Job.findAll({ order: [['createdAt', 'DESC']] })
    res.render('index', { jobs })
  } else {
    const jobs = await Job.findAll({
      where: { title: { [Op.like]: `%${jobSearch}%` } },
      order: [['createdAt', 'DESC']]
    })

    res.render('index', { jobs, jobSearch })
  }
})

app.use('/jobs', jobRoutes)

const port = 3000
app.listen(port, async () => {
  try {
    await db.authenticate()
    console.log(`🚀 Server running on http://localhost:${port}`)
  } catch (err) {
    console.error(err)
  }
})
