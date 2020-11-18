
let finalResultA =document.querySelector(".resualt-A"),
finalResultB =document.querySelector(".resualt-B"),
 resultA= document.querySelectorAll("table tr .first"),
 arryA = [3],
 resultB= document.querySelectorAll("table tr .second "),
 arryB = [3],
 result = 0,

 nameA = document.querySelector("table tr .name-A"),
 nameB = document.querySelector("table tr .name-B"),
resultt = 0;
resultA.forEach(e=>{
    arryA.push(parseInt(e.innerHTML));
})



for(let i = 1 ; i < arryA.length ; i++){
    resultt = resultt + arryA[i];
}
finalResultA.innerHTML = resultt;


resultB.forEach(e=>{
    arryB.push(parseInt(e.innerHTML));
})


for(let i = 1 ; i < arryB.length ; i++){
    result = result + arryB[i];
}

finalResultB.innerHTML = result;
let containerFri,
containerSec;
if( resultt >= result){
    finalResultA.innerHTML = resultt;
    finalResultB.innerHTML = result;
    
    
  
    console.log("A");
}else{
    finalResultB.innerHTML = resultt;
    finalResultA.innerHTML = result;
    containerSec = nameA.innerHTML;
    nameA.innerHTML = nameB.innerHTML;
    nameB.innerHTML = containerSec;
    console.log("B");
 
}
