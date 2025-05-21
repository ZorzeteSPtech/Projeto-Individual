 const mapContainer = document.getElementById('mapContainer');
  const mapImage = document.getElementById('mapImage');
  const closeBtn = document.getElementById('close-btn');
  const submitBtn = document.getElementById('submit-btn');

  let marker = null;

  // Expande o mapa ao clicar se ainda não estiver expandido
  mapContainer.addEventListener('click', (e) => {
    // Se já estiver expandido, não faz nada (para evitar recolher)
    if (mapContainer.classList.contains('expanded')) return;
    mapContainer.classList.add('expanded');
  });

  // Clicar dentro do mapa (expandido) marca o ponto
  mapImage.addEventListener('click', (e) => {
    const rect = mapImage.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Remove marcador anterior
    if (marker) marker.remove();

    // Cria novo marcador
    marker = document.createElement('div');
    marker.classList.add('marker');
    marker.style.left = `${e.clientX}px`;
    marker.style.top = `${e.clientY}px`;
    document.body.appendChild(marker);

    // Ativa botão submit
    submitBtn.disabled = false;
    submitBtn.classList.add('active');
  });

  // Botão submit
  submitBtn.addEventListener('click', () => {
    alert("Local escolhido com sucesso!");
  });

  // Botão fechar
  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    mapContainer.classList.remove('expanded');
    if (marker) marker.remove();
    submitBtn.disabled = true;
    submitBtn.classList.remove('active');
  });

  // Clicar fora do mapa (quando expandido) fecha ele
  document.addEventListener('click', (e) => {
    if (!mapContainer.classList.contains('expanded')) return;

    const isClickInside = mapContainer.contains(e.target);
    if (!isClickInside) {
      mapContainer.classList.remove('expanded');
      if (marker) marker.remove();
      submitBtn.disabled = true;
      submitBtn.classList.remove('active');
    }
  });

  


  