import { Router } from 'express'
const router = Router()

//routes
router.get('/', (req, res) => res.send('Hello Word'))

export default router