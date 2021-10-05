//HTML//


var image = document.getElementById("image")
image.setAttribute("src", "https://i1.wp.com/mydigitalweek.com/wp-content/uploads/2019/10/IA-.png?fit=674%2C419&ssl=1")

var blanc = document.getElementById("blanc")

function pierre() {
    blanc.setAttribute("src" , "https://www.handcramp.lol/assets/icons/rock.svg")
}

function feuille() {
    blanc.setAttribute("src" , "https://www.handcramp.lol/assets/icons/paper.svg")
}

function ciseaux() {
    blanc.setAttribute("src" , "https://www.handcramp.lol/assets/icons/scissors.svg")
    
}
  //FONCTIONNEMENT //

  const buttons = document.querySelectorAll("button");
  const username = prompt("Veuillez indiquer votre nom d'utilisateur...");

  for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function() {
      var joueur = buttons[i].innerHTML;
      var robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
      var resultat;


      if (joueur === robot)
        resultat = "Vous avez fait une egalité !";
      else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Feuille" && robot === "Pierre") || (joueur === "Ciseaux" && robot === "Feuille"))
        resultat = "Vous avez gagné !!";
      else
        resultat = "Vous avez perdu !";
      document.querySelector(".resultat").innerHTML = `
        ${username} : ${joueur}</br>
        Le robot a choisi : ${robot}</br>
        ${resultat}
      `;
    })
  }