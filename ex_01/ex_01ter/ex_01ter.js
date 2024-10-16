function sendFormData() {
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim(); // pas besoin de MD5 ici

    // Préparer les données pour l'envoi
    const data = {
        form: {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password // Envoi du mot de passe tel quel
        }
    };

    // Effectuer la requête POST
    fetch('http://localhost:3000/validateForm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        // Afficher la réponse du serveur dans la console
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// Appeler cette fonction lors de la soumission du formulaire
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher la soumission du formulaire par défaut
    sendFormData(); // Appeler la fonction pour envoyer les données
});
