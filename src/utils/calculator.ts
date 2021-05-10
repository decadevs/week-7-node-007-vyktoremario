import express, { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
import Joi from 'joi';
import { Shape } from '../utils/interface'
import { pushToDatabase } from '../utils/getDatabase'
import { createID } from '../utils/createID'

const squared = '\u00B2'
function calculateTriangle(req: Request, res: Response) {
    const shape = dimensionSchema.validate(req.body)
    if (shape.error) return res.status(400).json(shape.error.details[0].message)
    console.log(Object.keys(shape.value.dimension))
    if (Object.keys(shape.value.dimension).length !== 3) return res.status(400).json("The length of the three sides are required")

    const { a, b, c } = shape.value.dimension
    const s = (a + b + c) / 2
    const areaValue = Math.sqrt(s * (s - a) * (s - b) * (s - c))
    if (!areaValue) return res.status(400).json("The sum of two sides has to exceed the sum of the third side")
    const area = `${areaValue.toFixed(2)}m${squared}`
    let newData: Shape = req.body
    newData.id = createID()
    newData.createdAt = new Date()
    newData.area = area
    pushToDatabase(newData)
    return res.status(201).json(newData)
    
}

function calculateCircle(req: Request, res: Response) {
    const shape = Schema.validate(req.body)
    if (shape.error) return res.status(400).json(shape.error.details[0].message)
    const radius: number = shape.value.dimension
    let area = `${(((Math.PI * radius * radius) / 2).toFixed(2))}m${squared}`
    if (!area) return res.status(400).json("The sum of two sides has to exceed the sum of the third side")
    let newData:Shape = req.body
    newData.id = createID()
    newData.createdAt = new Date()
    newData.area = area
    pushToDatabase(newData)
    return res.status(201).json(newData)
}

function calculateSquare(req: Request, res: Response) {
    const shape = Schema.validate(req.body)
    if (shape.error) return res.status(400).json(shape.error.details[0].message)
    const length = shape.value.dimension
    let area = `${(length * length)}m${squared}`
    if (!area) return res.status(400).json("The sum of two sides has to exceed the sum of the third side")
    let newData:Shape = req.body
    newData.id = createID()
    newData.createdAt = new Date()
    newData.area = area
    pushToDatabase(newData)
    return res.status(201).json(newData)
}

function calculateRectangle(req: Request, res: Response) {
    const shape = dimensionSchema.validate(req.body)
    if (shape.error) return res.status(400).json(shape.error.details[0].message)
    if (Object.keys(shape.value.dimension).length === 2) {
        const { a, b } = shape.value.dimension
        let area = `${(a * b)}m${squared}`
        if (!area) return res.status(400).json("The sum of two sides has to exceed the sum of the third side")
        let newData:Shape = req.body
        newData.id = createID()
        newData.createdAt = new Date()
        newData.area = area
        pushToDatabase(newData)
        return res.status(201).json(newData)
    } else {
        return res.status(400).json("A Rectangle needs only two sides")
    }
}



const Schema:Joi.ObjectSchema<Shape> = Joi.object({
    shape: Joi.string().required(),
    dimension: Joi.number().required().positive()
})

const dimensionSchema:Joi.ObjectSchema<Shape> = Joi.object({
    shape: Joi.string().required(),
    dimension: Joi.object({
        a: Joi.number().required().positive(),
        b: Joi.number().required().positive(),
        c: Joi.number().positive().optional()
    }).required()
})

export { calculateTriangle, calculateCircle, calculateSquare, calculateRectangle, createID }