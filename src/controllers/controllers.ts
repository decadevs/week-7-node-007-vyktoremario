import express, { Request, Response, NextFunction } from 'express'
import Joi from 'joi';
import {calculateTriangle, calculateRectangle, calculateCircle, calculateSquare, createID} from '../utils/calculator'


const Schema = Joi.object({
    shape: Joi.string().required(),
    dimension: Joi.object().required() || Joi.number().required()
})



function calculateArea(req: Request, res: Response) {
    const shape = Schema.validate(req.body)
    if (shape.value.shape.toLowerCase() === 'triangle') {
        calculateTriangle(req, res)
    } 

    else if (shape.value.shape.toLowerCase() === 'circle') {
        calculateCircle(req, res)
    }

    else if (shape.value.shape.toLowerCase() === 'square') {
        calculateSquare(req, res)
    }

    else if (shape.value.shape.toLowerCase() === 'rectangle') {
        calculateRectangle(req, res)
    }
    else {
        res.status(400).json("Please provide a valid value for shape")
    }

}
export {
    calculateArea, 
}
