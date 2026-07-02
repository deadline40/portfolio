const matrixCanvas = document.getElementById('matrix-canvas');

if (matrixCanvas) {
    const ctx = matrixCanvas.getContext('2d');

    function resizeCanvas() {
        matrixCanvas.width  = matrixCanvas.offsetWidth;
        matrixCanvas.height = matrixCanvas.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const fontSize = 14;
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ MATRIX ACCESS GRANTED';
    let drops = [];

    function initDrops() {
        const columns = Math.floor(matrixCanvas.width / fontSize);
        drops = Array(columns).fill(0);
    }
    initDrops();
    window.addEventListener('resize', initDrops);

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
        ctx.font = fontSize + 'px Share Tech Mono, monospace';

        drops.forEach(function(y, i) {
            const char = chars[Math.floor(Math.random() * chars.length)];
            const x = i * fontSize;
            ctx.fillStyle = y === 1 ? '#ccffcc' : '#00ff41';
            ctx.fillText(char, x, y * fontSize);
            if (y * fontSize > matrixCanvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        });
    }

    setInterval(drawMatrix, 33);
}

const form = document.getElementById('form-contact');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nom     = document.getElementById('nom').value.trim();
        const prenom  = document.getElementById('prenom').value.trim();
        const email   = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const msg     = document.getElementById('msg-confirmation');

        if (nom === '' || prenom === '' || email === '' || message === '') {
            msg.innerHTML = '<div class="alert alert-danger mt-3">⚠️ Veuillez remplir tous les champs obligatoires.</div>';
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            msg.innerHTML = '<div class="alert alert-danger mt-3">⚠️ Adresse email invalide.</div>';
            return;
        }

        msg.innerHTML = '<div class="alert alert-success mt-3">✅ Merci ' + nom + ' ! Message reçu — connexion établie.</div>';
        form.reset();
    });
}

const articles = {
    1: {
        titre: "Créer un Portfolio Moderne",
        contenu: `
            <h2>>> cat ./portfolio.md</h2>
            <p>Dans cet article je partage mon expérience de création d'un portfolio complet avec HTML, CSS et Bootstrap 5.</p>
            <p>J'ai appris à structurer une page, utiliser la grille Bootstrap, et personnaliser le design avec des variables CSS...</p>
        `
    },
    2: {
        titre: "Premiers pas avec JavaScript",
        contenu: `
            <h2>>> cat ./javascript.md</h2>
            <p>JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives.</p>
            <p>JavaScript a été créé en 1995 par Brendan Eich et intégré au navigateur web Netscape Navigator 2.0. Il a été standardisé sous le nom d'ECMAScript en juin 1997.</p>
            <p>C'est un langage orienté objet à prototype. Il supporte le paradigme objet, impératif et fonctionnel.</p>
        `
    },
    3: {
        titre: "Bootstrap en quelques minutes",
        contenu: `
            <h2>>> cat ./bootstrap.md</h2>
            <p>Bootstrap est un framework CSS open source développé par Twitter.</p>
            <p>Il permet de créer rapidement des sites web responsives et modernes grâce à un ensemble de composants préconçus et d'une grille flexible.</p>
        `
    }
};

const overlay  = document.getElementById('popup-overlay');
const popBody  = document.getElementById('popup-body');
const popTitre = document.getElementById('popup-title');
const btnClose = document.getElementById('popup-close');

if (overlay) {
    document.querySelectorAll('.btn-article').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const id = this.getAttribute('data-article');
            const article = articles[id];
            if (!article) return;
            popTitre.textContent = '> cat ./' + article.titre;
            popBody.innerHTML    = article.contenu;
            overlay.classList.add('active');
        });
    });

    if (btnClose) {
        btnClose.addEventListener('click', function() {
            overlay.classList.remove('active');
        });
    }
}