const c = document.getElementById("myCanvas");
const btn = document.getElementById("guessBtn");
let input;
let start = document.getElementById("q1");
let qs1 = document.querySelectorAll(".q");

resizeCanvasToDisplaySize(c);
initPage();
console.log("asd");
//all boxes
let a1 = {q1 : "elementti", q2 : "tuli", q3 : "maa", q4 : "vesi", q5: "ilma", q6: "aurinko", q7: "gaia", q8: "terra", q9 : "titaani", q10: "planeetta", q11: "saturnus",
q12: "helios"
};
let unlocks = {q1 : ["q2","q3"], q2 : ["q12"], q3: ["q7", "q10"],q6: ["q12"] , q7: ["q8", "q9", "q3"], q9: ["q12", "q7"], q10: ["q11"], q12: ["q9", "q6"]};

let keys = a1.keys;


qs1.forEach(q =>{
  for(let i = 0; i < Object.keys(a1).length; ++i){
    if(q.id == Object.keys(a1)[i])
        q.innerHTML = displayString(Object.values(a1)[i]);  
      //q.innerHTML =  Object.values(a1)[i].length;
  }
})

//return the correct amount of ... and (char amount) to display in boxes
function displayString(str){
  let returnstr = "..............................";
  returnstr = returnstr.substr(0, str.length);
  return returnstr + " (" + str.length + ")"
}

start.innerHTML = a1.q1;
drawLines(document.getElementById("q1"),(document.getElementById("q2")));
drawLines(document.getElementById("q1"),(document.getElementById("q3")));
drawLines(document.getElementById("q1"),(document.getElementById("q4")));
drawLines(document.getElementById("q1"),(document.getElementById("q5")));




//check if guess is correct and fill box with answer
btn.addEventListener("click", function()
{
  input = document.getElementById("guessInput").value;
  document.getElementById("guessInput").value ="";
  for(let i = 0; i < Object.keys(a1).length; ++i)
  {
    //correct guess and box is available
    if(Object.values(a1)[i] == input && document.getElementById(Object.keys(a1)[i]).style.opacity != "0")
    {
      document.getElementById(Object.keys(a1)[i]).innerText = input;
      //unlock new boxes and draw lines
      for(let j = 0; j < Object.keys(unlocks).length; ++j){
        if(Object.keys(unlocks)[j].includes(document.getElementById(Object.keys(a1)[i]).id)){
          Object.values(unlocks)[j].forEach(q =>{
            document.getElementById(q).style.opacity = "1";
            drawLines(document.getElementById(Object.keys(a1)[i]), document.getElementById(q));

          })
        }
      

  
        }
      }

               
           // document.getElementById(Object.keys(a1)[i]).nextElementSibling.style.opacity = "1";
           // document.getElementById(Object.keys(a1)[i]).nextElementSibling.nextElementSibling.style.opacity = "1";       
            //drawLines(document.getElementById(Object.keys(a1)[i]), document.getElementById(Object.keys(a1)[i]).nextElementSibling);
            //drawLines(document.getElementById(Object.keys(a1)[i]), document.getElementById(Object.keys(a1)[i]).nextElementSibling.nextElementSibling);
        
    }                          
});



//fit canvas to display size
function resizeCanvasToDisplaySize(canvas) {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    return true;
  }
  return false;
}



function drawLines(startBox, targetBox){
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(startBox.offsetLeft, startBox.offsetTop);
    ctx.lineTo(targetBox.offsetLeft, targetBox.offsetTop);
    ctx.stroke();
}

function initPage(){
  let boxes = document.querySelectorAll(".q");

  boxes.forEach(b =>{
    b.classList.forEach(c =>{
      console.log(c);
    })

  })

  
}



  