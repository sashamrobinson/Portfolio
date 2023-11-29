document.getElementById('Information').addEventListener('click', function() {
    displayContent("This is content 1.")
});

document.getElementById('Projects').addEventListener('click', function() {
    displayContent('This is Content 2.');
});

document.getElementById('Contact').addEventListener('click', function() {
    displayContent('This is Content 3.');
});

function displayContent(content) {
    document.getElementById('contentDisplay').innerText = content;
}