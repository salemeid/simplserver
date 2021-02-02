import express from 'express';
import cors from 'cors';


const app = express();

app.use(express.json());
app.use(cors());


app.get('/', (req,res) => {
    res.send('<h1> Welcome Home Buddy </h1>');
})

app.listen(3001, () => {
    console.log("Server started on Port : 3001");
})