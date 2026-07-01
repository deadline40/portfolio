document.querySelectorAll('p').forEach(function(p) {

  if (p.textContent.trim() === '') return;

  p.setAttribute('data-text', p.textContent.trim());

  p.textContent = '';

  p.addEventListener('mouseenter', function() {

    if (this.classList.contains('revealed')) return;

    const texte = this.getAttribute('data-text');
    let i = 0;
    const element = this;

    element.classList.add('revealed');

    const timer = setInterval(function() {
      element.textContent += texte[i];
      i++;

      if (i >= texte.length) {
        clearInterval(timer);
      }
    }, 30);

  });

});

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

    msg.innerHTML = '<div class="alert alert-success mt-3">✅ Merci ' + nom + ' ! Votre message a bien été envoyé.</div>';
    form.reset();
  });
}

/* ===== EFFET MATRIX SUR LA SECTION COMPÉTENCES ===== */
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

// Adapte le canvas à la taille réelle de la section
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const fontSize = 14;
const columns = Math.floor(canvas.width / fontSize);

// Chaque colonne a sa propre position verticale (en nombre de lignes)
const drops = Array(columns).fill(0);

// Caractères utilisés : chiffres binaires + katakana style Matrix
const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ';

function drawMatrix() {
  // Fond semi-transparent noir → crée l'effet de traînée qui s'efface
  ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#00d4ff'; // couleur des caractères
  ctx.font = fontSize + 'px Orbitron, monospace';

  drops.forEach(function(y, i) {
    // Caractère aléatoire à chaque frame
    const char = chars[Math.floor(Math.random() * chars.length)];
    const x = i * fontSize;

    ctx.fillText(char, x, y * fontSize);

    // Remet la colonne en haut aléatoirement une fois arrivée en bas
    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  });
}

// Lance l'animation à 30fps
setInterval(drawMatrix, 33);