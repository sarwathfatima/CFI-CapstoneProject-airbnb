import express from "express"
import config from "config";
import userRoutes from "./controllers/users.js" 
import PlaceRoutes from "./controllers/places.js"  
import "./dbConnect.js"
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173"
}))
app.use('/uploads',express.static('/uploads'))
app.get("/", (req, res) => {
    res.send("Welcome to backend")
})

app.use('/api/user', userRoutes)
app.use('/api/admin',PlaceRoutes)



app.listen(5001,()=>{
    console.log("Server started at Port",5001);
})


