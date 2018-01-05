const express =require('express');
const path =require('path');
const port =process.env.NODE_ENV || 4040;
const app=express();

app.use(express.static(__dirname));

app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'index.html'));
});

app.listen(port,()=>{
  console.log('Server started on port',port);
})
