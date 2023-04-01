import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import express from 'express';
import { connect, Schema, model } from 'mongoose';
const app = express();
dotenv.config();

const MONGO_URI = "mongodb+srv://agherakrutik99:Aghera799045Krutik@cluster0.8qz7spt.mongodb.net/Chatbot_questionSet?retryWrites=true&w=majority"

const port = process.env.PORT || 3000;
connect(MONGO_URI, {
    userNewUrlParser: true,
    userUnifiedTopology : true
}).then(() => {
    console.log("YES YEs");
}).catch( err => console.log(err));

const questionSchema = Schema(

    {
        email : {
            type : "String",
            require: true
        },
        question: {
            type : "String",
            require: true
        }
    }
);

const Question = model('Question', questionSchema);

app.use('/public', express.static(`${process.cwd()}/public`));
app.use(bodyParser.urlencoded({ extended: false })) 

app.get('/', function(req, res) {
    res.sendFile(process.cwd() + '/index.html');
      console.log(req.body)
});

app.post("/admin", (req,res) => {

    res.sendFile(process.cwd() + '/src/views/question.html');
    let email = req.body.email;
    let questionAsked = req.body.question;


})
