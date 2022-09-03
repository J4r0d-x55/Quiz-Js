const form = document.querySelector(".form-quizz");
let tableauResultats= [];
const reponses = ['c', 'a', 'b', 'a', 'c'];
const emojis = ['✔️','✨','👀','😭','👎'];
const titreResultat = document.querySelector(".resultats h2");
const noteResultat = document.querySelector(".note");
const aideResultat = document.querySelector(".aide");
const toutesLesQuestions = document.querySelectorAll(".question-block");
let verifTableau = [];

// Récupérer les données

form.addEventListener('submit', (e) => {
    e.preventDefault();

    for ( i = 1; i < 6; i++){
        tableauResultats.push(document.querySelector(`input[name='q${i}']:checked`).value)
    }
    
    verifFunc(tableauResultats);
    tableauResultats = [];
})

// Obtenir les résultats

function verifFunc(tabResultats){
    for (let a = 0; a < 5; a++){
        if (tabResultats[a] === reponses[a]){
            verifTableau.push(true);

        }else{
            verifTableau.push(false)
        }
    }
    
    afficherResultats(verifTableau);
    couleursFonction(verifTableau);
    verifTableau = [];
}

// Afficher les résultats

function afficherResultats(tabcheck){
    const nbDeFautes = tabcheck.filter(el => el !== true).length;
    switch(nbDeFautes){
        case 0:
            titreResultat.innerText = "Bravo c'est un sans faute ! ✔️";
            aideResultat.innerText = "";
            noteResultat.innerText = "5/5";
        break;
        case 1:
            titreResultat.innerText = `✨ Vous y êtes presque ! ✨`
            aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !'
            noteResultat.innerText = '4/5'
            break;
        case 2:
            titreResultat.innerText = `✨ Encore un effort ... 👀`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '3/5'
            break;
        case 3:
            titreResultat.innerText = `👀 Il reste quelques erreurs. 😭`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '2/5'
            break;
        case 4:
            titreResultat.innerText = `😭 Peux mieux faire ! 😭`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '1/5'
            break;
        case 5:
            titreResultat.innerText = `👎 Peux mieux faire ! 👎`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '0/5'
        break;

        default:
            'Wops, cas innatendu.';

    }
}

function couleursFonction(tabValBool) {

    for(let j = 0; j < tabValBool.length; j++){

        if(tabValBool[j] === true){
            toutesLesQuestions[j].style.background = 'lightgreen';
        } else {
            toutesLesQuestions[j].style.background = '#ffb8b8';
            toutesLesQuestions[j].classList.add('echec');

            setTimeout(() => {
                toutesLesQuestions[j].classList.remove('echec');
            }, 500)
        }
        
    }

}

toutesLesQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = "white";
    })
})