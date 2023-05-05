const image = document.querySelector("#myImage");
const text = document.querySelector("h2");
const btnOne = document.querySelector("#one");
const btnTwo = document.querySelector("#two");

btnOne.addEventListener("click", choseAidan);
btnTwo.addEventListener("click", choseMrBig);

function choseAidan() {
  image.setAttribute(
    "src",
    "https://www.usmagazine.com/wp-content/uploads/2023/01/Crossing-Paths-Carrie-Bradshaw-and-Aidan-Shaw-Relationship-Timeline-From-Sex-and-the-City-to-And-Just-Like-That.jpg?w=1200&quality=86&strip=all"
  );
  text.innerHTML = "Will they get married?";
  btnOne.innerHTML = "Maybe";
  btnTwo.innerHTML = "Never";

  btnOne.addEventListener("click", weddingWithAidan);
  btnTwo.addEventListener("click", neverBeWithAidan);
}
function weddingWithAidan() {
  image.setAttribute(
    "src",
    "https://www.usmagazine.com/wp-content/uploads/2023/01/An-Unlikely-Connection-Carrie-Bradshaw-and-Aidan-Shaw-Relationship-Timeline-From-Sex-and-the-City-to-And-Just-Like-That.jpg?w=1412&quality=86&strip=all"
  );
  text.innerHTML = "They stay good friends";
  btnOne.style = "display:none";
  btnTwo.style = "display:none";
}
function neverBeWithAidan(){
	image.setAttribute(
    "src",
    "https://i.huffpost.com/gen/1465968/thumbs/o-AIDAN-SHAW-570.jpg?6"
  );
  text.innerHTML = "Carrie cheated on him and he will not forget about it";
  btnOne.style = "display:none";
  btnTwo.style = "display:none";
}

function choseMrBig(){
	image.setAttribute(
    "src",
    "https://cdn.repeller.com/wp-content/uploads/2016/06/carrie-bradshaw-relationships-leandra-medine-man-repeller.jpg"
  );
  text.innerHTML = "Will they get married?";
  btnOne.innerHTML = "Maybe";
  btnTwo.innerHTML = "Never";

  btnOne.addEventListener("click", weddingWithMrBig);
  btnTwo.addEventListener("click", scaredWeddingMrBig)
}
function weddingWithMrBig(){
	image.setAttribute(
    "src",
    "https://www.yolancris.com/wp-content/uploads/2021/10/f3dc37b17f52bcbc150e2753a5899167.jpg.webp"
  );
  text.innerHTML = "They will married and will be happy together"
  btnOne.style = "display:none";
  btnTwo.style = "display:none";
}
function scaredWeddingMrBig(){
	image.setAttribute(
    "src",
    "https://www.cheatsheet.com/wp-content/uploads/2021/02/SATC-the-movie.jpg?w=1024&h=819&strip=all&quality=89"
  );
  text.innerHTML = "He will leave her at the altar";
  btnOne.style = "display:none";
  btnTwo.style = "display:none";
}
