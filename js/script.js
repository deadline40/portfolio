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
            <p>Un portfolio est bien plus qu'une simple collection de projets. Il représente votre identité professionnelle et permet de mettre en valeur vos compétences, votre créativité et votre expérience. Que vous soyez développeur, designer, photographe ou étudiant, un portfolio moderne est un excellent moyen de vous démarquer.</p>

                <h3>Pourquoi créer un portfolio ?</h3>

                <p>Aujourd'hui, les recruteurs et les clients recherchent rapidement des informations sur les compétences d'une personne. Un portfolio bien conçu permet de présenter vos réalisations de manière claire et professionnelle, tout en reflétant votre personnalité.</p>

                <h3>Les sections essentielles</h3>

                <p>Un portfolio moderne comprend généralement les éléments suivants :</p>

                <ul>
                <li>Une présentation personnelle : quelques lignes pour vous présenter et expliquer votre parcours.</li>
                <li>Vos compétences : les technologies, logiciels ou domaines que vous maîtrisez.</li>
                <li>Vos projets : une sélection de vos meilleures réalisations avec une courte description.</li>
                <li>Vos expériences : stages, emplois ou collaborations importantes.</li>
                <li>Un formulaire de contact : pour permettre aux visiteurs de vous joindre facilement.</li>
                <li>Un design moderne</li>
                </ul>

                <p>Un bon design est simple, élégant et facile à parcourir. Utilisez une palette de couleurs harmonieuse, une typographie lisible et laissez suffisamment d'espace entre les différents éléments. Pensez également à rendre votre site responsive afin qu'il soit agréable à consulter sur ordinateur, tablette et smartphone.</p>

                <h3>Optimiser les performances</h3>

                <p>Un portfolio moderne doit être rapide à charger. Optimisez les images, réduisez les fichiers inutiles et utilisez des technologies adaptées pour offrir une expérience fluide aux visiteurs.</p>

                <h3>Conclusion</h3>

                <p>Créer un portfolio moderne est un investissement pour votre avenir professionnel. En présentant clairement vos compétences et vos réalisations dans une interface soignée, vous augmentez vos chances d'attirer des recruteurs, des clients ou de nouveaux partenaires. Prenez le temps de le mettre à jour régulièrement afin qu'il reflète toujours votre évolution.</p>
            `
    },
    2: {
        titre: "Premiers pas avec JavaScript",
        contenu: `
            <h2>>> cat ./javascript.md</h2>
            <p>JavaScript est l'un des langages de programmation les plus utilisés pour le développement web. Il permet d'ajouter de l'interactivité aux pages HTML, comme des animations, des formulaires dynamiques ou encore des mises à jour de contenu sans recharger la page.</p>

            <h3>Pourquoi apprendre JavaScript ?</h3>

            <p>JavaScript est indispensable pour créer des sites web modernes et interactifs. Il est compatible avec tous les navigateurs et s'utilise aussi bien côté client que côté serveur grâce à des technologies comme Node.js.</p>

            <h3>Les bases du langage</h3>

            <p>Pour commencer, il est important de comprendre quelques notions essentielles :</p>

            <ul>
                <li>Les variables pour stocker des données.</li>
                <li>Les types de données (texte, nombres, booléens, tableaux et objets).</li>
                <li>Les conditions (if, else) pour prendre des décisions.</li>
                <li>Les boucles (for, while) pour répéter des actions.</li>
                <li>Les fonctions pour organiser et réutiliser le code.</li>
            </ul>
            <h3>Manipuler une page web</h3>

            <p>L'une des forces de JavaScript est sa capacité à modifier le contenu d'une page en temps réel. Il peut ajouter des éléments, modifier du texte, changer les styles CSS ou réagir aux actions de l'utilisateur comme un clic sur un bouton.</p>

            <h3>Les événements</h3>

            <p>Les événements permettent de rendre un site interactif. Par exemple, un clic sur un bouton peut afficher un message, ouvrir un menu ou envoyer un formulaire.</p>

            <h3>Aller plus loin</h3>

            <p>Après avoir appris les bases, vous pourrez découvrir les concepts avancés comme les objets, les promesses, les appels d'API et les frameworks modernes tels que React, Vue ou Angular.</p>

            <h3>Conclusion</h3>

            <p>JavaScript est un langage incontournable pour tout développeur web. En maîtrisant ses fondamentaux, vous pourrez créer des interfaces dynamiques et améliorer considérablement l'expérience utilisateur de vos applications.</p>
        `
    },
    3: {
        titre: "Bootstrap en quelques minutes",
        contenu: `
            <h2>>> cat ./bootstrap.md</h2>
            <p>Bootstrap est un framework CSS populaire qui permet de créer rapidement des interfaces modernes, élégantes et adaptatives. Grâce à ses composants prêts à l'emploi, il simplifie le développement de sites web responsive.</p>

            <h3>Pourquoi utiliser Bootstrap ?</h3>

            <p>Créer une interface responsive à partir de zéro peut demander beaucoup de temps. Bootstrap fournit une bibliothèque complète de styles et de composants qui accélèrent le développement tout en garantissant une apparence professionnelle.</p>

            <h3>Les principales fonctionnalités</h3>

            <p>Bootstrap propose de nombreux outils, notamment :</p>

            <ul>
                <li>Un système de grille flexible basé sur 12 colonnes.</li>
                <li>Des boutons personnalisables.</li>
                <li>Des cartes (Cards) pour présenter du contenu.</li>
                <li>Des formulaires modernes.</li>
                <li>Des menus de navigation.</li>
                <li>Des fenêtres modales, des alertes et des carrousels.</li>
            </ul>

            <h3>Le responsive design</h3>

            <p>L'un des principaux avantages de Bootstrap est son système responsive. Les pages s'adaptent automatiquement aux différentes tailles d'écran, qu'il s'agisse d'un smartphone, d'une tablette ou d'un ordinateur.</p>

            <h3>Personnaliser Bootstrap</h3>

            <p>Même si Bootstrap fournit un style par défaut, il est possible de le personnaliser facilement avec du CSS ou en modifiant ses variables pour obtenir un design unique adapté à votre projet.</p>

            <h3>Les bonnes pratiques</h3>

            <p>Pour obtenir les meilleurs résultats, utilisez uniquement les composants dont vous avez besoin, personnalisez les couleurs pour renforcer votre identité visuelle et veillez à conserver une interface claire et cohérente.</p>

            <h3>Conclusion</h3>

            <p>Bootstrap est une excellente solution pour développer rapidement des sites web modernes et responsives. Que vous soyez débutant ou développeur expérimenté, il vous permet de gagner du temps tout en créant des interfaces professionnelles et agréables à utiliser.</p>
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






/* ===== LIGHT / DARK MODE ===== */
const toggleBtn = document.getElementById('theme-toggle');

/* Au chargement : vérifie si le choix est sauvegardé dans localStorage */
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
    if (toggleBtn) toggleBtn.textContent = '◐ DARK';
}

if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('light');

        /* Vérifie si le body a maintenant la classe light */
        if (document.body.classList.contains('light')) {
            localStorage.setItem('theme', 'light');
            toggleBtn.textContent = '◐ DARK';
        } else {
            localStorage.setItem('theme', 'dark');
            toggleBtn.textContent = '◐ LIGHT';
        }
    });
}