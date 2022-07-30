const express = require('express');
const app= express()


app.get("/", (req,res)=>{
    res.status(200)
    res.json({
        status:"200 OK",
        message:"Hello World",
        data : "None"
    })
})
const PORT=2100 || process.env.PORT;
app.listen(PORT, ()=>{
    console.log(`Server started on Port:${PORT}`)
})