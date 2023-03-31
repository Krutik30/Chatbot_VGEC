import myJson from '../../../test.json';
import myArrayJson from '../../../arrays.json';
// const myJson = require('../../../test.json');
// const myArrayJson = require('../../../arrays.json');

function getAnswer(questionString){
    // console.log(questionString)
    let answerString;
    let input = questionString;
    input = input.toLowerCase();
    let questArr = input.split(" ");
    let theArray = myArrayJson.main.tags;
    let theObjArray = myArrayJson.main;
    let theAns = myJson;
    let ansArr = questArr.filter(x => theArray.includes(x));
    if((ansArr == undefined || ansArr.length == 0)){
        ansArr = ["default"];
    }

    function searchKey(matchKey){
        if(typeof(theAns[matchKey]) != 'object'){
            // console.log(theAns[matchKey]);
            answerString = theAns[matchKey];
            return;
        }
        // console.log(matchKey);
        // console.log(theObjArray[matchKey]);
        // console.log(theAns[matchKey]);
        // console.log(theArray)
        theArray = theObjArray[matchKey].tags;
        theObjArray = theObjArray[matchKey];
        theAns = theAns[matchKey];
        ansArr = questArr.filter(x => theArray.includes(x));
        if(ansArr == undefined || ansArr.length == 0){
            ansArr = ["default"];
        }
        searchKey(ansArr[0]);
    }
    searchKey(ansArr[0]);
    // console.log(answerString);
    return answerString;
}
// console.log(answerString);

export default getAnswer;