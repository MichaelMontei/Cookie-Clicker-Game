let score = 0;
let powerOneBegin = 0;
let powerTwoBegin = 0;
let powerThreeBegin = 0;
let clicks = 1;
let powerOne = 25;
let powerTwo = 100;
let powerThree = 1000;


function reset(){
    score = 0;
    document.getElementById("score").innerHTML = score;
}

(() => {

    document.getElementById(`dragonball`).addEventListener("click", () => {

        function addToScore() {
            score += 1;
            document.getElementById(`score`).innerHTML = score;
        } addToScore(clicks)
    })

    document.getElementById(`multiply`).addEventListener(`click`, () => {
        function buyGoku () {
            if (score >= powerOne) {
                score = score - powerOne;
                powerOneBegin = powerOneBegin +1;
                powerOne = Math.round(powerOne * 1.15);

                document.getElementById(`score`).innerHTML = score;
                document.getElementById("imageCost").innerHTML = powerOne;
                document.getElementById(`totalOne`).innerHTML = powerOneBegin;

                updateCookiesPerSecond();
            }
        } buyGoku();

        document.getElementById(`imageTwo`).addEventListener(`click`, () => {
            function buyCursor () {
                if (score >= powerTwo) {
                    score = score - powerTwo;
                    powerTwoBegin = powerTwoBegin +1;
                    powerTwo = Math.round(powerTwo * 1.15);

                    document.getElementById(`score`).innerHTML = score;
                    document.getElementById("imageTwo").innerHTML = powerTwo;
                    document.getElementById(`totalTwo`).innerHTML = powerTwoBegin;
                    updateCookiesPerSecond();
                }
            } buyCursor();


        })

        document.getElementById(`imageThree`).addEventListener(`click`, () => {
            function buyRandom() {
                if (score >= powerThree) {
                    score = score - powerThree;
                    powerThreeBegin = powerThreeBegin + 1;
                    powerThree = Math.round(powerThree * 1.15);

                    document.getElementById(`score`).innerHTML = score;
                    document.getElementById("imageThree").innerHTML = powerThree;
                    document.getElementById(`totalThree`).innerHTML = powerThreeBegin;
                    updateCookiesPerSecond();
                }
            } buyRandom();
            

        })

        function updateCookiesPerSecond() {
            score = powerOneBegin + powerTwoBegin *5 + powerThreeBegin * 70;
            document.getElementById(`score`).innerHTML = score;
        }

        setInterval(function () {
            score = score + powerOneBegin;
            score = score + powerTwoBegin * 5;
            score = score + powerThreeBegin * 70;
            document.getElementById(`score`).innerHTML = score;

            document.title = score + "cookies - Cookie Clicker";
        }, 3000) // 3000 ms = 3 second
    })

    document.getElementById(`buy`).addEventListener(`click`, () => {
        if (score >= 1000000){
        window.alert("Here's a cookie!")
        }
    })




})();






