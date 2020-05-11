const express = require('express');
const app = express();
const uuid= require("uuid");
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const root = '/nomen-nescio-api';
var db={
    asodn1:[{
        key:"count",
        value:0,
        updated:Date.now()
    },{
        key:"messages",
        value:[{
            key:"aa3rw",
            value:{message:"Hello"},
            updated:Date.now()
        },{
            key:"aa3rw2",
            value:{message:"Hello You"},
            updated:Date.now()
        }],
        updated:Date.now()
    }]
};
var messages={};
function getData(userId){
    let userRecords=db[userId];
    if(!userRecords){
        return {};
    }
    let userData=convertRecordToData(userRecords);
    return userData;
}

function convertRecordToData(records){
    let data={};
    records.forEach(record=>{
        if(Array.isArray(record.value)){
            data[record.key]=convertRecordToData(record.value);
        }
        else{
            data[record.key]=record.value;
        }
    })
    return data;
}

function convertDataToRecords(data,time){
    let records=[];
    Object.keys(data).forEach(key=>{
        if(typeof data[key] === "object"){
            records.push({
                key,
                value:convertDataToRecords(data[key],time),
                updated:time
            })
        }
        else{
            records.push({
                key,
                value:data[key],
                updated:time
            });
           
        }
    })
    return records;
}
function combineOldAndNewRecords(oldRecords,newRecords){
    let combinedRecords=[];
    newRecords.forEach(newRecord=>{
        let oldRecord=oldRecords.find(oldRecord=>newRecord.key===oldRecord.key);
        if(!oldRecord){
            console.log("Found new record : ",newRecord.key,newRecord);
            combinedRecords.push(newRecord);
        }
        else if(Array.isArray(oldRecord.value)){
            let isChanged = oldRecord.value.length!== newRecord.value.length;
            if(isChanged){
                console.log("Change in object: ",newRecord.key,oldRecord.value.length,"=>",newRecord.value.length);
            }
            combinedRecords.push({
                key:oldRecord.key,
                value:combineOldAndNewRecords(oldRecord.value,newRecord.value),
                updated:isChanged?newRecord.updated : oldRecord.updated
            });
        }
        else{
            let isChanged = oldRecord.value !== newRecord.value;
            if(isChanged){
                console.log("Change in value: ",newRecord.key,oldRecord.value,"=>",newRecord.value);
            }
            combinedRecords.push({
                key:oldRecord.key,
                value:newRecord.value,
                updated:isChanged?newRecord.updated : oldRecord.updated
            });
        }
    });
    return combinedRecords;
}

function updateData(userId,newData){
    let currentRecords=db[userId];
    let newRecords=convertDataToRecords(newData,Date.now());
    if(currentRecords){
        let combinedRecords=combineOldAndNewRecords(currentRecords,newRecords);
        console.log("Combined : ",JSON.stringify(combinedRecords,null,4))
        db[userId]=combinedRecords;
    }
    else{
        db[userId]=newRecords;
    }
}

app.get(root,(req,res)=>{
    let userId=req.query.userId;
    let userData=getData(userId);
    res.send(userData);
});

app.post(root,(req,res)=>{
    let {userId,data}=req.body;
    updateData(userId,data);
    console.log("DB Updated ",JSON.stringify(db,null,3))
    let userData = getData(userId);
    res.send(userData);
});

function addMessageToUser(message,userId){
    let userData=getData(userId);
    if(!userData.messages){
        userData.messages={};
    }
    if(!userData.messages[message.wall]){
        userData.messages[message.wall]={}
    }
    if(!userData.messages[message.wall][message.id]){
        userData.messages[message.wall][message.id]=message
    }
    updateData(userId,userData);
}


app.post(root+"/message",(req,res)=>{
    let {message,userId}=req.body;
    if(message.sender!==userId && message.wall !== userId){
        console.log("Unauthorised ",userId,message.sender,message.wall)
        res.sendStatus(401);
        return;
    }
    addMessageToUser(message,message.sender);
    addMessageToUser(message,message.wall);
    let userData = getData(userId);
    console.log("DB Updated ",JSON.stringify(db,null,3))
    res.send(userData);
});






const port = 5000;
let server = app.listen(port, function() {
    console.info('server listening at ' + port);
});