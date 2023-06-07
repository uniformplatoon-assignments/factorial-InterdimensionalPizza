exports.factorial = function(num) {
    if(num===0){
        return 1
    }
    else if(num <0){
        return false
    }
    else{
        let answer=1
        let myNum=num
        while(myNum>0){
            answer=answer*myNum
            myNum--
        }
        console.log(answer)
        return answer
    }
};
