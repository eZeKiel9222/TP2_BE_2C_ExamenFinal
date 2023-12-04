import express from "express"
import router from "./routes/router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use("/api", router);
app.use((req,res)=>{res.status(400).send('EndPoint Not Found')})


app.listen(8080, ()=>{
    console.log("Server is running on port 8080")
})