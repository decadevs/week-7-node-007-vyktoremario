import express, {Request, Response, NextFunction} from 'express';
import fs from 'fs';
import {calculateArea} from '../controllers/controllers'
import {data} from '../utils/calculator'
// import database from '../controllers'

const router = express.Router();



/* GET home page. */
router.get('/', (req:Request, res:Response) => {
  res.redirect('/fetchRecords')
})
router.get('/fetchRecords', (req:Request, res:Response, next:NextFunction) => {
  res.send(data);
});

router.post('/calculate', (req:Request, res:Response) => {
   calculateArea(req, res)
});


export default router;
