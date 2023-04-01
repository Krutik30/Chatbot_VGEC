
// import ScrollChat from './scrollChat';
import { useEffect, useState , useRef } from "react";
import getAnswer from './logic/answer'



function Userinputarea() {

    const[question,setQuestion] = useState("");
    const[t , setT] = useState(0);
    const[answer , setAnswer] = useState("");
    const[response , setResponse] = useState([]);
    const[tag , setTag] = useState([]);
    // console.log(answerString);
    let temp;
    // useEffect(() => {
    //   temp = getAnswer(question);
    //   // console.log(question);
    //   // setAnswer(temp);
    //   // console.log(answer);
    //   // setTag([question , answer]);
    //   // // console.log(tag);
    //   // setResponse(old => [...old , ...tag]);
    //   // console.log(response);
    // },[question])
    function updateQuestion(event) {
        setQuestion(event.target.value);
    } 
      // console.log(1,temp)
      
    function handleClick(){
      // console.log(question);
      temp = getAnswer(question);
      setAnswer(temp);
      // console.log("2 - " , answer);
      setTag([question , answer]);
      // console.log(tag);
      setResponse(old => [...old , ...tag]);
      console.log(response);
      setQuestion("");
    }
    // console.log(response);
    // console.log(question);
    // console.log(tag);
    // console.log(tagObj);

  return (
    <div className="main">
      <div className="title">VGEC_BOT</div>
      <div className='scrollBox'>
          <ul>
            {
              response.map((ele , index) => {
                  if(index % 6 == 0){
                    if(ele != null || ele != undefined || ele != ''){
                        return (
                          <li className="userQ" key={index}>{ele}</li>
                        )
                    }
                  }
                  else if(index % 6 == 3){
                    if(ele != null || ele != undefined || ele != ''){
                        return (
                          <li className="userA" key={index}>{ele}</li>
                        )
                    }
                  }
              })      
            }
          </ul>
      </div>
      <div className='inputArea'>
        <input type="text" className="input" name="question" id="question" onChange={updateQuestion} value={question} />
        <button name="send" className="button" id="send-button" type="submit" onClick={handleClick} >
          <i className="fa fa-send"></i>
        </button>
      </div>
    </div>
  );

}
export default Userinputarea;



// pop karva nu 6 yaad rakhje