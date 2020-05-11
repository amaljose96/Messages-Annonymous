const express = require('express');
const app = express();
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

function getData(userId){
    let userRecords=db[userId];
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
        console.log("Comparing ",JSON.stringify(oldRecord,null,2),JSON.stringify(newRecord,null,2));
        if(!oldRecord){
            combinedRecords.push(newRecord);
        }
        else if(Array.isArray(oldRecord.value)){
            let isChanged = oldRecord.value.length!== newRecord.value.length;
            console.log("Key : ",oldRecord.key," has changed? ",isChanged)
            combinedRecords.push({
                key:oldRecord.key,
                value:combineOldAndNewRecords(oldRecord.value,newRecord.value),
                updated:isChanged?newRecord.updated : oldRecord.updated
            });
        }
        else{
            let isChanged = oldRecord.value !== newRecord.value;
            console.log("Key : ",oldRecord.key," has changed? ",isChanged , oldRecord.value,newRecord.value)
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






const port = 5000;
let server = app.listen(port, function() {
    console.info('server listening at ' + port);
});