document.getElementById('clickButton').addEventListener('click', function () {
    document.getElementById('message').textContent = 'Button clicked!';
});

document.getElementById('hoverArea').addEventListener('mouseover', function () {
    document.getElementById('message').textContent = 'Mouse hovered over the area!';
});