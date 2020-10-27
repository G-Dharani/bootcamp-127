var count3 = 0;
var runteam11 = [];
var runteam12 = [];
var score11;
var score12;
function level2() {
    randomNumber = Math.floor(Math.random() * 2);;
    count3 = count3 + 1;

    console.log("count3 ", count3);
    if (count3 == 11) {
        document.getElementsByClassName("btn1")[0].style.visibility="hidden"
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        console.log("Team 1 " + runteam11)
        console.log("Team 2 " + runteam12)
        score11 = runteam11.reduce(reducer);
        score12 = runteam12.reduce(reducer);
        var teamname11 = document.getElementById("team-11-name").textContent;
        var teamname12 = document.getElementById("team-12-name").textContent;
        document.getElementById("result1").style.visibility = "visible";
        if (score11 <score12) {
            document.getElementById("result1").innerHTML = teamname11 + " Winner"
            document.getElementById("teamimg1").src = "./assests/"+teamname11+".png"  
            document.getElementById("team-2-name").innerHTML=teamname11 ; 
        }
        else if (score11 == score12) {
            document.getElementById("result1").innerHTML = " Match draw try again"
        }
        else {
            document.getElementById("result1").innerHTML = teamname12 + " Winner"
            document.getElementById("teamimg1").src = "./assests/"+teamname12+".png"  
            document.getElementById("team-2-name").innerHTML=teamname12 ; 
        }
        document.getElementById('board').style.visibility = "visible";

    }
    else if (count3 % 2 == 0) {

        runteam12.push(player11(randomNumber));
        document.querySelector('#btn').innerHTML = 'Shoot ' + name;
    }
    else {
        runteam11.push(player12(randomNumber));
        document.querySelector('#btn').innerHTML = 'Shoot ' + name;
    }

}

var index11 = 0;
function player11(randomNumber) {
    var teamOneRunsElement = document.getElementById("progress").children;
    if (randomNumber == 1) {
        teamOneRunsElement[index11++].style.backgroundColor = "#0f960a";
    }
    else {
        teamOneRunsElement[index11++].style.backgroundColor = "#f00";
    }
    return randomNumber;
}

var index112 = 0;
function player12(randomNumber) {
    var teamOneRunsElement = document.getElementById("progress1").children;
    if (randomNumber == 1) {
        teamOneRunsElement[index112++].style.backgroundColor = "#0f960a";
    }
    else {
        teamOneRunsElement[index112++].style.backgroundColor = "#f00";
    }
    return randomNumber;

}
























