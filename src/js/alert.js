/* eslint-disable no-unused-vars */
let textArea = document.getElementById('text-area');
let okButton = document.getElementById('ok-button');
let paragraph = document.getElementById('text-area');
let toggleButton = document.getElementById('toggle-button');

okButton.addEventListener('click', function() {
    textArea.innerText = 'Button clicked!';
});

toggleButton.addEventListener('click', function toggle() {
    var element = document.body;
    element.classList.toggle('dark-mode');
});
