
function Alert(){
  document.getElementById("text").style.fontSize = "24px";
  
  console.log("working");
}

function checkSelection(){
  if (document.getElementById("fancy").checked) {
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";
    
  } else if (document.getElementById("boring").checked) {
    
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "black";
    document.getElementById("text").style.textDecoration = "none";
    document.getElementById("text").style.fontSize = "12px";
  }
}

function MOO(){
  var textArea = document.getElementById("text");
  var text = textArea.value;
  var sentences = text.split(". ");
  for (var i = 0; i < sentences.length; i++) {
    var words = sentences[i].split(" ");
    words[words.length - 1] += "-Moo";
    sentences[i] = words.join(" ");
  }
  text = sentences.join(" .");
  textArea.value = text;

}
