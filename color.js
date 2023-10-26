console.log("HEllo Gyz");
let body1 = document.querySelector("body");
// console.log(body1);
// let red = document.querySelector(".red");
// let green = document.querySelector(".green");
// let blue = document.querySelector(".blue");
// let orange = document.querySelector(".orange");



// function chanebodycolor(id) {
//   if (id == "red") {
//     body1.style.backgroundColor = "red";
//   } else if (id == "green") {
//     body1.style.backgroundColor = "green";
//   } else if (id == "blue") {
//     body1.style.backgroundColor = "blue";
//   } else if (id == "orange") {
//     body1.style.backgroundColor = "orange";
//   }
// }

// Second method

let buttons=document.querySelectorAll('span');

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        if(e.target.id=="red")
        {
            body1.style.backgroundColor = "red";
        }
        else if(e.target.id=="green")
        {
            body1.style.backgroundColor = "green";
        }
        else if(e.target.id=="blue")
        {
            body1.style.backgroundColor = "blue";
        }
        else if(e.target.id=="orange")
        {
            body1.style.backgroundColor = "orange";
        }
    })

})


