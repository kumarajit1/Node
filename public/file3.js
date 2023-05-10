const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'crud');

const filePath=`${dirPath}/book.txt`;
//---------------CREATE A FILE----------------
fs.writeFileSync(filePath,"This a file for book.");
//---------------READ FILE-------------------
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// })
//---------------UPDATE FILE---------------
// fs.appendFile(filePath,'and file name is book.txt',(err)=>{
//     if(!err);
//     console.log("Updated");
// })
//--------------RENAME FILE-----------------
// fs.rename(filePath,`${dirPath}/study.txt`,(err)=>{
//     if(!err);
//     console.log("Renamed");
// })
//------------DELETE FILE------------------
// fs.unlinkSync(`${dirPath}/study.txt`);