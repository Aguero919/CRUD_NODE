const express = require("express");
const task = require("../models/task");
const router = express.Router();

// import the 'collectiion' from "models"
const db = require("../models/task");


// get all task
const getAllTask = async (req, res) => {
    try {
        const task = await db.find({});
        return res.status(201).json({task});
    } catch (error) {
        res.status(500).json({msg: error})
    }
};


// create task
const createTask =  async (req, res) => {
    try {
        const task = await db.create(req.body);  // create and add to the 'collection'
        return res.status(201).json({task});        
    } catch (error) {
        res.status(500).json( {msg: error} )   
    }
};


// get single task
const getTask = async (req, res) => {
    try {
        const {id:taskID} = req.params;
        const task = await db.findOne({_id:taskID});
        if(!task) {
           return res.status(404).json({msg: `No user exits with id: ${taskID}`});
        }   
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error});
    }
};


// delete task
const deleteTask = async (req, res) => {
    try {
        const {id:taskID} = req.params;
        const task = await db.findOneAndDelete({_id:taskID});
        if(!task) {
            return res.status(404).json({msg: `No user exits with id: ${taskID}`});
        };
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg:error});
    }
};


// update task
const updateTask = async (req, res) => {
    try {
        const data = req.body;
        const {id:taskID} = req.params;
        const task = await db.findOneAndUpdate({_id:taskID}, data, { new:true, runValidators: true});
        // new >> for sending the new data, runValidators >> for validating the model
        if(!task) {
            return res.status(404).json({msg: `No user exits with id: ${taskID}`});
        }
        res.status(201).json({task});
    } catch (error) {
        res.status(500).json({msg: error});
    }
};

module.exports = { getAllTask, getTask, createTask, updateTask, deleteTask };