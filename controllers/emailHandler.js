const sendGrid = require("./sendGrid.js")

const arrayEmailSender = (emails)=>{
    return new Promise(async (resolve, reject)=>{
        try{
            sendGrid.sendEmail(emails)
            resolve({
                apiStatus: 2,
                payload: {
                    msg: "Emails are Being Sent",
                    emailsExtracted: emails
                }
            })
        } catch(err){
            reject({
                apiStatus: 500,
                payload: {
                    msg: "Service Not currently available!"
                }
            })
        }
    })
}

const extract = function (data, arr, name){
    if(!(data instanceof Array) && data !== null){ //if data is still js object
        var values = Object.values(data)
        var keys = Object.keys(data)
        values.forEach((value)=>{
            if(value instanceof Object){
                extract(value, arr, name) //if data is js object or array, recursively call extract
            } else if(keys[values.indexOf(value)] === name){
                arr.push(value) //if list of items where each item has a single value then if key is equal to name provided extract it
            }
        })
    } else if(data instanceof Array){ //if data is a js array
        data.forEach((value)=>{
            extract(value, arr, name)
        })
    } else{
        return arr //if data is neither an array nor an object then just return the arr
    }
}

const extractEmails = function (data, name, arr=[]){
    return new Promise(async (resolve, reject)=>{
        try{
            await extract(data, arr, name)
            resolve(arr)
        } catch(err){
            reject(err)
        }
    })
}

module.exports = {
    arrayEmailSender,
    extractEmails
}
