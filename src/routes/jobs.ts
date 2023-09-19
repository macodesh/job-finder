import { Router } from 'express'
import Job from '../models/Job'

const router = Router()

router.get('/', async (_req, res) => {
  try {
    const jobs = await Job.findAll()
    res.status(200).json(jobs)
  } catch (err) {
    console.error(err)
  }
})

router.post('/', async (req, res) => {
  const { title, salary, email, company, description, isNew } = req.body

  try {
    await Job.create({ title, salary, email, company, isNew, description })
    res.redirect('/')
  } catch (err) {
    console.error(err)
  }
})

router.get('/add', (_req, res) => {
  res.render('add')
})

router.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const job = await Job.findByPk(id)
    res.render('view', { job })
  } catch (err) {
    console.error(err)
  }
})

export default router
