// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
//     window.addEventListener("click", function () {
//         alert("You clicked on the page!");
//     });

//     var button = document.querySelector("button");

//     var clickAlert = function () {
//         alert("SOMEONE CLICKED THE BUTTON!!");
//     }

//     button.addEventListener("click", clickAlert);

//     var logText = function (event) {
//         console.log(event)
//         console.log(event.target.textContent);
//     }

//     window.addEventListener("click", logText);

//     var div = document.querySelector("div");

//     var logText = function () {
//         console.log(event.target.textContent);
//     }

//     div.addEventListener("click", logText);
// });

window.addEventListener('DOMContentLoaded', (event) => {
    var body = document.querySelector('body');
    var button = document.querySelector('button');

    body.addEventListener('click', function () {
        alert("YOU CLICKED ON THE BODY!!!!");
    }, true);

    button.addEventListener('click', function () {
        alert("YOU'RE REALLY PUSHING MY BUTTONS!!!!!");
    });
});