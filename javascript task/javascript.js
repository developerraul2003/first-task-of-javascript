
let chance1=3;
while(chance1>0){
let firstStep=prompt("Who's there?");
if (firstStep=="Admin"){
    let firstStep=confirm("Welcome boss, do you want to continue?");
        let chance=3;
        while(chance>0){
            let passwordName=prompt ("Password?");
            if (passwordName=="TheMaster"){
            alert("Welcome!");
            break;
        }
         else if ( passwordName!="TheMaster"){
            
            alert ("Wrong password, please try again");
            chance--;

        }
        else {
            alert("Canceled");
        }
        if (chance==0){
            alert(" You used all of chance");
        }
        
      }
      break;
}
else if (firstStep!="Admin") {
   alert("I don't know you")
   confirm("Do you want to continue?");
   chance1--;

}
else {
    alert("Canceled");
}
if (chance1==0){
    alert("You used all of chance");
}

}



      

