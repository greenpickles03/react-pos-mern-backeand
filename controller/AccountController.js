import AccountModel from "../models/AccountModel.js";
// Need to install node-sessionstorage
import localStorage from 'node-sessionstorage';

export const getAccount = async (req, res) => {
    try{
        const accounts = await AccountModel.find();
        res.json(accounts);
    } catch(error){
        res.status(500).json({message: error.message});
    }
}

export const getAccountById = async (req, res) => {
    try{
        const accounts = await AccountModel.findById(req.params.id);
        res.json(accounts);
    } catch(error){
        res.status(404).json({message: error.message});
    }
}

export const saveAccount = async(req, res) => {
    try{

        const accountType = localStorage.getItem("accountType");
        console.log(accountType);
        if(accountType !== undefined){
            if(accountType !== "Common"){
                const acconts = new AccountModel(req.body);
                const insertAccount = await acconts.save();
                res.status(201).json(insertAccount);
            }else{
                res.json({message : "You don't have a permission to add"});
            }
        }else{
            res.json({message : "You need to login first"});
        }
        
    }catch(error){
        res.status(400).json({message: error.message})
    }
}

export const getAccountbyCredentials = async(req, res) => {
    try{
        const accounts = await AccountModel.find({
            "username" : req.body.username,
            "password" : req.body.password
        });
        console.log(accounts[0].accountType);
        localStorage.setItem("accountType", accounts[0].accountType)
        res.json(accounts);
    }catch (error){
        res.status(404).json({message: error.message});
    }
}