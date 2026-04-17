const e = require("express")
const a = e()

a.get("/health",(r,s)=>s.send("Sab badhiya h..."))

a.listen(3000,()=>console.log("running the code..."))