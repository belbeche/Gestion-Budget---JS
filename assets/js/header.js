
function show_prompt() {
    var level = prompt("Veuillez saisir votre pseudo:", ""),
        section = prompt("Renseignez votre établissement:", "");
    if (level != null && section != "") {
        nameSec = name.split('-');
        document.getElementById('showY').innerHTML = ("Bienvenue votre pseudo est :  " + level + '. et votre établissement : ' + section);
        $('#button').css('display', 'none');
    } else {
        document.getElementById('showY').innerHTML = "Enter your Credentials"
    }
}