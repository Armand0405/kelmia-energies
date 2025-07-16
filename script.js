// Gérer les avis clients
const form = document.getElementById('avis-form');
const listeAvis = document.getElementById('liste-avis');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nom = document.getElementById('nom').value;
    const note = document.getElementById('note').value;
    const commentaire = document.getElementById('commentaire').value;

    const avisHTML = `
        <div class="avis">
            <strong>${nom}</strong> - <span>${note}/5</span>
            <p>${commentaire}</p>
        </div>
    `;
    listeAvis.innerHTML += avisHTML;
    form.reset();
});
