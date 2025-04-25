
document.getElementById('history-card-1').style.display = 'none';
document.getElementById('history-card-2').style.display = 'none';
document.getElementById('history-card-3').style.display = 'none';
document.getElementById('history-card-4').style.display = 'none';
document.getElementById('history-card-5').style.display = 'none';
document.getElementById('history-card-6').style.display = 'none';

 document.getElementById('comBtn-1').addEventListener('click', function () {
  alert('board updated successfully');
  document.getElementById('history-card-1').style.display = 'block';
})
 
 document.getElementById('comBtn-2').addEventListener('click', function () {
  alert('board updated successfully');
   document.getElementById('history-card-2').style.display = 'block';
})
 
 document.getElementById('comBtn-3').addEventListener('click', function () {
  alert('board updated successfully');
 document.getElementById('history-card-3').style.display = 'block';
})
 
 document.getElementById('comBtn-4').addEventListener('click', function () {
  alert('board updated successfully');
   document.getElementById('history-card-4').style.display = 'block';
})
 
 document.getElementById('comBtn-5').addEventListener('click', function () {
  alert('board updated successfully');
   document.getElementById('history-card-5').style.display = 'block';
})
 
 document.getElementById('comBtn-6').addEventListener('click', function () {
  alert('board updated successfully');
  alert('Congrats! you have completed all the current task')
   document.getElementById('history-card-6').style.display = 'block';
})
 

document.getElementById('clear').addEventListener('click', function () {
  document.getElementById('history-card-1').style.display = 'none';
  document.getElementById('history-card-2').style.display = 'none';
  document.getElementById('history-card-3').style.display = 'none';
  document.getElementById('history-card-4').style.display = 'none';
  document.getElementById('history-card-5').style.display = 'none';
  document.getElementById('history-card-6').style.display = 'none';
})


function buttonDisability(button) {
  button.disabled = true;
}

document.getElementById('sm-card-2').addEventListener('click', function () {
  window.location.href = "qna.html"
})

const colors = ["lightblue", "lightgreen", "lightpink", "lavender", "salmon", "khaki", "plum"];
document.getElementById("color-btn").addEventListener("click", function () {
  const randomColor = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomColor];
});


