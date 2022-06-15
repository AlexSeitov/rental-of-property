function mapLoading(mapContainerEl, mapEl) {
  const mapContainer = document.getElementById(mapContainerEl);
  let mapLoaded = false;
  const optionsMap = {
    once: true,
    passive: true,
    capture: true
  };

  function startLazyMap() {
    if (!mapLoaded) {
      let mapBlock = document.getElementById(mapEl);
      mapLoaded = true;
      mapBlock.setAttribute('src', mapBlock.getAttribute('data-src'));
      mapBlock.removeAttribute('data-src');
    }
  }

  mapContainer.addEventListener('click', startLazyMap, optionsMap);
  mapContainer.addEventListener('mouseover', startLazyMap, optionsMap);
  mapContainer.addEventListener('touchstart', startLazyMap, optionsMap);
  mapContainer.addEventListener('touchmove', startLazyMap, optionsMap);
}

export default mapLoading;
