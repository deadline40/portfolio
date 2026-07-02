const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    initDrops();
});

const fontSize = 14;
const chars = '01アイウエオカキクケコサシスセソタチツテト MATRIX IHONTY SYSTEM ACCESS';
let drops = [];

function initDrops() {
    const columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(0);
}
initDrops();

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = fontSize + 'px Share Tech Mono, monospace';

    drops.forEach(function(y, i) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;

        ctx.fillStyle = y === 1 ? '#ccffcc' : '#00ff41';
        ctx.fillText(char, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    });
}

setInterval(drawMatrix, 33);

const bootLines = [
    { id: 'line-1', text: '> INITIALIZING SYSTEM...........', delay: 300,  color: '#005500' },
    { id: 'line-2', text: '> LOADING USER PROFILE...........', delay: 900,  color: '#005500' },
    { id: 'line-3', text: '> CHECKING CREDENTIALS...........', delay: 1500, color: '#005500' },
    { id: 'line-4', text: '> ACCESS GRANTED //////////',      delay: 2100, color: '#00ff41' },
    { id: 'line-5', text: '> WELCOME TO THE SYSTEM',          delay: 2700, color: '#00ff41' },
    { id: 'line-6', text: '─────────────────────────────────', delay: 3200, color: '#003300' },
];

function typeWriter(elementId, text, speed, color, callback) {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.style.color = color;
    let i = 0;
    const timer = setInterval(function() {
        el.textContent += text[i];
        i++;
        if (i >= text.length) {
            clearInterval(timer);
            if (callback) callback(); 
        }
    }, speed);
}

bootLines.forEach(function(line) {
    setTimeout(function() {
        typeWriter(line.id, line.text, 25, line.color);
    }, line.delay);
});

setTimeout(function() {
    typeWriter('main-name', 'IHONTY RAKOTOJAONA', 60, '#00ff41', function() {
        setTimeout(function() {
            typeWriter('main-subtitle', '// DEVELOPPEUR WEB & RESEAUX', 40, '#ff003c', function() {
                setTimeout(function() {
                    typeWriter('cmd-text', ' ls ./portfolio', 80, '#00ff41');
                }, 500);
            });
        }, 400);
    });
}, 4000);