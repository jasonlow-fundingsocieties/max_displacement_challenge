const fs = require('fs')
 

function maxDisplacement(n,string){
    let counter=0
    let question_counter=0
    for (let key in string){
        if(string[key]=='L'){
            counter--;
        }
        if(string[key]=='R'){
            counter++;
        }
        if (string[key]=='?'){
            question_counter++;
        }
    }
    if(counter>0){
        return counter+question_counter
    } 
    return Math.abs(counter-question_counter)  
}


const data= fs.readFileSync(process.argv[2], 'utf8')
const test_data=data.split('\n')
let numberOfTestCases=data[0]

let index=1
while (index<numberOfTestCases*2){
    console.log(maxDisplacement(...test_data.slice(index,index+2)))
    index=index+2;
}




