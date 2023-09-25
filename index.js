let btn=document.getElementById("btn")
let score=document.getElementById("score")
let count=0
let reset=document.getElementById("reset")

btn.onclick=function(){
    count+=1
    score.innerHTML=count
    localStorage.setItem("score",score.innerHTML)
   
}

reset.onclick=function(){
    count=0
    score.innerHTML=count
    localStorage.clear()
}