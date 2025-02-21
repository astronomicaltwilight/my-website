console.log('Maybe this will work?');
window.onload = function()
{
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    // Draw a circle
    context.beginPath();
    context.arc(100, 100, 50, 0, 2 * Math.PI);
    context.fillStyle = 'blue';
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = '#003300';
    context.stroke();
};