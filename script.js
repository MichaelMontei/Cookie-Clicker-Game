let score = 0;
let powerOneBegin = 0;
let powerTwoBegin = 0;
let powerThreeBegin = 0;
let clicks = 1;
let powerOne = 25;
let powerTwo = 100;
let powerThree = 1000;

const startingMinutes = 10;
let time = startingMinutes * 60;
const countdown = document.getElementById("countdown");

setInterval(updateCountdown, 1000);
function updateCountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;
    countdown.innerHTML = `${minutes}: ${seconds}`
    time --;
    if(time === 0){
        reset();
    }
}
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

    document.getElementById(`multiply`).addEventListener(`click`,
        () => {
            function buyGoku() {
                if (score >= powerOne) {
                    score = score - powerOne;
                    powerOneBegin = powerOneBegin + 1;
                    powerOne = Math.round(powerOne * 1.15);}
                else {
                    window.alert("You don't have enough cookies!")

                    document.getElementById(`score`).innerHTML = score;
                    document.getElementById("imageCost").innerHTML = powerOne;
                    document.getElementById(`totalOne`).innerHTML = powerOneBegin;

                    updateCookiesPerSecond();
                }
            }

            buyGoku();

            document.getElementById(`imageTwo`).addEventListener(`click`, () => {
                function buyCursor() {
                    if (score >= powerTwo) {
                        score = score - powerTwo;
                        powerTwoBegin = powerTwoBegin + 1;
                        powerTwo = Math.round(powerTwo * 1.15);}
                    else {
                        window.alert("You don't have enough cookies!")

                        document.getElementById(`score`).innerHTML = score;
                        document.getElementById("imageTwo").innerHTML = powerTwo;
                        document.getElementById(`totalTwo`).innerHTML = powerTwoBegin;
                        updateCookiesPerSecond();
                    }
                }

                buyCursor();


            })

            document.getElementById(`imageThree`).addEventListener(`click`, () => {
                function buyRandom() {
                    if (score >= powerThree) {
                        score = score - powerThree;
                        powerThreeBegin = powerThreeBegin + 1;
                        powerThree = Math.round(powerThree * 1.15);}
                    else {
                        window.alert("You don't have enough cookies!")

                        document.getElementById(`score`).innerHTML = score;
                        document.getElementById("imageThree").innerHTML = powerThree;
                        document.getElementById(`totalThree`).innerHTML = powerThreeBegin;
                        updateCookiesPerSecond();
                    }
                }

                buyRandom();


            })

            function updateCookiesPerSecond() {
                score = powerOneBegin + powerTwoBegin * 5 + powerThreeBegin * 70;
                document.getElementById(`powerPerSecond>`).innerHTML = score;
            }

            setInterval(function () {
                score = score + powerOneBegin;
                score = score + powerTwoBegin * 5;
                score = score + powerThreeBegin * 70;
                document.getElementById(`score`).innerHTML = score;

                document.title = score + "cookies - Cookie Clicker";
            }, 1000) // 1000 ms = 1 second
        })

    document.getElementById(`buttonShop`).addEventListener(`click`, () => {
        if (score >= 50000) {
            window.alert("NomNomNomNom")
        }else{
            window.alert("not enough cookies!!")
        }
    })

    document.getElementById(`buttonShopTwo`).addEventListener(`click`, () => {
        if (score >= 250000) {
            window.open('https://peluchemania.es/wp-content/uploads/2021/03/Peluche-del-Monstruo-de-Las-Galletas-de-31-cm-de-Gund-Los-mejores-peluches-de-Barrio-Sesamo-Peluches-de-personajes-del-Monstruo-de-Las-Galletas-768x916.jpg', "width=200,height=100");
        }else{
            window.alert("not enough cookies!!")
        }
    })
    document.getElementById(`buttonShopThree`).addEventListener(`click`, () => {
        if (score >= 1000000) {
            window.open('https://peluchemania.es/wp-content/uploads/2021/03/Peluche-del-Monstruo-de-Las-Galletas-de-31-cm-de-Gund-Los-mejores-peluches-de-Barrio-Sesamo-Peluches-de-personajes-del-Monstruo-de-Las-Galletas-768x916.jpg', "width=200,height=100");
        }else{
            window.alert("not enough cookies!!")
        }
    })

    document.getElementById(`buttonShopFour`).addEventListener(`click`, () => {
        if (score >= 10000000) {
            window.open('https://peluchemania.es/wp-content/uploads/2021/03/Peluche-del-Monstruo-de-Las-Galletas-de-31-cm-de-Gund-Los-mejores-peluches-de-Barrio-Sesamo-Peluches-de-personajes-del-Monstruo-de-Las-Galletas-768x916.jpg', "width=200,height=100");
        }else{
            window.alert("not enough cookies!!")
        }
    })
})();






