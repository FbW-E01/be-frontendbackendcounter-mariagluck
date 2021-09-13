import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

let singleNumber = 0;

app.get('/', (req, res) => {
    
    res.send(`This is the single number: ${singleNumber}`);
});


app.post('/', function(req, res){
    singleNumber++;
    res.send(`The number is increasing: ${singleNumber}`);
})

const callback = () => {
    console.log("Server started on http://localhost:3000");
}
app.listen(3077, callback);
