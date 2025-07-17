document.getElementById('avis-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const nom = this.nom.value.trim();
  const message = this.message.value.trim();

  if (nom && message) {
    const avisList = document.getElementById('avis-list');
    const avis = document.createElement('p');
    avis.innerHTML = `<strong>${nom} :</strong> ${message}`;
    avisList.prepend(avis);

    this.reset();
  }
});
