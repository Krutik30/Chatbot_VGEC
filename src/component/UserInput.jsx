
// import ScrollChat from './scrollChat';
import { useEffect, useState , useRef } from "react";
import getAnswer from './logic/answer'



function Userinputarea() {

    const[userS , setUserS] = useState("");
    const[question,setQuestion] = useState("");
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
        setUserS(event.target.value);
    } 
      // console.log(1,temp)
      
    function handleClick(){
      setQuestion(userS)
      temp = getAnswer(question);
      // console.log(question);
      setAnswer(temp);
      console.log(answer);
      setTag([question , answer]);
      // console.log(tag);
      setResponse(old => [...old , ...tag]);
      console.log(response);
      setUserS("");
    }
    // console.log(response);
    // console.log(question);
    // console.log(tag);
    // console.log(tagObj);
    const arrayP = (
      <ul>
        {response.map((ele,index) =>{
          if(index%2 == 0){
            return (<li className="userQ" key={index}>
              {ele}
            </li>)
          }
          else{
            return (<li className="userA" key={index}>
              {ele}
            </li>)
          }
        })}
      </ul>
    );

  return (
    <div className="main">
      <div className='scrollBox'>
        {/* {console.log(response)} */}
          {
              arrayP      
          }
      </div>
      <div className='inputArea'>
        <input type="text" className="input" name="question" id="question" onChange={updateQuestion} value={userS} />
        <button name="send" className="button" id="send-button" type="submit" onClick={handleClick} >
        <i className="fa fa-send-o"></i>
        </button>
      </div>
    </div>
  );

}
export default Userinputarea;

