<html>
<body>
<h1>Guess the number from 1 to 10</h1>
<input id="guessnumber"></input>
<button onclick="check()">Check</button>
<p id="result">you are wrong/right</p>
<p id="score">score:10</p>
</body>
</html>
var guessnumber=document.getElementById("guessnumber")
var result=document.getElementById("result")
var score=document.getElementById("score")
var randomnumber=Math.floor(Math.random()*10)+1
var totalscore=10

function check()
{
    var enterednumber=guessnumber.value
    if(randomnumber==enterednumber)
        {
        console.log("Right")
        result.textContent="Right" 
        alert("YOU WON..")
        }
    else
     {
        totalscore=totalscore-1
        score.textContent="score:"+totalscore
        result.textContent="wrong"}
     }
