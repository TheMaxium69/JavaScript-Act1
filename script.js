document.addEventListener('DOMContentLoaded', function () {
    const chatContainer = document.getElementById('chat');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', function () {
        const message = messageInput.value;
        if (message) {
            // Ajouter votre message à la zone de chat
            chatContainer.innerHTML += `<div class="message sent">You : ${message}</div>`;
            // Effacer le champ de saisie
            messageInput.value = '';

            // Simuler une réponse (votre propre message)
            setTimeout(function () {
                chatContainer.innerHTML += `<div class="message received">Contact : ${message}</div>`;
            }, 1000); // Simule une réponse après 1 seconde (vous pouvez ajuster ce délai)
        }
    });

    // Écouter la touche "Entrée" dans le champ de saisie
    messageInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            sendButton.click(); // Cliquer sur le bouton d'envoi lorsque "Entrée" est pressée
        }
    });
});
